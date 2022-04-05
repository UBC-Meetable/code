import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import NewProfileScreen from "../screens/Auth/onboarding/NewProfileScreen";
import UniScreen from "../screens/Auth/onboarding/UniScreen";
import YourInterestsScreen from "../screens/Auth/onboarding/YourInterestsScreen";
import NewEditCoursesScreen from "../screens/edit/NewEditCoursesScreen";
import { SignUpParamList } from "../types";

const SignUpStack = createStackNavigator<SignUpParamList>();

type SignUpStackNavigatorProps = {
  initRoute: keyof SignUpParamList;
}
const SignUpStackNavigator = ({
  initRoute,
}: SignUpStackNavigatorProps) => (
  <SignUpStack.Navigator
    initialRouteName={initRoute}
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: 'transparent' }
    }}>
    <SignUpStack.Screen
      name="UniScreen"
      component={UniScreen}
    />
    <SignUpStack.Screen
      name="NewProfileScreen"
      component={NewProfileScreen}
    />
    <SignUpStack.Screen
      name="YourInterestsScreen"
      component={YourInterestsScreen}
    />
    <SignUpStack.Screen
      name="NewEditCoursesScreen"
      component={NewEditCoursesScreen}
    />
  </SignUpStack.Navigator>
);

export default SignUpStackNavigator;
