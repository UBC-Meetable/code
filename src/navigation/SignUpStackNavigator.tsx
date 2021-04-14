import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import NewProfileScreen from "../screens/Auth/NewProfileScreen";
import UniScreen from "../screens/Auth/UniScreen";
import NewEditCourseScreen from "../screens/Auth/NewEditCoursesScreen";
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
      name="EditCourses"
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
