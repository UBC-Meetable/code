import { Layout, Text } from "@ui-kitten/components";
import React from "react";
import { StyleSheet } from "react-native";
import { MessageType } from "../types";
import styles from "./MessageStyles";

const SelfMessage = ({ date, message, author }:MessageType) => (
  <Layout style={[styles.messageContainer, selfStyles.messageContainer]}>
    <Layout style={[styles.bubble, selfStyles.bubble]}>
      <Text style={[styles.message, selfStyles.message]}>{message}</Text>
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
