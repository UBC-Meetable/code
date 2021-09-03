import { Layout, Text } from "@ui-kitten/components";
import React, { useState } from "react";
import { StyleSheet, Image, TouchableOpacity } from "react-native";
import ImageView from "react-native-image-viewing";
import { ChatMessage, ChatMessageWithPending } from "../../types";
import styles from "../styles/MessageStyles";
import CachedImage from "./CachedImage";

const SelfMessage = ({ message }:{message: ChatMessageWithPending}) => {
  const [visible, setVisible] = React.useState(false);
  const [cachedUris, setCachedUris] = useState<string[]>([]);
  const handleLoad = (uri: string) => {
    if (cachedUris.includes(uri)) return;
    setCachedUris((old) => [...old, uri]);
  };
  return (
    <Layout style={[styles.messageContainer, selfStyles.messageContainer,
      message.pending ? selfStyles.pending : {}]}
    >
      <Layout style={[styles.bubble, selfStyles.bubble]}>
        <Layout style={[{ flexDirection: "row", backgroundColor: "#0000", justifyContent: "flex-start" }]}>
          { message.files?.map((file, index) => (
            <TouchableOpacity onPress={() => setVisible(true)} key={index}>
              <CachedImage
                load
                file={file}
                onLoad={handleLoad}
              />
            </TouchableOpacity>
          )) }
        </Layout>
        {!!message.files?.length && (
          <ImageView
            images={cachedUris.map((uri) => ({ uri }))}
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
