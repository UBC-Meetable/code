/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import { Auth } from "@aws-amplify/auth";
import * as eva from "@eva-design/eva";
import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  useFonts,
} from "@expo-google-fonts/poppins";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  StackNavigationOptions,
  StackNavigationProp,
} from "@react-navigation/stack";
import {
  ApplicationProvider as UiProvider, Layout,
} from "@ui-kitten/components";
import Amplify, { Analytics } from "aws-amplify";
import { withAuthenticator } from "aws-amplify-react-native";
import * as Notifications from "expo-notifications";
import * as React from "react";
import {
  ColorSchemeName,
  Dimensions, Platform, useColorScheme,
} from "react-native";
import { UserState } from "../API";
import BubbleHeader from "../assets/images/chat-bubble.svg";
import awsconfig from "../aws-exports";
import createUserProfile from "../calls/createUserProfile";
import fetchUserProfile from "../calls/fetchUserProfile";
import updateUserProfile from "../calls/updateUserCourses";
import ChatBackButton from "../components/Chat/ChatBackButton";
import Colors from "../constants/Colors";
import { CourseGroupsProvider } from "../context/CourseGroupsContext";
import { FriendGroupsProvider } from "../context/FriendGroupsContext";
import { MessageProvider } from "../context/MessageContext";
import { UserProvider } from "../context/UserContext";
import { UserProfileProvider } from "../context/UserProfileContext";
import useAuthenticatedUser from "../hooks/useAuthenticatedUser";
import LoginFlowController from "../screens/Auth/login/LoginFlowController";
import QuizScreen from "../screens/Auth/onboarding/QuizScreen";
import EditCourseScreen from "../screens/edit/EditCourseScreen";
import GroupScreen from "../screens/GroupScreen";
import ProfileSettingsScreen from "../screens/ProfileSettingsScreen";
import { CognitoUser, RootStackParamList, SignUpParamList } from "../types";
import Blank from "./Blank";
import BottomTabNavigator from "./BottomTabNavigator";
import generateOptions from "./generateOptions";
import SignUpStackNavigator from "./SignUpStackNavigator";
import theme from "../constants/theme.json";

Amplify.configure({
  ...awsconfig,
  Analytics: {
    disabled: true,
  },
});
// Analytics.record("Initialization");

const window = Dimensions.get("window");

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  const dark = useColorScheme() === "dark";
  return (
    <>
      <UiProvider {...eva} theme={{ ...eva.light, ...theme }}>
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
  if (!fontsLoaded) {
    return <Blank />;
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
  const [fetchedToken, setFetchedToken] = React.useState<string | null | undefined>("");

  const handleFinish = () => {
    setUserState(UserState.DONE);
  };

  // Register for push notifications
  React.useEffect(() => {
    const registerForPushNotificationsAsync = async () => {
      const {
        status: existingStatus,
      } = await Notifications.requestPermissionsAsync();

      let finalStatus = existingStatus;
      if (existingStatus !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      console.log(finalStatus);

      if (finalStatus !== "granted") {
        Analytics.record({ name: "Push Notifications Failed" });
        console.log("Push notifications not enabled");
        //  TODO error? Prompt?
        // alert("Failed to get push token for push notification!");
        return;
      }

      const token = await Notifications.getExpoPushTokenAsync();
      if (Platform.OS === "android") {
        Notifications.setNotificationChannelAsync("default", {
          name: "default",
          importance: Notifications.AndroidImportance.MAX,
          vibrationPattern: [0, 250, 250, 250],
          lightColor: "#FF231F7C",
        });
      }
      if (token.data) { Analytics.record({ name: "Push Notifications Success" }); }
      if (token.data !== "" && token.data !== fetchedToken) {
        updateUserProfile({ id: user.attributes.sub, expoPushToken: token.data })
          .then((res) => console.log(res)).catch((err) => console.log(err));
      }
    };
    if (user && !loading) {
      (async () => {
        await registerForPushNotificationsAsync();
      })();
    }
  }, [loading, user]);

  // Finish Creating User Profile on First Sign In
  React.useEffect(() => {
    const getUserStatus = async (loggedInUser: CognitoUser) => {
      if (!loggedInUser) return;
      try {
        const { email, sub: id } = loggedInUser.attributes;
        let userProfile = (await fetchUserProfile({ id })).data?.getUser;
        if (!userProfile) {
          userProfile = (
            await createUserProfile({
              email,
              id,
              university: "None",
              year: -1,
            })
          ).data?.createUser;
          Analytics.record({ name: "Create User" });
        }
        if (!userProfile) throw new Error("Error Creating User Profile");
        const { userState: fetchedUserState, expoPushToken } = userProfile;

        setFetchedToken(() => expoPushToken);
        if (fetchedUserState) {
          setUserState(fetchedUserState);
        }
        setLoading(() => false);
      } catch (e) {
        console.error(e);
      }
    };

    if (user) {
      (async () => {
        await getUserStatus(user);
      })();
    }
  }, [user]);

  if (loading) {
    Auth.currentAuthenticatedUser().then((loggedIn) => {
      user = loggedIn;
    });
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

    return (
      <SignUpStackNavigator onFinish={handleFinish} initRoute={initRoute} />
    );
  }

  return (
    // <UserProvider>
    <CourseGroupsProvider>
      <FriendGroupsProvider>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            cardStyle: { backgroundColor: Colors.theme.background },
            headerLeftContainerStyle: {
              marginLeft: 10,
            },
            headerStyle: {
              height: 170,
            },
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
            options={({ navigation }) => generateOptions(navigation,
              ({ label }: { label: string }) => (
                <ChatBackButton navigation={navigation} label={label} />
              ))}
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
            options={({ navigation }) => generateOptions(navigation, "Add Courses")}
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
            } as StackNavigationOptions)}
            component={ProfileSettingsScreen}
          />
          <Stack.Screen name="Quiz">
            {(props) => (
              <QuizScreen
                onFinish={(q) => {
                  Analytics.record({ name: "Finish Quiz" });
                  props.navigation.pop();
                  props.route.params.return(q);
                }}
                {...props}
              />
            )}
          </Stack.Screen>
        </Stack.Navigator>
      </FriendGroupsProvider>
    </CourseGroupsProvider>
    // </UserProvider>
  );
};

const AuthenticatedApp = withAuthenticator(AuthorizedApp, {
  signUpConfig: {
    hiddenDefaults: ["phone_number"],
  },
  authenticatorComponents: [<LoginFlowController />],
});
