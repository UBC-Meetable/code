import { Layout, Text } from "@ui-kitten/components";
import React from "react";
import { StyleSheet, Image, TouchableOpacity } from "react-native";
import ImageView from "react-native-image-viewing";
import { ChatMessage, ChatMessageWithPending } from "../../types";
import styles from "../styles/MessageStyles";

const SelfMessage = ({ message }:{message: ChatMessageWithPending}) => {
  const [visible, setVisible] = React.useState(false);
  return (
    <Layout style={[styles.messageContainer, selfStyles.messageContainer,
      message.pending ? selfStyles.pending : {}]}
    >
      <Layout style={[styles.bubble, selfStyles.bubble]}>
        { message.files?.map((file, index) => (
          <TouchableOpacity onPress={() => setVisible(true)} key={index}>
            <Image
              source={{ uri: file.fileURI }}
              style={{ height: 100, borderRadius: 5 }}
            />
          </TouchableOpacity>
        )) }
        {message.files?.length && (
          <ImageView
            images={message.files.map((file) => ({ uri: file.fileURI }))}
            imageIndex={0}
            visible={visible}
            onRequestClose={() => setVisible(false)}
          />
        )}
        <Text style={[styles.message, selfStyles.message]}>{ message.body }</Text>
      </Layout>
    </Layout>
  );
};

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
