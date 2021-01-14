/* eslint-disable camelcase */
import {
  NavigationContainer,
  DefaultTheme,
} from "@react-navigation/native";
import {
  createStackNavigator, HeaderBackButton, StackNavigationOptions, StackNavigationProp,
} from "@react-navigation/stack";
import * as React from "react";
import { ColorSchemeName, useColorScheme, Dimensions } from "react-native";
import * as eva from "@eva-design/eva";
import {
  ApplicationProvider as UiProvider, Spinner, Layout, Text,
} from "@ui-kitten/components";
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
import QuizScreen from "../screens/QuizScreen";
import SignupScreen from "../screens/SignupScreen";
import GroupScreen from "../screens/GroupScreen";
import BubbleHeader from "../assets/images/chat-bubble.svg";
import UniScreen from "../screens/UniScreen";
import EditCourseScreen from "../screens/EditCoursesScreen";
import NewProfileScreen from "../screens/NewProfileScreen";

const window = Dimensions.get("window");
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
            theme={colorScheme === "dark" ? DefaultTheme : DefaultTheme}
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

  console.log(fontsLoaded);

  if (!fontsLoaded) {
    return (
      <Spinner />
    );
  }
  return (
    <AuthorizedApp />
  );
};

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

type RootNames = "Tutorial" | "Login" | "Tabs" | "NotFound" | "Quiz" | "Signup" | "EditCourses" | "UniScreen" | "NewProfileScreen"

function AuthorizedApp() {
  const { user, setUser } = React.useContext(UserContext);
  const initRoute = ENV.SKIP_LOGIN ? "Tabs" : `${user.name ? "Tabs" : "Login"}` as RootNames;
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: "#FEEDDE" },
      }}
      initialRouteName={initRoute}
    >
      <Stack.Screen name="Tabs" component={BottomTabNavigator} options={{ headerShown: false }} />
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
      <Stack.Screen
        name="UniScreen"
        component={UniScreen}
      />
      <Stack.Screen
        name="NewProfileScreen"
        options={({ navigation }: { navigation: StackNavigationProp<RootStackParamList, "NewProfileScreen"> }) => ({
          cardStyle: {
            backgroundColor: "#FEEDDE",
          },
          headerShown: true,
          headerTitle: "",
          headerLeft: () => (
            <ChatBackButton navigation={navigation} label="" />
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
        component={NewProfileScreen}
      />
      <Stack.Screen
        name="EditCourses"
        options={({ navigation }: { navigation: StackNavigationProp<RootStackParamList, "EditCourses"> }) => ({
          cardStyle: {
            backgroundColor: "#FEEDDE",
          },
          headerShown: true,
          headerTitle: "",
          headerLeft: () => (
            <ChatBackButton navigation={navigation} label="Add Courses" />
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
        component={EditCourseScreen}
      />
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

const ChatBackButton = ({
  navigation,
  label,
  showBack = true,
}: {
  navigation: StackNavigationProp<RootStackParamList, RootNames | "Group">,
  label: string,
  showBack?: boolean
}) => (
  <Layout style={{ padding: 10, backgroundColor: "#0000" }}>
    {showBack && (
      <HeaderBackButton
        onPress={() => navigation.goBack()}
        tintColor="#000"
        labelVisible={false}
      />
    )}
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
