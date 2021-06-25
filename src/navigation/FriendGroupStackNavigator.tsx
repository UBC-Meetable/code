import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import QuizScreen from "../screens/Auth/QuizScreen";
import FriendGroups from "../screens/FriendGroups";
import { FriendGroupStackScreens } from "../types";
import HeaderOptions from "./HeaderOptions";

const GroupTabStack = createStackNavigator<FriendGroupStackScreens>();

const FriendGroupStackNavigator = () => (
  <GroupTabStack.Navigator
    screenOptions={{
      headerTransparent: true,
      headerTitle: "Friend Groups",
      ...HeaderOptions,
    }}
  >
    <GroupTabStack.Screen name="FriendGroups" options={{ headerShown: true }}>
      {(props) => <FriendGroups {...props} />}
    </GroupTabStack.Screen>
  </GroupTabStack.Navigator>
);

export default FriendGroupStackNavigator;
