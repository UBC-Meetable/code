import { Layout, Text } from "@ui-kitten/components";
import React from "react";
import { StyleSheet } from "react-native";
import { ChatMessage } from "../../API";
import Colors from "../../constants/Colors";

type SelfMessageProps = {
  message: ChatMessage;
};

const SelfMessage = ({ message }:SelfMessageProps) => {
  return (
    <Layout style={styles.root}>
      <Text style={styles.text}>
        {message.body}
      </Text>
    </Layout>
  );
};

const styles = StyleSheet.create({
  root: {
    maxWidth: "80%",
    alignSelf: "flex-end",
    padding: 5,
    marginBottom: 5,
    borderBottomRightRadius: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
    backgroundColor: Colors.theme.blue,
  },
  text: {
    color: "white",
    fontFamily: "Quicksand_400Regular",
  },
});

export default SelfMessage;
