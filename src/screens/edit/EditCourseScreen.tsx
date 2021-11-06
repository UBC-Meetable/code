/* eslint-disable max-len */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
import {
  Button, Layout, Text,
} from "@ui-kitten/components";
import React, { useContext, useState } from "react";
import { CourseGroup, CourseGroupConnection } from "../../API";
import joinCourseGroup from "../../calls/joinCourseGroup";
import callDeleteCourseGroupConnection from "../../calls/leaveCourseGroup";
import fetchCourseGroupConnection from "../../calls/getCourseGroupConnection";
import CourseGroupsContext from "../../context/CourseGroupsContext";
import useAuthenticatedUser from "../../hooks/useAuthenticatedUser";
import { SimpleCourseGroup } from "../../types";
import EditCourseBody from "./EditCourseBody";
import editCourseStyles from "./editCourseStyles";
import { simplifyCourseGroup, simplifyCourseGroups } from "./helpers";
import { getCourseGroupConnection } from "../../graphql/queries";

/** TODO: make styling more dynamic */
// Todo: componentize file
/** TODO: Cache user courses so we don't need to fetch so often. */

type EditCourseScreenProps = {}

const EditCourseScreen = (props: EditCourseScreenProps) => {
  const courseGroups = useContext(CourseGroupsContext);
  const [courses, setCourses] = useState(simplifyCourseGroups(courseGroups));
  const [newCourses, setNewCourses] = useState([] as SimpleCourseGroup[]);
  const [currTitle, setTitle] = useState("");
  const [currCode, setCode] = useState("");
  const [currSection, setSection] = useState("");
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
    setSection("");
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
    for (const group of [...markedForDeletion]) {
      try {
        const connectionToDelete = await fetchCourseGroupConnection(user.attributes.sub, group.groupID);
        await callDeleteCourseGroupConnection({ id: connectionToDelete.id! });
      } catch (err) {
        console.log("failed to leave course", err);
      }
    }
    markedForDeletion = new Set(); // clear data
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
              // const leave = await deleteExistingCourse(group);
              // if (leave) await leaveCourseGroup({ id: group.groupID });
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
    />
  );
};

export default EditCourseScreen;
