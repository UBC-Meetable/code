/* eslint-disable camelcase */
import { Layout, Text } from "@ui-kitten/components";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Avatar } from "react-native-paper";
import { MessageType } from "../types";
import styles from "./styles/MessageStyles";

const OtherMessage = ({ message, date, author } : MessageType) => (
  <Layout style={otherStyles.messageContainer}>
    <Layout style={otherStyles.messageAndAuthor}>
      <Layout style={otherStyles.nameContainer}>
        <Text style={otherStyles.name}>{author}</Text>
      </Layout>

      <Layout style={otherStyles.imageContainer}>
        <TouchableOpacity
          style={styles.avatarButton}
          activeOpacity={0.5}
          // todo
          onPress={() => console.log("showmodal")}
        >
          <Avatar.Image
            size={30}
            source={require("../assets/images/profilePic2.jpg")}
          />
        </TouchableOpacity>
        <Layout style={styles.bubble}>
          <Text style={[styles.message, otherStyles.message]}>{message}</Text>
        </Layout>
      </Layout>
    </Layout>
  </Layout>
);

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
});

export default OtherMessage;
