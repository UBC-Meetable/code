<<<<<<< HEAD
=======
import { useHeaderHeight } from "@react-navigation/stack";
>>>>>>> 1dc95e5404d9b9e336c25b499a0f427193751d32
import { Layout } from "@ui-kitten/components";
import React, {
  useEffect, useRef, useState,
} from "react";
import {
  StyleSheet, TextInput, KeyboardAvoidingView, ScrollView,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
<<<<<<< HEAD
=======
import { SafeAreaView } from "react-native-safe-area-context";
>>>>>>> 1dc95e5404d9b9e336c25b499a0f427193751d32
import Icon from "react-native-vector-icons/FontAwesome";
import { MessageType } from "../types";
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
<<<<<<< HEAD
          // marginRight: -20,
          // marginBottom: -20,
          marginLeft: -35,
          // marginTop: -20,
=======
          marginLeft: -35,
>>>>>>> 1dc95e5404d9b9e336c25b499a0f427193751d32
        }}
      />
    </TouchableOpacity>
  </Layout>
);

const Chat = () => {
  const [message, setMessage] = useState("");
  const scrollRef = useRef<ScrollView>(null);
  const [messages, setMessages] = useState(
   [] as MessageType[],
  );
  useEffect(() => {
    scrollRef.current?.scrollToEnd({ animated: false });
  }, []);
<<<<<<< HEAD
=======

  const sendMessage = () => {
    console.log(message);

    const newMessage = {
      author: "asdf",
      message,
      date: new Date(Date.now()),
    } as MessageType;

    setMessages([...messages, newMessage]);
    setMessage("");
  };

>>>>>>> 1dc95e5404d9b9e336c25b499a0f427193751d32
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
          {messages.map((m, index) => {
<<<<<<< HEAD
=======
            // todo: if author is me, do this, else do other one
>>>>>>> 1dc95e5404d9b9e336c25b499a0f427193751d32
            if (index % 3 === 0) {
              return (
                <SelfMessage
                  key={index}
                  date={m.date}
                  author={m.author}
<<<<<<< HEAD
                  message={m.message.substring(0, index / 2)}
                />
              );
            }

            return (
              <OtherMessage
                key={index}
                message={m.message.substring(0, index / 2)}
=======
                  message={m.message}
                />
              );
            }
            return (
              <OtherMessage
                key={index}
                message={m.message}
>>>>>>> 1dc95e5404d9b9e336c25b499a0f427193751d32
                author={m.author}
                date={m.date}
              />
            );
          })}
        </ScrollView>
      </Layout>
      <Layout style={styles.flexInputContainer}>
        <TextInput
          value={message}
<<<<<<< HEAD
          onChangeText={(text) => setMessage(text)}
=======
          onChangeText={(text) => {
            setMessage(text);
          }}
>>>>>>> 1dc95e5404d9b9e336c25b499a0f427193751d32
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
<<<<<<< HEAD
        />
        <SendIcon
          onPress={() => {
            console.log("send");
=======
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
>>>>>>> 1dc95e5404d9b9e336c25b499a0f427193751d32
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
<<<<<<< HEAD
=======
    marginBottom: 20,
>>>>>>> 1dc95e5404d9b9e336c25b499a0f427193751d32
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
