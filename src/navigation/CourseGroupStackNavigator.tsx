import { createStackNavigator } from "@react-navigation/stack";
import { Button, Layout } from "@ui-kitten/components";
import React from "react";
import { StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import CourseGroups from "../screens/CourseGroups";
import GroupsView from "../screens/RedesignedCourseGroups";
import { GroupStackParamList } from "../types";
import HeaderOptions from "./HeaderOptions";

const GroupTabStack = createStackNavigator<GroupStackParamList>();

const BooksIcon = () => (
  <Layout style={{
    display: "flex", justifyContent: "center", alignItems: "center",
  }}
  >
    <Icon name="book" size={30} style={{ margin: -30 }} />
  </Layout>
);

const CourseGroupStackNavigator = () => (
  <GroupTabStack.Navigator
    screenOptions={{
      headerTransparent: true,
      headerTitle: "Course Groups",
      ...HeaderOptions,
    }}
  >
    <GroupTabStack.Screen
      name=" "
    >
      {(props) => (
        <GroupsView {...props} />
      )}
    </GroupTabStack.Screen>
  </GroupTabStack.Navigator>
);

const styles = StyleSheet.create({
  iconButton: {
    width: 32,
    height: 32,
    borderRadius: 100,
    marginRight: 15,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
});

export default CourseGroupStackNavigator;
