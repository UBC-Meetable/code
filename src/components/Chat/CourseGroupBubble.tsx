import { Layout } from "@ui-kitten/components";
import React, { ReactNode, useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Avatar, Chip } from "react-native-paper";
import { CourseGroupConnectionModel, User } from "../../API";
import useAuthenticatedUser from "../../hooks/useAuthenticatedUser";
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

  const me = useAuthenticatedUser();
  const userSet = new Set<User>();
  const userIdSet = new Set<string>();
  for (let i = 0; i < Math.min(messages.length, 4) && userSet.size < 4; i += 1) {
    const user = (messages[i] as ChatMessage).author as User;
    if (!userIdSet.has(user.id!) && user.id !== me.attributes.sub) {
      userIdSet.add(user.id!);
      userSet.add(user);
    }
  }

  if (userSet.size < 4) {
    const list = users!.items!.map((i) => i!.user!);
    for (let i = 0; i < Math.min(list!.length, 4) && userSet.size < 4; i += 1) {
      const user = (list[i] as User);

      if (!userIdSet.has(user.id!) && user.id !== me.attributes.sub) {
        userIdSet.add(user.id!);
        userSet.add(user);
      }
    }
  }

  const userPile = Array.from(userSet).reverse();

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
            <PictureStack users={userPile} />
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
