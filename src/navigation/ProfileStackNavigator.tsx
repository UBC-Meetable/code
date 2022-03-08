// You can explore the built-in icon families and icons on the web at:

import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ProfileScreen from "../screens/ProfileScreen";
import { TabTwoParamList } from "../types";
import HeaderOptions from "./HeaderOptions";

// https://icons.expo.fyi/

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab

const ProfileTabStack = createStackNavigator<TabTwoParamList>();

export const GearIcon = (props: any) => (
  <Icon name="ios-settings" size={24} {...props} />
);

const ProfileStackNavigator = () => (
  <ProfileTabStack.Navigator
    screenOptions={{
      headerTransparent: true,
      headerTitle: "",
      headerTintColor: "black",
    }}
  >
    <ProfileTabStack.Screen
      name="ProfileScreen"
      component={ProfileScreen}
      options={({ navigation }) => ({
        headerShown: true,
        headerLeftContainerStyle: {
          marginLeft: 10,
        },
        headerRight: () => (
          <MaterialCommunityIcons
            onPress={() => navigation.navigate("ProfileSettings")}
            name="cog"
            size={24}
          />
        ),
        headerRightContainerStyle: {
          marginRight: 24,
        },
      })}
    />
  </ProfileTabStack.Navigator>
);

export default ProfileStackNavigator;
