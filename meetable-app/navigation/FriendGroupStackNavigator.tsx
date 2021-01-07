import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import FriendGroups from "../screens/FriendGroups";

import { GroupStackParamList } from "../types";
import HeaderOptions from "./HeaderOptions";

const GroupTabStack = createStackNavigator<GroupStackParamList>();

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
