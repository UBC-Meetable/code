import { Layout, Text } from "@ui-kitten/components";
import React from "react";
import { StyleSheet } from "react-native";
import { ChatMessage } from "../../types";

type MessagePreviewProps = {
    messages: ChatMessage[];
};

const MessagePreview = ({ messages }: MessagePreviewProps) => {
  const displayMessage = messages.length > 0 ? messages[messages.length - 1] : undefined;

  if (typeof displayMessage === "undefined") {
    return (
      <Layout style={styles.container}>
        <Text style={styles.body} numberOfLines={4} ellipsizeMode="tail">
          No Messages Yet!
        </Text>
      </Layout>
    );
  }
  return (
    <Layout style={styles.root}>
      <Layout style={styles.container}>
        <Text style={styles.author} ellipsizeMode="tail">
          {`${displayMessage.author?.firstName}: `}
        </Text>
        <Text style={styles.body} textBreakStrategy="highQuality" numberOfLines={4} ellipsizeMode="tail">
          {displayMessage.body}
        </Text>
      </Layout>
    </Layout>

  );
};
const styles = StyleSheet.create({
  body: {
    fontSize: 10,
    flexShrink: 1,
    // width: 100,
  },
  author: {
    fontWeight: "bold",
    fontSize: 12,
    textAlignVertical: "top",
  },
  container: {
    backgroundColor: "#0000",
    // overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    borderColor: "green",
  },
  root: {
    marginHorizontal: 20,
    marginTop: 7.5,
    marginBottom: 10,
    backgroundColor: "#0000",
    overflow: "hidden",
    flexDirection: "column",
    justifyContent: "center",
    flex: 1,
  },
});
export default MessagePreview;
