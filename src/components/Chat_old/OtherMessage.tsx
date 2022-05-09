/* eslint-disable camelcase */
import { Layout, Modal, Text } from "@ui-kitten/components";
import React, { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import ImageView from "react-native-image-viewing";
import { UserProvider } from "../../context/UserContext";
import { ChatMessage, ProfilePictureSize } from "../../types";
import InspectProfile from "../profile/InspectProfile";
import ProfilePicture from "../ProfilePicture";
import { messageStyles } from "../styles";
import CachedImage from "./CachedImage";

const OtherMessage = ({ message } : {message: ChatMessage}) => {
  const [visible, setVisible] = React.useState(false);
  const imageKey = message.author!.profilePicture!;
  const [cachedUris, setCachedUris] = useState<string[]>([]);

  const handleLoad = (uri: string) => {
    if (cachedUris.includes(uri)) return;
    setCachedUris((old) => [...old, uri]);
  };
  return (
    <Layout style={[messageStyles.messageContainer, styles.messageContainer]}>
      <Layout style={styles.messageAndAuthor}>
        <Layout style={styles.nameContainer}>
          <Text style={styles.name}>{`${message.author?.firstName} ${message.author?.lastName}`}</Text>
        </Layout>
        <Layout style={styles.imageContainer}>
          <TouchableOpacity
            style={messageStyles.avatarButton}
            activeOpacity={0.5}
          >

            <Modal
              visible={visible}
              backdropStyle={styles.backdrop}
              onBackdropPress={() => {
                setVisible(false);
              }}
              style={styles.modal}
            >
              <UserProvider>
                <InspectProfile user={message.author!} />
              </UserProvider>

            </Modal>

            <ProfilePicture
              imageKey={imageKey}
              size={ProfilePictureSize.MESSAGE}
              onPress={() => setVisible(true)}
            />
          </TouchableOpacity>
          <Layout style={messageStyles.bubble}>
            <Layout style={[{ flexDirection: "row", backgroundColor: "#0000", justifyContent: "flex-end" }]}>
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
            <Text style={messageStyles.message}>{message.body}</Text>
          </Layout>
        </Layout>
      </Layout>
    </Layout>
  );
};

const styles = StyleSheet.create({
  messageAndAuthor: {
    backgroundColor: "#0000",
    flex: 1,
  },
  nameContainer: {
    marginTop: 2,
    marginLeft: 50,
    flexWrap: "wrap",
    display: "flex",
    backgroundColor: "#0000",
    width: "70%",
    flexDirection: "row",
  },
  imageContainer: {
    flexGrow: 1,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#0000",
  },
  messageContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
  name: {
    color: "#FBBA82",
    fontFamily: "Poppins_600SemiBold",
    alignSelf: "flex-start",
  },
  backdrop: {
    backgroundColor: "rgba(251, 186, 130, 0.5)",
  },
  modal: {
    justifyContent: "center",
    alignItems: "center",
    height: "60%",
    flexGrow: 1,
    flex: 1,
    width: "85%",
    minWidth: 300,
    maxWidth: 500,
  },
});

export default OtherMessage;
