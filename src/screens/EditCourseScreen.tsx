import {
  Button, Input, Layout, Text,
} from "@ui-kitten/components";
import { __handlePersistedRegistrationInfoAsync } from "expo-notifications/build/DevicePushTokenAutoRegistration.fx";
import React, { useContext, useState } from "react";
import { StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { CourseGroup } from "../API";
import joinCourseGroup from "../calls/joinCourseGroup";
import CourseGroupsContext from "../context/SubscriptionContext";
import useAuthenticatedUser from "../hooks/useAuthenticatedUser";

type SimpleCourseGroup = {
  title: string;
  code: string;
  section: string;
  groupID: string;
}

const simplifyCourseGroups = (groups: CourseGroup[]) => groups.map((g) => {
  const newGroup: SimpleCourseGroup = {
    groupID: g.groupID!,
    title: g.title!,
    section: g.section!,
    code: g.code!,
  };
  return newGroup;
});
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

  const generateNewGroup = ({ code, section, title }:
    {code: string, section: string, title: string}) => ({
    groupID: `${title}${code}-${section}`.toLowerCase(),
    code,
    section,
    title: title.toUpperCase(),
  } as SimpleCourseGroup);

  function addCourse() {
    if (!currTitle || !currCode || !currSection) return;

    const newGroup = generateNewGroup({ code: currCode, title: currTitle, section: currSection });

    if (courses.find((g) => g.groupID === newGroup.groupID)) return;

    setCourses([...courses, newGroup]);
    setNewCourses([...newCourses, newGroup]);
  }

  function deleteCourse(course: SimpleCourseGroup) {
    setCourses(
      (prevCourses) => prevCourses.filter((c) => c.groupID !== course.groupID),
    );
    setNewCourses(
      (prevCourses) => prevCourses.filter((c) => c.groupID !== course.groupID),
    );
  }

  const handleSave = async () => {
    await Promise.all(
      newCourses.map((course) => joinCourseGroup(user.attributes.sub, generateNewGroup(course))),
    );
  };

  const renderCourses = (groups: SimpleCourseGroup[]) => groups.map((group, index) => (
    <Layout key={index} style={styles.courseContainer}>
      <Layout style={styles.courseTextContainer}>
        <Text
          style={styles.courseTextStyle}
        >
          {`${group.title} ${group.code} ${group.section}`}

        </Text>
      </Layout>

      <Layout style={styles.deleteContainer}>
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
                setTitle(newTitle.trim());
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
    backgroundColor: "green",
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
    color: "#FBBA82",
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
