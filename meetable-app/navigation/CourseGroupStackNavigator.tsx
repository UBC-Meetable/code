import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import GroupsScreen from "../screens/GroupsScreen";
import { GroupStackParamList } from "../types";
import HeaderOptions from "./HeaderOptions";

const GroupTabStack = createStackNavigator<GroupStackParamList>();

const CourseGroupStackNavigator = () => (
  <GroupTabStack.Navigator
    screenOptions={{
      headerTransparent: true,
      headerTitle: "Course Groups",
      ...HeaderOptions,
    }}
  >
    <GroupTabStack.Screen name="GroupsScreen" options={{ headerShown: true }}>
      {(props) => <GroupsScreen {...props} />}
    </GroupTabStack.Screen>
  </GroupTabStack.Navigator>
);

export default CourseGroupStackNavigator;