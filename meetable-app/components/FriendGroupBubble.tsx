import React from "react";
import { Layout } from "@ui-kitten/components";
import {
  StyleSheet, GestureResponderEvent, Text, TouchableOpacity,
} from "react-native";
import { Avatar, Chip } from "react-native-paper";

type FriendGroupBubbleProps = {
    onPress?: (event?: GestureResponderEvent) => void
}

const images = [
  "http://placekitten.com/g/200/300",
  "http://placekitten.com/g/200/300",
  "http://placekitten.com/g/200/300",
  "http://placekitten.com/g/200/300",
];

const FriendGroupBubble = ({ onPress }: FriendGroupBubbleProps) => (
  <TouchableOpacity style={styles.bubble} onPress={onPress}>
    <Layout style={[styles.bubbleSection, styles.chips]}>
      <Chip style={styles.chip}>Gamer</Chip>
      <Chip style={styles.chip}>Arts</Chip>
      <Chip style={styles.chip}>Coding</Chip>
      <Chip style={styles.chip}>Sports</Chip>
    </Layout>
    <Layout style={[styles.bubbleSection, styles.nameSection]}>
      <Text style={styles.names} ellipsizeMode="tail" numberOfLines={1}>
        Kevin, Lisa, John, Maggie, Kevin, Lisa, John, Maggie, Kevin, Lisa, John,
        Maggie,
      </Text>
      <Layout style={styles.pics}>
        {images.map((uri, index) => {
          if (index >= 4) return;

          // eslint-disable-next-line consistent-return
          return (<Avatar.Image size={38} source={{ uri }} style={{ position: "absolute", right: 0 + index * 23 }} />);
        })}
      </Layout>

    </Layout>
  </TouchableOpacity>
);

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
    fontFamily: "Poppins_400Regular",
    fontSize: 16,
    maxWidth: 250,
    overflow: "hidden",
  },
  nameSection: {
    alignItems: "center",
    padding: 10,
    flexDirection: "row",
  },
  pics: {
    flex: 1,
    backgroundColor: "#0000",
    flexDirection: "row",
    position: "relative",
    justifyContent: "flex-end",
    height: "100%",
  },
});

export default FriendGroupBubble;
