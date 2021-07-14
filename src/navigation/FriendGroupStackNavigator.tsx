import { createStackNavigator } from "@react-navigation/stack";
import { Button } from "@ui-kitten/components";
import React from "react";
import { StyleSheet } from "react-native";
import QuizScreen from "../screens/Auth/QuizScreen";
import FriendGroups from "../screens/FriendGroups";
import { FriendGroupStackScreens } from "../types";
import HeaderOptions from "./HeaderOptions";
import { GearIcon } from "./ProfileStackNavigator";

const GroupTabStack = createStackNavigator<FriendGroupStackScreens>();

const FriendGroupStackNavigator = () => (
  <GroupTabStack.Navigator
    screenOptions={{
      headerTransparent: true,
      headerTitle: "Friend Groups",
      ...HeaderOptions,
    }}
  >
    <GroupTabStack.Screen
      name="FriendGroups"
      options={({ navigation }) => ({
        headerShown: true,
      })}
    >
      {(props) => <FriendGroups {...props} />}
    </GroupTabStack.Screen>
  </GroupTabStack.Navigator>
);

export default FriendGroupStackNavigator;
