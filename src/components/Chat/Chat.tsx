import { Spinner } from "@ui-kitten/components";
import { Analytics, Storage } from "aws-amplify";
import * as ImagePicker from "expo-image-picker";
import { ImageInfo } from "expo-image-picker/build/ImagePicker.types";
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

const Chat = ({ groupType }: {groupType: GroupType}) => {
  const [message, setMessage] = useState("");
  const scrollRef = useRef<ScrollView>(null);
  const user = useAuthenticatedUser();
  const userProfile = useUserProfile();
  const [pendingMessages, setPendingMessages] = useState<ChatMessageWithPending[]>([]);
  const [textLoading, setTextLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [previewURI, setPreviewURI] = useState<string | null>(null);
  const {
    groupID, messages, loading, getMessages, reachedEnd,
  } = useContext(MessagesContext);
  const [files, setFiles] = useState<FileAttachment[]>([]);

  const safeArea = useSafeAreaInsets();

  const sendMessage = () => {
    if (!message) return;
    setTextLoading(true);
    const fileURIs = files.map((file) => file.fileURI);

    const newMessage: ChatMessageWithPending = {
      __typename: "ChatMessage",
      body: message,
      groupChatID: groupID,
      pending: true,
      files,
    };
    pendingMessages.push(newMessage);
    setPendingMessages(() => [...pendingMessages]);

    const res = sendMessageToGroup({
      groupID,
      body: message,
      userID: user.attributes.sub,
      groupType,
      userName: userProfile.info!.user!.firstName!,
      hasFile: !!files?.length,
      files,
    });

    res.then(() => {
      Analytics.record({ name: "Send Message" });
      pendingMessages.pop();
      setPendingMessages(() => [...pendingMessages]);
    }).catch((e) => console.warn(e));
    setTextLoading(false);

    setMessage("");
    setFiles([]);
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
      alert("Permission to access camera roll is required!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
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

  const uploadImage = (toUpload: ImageInfo) => {
    const imageName = toUpload.uri.replace(/^.*[\\/]/, "");
    const imageKey = `${user.attributes.sub}/${imageName}`;
    fetch(toUpload.uri).then((response) => {
      response.blob()
        .then((blob) => {
          const access = { level: "public", contentType: toUpload.type };
          Storage.put(imageKey, blob, access)
            .then(() => {
              Storage.get(imageKey, { download: false, expires: 604800 }).then((success) => {
              });
            })
            .catch((err) => {
            });
        });
    });
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
