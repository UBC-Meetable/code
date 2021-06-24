import { Layout } from "@ui-kitten/components";
import React from "react";
import {
  GestureResponderEvent, StyleSheet, Text, TouchableOpacity,
} from "react-native";
import { Chip } from "react-native-paper";
import { ChatMessage, FriendGroup } from "../../API";
import PictureStack from "../PictureStack";

type FriendGroupBubbleProps = {
    friendGroup: FriendGroup;
    messages: ChatMessage[];
    onPress?: (event?: GestureResponderEvent) => void
}

const FriendGroupBubble = ({ onPress, friendGroup, messages }: FriendGroupBubbleProps) => {
  const renderGroupMemberNames = () => "BOB";
  const users = friendGroup.users!.items!.map((item) => item!.user!);

  return (
    <TouchableOpacity style={styles.bubble} onPress={onPress}>
      <Layout style={[styles.bubbleSection, styles.chips]}>
        <Chip style={styles.chip}>Gamer</Chip>
        <Chip style={styles.chip}>Arts</Chip>
        <Chip style={styles.chip}>Coding</Chip>
        <Chip style={styles.chip}>Sports</Chip>
      </Layout>
      <Layout style={[styles.bubbleSection, styles.nameSection]}>
        <Text style={styles.names} ellipsizeMode="tail" numberOfLines={1}>
          {friendGroup.title || renderGroupMemberNames()}
        </Text>
        <PictureStack users={users} />
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
  bubbleSection: {
    display: "flex",
    flex: 1,
    backgroundColor: "#0000",
  },
  chip: {
    fontFamily: "Poppins_400Regular",
    fontSize: 14,
    flex: 0,
    backgroundColor: "#fff",
  },
  chips: {
    paddingTop: 10,
    width: "75%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  names: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 16,
    maxWidth: 250,
    overflow: "hidden",
  },
  nameSection: {
    alignItems: "center",
    padding: 10,
    flexDirection: "row",
  },
});

export default FriendGroupBubble;
