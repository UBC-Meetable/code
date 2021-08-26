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
import editCourseStyles from "../../components/styles/editCourseStyles";
import Colors from "../../constants/Colors";
import CourseGroupsContext from "../../context/CourseGroupsContext";
import useAuthenticatedUser from "../../hooks/useAuthenticatedUser";

type SimpleCourseGroup = {
  title: string;
  code: string;
  section: string;
  groupID: string;
};

const simplifyCourseGroup = (group: CourseGroup) => {
  const newGroup: SimpleCourseGroup = {
    groupID: group.groupID!,
    title: group.title!,
    section: group.section!,
    code: group.code!,
  };
  return newGroup;
};

const simplifyCourseGroups = (groups: CourseGroup[]) => groups.map(simplifyCourseGroup);
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

  function isCourseGroup(item: CourseGroup
    | GraphQLResult<CreateCourseGroupConnectionMutation>): item is CourseGroup {
    return (item as CourseGroup).groupID !== undefined;
  }

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
    <SafeAreaView style={editCourseStyles.root}>
      <Layout style={[editCourseStyles.form, editCourseStyles.noBg]}>
        <Layout style={editCourseStyles.container2}>
          <Text style={[editCourseStyles.textStyle, { left: "0%" }]}>Course</Text>
          <Layout style={editCourseStyles.codeContainer}>
            <Input
              style={[editCourseStyles.courseCodeInput, editCourseStyles.courseStyle]}
              placeholder="COMM"
              value={currTitle}
              onChangeText={(newTitle) => {
                setTitle(newTitle);
              }}
            />
            <Input
              style={[editCourseStyles.courseCodeInput, editCourseStyles.codeStyle]}
              placeholder="101"
              value={currCode}
              onChangeText={(newCode) => {
                setCode(newCode.trim());
              }}
            />
            <Input
              style={[editCourseStyles.courseCodeInput, editCourseStyles.codeStyle]}
              placeholder="Section"
              value={currSection}
              onChangeText={(newSection) => {
                setSection(newSection.trim());
              }}
            />
          </Layout>
        </Layout>
      </Layout>
      <Layout style={[editCourseStyles.noBg,
        editCourseStyles.form, editCourseStyles.bottomContainer]}
      >
        <Button
          style={[editCourseStyles.button, editCourseStyles.addCoursebutton]}
          onPress={() => {
            addCourse();
          }}
        >
          {() => (
            <Text
              style={editCourseStyles.buttonText}
            >
              Add Course
            </Text>
          )}
        </Button>
      </Layout>

      <Layout style={[editCourseStyles.noBg, editCourseStyles.middleContainer, { width: "110%" }]}>
        <Text style={editCourseStyles.textStyle}>Your Courses</Text>
        <ScrollView contentContainerStyle={editCourseStyles.selectionsContainer}>
          {renderCourses(courses)}
          {renderCourses(newCourses, true)}
        </ScrollView>
      </Layout>

      <Layout style={[editCourseStyles.noBg, editCourseStyles.form]}>
        <Button
          style={styles.saveButton}
          onPress={() => {
            handleSave();
          }}
        >
          {(evaProps: any) => (
            <Text
              {...evaProps}
              style={{ ...evaProps.style, ...editCourseStyles.buttonText }}
            >
              {newCourses.length > 0 ? "Save and Continue" : "Continue Later"}
            </Text>
          )}
        </Button>
      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  saveButton: {
    marginBottom: 30,
    borderRadius: 100,
    borderWidth: 0,
    backgroundColor: "#7ED1EF",
    height: 50,
  },
});

export default NewEditCoursesScreen;
