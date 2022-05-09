import { Layout, Text } from "@ui-kitten/components";
import React, { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import ImageView from "react-native-image-viewing";
import { ChatMessageWithPending } from "../../types";
import { messageStyles } from "../styles";
import CachedImage from "./CachedImage";

const SelfMessage = ({ message }:{message: ChatMessageWithPending}) => {
  const [visible, setVisible] = React.useState(false);
  const [index, setIndex] = useState(0);
  const [cachedUris, setCachedUris] = useState<Map<number, string>>(new Map<number, string>());
  const handleLoad = (uri: string, i: number) => {
    const oldMap = cachedUris;
    oldMap.set(i, uri);
    setCachedUris(() => oldMap);
  };
  return (
    <Layout style={[messageStyles.messageContainer, message.pending ? messageStyles.pending : {}]}>
      <Layout style={[messageStyles.bubble, styles.bubble]}>
        <Layout style={[{ flexDirection: "row", backgroundColor: "#0000", justifyContent: "flex-start" }]}>
          { message.files?.map((file, i) => (
            <TouchableOpacity onPress={() => { setVisible(true); setIndex(i); }} key={i}>
              <CachedImage
                load
                file={file}
                onLoad={(uri: string) => handleLoad(uri, i)}
              />
            </TouchableOpacity>
          )) }
        </Layout>
        {!!message.files?.length && (
          <ImageView
            images={Array.from(cachedUris!.values()).map((item) => ({ uri: item }))}
            imageIndex={index}
            visible={visible}
            onRequestClose={() => setVisible(false)}
          />
        )}
        <Text style={messageStyles.message}>{ message.body }</Text>
      </Layout>
    </Layout>
  );
};

const styles = StyleSheet.create({
  bubble: {
    backgroundColor: "#C9E8F3",
  },
});

export default SelfMessage;
