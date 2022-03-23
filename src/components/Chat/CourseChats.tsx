import React from "react";
import { View, StyleSheet, Text } from "react-native";

type CourseChatProps = {};

const CourseChats = ({}: CourseChatProps) => {
  return (
    <View style={styles.root}>
      <Text>Course Chats Screen Here</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#0000",
    position: "relative",
    overflow: "visible",
  },
});

export default CourseChats;
