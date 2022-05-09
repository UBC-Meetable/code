import { CommonActions } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Avatar, Layout, Text } from "@ui-kitten/components";
import React from "react";
import { StyleSheet } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Ionicons";
import { RootStackParamList } from "../types";

type JoinChatButtonProps = {
  label: string;
  navigation: StackNavigationProp<RootStackParamList>;
  groupId: string;
  groupTitle: string;
};

const JoinChatButton = ({
  label, navigation, groupId, groupTitle,
}:JoinChatButtonProps) => {
  const joinChat = () => {
    navigation.dispatch(
      CommonActions.navigate("ChatScreen", {
        groupID: groupId,
        groupTitle,
      }),
    );
  };
  return (
    <TouchableWithoutFeedback style={styles.joinChat} onPress={() => joinChat()}>
      <Avatar source={require("../assets/images/profilePic2.jpg")} />
      <Text style={{ fontFamily: "Poppins_500Medium", fontSize: 16 }}>
        {label}
      </Text>
      <Icon name="ios-chevron-forward" size={32} />
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  joinChat: {
    // flex: 1,
    padding: 10,
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.7)",
  },
});

export default JoinChatButton;
