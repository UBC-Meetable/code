import { Layout } from "@ui-kitten/components";
import React, { ReactNode, useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Avatar, Chip } from "react-native-paper";
import { User } from "../../API";
import { ChatMessage, CourseGroup } from "../../types";
import PictureStack from "../PictureStack";
import MessagePreview from "./MessagePreview";

type CourseGroupBubbleProps = {
    courseGroup: CourseGroup,
    messages: ChatMessage[],
    moveToGroupScreen: () => void;
}

const CourseGroupBubble = ({
  courseGroup, moveToGroupScreen, messages,
}: CourseGroupBubbleProps) => {
  const {
    groupID, users, title = groupID,
  } = courseGroup;

  const [mostRecentUsers, setMostRecentUsers] = useState(new Set<User>());

  useEffect(() => {
    const newUsers = new Set<User>();

    messages.forEach((message) => {
      if (newUsers.size >= 4) return;
      newUsers.add(message.author!);
    });

    setMostRecentUsers(newUsers);
  }, [messages]);

  if (!groupID || !users || !title) return null;
  return (
    <TouchableOpacity style={styles.bubble} onPress={() => moveToGroupScreen()}>
      <Layout style={styles.topContainer}>
        <Layout style={styles.textContainer}>
          <Text style={styles.bubbleText}>
            {title || groupID}
            {" "}
            {courseGroup.code}
          </Text>
        </Layout>
        <Layout style={styles.sectionContainer}>
          <Chip style={styles.sectionBubble} textStyle={styles.sectionBubbleText}>
            Section
            {" "}
            {courseGroup.section}
          </Chip>
        </Layout>
      </Layout>

      <Layout style={styles.bottomContainer}>
        <Layout style={styles.bottomTextContainer}>
          <MessagePreview messages={messages} />
        </Layout>
        {/* TODO Implement User Photos, Make new component for this */}
        <Layout style={styles.bottomPhotoContainer}>
          <Layout style={[styles.bubbleSection, styles.nameSection]}>
            <PictureStack users={users.items!.map((item) => item!.user!)} />
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
    padding: 5,
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
    position: "relative",
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
    borderWidth: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#0000",
    flexDirection: "row",
  },
  bottomPhotoContainer: {
    flexShrink: 1,
    backgroundColor: "#0000",
  },
  bubbleSection: {
    display: "flex",
    flex: 1,
    backgroundColor: "#0000",
  },
  nameSection: {
    alignItems: "center",
    padding: 10,
    flexDirection: "row",
  },
});
export default CourseGroupBubble;
