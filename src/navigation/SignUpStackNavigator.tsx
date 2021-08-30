import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import NewProfileScreen from "../screens/Auth/onboarding/NewProfileScreen";
import UniScreen from "../screens/Auth/onboarding/UniScreen";
import NewEditCourseScreen from "../screens/edit/NewEditCoursesScreen";
import { SignUpParamList } from "../types";

const SignUpStack = createStackNavigator<SignUpParamList>();

type SignUpStackNavigatorProps = {
  initRoute: keyof SignUpParamList;
  onFinish: () => void;
}
const SignUpStackNavigator = ({
  initRoute,
  onFinish,
}: SignUpStackNavigatorProps) => (
  <SignUpStack.Navigator initialRouteName={initRoute}>
    <SignUpStack.Screen name="UniScreen" options={{ headerShown: false }}>
      {(props) => <UniScreen {...props} />}
    </SignUpStack.Screen>
    <SignUpStack.Screen
      name="NewProfileScreen"
      options={{ headerShown: false }}
    >
      {(props) => <NewProfileScreen {...props} />}
    </SignUpStack.Screen>
    <SignUpStack.Screen
      name="NewEditCourses"
      options={{ headerShown: false }}
    >
      {(props) => (
        <NewEditCourseScreen
          onFinish={onFinish}
          {...props}
        />
      )}
    </SignUpStack.Screen>
  </SignUpStack.Navigator>
);

export default SignUpStackNavigator;
