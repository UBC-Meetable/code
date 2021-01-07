import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import CourseGroups from "../screens/CourseGroups";
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
    <GroupTabStack.Screen name="CourseGroups" options={{ headerShown: true }}>
      {(props) => <CourseGroups {...props} />}
    </GroupTabStack.Screen>
  </GroupTabStack.Navigator>
);

export default CourseGroupStackNavigator;
