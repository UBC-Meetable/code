import { Layout, Text } from "@ui-kitten/components";
import React from "react";
import { StyleSheet } from "react-native";
import { ChatMessage } from "../types";
import styles from "./styles/MessageStyles";

const SelfMessage = ({ message }:{message: ChatMessage}) => (
  <Layout style={[styles.messageContainer, selfStyles.messageContainer]}>
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
});
export default SelfMessage;
