/* eslint-disable camelcase */
import { Layout, Modal, Text } from "@ui-kitten/components";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { UserProvider } from "../../context/UserContext";
import { ChatMessage, ProfilePictureSize } from "../../types";
import InspectProfile from "../profile/InspectProfile";
import ProfilePicture from "../ProfilePicture";
import styles from "../styles/MessageStyles";

const OtherMessage = ({ message } : {message: ChatMessage}) => {
  const [visible, setVisible] = React.useState(false);
  const imageKey = message.author!.profilePicture!;

  return (
    <Layout style={otherStyles.messageContainer}>
      <Layout style={otherStyles.messageAndAuthor}>
        <Layout style={otherStyles.nameContainer}>
          <Text style={otherStyles.name}>{`${message.author?.firstName} ${message.author?.lastName}`}</Text>
        </Layout>
        <Layout style={otherStyles.imageContainer}>
          <TouchableOpacity
            style={styles.avatarButton}
            activeOpacity={0.5}
          >

            <Modal
              visible={visible}
              backdropStyle={otherStyles.backdrop}
              onBackdropPress={() => {
                setVisible(false);
              }}
              style={otherStyles.modal}
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
          <Layout style={styles.bubble}>
            <Text style={[styles.message, otherStyles.message]}>{message.body}</Text>
          </Layout>
        </Layout>
      </Layout>
    </Layout>
  );
};

const otherStyles = StyleSheet.create({
  messageAndAuthor: {
    backgroundColor: "#0000",
    flex: 1,
  },
  message: {
    fontFamily: "Poppins_400Regular",
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
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#0000",
    justifyContent: "space-between",
    alignItems: "center",
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
