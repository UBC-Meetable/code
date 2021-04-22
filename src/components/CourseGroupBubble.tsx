import { Layout } from "@ui-kitten/components";
import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { Avatar, Chip } from "react-native-paper";
import { ChatMessage, CourseGroup, MessageMap } from "../types";

type CourseGroupBubbleProps = {
    courseGroup: CourseGroup,
    messages: ChatMessage[],
    joinGroup: () => void;
}

const CourseGroupBubble = ({
  courseGroup, joinGroup,
}: CourseGroupBubbleProps) => {
  const {
    groupID, users, course, title = groupID,
  } = courseGroup;
  // console.log(courseGroup);

  if (!groupID || !users || !course || !title) return null;
  return (
    <TouchableOpacity style={styles.bubble} onPress={() => joinGroup()}>
      <Layout style={styles.topContainer}>
        <Layout style={styles.textContainer}>
          <Text style={styles.bubbleText}>
            {title || groupID}
          </Text>
        </Layout>
        <Layout style={styles.sectionContainer}>
          <Chip style={styles.sectionBubble} textStyle={styles.sectionBubbleText}>
            Section
            {" "}
            {course.section}
          </Chip>
        </Layout>
      </Layout>

      <Layout style={styles.bottomContainer}>
        <Layout style={styles.bottomTextContainer}>
          <Text style={styles.bubbleTextDesc} numberOfLines={4} ellipsizeMode="tail">
            lorem ipsum lorem ipsum lorem ipsum
            hi hi hi hi ih ih lorem ipsum lorem ipsum
            hi hi hi hi ih ih lorem ipsum lorem ipsum
            hi hi hi hi ih ih lorem ipsum lorem ipsum
            hi hi hi hi ih ih lorem ipsum lorem ipsum
            hi hi hi hi ih ih lorem ipsum lorem ipsum
          </Text>
        </Layout>
        <Layout style={styles.bottomPhotoContainer}>
          <Layout style={styles.photoContainer}>
            <Avatar.Icon size={38} icon="folder" />
            <Avatar.Text size={38} label="TF" />
            <Avatar.Icon size={38} icon="folder" />
            <Avatar.Text size={38} label="DS" />
          </Layout>
        </Layout>

      </Layout>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  bubble: {
    minHeight: 100,
    height: 100,
    display: "flex",
    margin: 10,
    borderColor: "white",
    borderRadius: 24,
    backgroundColor: "#E6F4F9",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  sectionBubble: {
    height: 23,
    borderRadius: 50,
    backgroundColor: "white",
  },
  sectionBubbleText: {
    color: "black",
    top: -5,
  },
  bubbleText: {
    fontSize: 16,
    lineHeight: 24,
    marginHorizontal: 20,
  },
  bubbleTextDesc: {
    fontSize: 10,
    marginHorizontal: 20,
    marginTop: 7.5,
    marginBottom: 10,
  },
  topContainer: {
    flex: 0,
    flexDirection: "row",
    backgroundColor: "#0000",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 10,
  },
  textContainer: {
    flex: 1,
    backgroundColor: "#0000",
  },
  sectionContainer: {
    flex: 0.5,
    backgroundColor: "#0000",
    alignItems: "center",
  },
  bottomContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#0000",
  },
  bottomTextContainer: {
    flex: 1,
    backgroundColor: "#0000",
  },
  photoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0000",
    flexDirection: "row",
  },
  bottomPhotoContainer: {
    flexShrink: 1,
    backgroundColor: "#0000",
    marginHorizontal: 10,
  },
});
export default CourseGroupBubble;
