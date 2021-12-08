import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import SuggestedFriendsScreen from "../screens/Courses/SuggestedFriendsScreen";
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
