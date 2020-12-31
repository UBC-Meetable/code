// You can explore the built-in icon families and icons on the web at:

import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import ProfileScreen from "../screens/ProfileScreen";
import { TabTwoParamList } from "../types";

// https://icons.expo.fyi/

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab

const ProfileTabStack = createStackNavigator<TabTwoParamList>();

const ProfileTabNavigator = () => (
  <ProfileTabStack.Navigator>
    <ProfileTabStack.Screen
      name="ProfileScreen"
      component={ProfileScreen}
      options={{ headerTitle: "Profile" }}
    />
  </ProfileTabStack.Navigator>
);

export default ProfileTabNavigator;
