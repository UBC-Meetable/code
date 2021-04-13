/* eslint-disable camelcase */
import { Auth } from "@aws-amplify/auth";
import * as eva from "@eva-design/eva";
import {
  Poppins_400Regular, Poppins_500Medium,
  Poppins_600SemiBold, useFonts,
} from "@expo-google-fonts/poppins";
import {
  DefaultTheme, NavigationContainer,
} from "@react-navigation/native";
import {
  createStackNavigator, HeaderBackButton, StackNavigationOptions, StackNavigationProp,
} from "@react-navigation/stack";
import {
  ApplicationProvider as UiProvider, Layout, Spinner, Text,
} from "@ui-kitten/components";
import Amplify from "aws-amplify";
import { withAuthenticator } from "aws-amplify-react-native";
import * as React from "react";
import { ColorSchemeName, Dimensions, useColorScheme } from "react-native";
import BubbleHeader from "../assets/images/chat-bubble.svg";
import awsconfig from "../aws-exports";
import ENV from "../config/env";
import LoginFlowController from "../screens/Auth/LoginFlowController";
import EditCourseScreen from "../screens/EditCoursesScreen";
import GroupScreen from "../screens/GroupScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import ProfileSettingsScreen from "../screens/ProfileSettingsScreen";
import { CognitoUser, RootStackParamList, SignUpParamList } from "../types";
import { UserContext } from "../utils/UserContext";
import BottomTabNavigator from "./BottomTabNavigator";
import LinkingConfiguration from "./LinkingConfiguration";
import fetchUserProfile from "../calls/fetchUserProfile";
import createUserProfile from "../calls/createUserProfile";
import { UserState } from "../API";
import SignUpStackNavigator from "./SignUpStackNavigator";

Amplify.configure(awsconfig);
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
        <NavigationContainer
          linking={LinkingConfiguration}
          theme={colorScheme === "dark" ? DefaultTheme : DefaultTheme}
        >
          <App />
        </NavigationContainer>
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
  return <AuthenticatedApp />;
};

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

type RootNames = "Tutorial" | "Login" | "Tabs" | "NotFound" | "Quiz" | "Signup" | "EditCourses" | "UniScreen" | "NewProfileScreen" | "ProfileSettings"

const AuthorizedApp = () => {
  const [loading, setLoading] = React.useState(true);
  const [userState, setUserState] = React.useState(UserState.SIGNED_UP);
  const { user, setUser } = React.useContext(UserContext);

  React.useEffect(() => {
    const f = async () => {
      const authUser:CognitoUser = await Auth.currentAuthenticatedUser();
      console.log(authUser.attributes.email);
      try {
        let userProfile = (await fetchUserProfile(authUser.attributes.email)).data?.getUserProfile;
        if (!userProfile) {
          userProfile = (await createUserProfile(authUser.attributes.email))
            .data?.createUserProfile;
        }
        if (!userProfile) throw new Error("Error Creating User Profile");
        const { userState: fetchedUserState } = userProfile;
        if (fetchedUserState) {
          setUserState(fetchedUserState);
        }
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    f();
  }, []);

  if (loading) return <Spinner />;
  if (userState !== UserState.DONE) {
    let initRoute: keyof SignUpParamList;
    console.log(userState);

    if (userState === UserState.SIGNED_UP) {
      initRoute = "UniScreen";
    } else if (userState === UserState.UNI_SELECTED) {
      initRoute = "NewProfileScreen";
    } else {
      initRoute = "EditCourses";
    }
    return <SignUpStackNavigator initRoute={initRoute} />;
  }
  const initRoute = ENV.SKIP_LOGIN ? "Tabs" : `${user.name ? "Tabs" : "Login"}` as RootNames;

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: "#FEEDDE" },
      }}
      initialRouteName={initRoute}
    >
      <Stack.Screen
        name="Tabs"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Group"
        component={GroupScreen}
        options={({
          navigation,
        }: {
          navigation: StackNavigationProp<RootStackParamList, "Group">;
        }) => ({
          cardStyle: {
            backgroundColor: "#FEEDDE",
          },
          headerShown: true,
          headerTitle: "",
          headerLeft: ({ label }: { label: string }) => (
            <ChatBackButton navigation={navigation} label={label} />
          ),
          headerBackground: (props) => (
            <Layout
              {...props}
              style={{
                backgroundColor: "#FFF8F3",
              }}
            >
              <BubbleHeader width={window.width} height={170} />
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
      <Stack.Screen
        name="EditCourses"
        options={({
          navigation,
        }: {
          navigation: StackNavigationProp<RootStackParamList, "EditCourses">;
        }) => ({
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
              <BubbleHeader width={window.width} height={170} />
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
      <Stack.Screen
        name="ProfileSettings"
        options={({
          navigation,
        }: {
          navigation: StackNavigationProp<
            RootStackParamList,
            "ProfileSettings"
          >;
        }) => ({
          cardStyle: {
            backgroundColor: "#FEEDDE",
          },
          headerShown: true,
          headerTitle: "",
          headerLeft: () => (
            <ChatBackButton navigation={navigation} label="Settings" />
          ),
          headerBackground: (props) => (
            <Layout
              {...props}
              style={{
                backgroundColor: "#FFF8F3",
              }}
            >
              <BubbleHeader width={window.width} height={170} />
            </Layout>
          ),
          headerLeftContainerStyle: {
            marginLeft: 10,
          },
          headerStyle: {
            height: 170,
          },
        } as StackNavigationOptions)}
        component={ProfileSettingsScreen}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
    </Stack.Navigator>
  );
};

const AuthenticatedApp = withAuthenticator(AuthorizedApp, {
  signUpConfig: {
    hiddenDefaults: ["phone_number"],
  },
  authenticatorComponents: [
    <LoginFlowController />,
  ],
});

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
