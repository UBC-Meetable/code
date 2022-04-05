import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import NewProfileScreen from "../screens/Auth/onboarding/NewProfileScreen";
import UniScreen from "../screens/Auth/onboarding/UniScreen";
import NewEditCourseScreen from "../screens/edit/NewEditCoursesScreen";
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
    screenOptions={{ cardStyle: { backgroundColor: 'transparent' } }}>
    <SignUpStack.Screen name="UniScreen" options={{ headerShown: false }} component={UniScreen} />
    <SignUpStack.Screen
      name="NewProfileScreen"
      options={{ headerShown: false }}
      component={NewProfileScreen}
    />
    <SignUpStack.Screen
      name="NewEditCourses"
      options={{ headerShown: false }}
      component={NewEditCourseScreen}
    />
  </SignUpStack.Navigator>
);

export default SignUpStackNavigator;
