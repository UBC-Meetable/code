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
  createStackNavigator, HeaderBackButton, StackNavigationOptions, StackNavigationProp,
} from "@react-navigation/stack";
import {
  ApplicationProvider as UiProvider, Layout, Spinner, Text,
} from "@ui-kitten/components";
import Amplify from "aws-amplify";
import { withAuthenticator } from "aws-amplify-react-native";
import * as React from "react";
import { ColorSchemeName, Dimensions, useColorScheme } from "react-native";
import { UserState } from "../API";
import BubbleHeader from "../assets/images/chat-bubble.svg";
import awsconfig from "../aws-exports";
import createUserProfile from "../calls/createUserProfile";
import fetchUserProfile from "../calls/fetchUserProfile";
import ChatBackButton from "../components/Chat/ChatBackButton";
import { MessageProvider } from "../context/MessageContext";
import { CourseGroupsProvider } from "../context/CourseGroupsContext";
import { UserProvider } from "../context/UserContext";
import useAuthenticatedUser from "../hooks/useAuthenticatedUser";
import LoginFlowController from "../screens/Auth/LoginFlowController";
import EditCourseScreen from "../screens/EditCourseScreen";
import GroupScreen from "../screens/GroupScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import ProfileSettingsScreen from "../screens/ProfileSettingsScreen";
import { CognitoUser, RootStackParamList, SignUpParamList } from "../types";
import BottomTabNavigator from "./BottomTabNavigator";
import SignUpStackNavigator from "./SignUpStackNavigator";
import { FriendGroupsProvider } from "../context/FriendGroupsContext";

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
            <App />
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

const AuthorizedApp = () => {
  const [loading, setLoading] = React.useState(true);
  const [userState, setUserState] = React.useState(UserState.SIGNED_UP);
  let user = useAuthenticatedUser();
  console.log(user);

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
          userProfile = (await createUserProfile({ email, id })).data
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
    return <Spinner size="tiny" />;
  }
  if (userState !== UserState.DONE) {
    let initRoute: keyof SignUpParamList;

    if (userState === UserState.SIGNED_UP) {
      initRoute = "UniScreen";
    } else if (userState === UserState.UNI_SELECTED) {
      initRoute = "NewProfileScreen";
    } else {
      initRoute = "NewEditCourses";
    }
    return <SignUpStackNavigator onFinish={handleFinish} initRoute={initRoute} />;
  }

  return (
    <CourseGroupsProvider>
      <FriendGroupsProvider>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            cardStyle: { backgroundColor: "#FEEDDE" },
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
