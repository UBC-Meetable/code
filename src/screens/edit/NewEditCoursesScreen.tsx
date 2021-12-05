import { Button, Layout, Text } from "@ui-kitten/components";
import React, { useContext, useState } from "react";
import { StyleSheet } from "react-native";
import { CourseGroup, UserState } from "../../API";
import joinCourseGroup from "../../calls/joinCourseGroup";
import updateUserProfile from "../../calls/updateUserProfile";
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
    if (!currTitle || !currCode) return;

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
      style={[styles.courseContainer, isNew && styles.newCourseContainer]}
    >
      <Layout
        style={[
          styles.courseTextContainer,
          isNew && styles.newCourseContainer,
        ]}
      >
        <Text style={[styles.courseTextStyle, isNew && styles.newCourseText]}>
          {`${group.title} ${group.code}`}
        </Text>
      </Layout>

      {isNew && (
        <Layout
          style={[styles.deleteContainer, isNew && styles.newCourseContainer]}
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
                style={[evaProps.style, styles.deleteButtonText]}
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

const styles = StyleSheet.create({
  courseContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    width: "100%",
    marginVertical: 5,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2.22,
    elevation: 3,
  },
  newCourseContainer: {
    backgroundColor: "#FFEEDE",
  },
  newCourseText: {
    color: "#FBBA82",
  },
  courseTextContainer: {
    flex: 1,
    borderRadius: 10,
    padding: 20,
  },
  deleteContainer: {
    flexBasis: 60,
    borderRadius: 10,
  },
  courseTextStyle: {
    fontFamily: "Poppins_400Regular",
    fontSize: 15,
  },
  deleteButtonText: {
    fontSize: 20,
    color: "#FBBA82",
  },
});

export default NewEditCoursesScreen;
