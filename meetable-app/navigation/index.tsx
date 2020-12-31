/* eslint-disable camelcase */
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { ColorSchemeName, useColorScheme } from "react-native";
import * as eva from "@eva-design/eva";
import { ApplicationProvider as UiProvider, Spinner } from "@ui-kitten/components";
import {
  useFonts,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_400Regular,
} from "@expo-google-fonts/poppins";
import NotFoundScreen from "../screens/NotFoundScreen";
import { RootStackParamList } from "../types";
import UserContextProvider, { UserContext } from "../utils/UserContext";
import BottomTabNavigator from "./BottomTabNavigator";
import LinkingConfiguration from "./LinkingConfiguration";
import TutorialScreen from "../screens/TutorialScreen";
import LoginScreen from "../screens/LoginScreen";
import ENV from "../config/env";
// import { logger } from "../utils/logger";
// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  const dark = useColorScheme() === "dark";
  return (
    <>
      <UiProvider {...eva} theme={dark ? eva.light : eva.light}>
        <UserContextProvider>
          <NavigationContainer
            linking={LinkingConfiguration}
            theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
          >
            <App />
          </NavigationContainer>
        </UserContextProvider>
      </UiProvider>
    </>
  );
}

const App = () => {
  const [fontsLoaded] = useFonts({
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_400Regular,
  });

  if (!fontsLoaded) {
    return (
      <Spinner />
    );
  }
  return (
    <>
      <AuthorizedApp />
    </>
  );
};

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

type RootNames = "Tutorial" | "Login" | "Tabs" | "NotFound"

function AuthorizedApp() {
  const { user, setUser } = React.useContext(UserContext);
  const initRoute = ENV.SKIP_LOGIN ? "Tabs" : `${user ? "Tabs" : "Tutorial"}` as RootNames;
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={initRoute}>
      <Stack.Screen name="Tabs" component={BottomTabNavigator} />
      <Stack.Screen name="Tutorial" component={TutorialScreen} />
      <Stack.Screen name="Login">
        {(props) => <LoginScreen setUser={setUser} {...props} />}
      </Stack.Screen>
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
    </Stack.Navigator>
  );
}
