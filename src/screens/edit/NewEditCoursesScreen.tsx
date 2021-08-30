import { GraphQLResult } from "@aws-amplify/api";
import {
  Button, Input, Layout, Text,
} from "@ui-kitten/components";
import React, { useContext, useState } from "react";
import { StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { CourseGroup, CreateCourseGroupConnectionMutation, UserState } from "../../API";
import joinCourseGroup from "../../calls/joinCourseGroup";
import updateUserProfile from "../../calls/updateUserProfile";
import editCourseStyles from "./editCourseStyles";
import Colors from "../../constants/Colors";
import CourseGroupsContext from "../../context/CourseGroupsContext";
import useAuthenticatedUser from "../../hooks/useAuthenticatedUser";
import EditCourseBody from "./EditCourseBody";
import { SimpleCourseGroup } from "../../types";
import { simplifyCourseGroup, simplifyCourseGroups } from "./helpers";

/** TODO: make styling more dynamic */
// Todo: componentize file
/** TODO: Cache user courses so we don't need to fetch so often. */
const NewEditCoursesScreen = ({ onFinish } : {onFinish: () => void}) => {
  const courseGroups = useContext(CourseGroupsContext);
  const [courses, setCourses] = useState(simplifyCourseGroups(courseGroups));
  const [newCourses, setNewCourses] = useState([] as SimpleCourseGroup[]);
  const [currTitle, setTitle] = useState("");
  const [currCode, setCode] = useState("");
  const [currSection, setSection] = useState("");
  const user = useAuthenticatedUser();

  const generateNewGroup = ({
    code,
    section,
    title,
    includeSection = false,
  }: {
    code: string;
    section: string;
    title: string;
    includeSection?: boolean,
  }) => ({
    groupID: `${title}${code}${includeSection ? `-${section}` : ""}`.toLowerCase(),
    code,
    section,
    title: title.toUpperCase(),
  } as SimpleCourseGroup);

  function addCourse() {
    if (!currTitle || !currCode || !currSection) return;

    const newGroup = generateNewGroup({
      code: currCode,
      title: currTitle.trim().toUpperCase(),
      section: currSection,
    });

    if (newCourses.concat(courses).find((g) => g.groupID === newGroup.groupID)) { return; }

    setNewCourses([...newCourses, newGroup]);
    setCode("");
    setTitle("");
    setSection("");
  }

  function deleteCourse(course: SimpleCourseGroup) {
    setCourses((prevCourses) => prevCourses.filter((c) => c.groupID !== course.groupID));
    setNewCourses((prevCourses) => prevCourses.filter((c) => c.groupID !== course.groupID));
  }

  const handleSave = async () => {
    const promises = newCourses.map((course) => joinCourseGroup(user.attributes.sub,
      generateNewGroup(course))) as
      Promise<CourseGroup>[];

    const results = await Promise.all(promises);
    const handleCourseGroup = (result: CourseGroup) => {
      setNewCourses((prevCourses) => prevCourses.filter((c) => c.groupID !== result.groupID));
      setCourses([...courses, simplifyCourseGroup(result)]);
    };
    results.forEach(handleCourseGroup);
    const res = await updateUserProfile({
      id: user.attributes.sub,
      userState: UserState.DONE,
    });
    if (res.data) {
      onFinish();
    }
    // todo error handle
  };

  const renderCourses = (
    groups: SimpleCourseGroup[],
    isNew = false,
  ) => groups.map((group, index) => (
    <Layout
      key={index}
      style={[editCourseStyles.courseContainer, isNew && editCourseStyles.newCourseContainer]}
    >
      <Layout
        style={[
          editCourseStyles.courseTextContainer,
          isNew && editCourseStyles.newCourseContainer,
        ]}
      >
        <Text style={[editCourseStyles.courseTextStyle, isNew && editCourseStyles.newCourseText]}>
          {`${group.title} ${group.code}, Section ${group.section}`}
        </Text>
      </Layout>

      {isNew && (
        <Layout
          style={[editCourseStyles.deleteContainer, isNew && editCourseStyles.newCourseContainer]}
        >
          <Button
            appearance="ghost"
            onPress={() => {
              deleteCourse(group);
            }}
          >
            {(evaProps: any) => (
              <Text
                {...evaProps}
                style={{ ...evaProps.style, ...editCourseStyles.deleteButtonText }}
              >
                X
              </Text>
            )}
          </Button>
        </Layout>
      )}
    </Layout>
  ));

  return (
    <EditCourseBody
      addCourse={addCourse}
      setTitle={setTitle}
      setCode={setCode}
      newCourses={newCourses}
      courses={courses}
      renderCourses={renderCourses}
      currCode={currCode}
      currTitle={currTitle}
      handleSave={handleSave}
      isNew
    />
  );
};

export default NewEditCoursesScreen;