import { createStackNavigator } from "@react-navigation/stack";
import { Layout } from "@ui-kitten/components";
import React from "react";
import { Dimensions } from "react-native";
import GroupsScreen from "../screens/GroupsScreen";
import { GroupStackParamList } from "../types";
import BubbleHeader from "../assets/images/header-bubble.svg";
import HeaderOptions from "./HeaderOptions";

const GroupTabStack = createStackNavigator<GroupStackParamList>();

const window = Dimensions.get("window");
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
