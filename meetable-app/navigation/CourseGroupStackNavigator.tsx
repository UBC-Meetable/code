import React from "react";
import { Dimensions, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Layout, Button } from "@ui-kitten/components";
import Icon from "react-native-vector-icons/Ionicons";
import GroupsScreen from "../screens/GroupsScreen";
import { GroupStackParamList } from "../types";
import BubbleHeader from "../assets/images/header-bubble.svg";
import HeaderOptions from "./HeaderOptions";

const GroupTabStack = createStackNavigator<GroupStackParamList>();

const StarIcon = () => (
  <Layout style={{
    display: "flex", justifyContent: "center", alignItems: "center",
  }}
  >
    <Icon name="ios-settings" size={30} style={{ margin: -30 }} />
  </Layout>
);

const window = Dimensions.get("window");

const CourseGroupStackNavigator = () => (
  <GroupTabStack.Navigator
    screenOptions={{
      headerTransparent: true,
      headerTitle: "Course Groups",
      ...HeaderOptions,
    }}
  >
    <GroupTabStack.Screen
      name="GroupsScreen"
      options={({ navigation }) => ({
        headerShown: true,
        headerRight: () => (
          <Button onPress={() => navigation.navigate("EditCourses")} style={styles.iconButton} appearance="ghost" accessoryLeft={StarIcon} />
        ),
      })}
    >
      {(props) => <GroupsScreen {...props} />}
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
