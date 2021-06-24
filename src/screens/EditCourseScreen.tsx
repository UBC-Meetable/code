import { GraphQLResult } from "@aws-amplify/api";
import {
  Button, Input, Layout, Text,
} from "@ui-kitten/components";
import React, { useContext, useState } from "react";
import { StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { CourseGroup, CreateCourseGroupConnectionMutation } from "../API";
import joinCourseGroup from "../calls/joinCourseGroup";
import CourseGroupsContext from "../context/CourseGroupsContext";
import useAuthenticatedUser from "../hooks/useAuthenticatedUser";

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
const EditCourseScreen = () => {
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
  }: {
    code: string;
    section: string;
    title: string;
  }) => ({
    groupID: `${title}${code}-${section}`.toLowerCase(),
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
      title: currTitle,
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
          {`${group.title} ${group.code}, Section ${group.section}`}
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
                style={{ ...evaProps.style, ...styles.deleteButtonText }}
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
    <SafeAreaView style={styles.root}>
      <Layout style={[styles.form, styles.noBg]}>
        <Layout style={styles.container2}>
          <Text style={styles.textStyle}>Course</Text>
          <Layout style={styles.codeContainer}>
            <Input
              style={[styles.courseCodeInput, styles.courseStyle]}
              placeholder="COMM"
              value={currTitle}
              onChangeText={(newTitle) => {
                setTitle(newTitle.trim().toUpperCase());
              }}
            />
            <Input
              style={[styles.courseCodeInput, styles.codeStyle]}
              placeholder="101"
              value={currCode}
              onChangeText={(newCode) => {
                setCode(newCode.trim());
              }}
            />
            <Input
              style={[styles.courseCodeInput, styles.codeStyle]}
              placeholder="Section"
              value={currSection}
              onChangeText={(newSection) => {
                setSection(newSection.trim());
              }}
            />
          </Layout>
        </Layout>
      </Layout>
      <Layout style={[styles.noBg, styles.form]}>
        <Button
          style={styles.addCoursebutton}
          onPress={() => {
            addCourse();
          }}
        >
          {(evaProps: any) => (
            <Text
              {...evaProps}
              style={{ ...evaProps.style, ...styles.buttonText }}
            >
              Add Course
            </Text>
          )}
        </Button>
      </Layout>
      <Text style={styles.textStyle}>Your Courses</Text>
      <ScrollView contentContainerStyle={styles.selectionsContainer}>
        {renderCourses(courses)}
        {renderCourses(newCourses, true)}
      </ScrollView>

      <Layout style={[styles.noBg, styles.form]}>
        <Button
          style={styles.saveButton}
          onPress={() => {
            handleSave();
          }}
        >
          {(evaProps: any) => (
            <Text
              {...evaProps}
              style={{ ...evaProps.style, ...styles.buttonText }}
            >
              Save
            </Text>
          )}
        </Button>
      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  noBg: {
    backgroundColor: "#0000",
  },
  root: {
    backgroundColor: "#FFF8F3",
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    alignItems: "center",
    width: "80%",
  },
  addCoursebutton: {
    marginBottom: 30,
    width: "75%",
    borderRadius: 100,
    borderWidth: 0,
    backgroundColor: "#FBBA82",
    height: 50,
  },
  saveButton: {
    marginBottom: 30,
    width: "75%",
    borderRadius: 100,
    borderWidth: 0,
    backgroundColor: "#7ED1EF",
    height: 50,
  },
  buttonText: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 20,
    textAlign: "center",
    flex: 1,
  },
  selectionsContainer: {
    flexDirection: "column",
    width: "75%",
    marginLeft: 10,
  },
  courseContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 10,
    width: "100%",
    marginVertical: 2.5,
  },
  newCourseContainer: {
    backgroundColor: "grey",
  },
  newCourseText: {
    color: "white",
  },
  courseTextContainer: {
    flex: 1,
    borderRadius: 10,
    padding: 20,
  },
  textStyle: {
    fontFamily: "Poppins_600SemiBold",
    textAlign: "left",
    fontSize: 20,
    fontWeight: "500",
    lineHeight: 24,
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
    color: "red",
  },
  headerStyle: {
    textAlign: "left",
    fontSize: 25,
    fontWeight: "600",
    marginRight: 165,
  },
  codeContainer: {
    flexDirection: "row",
    backgroundColor: "#0000",
  },
  courseStyle: {
    flex: 0.4,
  },
  codeStyle: {
    flex: 0.3,
  },
  courseCodeInput: {
    borderRadius: 100,
    margin: 5,
    backgroundColor: "#ffff",
  },
  container2: {
    width: "100%",
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    backgroundColor: "#FFF8F3",
    justifyContent: "center",
  },
});

export default EditCourseScreen;
