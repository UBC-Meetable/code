import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import NewProfileScreen from "../screens/Auth/NewProfileScreen";
import UniScreen from "../screens/Auth/UniScreen";
import EditCourseScreen from "../screens/EditCoursesScreen";
import { SignUpParamList } from "../types";

const SignUpStack = createStackNavigator<SignUpParamList>();

const SignUpStackNavigator = ({
  initRoute,
}: {
  initRoute: keyof SignUpParamList;
}) => (
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
        <EditCourseScreen
          onFinish={() => console.log("hello")}
          {...props}
        />
      )}
    </SignUpStack.Screen>
  </SignUpStack.Navigator>
);

export default SignUpStackNavigator;
