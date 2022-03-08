import { Layout, Text } from "@ui-kitten/components";
import React from "react";
import { StyleSheet } from "react-native";
import { CourseGroup } from "../../API";
import EnrolledCourse from "./EnrolledCourse";

type EnrolledCoursesProps = {
  courses: CourseGroup[]
};

const EnrolledCourses = ({ courses }:EnrolledCoursesProps) => {
  return (
    <Layout style={styles.root}>
      {courses.map((course:CourseGroup, index) => {
        const courseName = `${course.title} ${course.code}`.trim();
        return <EnrolledCourse courseName={courseName} key={index} />;
      })}
    </Layout>
  );
};

const styles = StyleSheet.create({
  root: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    width: "85%",
    borderRadius: 20,
    padding: 6,
  },
});

export default EnrolledCourses;
