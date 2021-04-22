import { Layout, Spinner } from "@ui-kitten/components";
import React, {
  useEffect, useRef, useState,
} from "react";
import {
  KeyboardAvoidingView, ScrollView, StyleSheet, TextInput,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";
import sendMessageToCourseGroup from "../calls/sendMessageToCourseGroup";
import useAuthenticatedUser from "../hooks/useAuthenticatedUser";
import { ChatMessage, CourseGroup } from "../types";
import OtherMessage from "./OtherMessage";
import SelfMessage from "./SelfMessage";

const SendIcon = ({ onPress }: {onPress?: Function}) => (
  <Layout
    style={{
      position: "absolute",
      right: 30,
      bottom: 25,
      alignSelf: "center",
    }}
  >
    <TouchableOpacity
      onPress={(e) => {
        if (typeof onPress === "function") {
          onPress(e);
        }
      }}
    >
      <Icon
        name="send"
        size={25}
        style={{
          color: "#FBBA82",
          backgroundColor: "#0000",
          marginLeft: -35,
        }}
      />
    </TouchableOpacity>
  </Layout>
);

const Chat = ({ courseGroup, groupMessages }:
  {courseGroup: CourseGroup, groupMessages: ChatMessage[]}) => {
  const [message, setMessage] = useState("");
  const scrollRef = useRef<ScrollView>(null);
  const user = useAuthenticatedUser();
  const [rerender, setRerender] = useState(false);

  useEffect(() => {
    scrollRef.current?.scrollToEnd({ animated: false });
  }, []);

  useEffect(() => {
    console.log("groupmessages updated");
    setRerender(!rerender);
  }, [groupMessages]);

  const sendMessage = () => {
    const { groupID } = courseGroup;

    sendMessageToCourseGroup({ groupID, body: message, userID: user.attributes.sub });
    // const newMessage = {
    //   groupChatID: courseGroup.groupID,
    //   body: message,
    // } as ChatMessage;

    // setMessages([...messages, newMessage]);
    setMessage("");
  };

  if (!user) {
    return <Spinner />;
  }

  return (
    <KeyboardAvoidingView style={styles.chat} behavior="padding" keyboardVerticalOffset={100}>
      <Layout style={styles.messageContainer}>
        <ScrollView
          ref={scrollRef}
          style={styles.messages}
          contentContainerStyle={{
            justifyContent: "flex-end",
            display: "flex",
          }}
        >
          {groupMessages.map((m, index) => {
            // todo: if author is me, do this, else do other one

            if (m?.author?.id === user.attributes.sub) {
              return (
                <SelfMessage
                  key={index}
                  message={m}
                />
              );
            }
            return (
              <OtherMessage
                key={index}
                message={m}
              />
            );
          })}
        </ScrollView>
      </Layout>
      <Layout style={styles.flexInputContainer}>
        <TextInput
          value={message}
          onChangeText={(text) => {
            setMessage(text);
          }}
          style={styles.input}
          onFocus={() => {
            setTimeout(() => {
              scrollRef.current?.scrollToEnd({ animated: true });
            }, 100);
          }}
          placeholder="Say Hi!"
          placeholderTextColor="#c4c4c4"
          textBreakStrategy="highQuality"
          numberOfLines={1}
          underlineColorAndroid="rgba(0,0,0,0)"
          blurOnSubmit={false}
          onSubmitEditing={() => {
            sendMessage();
            setTimeout(() => {
              scrollRef.current?.scrollToEnd({ animated: false });
            }, 100);
          }}
        />
        <SendIcon
          onPress={() => {
            sendMessage();
          }}
        />
      </Layout>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  chat: {
    width: "100%",
    backgroundColor: "#FFF8F3",
    display: "flex",
    flex: 1,
  },
  input: {
    minHeight: 60,
    borderRadius: 20,
    padding: 10,
    width: "90%",
    backgroundColor: "#FEEDDE",
  },
  inputContainer: {
    width: "100%",
    backgroundColor: "#0000",
  },
  flexInputContainer: {
    paddingBottom: 10,
    backgroundColor: "rgba(0,0,0,0)",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  messages: {
    flex: 1,
    overflow: "scroll",
    backgroundColor: "#0000",
  },
  messageKeyboard: {
    backgroundColor: "#0000",
  },
  messageContainer: {
    flex: 1,
    backgroundColor: "#0000",
  },
});
export default Chat;
