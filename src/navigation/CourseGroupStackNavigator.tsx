import { createStackNavigator } from "@react-navigation/stack";
import { Button, Layout } from "@ui-kitten/components";
import React from "react";
import { Dimensions, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { CourseGroupsProvider } from "../context/SubscriptionContext";
import CourseGroups from "../screens/CourseGroups";
import { GroupStackParamList } from "../types";
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
      name="CourseGroups"
      options={({ navigation }) => ({
        headerShown: true,
        headerRight: () => (
          <Button onPress={() => navigation.navigate("EditCourses")} style={styles.iconButton} appearance="ghost" accessoryLeft={StarIcon} />
        ),
      })}
    >
      {(props) => (
        <CourseGroups {...props} />
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
