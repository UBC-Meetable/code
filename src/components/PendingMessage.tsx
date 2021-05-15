import { Layout, Spinner, Text } from "@ui-kitten/components";
import React from "react";
import { StyleSheet } from "react-native";
import { ChatMessage, ChatMessageWithPending } from "../types";
import styles from "./styles/MessageStyles";

const PendingMessage = ({ message }:{message: ChatMessageWithPending}) => (
  <Layout style={[styles.messageContainer, selfStyles.messageContainer]}>
    <Layout style={[styles.bubble, selfStyles.bubble]}>
      <Text style={[styles.message, selfStyles.message]}>{message.body}</Text>
      <Spinner />
    </Layout>
  </Layout>
);

const selfStyles = StyleSheet.create({
  bubble: {
    backgroundColor: "#d9eff7",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  message: {
    fontFamily: "Poppins_400Regular",
  },
  messageContainer: {
    justifyContent: "flex-end",
  },
});
export default PendingMessage;
