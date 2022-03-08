import { Layout, Spinner, Text } from "@ui-kitten/components";
import React from "react";
import { StyleSheet } from "react-native";
import { ChatMessageWithPending } from "../../types";
import { messageStyles } from "../styles";

const PendingMessage = ({ message }:{message: ChatMessageWithPending}) => (
  <Layout style={messageStyles.messageContainer}>
    <Layout style={[messageStyles.bubble, styles.bubble]}>
      <Layout style={[{ flexDirection: "row", backgroundColor: "#0000", justifyContent: "flex-start" }]}>
        { message.files?.map((file, index) => (
          <Layout key={index} style={{ marginHorizontal: 5, backgroundColor: "#0000" }}>
            <Spinner />
          </Layout>
        )) }
      </Layout>
      <Layout style={[{ flexDirection: "row", backgroundColor: "#0000", justifyContent: "space-between" }]}>
        <Text style={messageStyles.message}>{message.body}</Text>
        <Spinner status="info" />
      </Layout>
    </Layout>
  </Layout>
);

const styles = StyleSheet.create({
  bubble: {
    backgroundColor: "#C9E8F3",
  },
});

export default PendingMessage;
