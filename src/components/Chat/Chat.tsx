import { Spinner } from "@ui-kitten/components";
import { Analytics, Storage } from "aws-amplify";
import * as ImagePicker from "expo-image-picker";
import React, {
  useContext,
  useEffect, useRef, useState,
} from "react";
import {
  KeyboardAvoidingView, Platform, RefreshControl, ScrollView, StyleSheet,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { FileAttachment, FileType } from "../../API";
import sendMessageToGroup from "../../calls/sendMessageToGroup";
import Colors from "../../constants/Colors";
import MessagesContext from "../../context/MessageContext";
import useAuthenticatedUser from "../../hooks/useAuthenticatedUser";
import useUserProfile from "../../hooks/useUserProfile";
import { ChatMessageWithPending, GroupType } from "../../types";
import MessageInput from "./MessageInput";
import OtherMessage from "./OtherMessage";
import PendingMessage from "./PendingMessage";
import SelfMessage from "./SelfMessage";

// TODO limit size of file that can be uploaded,
const Chat = ({ groupType }: {groupType: GroupType}) => {
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
  const [files, setFiles] = useState<FileAttachment[]>([]);

  const safeArea = useSafeAreaInsets();

  const sendMessage = async () => {
    if (textLoading) return;
    if (!message) return;
    setTextLoading(true);

    const filesToSend = files;
    const messageToSend = message;

    const newMessage: ChatMessageWithPending = {
      __typename: "ChatMessage",
      body: messageToSend,
      groupChatID: groupID,
      pending: true,
      files,
    };
    setMessage(() => "");
    setFiles(() => []);
    pendingMessages.push(newMessage);
    setPendingMessages(() => [...pendingMessages]);

    const s3Files = await Promise.all(filesToSend.map(async (file) => {
      const imageName = file.fileURI!.replace(/^.*[\\/]/, "");
      const s3ImageKey = `${groupID}/${imageName}`;
      await uploadImage(file);
      const newFile = {
        ...file,
        fileURI: s3ImageKey,
      };
      return newFile;
    }));

    const res = sendMessageToGroup({
      groupID,
      body: message,
      userID: user.attributes.sub,
      groupType,
      userName: userProfile.info!.user!.firstName!,
      hasFile: !!files?.length,
      files: s3Files,
    });

    res.then(() => {
      Analytics.record({ name: "Send Message" });
      pendingMessages.pop();
      setPendingMessages(() => [...pendingMessages]);
    }).catch((e) => console.warn(e));
    setTextLoading(false);
  };

  useEffect(() => {
    if (messages) { setLoaded(true); }
  }, [messages]);

  if (!user || !loaded) {
    return <Spinner />;
  }

  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      console.warn("Permission to access camera roll is required!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      aspect: [1, 1],
      quality: 0.5,
    });

    if (!result.cancelled) {
      const newFile: FileAttachment = {
        __typename: "FileAttachment",
        fileURI: result.uri,
        width: result.width,
        height: result.height,
        type: result.type as FileType,
      };
      setFiles(() => [...files, newFile]);
    }
  };

  const uploadImage = async (toUpload: FileAttachment) => {
    if (!toUpload.fileURI) {
      console.error("File did not have a URI");
      return;
    }
    const imageName = toUpload.fileURI!.replace(/^.*[\\/]/, "");
    const s3Key = `${groupID}/${imageName}`;

    const res = await fetch(toUpload.fileURI!);
    const blob = await res.blob();
    const access = { level: "public", contentType: toUpload.type };
    await Storage.put(s3Key, blob, access);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.messageContainer}
      keyboardVerticalOffset={150 + safeArea.bottom}
    >
      <ScrollView
        maintainVisibleContentPosition={{ minIndexForVisible: 1, autoscrollToTopThreshold: 100 }}
        onContentSizeChange={() => scrollRef.current?.scrollToEnd({ animated: false })}
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
      <MessageInput
        setFiles={setFiles}
        files={files}
        onPressPhoto={pickImage}
        onFocus={() => setTimeout(() => {
          scrollRef.current?.scrollToEnd({ animated: true });
        }, 100)}
        value={message}
        onChangeText={(text) => {
          setMessage(text);
        }}
        onSubmitEditing={
          () => {
            sendMessage();
            setTimeout(() => {
              scrollRef.current?.scrollToEnd({ animated: false });
            }, 100);
          }
        }
      />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  chat: {
    width: "100%",
    backgroundColor: Colors.theme.lightCreme,
    display: "flex",
    flex: 1,
  },
  messages: {
    flex: 1,
    overflow: "scroll",
    backgroundColor: "#0000",
  },
  safeArea: {
    flex: 1,
  },
  messageContainer: {
    flex: 1,
    backgroundColor: "#0000",
    width: "100%",
  },
  inputContainer: {
    flexBasis: 70,
  },
});
export default Chat;
