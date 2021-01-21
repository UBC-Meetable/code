import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";
import FAIcon from "react-native-vector-icons/FontAwesome5";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import { BottomTabParamList } from "../types";
import CourseGroupStackNavigator from "./CourseGroupStackNavigator";
import FriendGroupStackNavigator from "./FriendGroupStackNavigator";
import ProfileStackNavigator from "./ProfileStackNavigator";
import MyTabBar from "./TabBar";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      tabBar={(props) => <MyTabBar {...props} />}
      initialRouteName="Course Groups"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name="Course Groups"
        component={CourseGroupStackNavigator}
        options={{
          // eslint-disable-next-line react/prop-types
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
          // eslint-disable-next-line react/prop-types
          tabBarIcon: ({ color }) => (
            <FAIcon name="user-friends" size={30} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileStackNavigator}
        options={{
          // eslint-disable-next-line react/prop-types
          tabBarIcon: ({ color }) => (
            <FAIcon name="user-cog" size={30} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
