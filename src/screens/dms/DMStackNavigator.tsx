import { createStackNavigator } from "@react-navigation/stack";
import { Button, Layout } from "@ui-kitten/components/ui";
import React from "react";
import { StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import ChatBackButton from "../../components/Chat/ChatBackButton";
import generateOptions from "../../navigation/generateOptions";
import HeaderOptions from "../../navigation/HeaderOptions";
import { FriendGroupStackScreens } from "../../types";
import FriendGroups from "../FriendGroups";
import MainDMScreen from "./MainDMScreen";
// import FriendGroups from "../screens/FriendGroups";
// import { FriendGroupStackScreens } from "../types";
// import HeaderOptions from "./HeaderOptions";

const PlaneIcon = () => (
  <Layout style={{
    display: "flex", justifyContent: "center", alignItems: "center",
  }}
  >
    <Icon name="telegram-plane" size={30} style={{ margin: -30 }} />
  </Layout>
);

type DMStackScreens = {
  main: undefined;
}

const GroupTabStack = createStackNavigator<DMStackScreens>();

const DMStackNavigator = () => (
  <GroupTabStack.Navigator
    screenOptions={{
      headerTransparent: true,
      headerTitle: "Friend Groups",
      ...HeaderOptions,
      headerStyle: {
        height: 170,
      },
    }}
  >
    <GroupTabStack.Screen
      name="main"
      options={({ navigation }) => generateOptions(navigation,
        () => (
          <ChatBackButton navigation={navigation} label="Direct Messages" />
        ))}
    >
      {(props) => <MainDMScreen {...props} />}
    </GroupTabStack.Screen>
  </GroupTabStack.Navigator>
);

const styles = StyleSheet.create({
  iconButton: {
    width: 32,
    height: 32,
    borderRadius: 100,
    marginRight: 15,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
});

export default DMStackNavigator;
