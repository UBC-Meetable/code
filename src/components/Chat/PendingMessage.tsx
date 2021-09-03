import { Layout, Spinner, Text } from "@ui-kitten/components";
import React from "react";
import { StyleSheet } from "react-native";
import { ChatMessageWithPending } from "../../types";
import styles from "../styles/MessageStyles";

const PendingMessage = ({ message }:{message: ChatMessageWithPending}) => (
  <Layout style={[styles.messageContainer, selfStyles.messageContainer]}>
    <Layout style={[styles.bubble, selfStyles.bubble]}>
      <Layout style={[{ flexDirection: "row", backgroundColor: "#0000", justifyContent: "flex-start" }]}>
        { message.files?.map((file, index) => (
          <Layout key={index} style={{ marginHorizontal: 5, backgroundColor: "#0000" }}>
            <Spinner />
          </Layout>
        )) }
      </Layout>
      <Layout style={[{ flexDirection: "row", backgroundColor: "#0000", justifyContent: "space-between" }]}>
        <Text style={[styles.message, selfStyles.message]}>{message.body}</Text>
        <Spinner status="info" />
      </Layout>
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
export default PendingMessage;
