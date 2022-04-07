// You can explore the built-in icon families and icons on the web at:

import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import ProfileScreen from "../screens/ProfileScreen";
import { TabTwoParamList } from "../types";
import HeaderOptions from "./HeaderOptions";
import ProfileSettingsScreen from "../screens/ProfileSettingsScreen";
import EditInterestsScreen from "../screens/EditInterestsScreen";

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
      // options={({
      //   navigation,
      // }: {
      //   navigation: StackNavigationProp<
      //     RootStackParamList,
      //     "ProfileSettings"
      //   >;
      // }) => ({
      //   cardStyle: {
      //     backgroundColor: Colors.theme.transparent,
      //   },
      //   // headerShown: true,
      //   // headerTitle: "",
      //   // headerLeft: () => (
      //   //   <ChatBackButton navigation={navigation} label="Settings" />
      //   // ),
      //   // headerBackground: (props) => (
      //   //   <Layout
      //   //     {...props}
      //   //     style={{
      //   //       backgroundColor: Colors.theme.lightCreme,
      //   //     }}
      //   //   >
      //   //     <BubbleHeader width={window.width} height={170} />
      //   //   </Layout>
      //   // ),
      // } as StackNavigationOptions)}
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
