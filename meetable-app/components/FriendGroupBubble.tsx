import React from "react";
import { Layout } from "@ui-kitten/components";
import {
  StyleSheet, GestureResponderEvent, Text, TouchableOpacity,
} from "react-native";
import { Avatar, Chip } from "react-native-paper";

type FriendGroupBubbleProps = {
    onPress?: (event?: GestureResponderEvent) => void
}

const FriendGroupBubble = ({ onPress }: FriendGroupBubbleProps) => (
  <TouchableOpacity style={styles.bubble} onPress={onPress}>
    <Layout style={[styles.bubbleSection, {
      width: "100%", flexDirection: "row", justifyContent: "flex-start", alignItems: "center",
    }]}
    >

      <Chip style={styles.chip}>
        Gamer
      </Chip>
    </Layout>
    <Layout style={styles.bubbleSection} />
  </TouchableOpacity>
);

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
    position: "relative",
  },
  bubbleSection: {
    display: "flex",
    flex: 1,
    borderWidth: 1,
    backgroundColor: "#0000",
  },
  chip: {
    flex: 0,
  },
});

export default FriendGroupBubble;
