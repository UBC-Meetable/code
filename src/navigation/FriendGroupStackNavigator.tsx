import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import YourInterestsScreen from "../screens/Auth/onboarding/YourInterestsScreen";
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
      // component={FriendGroups}
      component={YourInterestsScreen}
      options={{
        headerShown: true,
      }}
    />
  </GroupTabStack.Navigator>
);

export default FriendGroupStackNavigator;
