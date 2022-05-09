import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import ProfileScreen from "../screens/ProfileScreen";
import { ProfileStackParamList } from "../types";
import HeaderOptions from "./HeaderOptions";
import ProfileSettingsScreen from "../screens/ProfileSettingsScreen";
import EditInterestsScreen from "../screens/EditInterestsScreen";

const ProfileTabStack = createStackNavigator<ProfileStackParamList>();

export const GearIcon = (props: any) => (
  <Icon name="ios-settings" size={24} {...props} />
);

const ProfileStackNavigator = () => (
  <ProfileTabStack.Navigator
    screenOptions={{
      headerTransparent: true,
      headerTitle: "",
      headerTintColor: "black",
      ...HeaderOptions,
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
          <GearIcon onPress={() => navigation.navigate("ProfileSettings")} />
        ),
        headerRightContainerStyle: {
          marginRight: 24,
        },
      })}
    />
    <ProfileTabStack.Screen
      name="ProfileSettings"
      component={ProfileSettingsScreen}
      options={{
        headerShown: true,
        headerLeftContainerStyle: {
          marginLeft: 10,
        },
        headerRightContainerStyle: {
          marginRight: 24,
        },
      }}
    />
    <ProfileTabStack.Screen
      name="EditInterests"
      component={EditInterestsScreen}
      options={{
        headerShown: true,
        headerLeftContainerStyle: {
          marginLeft: 10,
        },
        headerRightContainerStyle: {
          marginRight: 24,
        },
      }}
    />
  </ProfileTabStack.Navigator>
);

export default ProfileStackNavigator;
