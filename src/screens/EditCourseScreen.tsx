import {
  Button, Input, Layout, Text,
} from "@ui-kitten/components";
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { CourseInput } from "../API";
import fetchUserCourses from "../calls/fetchUserCourses";
import updateUserProfile from "../calls/updateUserProfile";
import useAuthenticatedUser from "../hooks/useAuthenticatedUser";
import { Course } from "../types";

/** TODO: Cache user courses so we don't need to fetch so often. */
const EditCourseScreen = () => {
  const [courses, setCourses] = useState(new Set<string>());
  const [code, setCode] = useState("");
  const [section, setSection] = useState("");
  const user = useAuthenticatedUser();

  useEffect(() => {
    const f = async () => {
      const profile = await fetchUserCourses({ email: user.attributes.email });
      if (profile.data) {
        const courseStringSet = new Set<string>();
        profile.data.getUserProfile?.courses
          ?.forEach((course:Course) => courseStringSet.add(JSON.stringify(course)));
        setCourses(courseStringSet);
      }
    };

    if (user) f();
  }, [user]);

  function addCourse() {
    if (!code || !section) return;
    const newCourse: Course = { code, section };
    console.log(newCourse);

    setCode(() => "");
    setSection(() => "");
    const coursesToSave = new Set(courses.add(JSON.stringify(newCourse)));
    setCourses(() => coursesToSave);
    saveCourses(coursesToSave);
  }

  function deleteCourse(name: String) {
    setCourses(
      (prev) => new Set(Array.from(prev.values()).filter((x) => x !== name)),
    );
  }

  const saveCourses = async (coursesToSave: Set<string>) => {
    const courseArr = Array.from(coursesToSave).map(
      (courseString) => JSON.parse(courseString) as CourseInput,
    );
    const res = await updateUserProfile({
      email: user.attributes.email,
      courses: courseArr,
    });
    if (res.data) {
      console.log("Saved Courses");
    }
  };

  return (
    <SafeAreaView style={styles.root}>
      <Layout style={stylesTwo.container}>
        <Text style={styles.textStyle}>Course Code</Text>
        <Input
          style={styles.inputStyle}
          placeholder="COMM 101"
          value={code}
          onChangeText={(newCode) => {
            setCode(newCode);
          }}
        />
      </Layout>
      <Layout style={stylesTwo.container}>
        <Text style={styles.textStyle}>Section</Text>
        <Input
          style={styles.inputStyle}
          placeholder="235"
          value={section}
          onChangeText={(newSection) => {
            setSection(newSection);
          }}
        />
      </Layout>
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
      <ScrollView contentContainerStyle={styles.selectionsContainer}>
        {Array.from(courses.values()).map((course, index) => {
          const courseObj = JSON.parse(course) as Course;
          return (
            <Layout key={index} style={styles.courseContainer}>
              <Text
                style={styles.courseTextStyle}
              >
                {`${courseObj.code} ${courseObj.section}`}

              </Text>
              <Button
                appearance="ghost"
                onPress={() => {
                  deleteCourse(course);
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
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    display: "flex",
    height: "100%",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#FFF8F3",
  },
  addCoursebutton: {
    marginTop: 20,
    marginBottom: 30,
    width: "75%",
    borderRadius: 100,
    borderWidth: 0,
    backgroundColor: "#FBBA82",
    height: 50,
  },
  button: {
    marginTop: 10,
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
  blacktext: {
    color: "#000",
  },
  topcontainer: {
    flex: 1,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  bottomcontainer: {
    flex: 0,
    display: "flex",
    flexBasis: 150,
    flexDirection: "column",
    alignItems: "center",
  },
  bodyContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    marginTop: 30,
  },
  selectionsContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "75%",
    backgroundColor: "#FFF8F3",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  courseContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#FFF8F3",
    width: "100%",
  },
  inputStyle: {
    borderRadius: 100,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 10,
    backgroundColor: "#ffff",
  },
  textStyle: {
    fontFamily: "Poppins_600SemiBold",
    textAlign: "left",
    fontSize: 20,
    fontWeight: "500",
    lineHeight: 24,
    marginLeft: 30,
    marginRight: 30,
  },
  courseTextStyle: {
    fontFamily: "Poppins_400Regular",
    fontSize: 15,
    marginHorizontal: 20,
    marginVertical: 10,
    marginLeft: 30,
    marginRight: 80,
  },
  deleteButtonText: {
    fontSize: 20,
    color: "#FAE1CB",
    marginLeft: 80,
  },
  headerStyle: {
    textAlign: "left",
    fontSize: 25,
    fontWeight: "600",
    marginRight: 165,
  },
});

const stylesTwo = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    backgroundColor: "#FFF8F3",
  },
});

export default EditCourseScreen;
