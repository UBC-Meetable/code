import { Layout, Text } from "@ui-kitten/components";
import React from "react";
import { StyleSheet } from "react-native";

type EnrolledCourseProps = {
  courseName: string
};

const EnrolledCourse = ({ courseName }:EnrolledCourseProps) => {
  return (
    <Layout style={styles.root}>
      <Text>{courseName}</Text>
    </Layout>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#FFEAB4",
    padding: 8,
    borderRadius: 20,
    margin: 6,
    borderWidth: 1,
  },
});

export default EnrolledCourse;
