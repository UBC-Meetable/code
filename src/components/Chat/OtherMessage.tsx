import { Avatar, Layout, Text } from "@ui-kitten/components";
import React from "react";
import { StyleSheet, View } from "react-native";
import { ChatMessage } from "../../API";
import Colors from "../../constants/Colors";
import noAvatar from "../../assets/images/noavatar.png";
import ProfilePicture from "../ProfilePicture";
import { ProfilePictureSize } from "../../types";

type OtherMessageProps = {
  message: ChatMessage;
};

const OtherMessage = ({ message }:OtherMessageProps) => {
  const uri = message.author.profilePicture;

  return (
    <View style={styles.root}>
      <Text style={styles.name}>{message.author.firstName || ""}</Text>
      <View style={styles.row}>
        <ProfilePicture size={ProfilePictureSize.MESSAGE} imageKey={uri} />
        <Layout style={styles.message}>
          <Text style={{
            color: "white",
            fontFamily: "Quicksand_400Regular",
          }}
          >
            {message.body}
          </Text>
        </Layout>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  name: {
    fontSize: 10,
  },
  message: {
    marginLeft: 5,
    alignSelf: "flex-start",
    maxWidth: "80%",
    padding: 5,
    marginBottom: 5,
    borderBottomLeftRadius: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
    backgroundColor: Colors.theme.grey,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  root: {
    flexDirection: "column",
  },
});

export default OtherMessage;
