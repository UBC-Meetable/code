/* eslint-disable react/prop-types */
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";
<<<<<<< HEAD
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import { BottomTabParamList } from "../types";
import GroupTabNavigator from "./GroupTabNavigator";
import ProfileTabNavigator from "./ProfileTabNavigator";
=======
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import FAIcon from "react-native-vector-icons/FontAwesome5";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import { BottomTabParamList } from "../types";
import FriendGroupStackNavigator from "./FriendGroupStackNavigator";
import ProfileStackNavigator from "./ProfileStackNavigator";
import MyTabBar from "./TabBar";
import CourseGroupStackNavigator from "./CourseGroupStackNavigator";
>>>>>>> 1dc95e5404d9b9e336c25b499a0f427193751d32

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
<<<<<<< HEAD
      initialRouteName="Groups"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name="Groups"
        component={GroupTabNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-people" color={color} />
=======
      tabBar={(props) => <MyTabBar {...props} />}
      initialRouteName="Course Groups"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name="Course Groups"
        component={CourseGroupStackNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcon
              name="school"
              size={30}
              style={{
                color,
                backgroundColor: "#0000",
              }}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Friend Groups"
        component={FriendGroupStackNavigator}
        options={{
          // tabBarVisible: false,
          tabBarIcon: ({ color }) => (
            <FAIcon name="user-friends" size={30} color={color} />
>>>>>>> 1dc95e5404d9b9e336c25b499a0f427193751d32
          ),
        }}
      />
      <BottomTab.Screen
        name="Profile"
<<<<<<< HEAD
        component={ProfileTabNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-settings" color={color} />
=======
        component={ProfileStackNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <FAIcon name="user-cog" size={30} color={color} />
>>>>>>> 1dc95e5404d9b9e336c25b499a0f427193751d32
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
<<<<<<< HEAD
const TabBarIcon = (props: { name: string; color: string }) => (
  <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />
);
=======
>>>>>>> 1dc95e5404d9b9e336c25b499a0f427193751d32
