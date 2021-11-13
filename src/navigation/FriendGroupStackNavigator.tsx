import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import FriendGroups from "../screens/FriendGroups";
import { FriendGroupStackScreens } from "../types";
import HeaderOptions from "./HeaderOptions";

const GroupTabStack = createStackNavigator<FriendGroupStackScreens>();

const FriendGroupStackNavigator = () => (
  <GroupTabStack.Navigator
    screenOptions={{
      headerTransparent: true,
      headerTitle: "Chat Session",
      ...HeaderOptions,
    }}
  >
    <GroupTabStack.Screen
      name="FriendGroups"
      component={FriendGroups}
      options={{
        headerShown: true,
      }}
    />
  </GroupTabStack.Navigator>
);

export default FriendGroupStackNavigator;
