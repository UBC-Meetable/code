/* eslint-disable react/prop-types */
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
  createStackNavigator, StackNavigationOptions, StackNavigationProp,
} from "@react-navigation/stack";
import {
  ApplicationProvider as UiProvider, Layout,
} from "@ui-kitten/components";
import Amplify from "aws-amplify";
import { withAuthenticator } from "aws-amplify-react-native";
import * as React from "react";
import { ColorSchemeName, Dimensions, useColorScheme } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { UserState } from "../API";
import BubbleHeader from "../assets/images/chat-bubble.svg";
import awsconfig from "../aws-exports";
import createUserProfile from "../calls/createUserProfile";
import fetchUserProfile from "../calls/fetchUserProfile";
import ChatBackButton from "../components/Chat/ChatBackButton";
import Colors from "../constants/Colors";
import { CourseGroupsProvider } from "../context/CourseGroupsContext";
import { FriendGroupsProvider } from "../context/FriendGroupsContext";
import { MessageProvider } from "../context/MessageContext";
import { UserProvider } from "../context/UserContext";
import { UserProfileProvider } from "../context/UserProfileContext";
import useAuthenticatedUser from "../hooks/useAuthenticatedUser";
import LoginFlowController from "../screens/Auth/LoginFlowController";
import QuizScreen from "../screens/Auth/QuizScreen";
import EditCourseScreen from "../screens/EditCourseScreen";
import GroupScreen from "../screens/GroupScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import ProfileSettingsScreen from "../screens/ProfileSettingsScreen";
import { CognitoUser, RootStackParamList, SignUpParamList } from "../types";
import Blank from "./Blank";
import BottomTabNavigator from "./BottomTabNavigator";
import SignUpStackNavigator from "./SignUpStackNavigator";

Amplify.configure({
  ...awsconfig,
  Analytics: {
    disabled: true,
  },
});
const window = Dimensions.get("window");

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
          theme={colorScheme === "dark" ? DefaultTheme : DefaultTheme}
        >
          <UserProvider>
            <UserProfileProvider>
              <App />
            </UserProfileProvider>
          </UserProvider>
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
  const units = useSafeAreaInsets();
  if (!fontsLoaded) {
    return (
      <Blank />
    );
  }
  return <AuthenticatedApp />;
};

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

const AuthorizedApp = () => {
  const [loading, setLoading] = React.useState(true);
  const [userState, setUserState] = React.useState(UserState.SIGNED_UP);
  let user = useAuthenticatedUser();

  const handleFinish = () => {
    setUserState(UserState.DONE);
  };

  React.useEffect(() => {
    const f = async (loggedInUser: CognitoUser) => {
      if (!loggedInUser) return;
      try {
        const { email, sub: id } = loggedInUser.attributes;
        let userProfile = (await fetchUserProfile({ id }))
          .data?.getUser;
        if (!userProfile) {
          userProfile = (await createUserProfile({
            email, id, university: "", year: -1,
          })).data
            ?.createUser;
        }
        if (!userProfile) throw new Error("Error Creating User Profile");
        const { userState: fetchedUserState } = userProfile;
        if (fetchedUserState) {
          setUserState(fetchedUserState);
        }
        setLoading(false);
      } catch (e) {
        console.error(e);
      }
    };

    if (user) { f(user); }
  }, [user]);

  if (loading) {
    Auth.currentAuthenticatedUser().then((loggedIn) => { user = loggedIn; });
    return <Blank />;
  }

  // Handle post-signup account inititalization
  if (userState !== UserState.DONE) {
    let initRoute: keyof SignUpParamList;

    switch (userState) {
    case UserState.SIGNED_UP:
      initRoute = "UniScreen";
      break;
    case UserState.UNI_SELECTED:
      initRoute = "NewProfileScreen";
      break;
    case UserState.PROFILE_CREATED:
      initRoute = "NewEditCourses";
      break;
    default:
      throw new Error("UserState undefined");
    }

    return <SignUpStackNavigator onFinish={handleFinish} initRoute={initRoute} />;
  }

  return (
    <CourseGroupsProvider>
      <FriendGroupsProvider>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            cardStyle: { backgroundColor: "#FFF9F5" },
          }}
          initialRouteName="Tabs"
        >
          <Stack.Screen
            name="Tabs"
            component={BottomTabNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Group"
            options={({
              navigation,
            }: {
          navigation: StackNavigationProp<RootStackParamList, "Group">;
        }) => ({
              cardStyle: {
                backgroundColor: Colors.theme.creme,
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
                    backgroundColor: Colors.theme.lightCreme,
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
          >
            {(props) => (
              <MessageProvider groupID={props.route.params.groupID}>
                <GroupScreen
                  groupType={props.route.params.groupType}
                  groupTitle={props.route.params.groupTitle}
                  navigation={props.navigation}
                />
              </MessageProvider>
            )}
          </Stack.Screen>
          <Stack.Screen
            name="EditCourses"
            options={({
              navigation,
            }: {
          navigation: StackNavigationProp<RootStackParamList, "EditCourses">;
        }) => ({
              cardStyle: {
                backgroundColor: Colors.theme.creme,
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
                    backgroundColor: Colors.theme.lightCreme,
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
                backgroundColor: Colors.theme.creme,
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
                    backgroundColor: Colors.theme.lightCreme,
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
            name="Quiz"
          >
            {(props) => (
              <QuizScreen
                onFinish={(q) => {
                  props.navigation.pop();
                  props.route.params.return(q);
                }}
                {...props}
              />
            )}
          </Stack.Screen>
          <Stack.Screen
            name="NotFound"
            component={NotFoundScreen}
            options={{ title: "Oops!" }}
          />
        </Stack.Navigator>
      </FriendGroupsProvider>
    </CourseGroupsProvider>
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
