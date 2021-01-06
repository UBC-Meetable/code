/* eslint-disable camelcase */
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
<<<<<<< HEAD
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { ColorSchemeName, useColorScheme } from "react-native";
import * as eva from "@eva-design/eva";
import { ApplicationProvider as UiProvider, Spinner } from "@ui-kitten/components";
=======
import {
  createStackNavigator, HeaderBackButton, StackNavigationOptions, StackNavigationProp,
} from "@react-navigation/stack";
import * as React from "react";
import { ColorSchemeName, useColorScheme, Dimensions } from "react-native";
import * as eva from "@eva-design/eva";
import {
  ApplicationProvider as UiProvider, Spinner, Layout, Text, Button,
} from "@ui-kitten/components";
>>>>>>> 1dc95e5404d9b9e336c25b499a0f427193751d32
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
<<<<<<< HEAD
// import { logger } from "../utils/logger";
=======
import QuizScreen from "../screens/QuizScreen";
import SignupScreen from "../screens/SignupScreen";
import GroupScreen from "../screens/GroupScreen";
import BubbleHeader from "../assets/images/chat-bubble.svg";

const window = Dimensions.get("window");
>>>>>>> 1dc95e5404d9b9e336c25b499a0f427193751d32
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
<<<<<<< HEAD
            theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
=======
            theme={colorScheme === "dark" ? DefaultTheme : DefaultTheme}
>>>>>>> 1dc95e5404d9b9e336c25b499a0f427193751d32
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
<<<<<<< HEAD
    <>
      <AuthorizedApp />
    </>
=======
    <AuthorizedApp />
>>>>>>> 1dc95e5404d9b9e336c25b499a0f427193751d32
  );
};

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

<<<<<<< HEAD
type RootNames = "Tutorial" | "Login" | "Tabs" | "NotFound"

function AuthorizedApp() {
  const { user, setUser } = React.useContext(UserContext);
  const initRoute = ENV.SKIP_LOGIN ? "Tabs" : `${user ? "Tabs" : "Tutorial"}` as RootNames;
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={initRoute}>
      <Stack.Screen name="Tabs" component={BottomTabNavigator} />
      <Stack.Screen name="Tutorial" component={TutorialScreen} />
=======
type RootNames = "Tutorial" | "Login" | "Tabs" | "NotFound" | "Quiz" | "Signup"

function AuthorizedApp() {
  const { user, setUser } = React.useContext(UserContext);
  const initRoute = ENV.SKIP_LOGIN ? "Tabs" : `${user ? "Tabs" : "Login"}` as RootNames;
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: "#FEEDDE" },
      }}
      initialRouteName={initRoute}
    >
      <Stack.Screen name="Tabs" component={BottomTabNavigator} />
      <Stack.Screen
        name="Group"
        component={GroupScreen}
        options={({ navigation }: { navigation: StackNavigationProp<RootStackParamList, "Group"> }) => ({
          cardStyle: {
            backgroundColor: "#FEEDDE",
          },
          headerShown: true,
          headerTitle: "",
          headerLeft: ({ label } : {label:string}) => (
            <ChatBackButton navigation={navigation} label={label} />
          ),
          headerBackground: (props) => (
            <Layout
              {...props}
              style={{
                backgroundColor: "#FFF8F3",
              }}
            >
              <BubbleHeader
                width={window.width}
                height={170}
              />
            </Layout>
          ),
          headerLeftContainerStyle: {
            marginLeft: 10,
          },
          headerStyle: {
            height: 170,
          },
        } as StackNavigationOptions)}
      />
      <Stack.Screen name="Tutorial" component={TutorialScreen} />
      <Stack.Screen name="Quiz" component={QuizScreen} />
      <Stack.Screen name="Signup">
        {(props) => <SignupScreen setUser={setUser} {...props} />}
      </Stack.Screen>
>>>>>>> 1dc95e5404d9b9e336c25b499a0f427193751d32
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
<<<<<<< HEAD
=======

const ChatBackButton = ({
  navigation,
  label,
}: {
  navigation: StackNavigationProp<RootStackParamList, "Group">,
  label: string,
}) => (
  <Layout style={{ padding: 10, backgroundColor: "#0000" }}>
    <HeaderBackButton
      onPress={() => navigation.goBack()}
      tintColor="#000"
      labelVisible={false}
    />
    <Text
      style={{
        fontFamily: "Poppins_600SemiBold",
        fontSize: 24,
        marginLeft: 10,
        marginTop: 10,
      }}
    >
      {label}
    </Text>
  </Layout>
);
>>>>>>> 1dc95e5404d9b9e336c25b499a0f427193751d32
