import { Layout, Text } from "@ui-kitten/components";
import React from "react";
import { StyleSheet } from "react-native";
import { ChatMessage, ChatMessageWithPending } from "../../types";
import styles from "../styles/MessageStyles";

const SelfMessage = ({ message }:{message: ChatMessageWithPending}) => (
  <Layout style={[styles.messageContainer, selfStyles.messageContainer,
    message.pending ? selfStyles.pending : {}]}
  >
    <Layout style={[styles.bubble, selfStyles.bubble]}>
      <Text style={[styles.message, selfStyles.message]}>{message.body}</Text>
    </Layout>
  </Layout>
);

const selfStyles = StyleSheet.create({
  bubble: {
    backgroundColor: "#C9E8F3",
  },
  message: {
    fontFamily: "Poppins_400Regular",
  },
  messageContainer: {
    justifyContent: "flex-end",
  },
  pending: {
    backgroundColor: "#d9eff7",
  },
});
export default SelfMessage;
