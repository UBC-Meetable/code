import { Layout, Text } from "@ui-kitten/components";
import React from "react";
import { StyleSheet } from "react-native";
import { MessageType } from "../types";
<<<<<<< HEAD
import styles from "./MessageStyles";
=======
import styles from "./styles/MessageStyles";
>>>>>>> 1dc95e5404d9b9e336c25b499a0f427193751d32

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
