import {
  Button, Layout, Text,
} from "@ui-kitten/components";
import React, { useContext, useState } from "react";
import { StyleSheet } from "react-native";
import { CourseGroup } from "../../API";
import joinCourseGroup from "../../calls/joinCourseGroup";
import callDeleteCourseGroupConnection from "../../calls/leaveCourseGroup";
import fetchCourseGroupConnection from "../../calls/getCourseGroupConnection";
import CourseGroupsContext from "../../context/CourseGroupsContext";
import useAuthenticatedUser from "../../hooks/useAuthenticatedUser";
import { SimpleCourseGroup } from "../../types";
import EditCourseBody from "./EditCourseBody";
import { simplifyCourseGroup, simplifyCourseGroups } from "./helpers";

/** TODO: make styling more dynamic */
// Todo: componentize file
/** TODO: Cache user courses so we don't need to fetch so often. */

const EditCourseScreen = () => {
  const courseGroups = useContext(CourseGroupsContext);
  const [courses, setCourses] = useState(simplifyCourseGroups(courseGroups));
  const [newCourses, setNewCourses] = useState([] as SimpleCourseGroup[]);
  const [currTitle, setTitle] = useState("");
  const [currCode, setCode] = useState("");
  const user = useAuthenticatedUser();
  let markedForDeletion = new Set<SimpleCourseGroup>();

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
      section: "",
    });

    if (newCourses.concat(courses).find((g) => g.groupID === newGroup.groupID)) { return; }

    setNewCourses([...newCourses, newGroup]);
    setCode("");
    setTitle("");
  }

  function deleteCourse(course: SimpleCourseGroup) {
    setCourses((prevCourses) => prevCourses.filter((c) => c.groupID !== course.groupID));
    setNewCourses((prevCourses) => prevCourses.filter((c) => c.groupID !== course.groupID));
  }

  const handleSave = async () => {
    const joinCourses = newCourses.map((course) => joinCourseGroup(user.attributes.sub,
      generateNewGroup(course))) as
      Promise<CourseGroup>[];
    const results = await Promise.all(joinCourses);
    const handleCourseGroup = (result: CourseGroup) => {
      setNewCourses((prevCourses) => prevCourses.filter((c) => c.groupID !== result.groupID));
      setCourses([...courses, simplifyCourseGroup(result)]);
    };
    results.forEach(handleCourseGroup);

    // leave courses
    setCourses(courses.filter((course) => !markedForDeletion.has(course)));
    await Promise.all([...markedForDeletion].map((group) => {
      return fetchCourseGroupConnection(user.attributes.sub, { eq: group.groupID })
        .then((connectionToDelete) => {
          return callDeleteCourseGroupConnection({ id: connectionToDelete.id! });
        })
        .catch((err) => console.log("failed to leave course", err));
    }));
    markedForDeletion = new Set(); // clear data
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

      {!isNew && (
        <Layout
          style={[
            editCourseStyles.courseTextContainer,
            isNew && editCourseStyles.newCourseContainer,
          ]}
        >
          <Button
            appearance="ghost"
            onPress={() => {
              if (markedForDeletion.has(group)) {
                markedForDeletion.delete(group);
              } else {
                markedForDeletion.add(group);
              }
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

export default EditCourseScreen;
