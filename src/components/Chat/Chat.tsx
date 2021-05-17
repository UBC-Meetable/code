import { Layout, Spinner } from "@ui-kitten/components";
import React, {
  useContext,
  useEffect, useRef, useState,
} from "react";
import {
  KeyboardAvoidingView, RefreshControl, ScrollView, StyleSheet, TextInput,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import sendMessageToCourseGroup from "../../calls/sendMessageToCourseGroup";
import MessagesContext from "../../context/MessageContext";
import CourseGroupsContext from "../../context/SubscriptionContext";
import useAuthenticatedUser from "../../hooks/useAuthenticatedUser";
import useUserProfile from "../../hooks/useUserProfile";
import { ChatMessage, ChatMessageWithPending, CourseGroup } from "../../types";
import OtherMessage from "./OtherMessage";
import PendingMessage from "./PendingMessage";
import SelfMessage from "./SelfMessage";

const SendIcon = ({ onPress, name }: {onPress?: Function, name: string}) => (
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
        name={name}
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

const Chat = () => {
  const [message, setMessage] = useState("");
  const scrollRef = useRef<ScrollView>(null);
  const user = useAuthenticatedUser();
  const userProfile = useUserProfile();
  const [pendingMessages, setPendingMessages] = useState<ChatMessageWithPending[]>([]);
  const [textLoading, setTextLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const {
    groupID, messages, loading, getMessages, reachedEnd,
  } = useContext(MessagesContext);

  const sendMessage = () => {
    setTextLoading(true);
    const newMessage: ChatMessageWithPending = {
      __typename: "ChatMessage",
      author: userProfile,
      body: message,
      groupChatID: groupID,
      pending: true,
    };
    pendingMessages.push(newMessage);
    setPendingMessages(() => [...pendingMessages]);

    const res = sendMessageToCourseGroup({
      groupID,
      body: message,
      userID: user.attributes.sub,
    });

    res.then(() => {
      pendingMessages.pop();
      setPendingMessages(() => [...pendingMessages]);
    }).catch((e) => console.warn(e));
    setTextLoading(false);

    setMessage("");
  };

  useEffect(() => {
    if (messages) { setLoaded(true); }
  }, [messages]);

  if (!user) {
    return <Spinner />;
  }

  return (
    <KeyboardAvoidingView style={styles.chat} behavior="padding" keyboardVerticalOffset={100}>
      <Layout style={styles.messageContainer}>
        <ScrollView
          maintainVisibleContentPosition={{ minIndexForVisible: 1, autoscrollToTopThreshold: 100 }}
          // onContentSizeChange={() => scrollRef.current?.scrollToEnd({ animated: false })}
          ref={scrollRef}
          style={styles.messages}
          contentContainerStyle={{
            justifyContent: "flex-end",
            display: "flex",
          }}
          refreshControl={(
            <RefreshControl
              refreshing={loading}
              onRefresh={getMessages}
              enabled={!reachedEnd}
            />
          )}
        >
          {messages.map((m, index) => {
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
          {pendingMessages.map((m, index) => (<PendingMessage message={m} key={index} />))}
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
          name={textLoading ? "loading" : "send"}
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
