/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import * as eva from "@eva-design/eva";
import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  useFonts,
} from "@expo-google-fonts/poppins";
import {
  Quicksand_300Light,
  Quicksand_400Regular,
  Quicksand_500Medium,
  Quicksand_600SemiBold,
  Quicksand_700Bold,
} from "@expo-google-fonts/quicksand";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  StackNavigationOptions,
  StackNavigationProp,
} from "@react-navigation/stack";
import {
  ApplicationProvider as UiProvider, Layout, IconRegistry,
} from "@ui-kitten/components";
import Amplify, { Analytics } from "aws-amplify";
import { withAuthenticator } from "aws-amplify-react-native";
import * as Notifications from "expo-notifications";
import * as React from "react";
import { Dimensions, Platform } from "react-native";
import { merge } from "lodash";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { UserState } from "../API";
import BubbleHeader from "../assets/images/chat-bubble.svg";
import awsconfig from "../aws-exports";
import ChatBackButton from "../components/Chat/ChatBackButton";
import Colors from "../constants/Colors";
import { CourseGroupsProvider } from "../context/CourseGroupsContext";
import { FriendGroupsProvider } from "../context/FriendGroupsContext";
import { MessageProvider } from "../context/MessageContext";
import { UserProvider } from "../context/UserContext";
import { UserProfileProvider } from "../context/UserProfileContext";
import LoginFlowController from "../screens/Auth/login/LoginFlowController";
import QuizScreen from "../screens/Auth/onboarding/QuizScreen";
import EditCourseScreen from "../screens/edit/EditCourseScreen";
import GroupScreen from "../screens/GroupScreen";
import ProfileSettingsScreen from "../screens/ProfileSettingsScreen";
import { RootStackParamList, SignUpParamList } from "../types";
import Blank from "./Blank";
import generateOptions from "./generateOptions";
import SignUpStackNavigator from "./SignUpStackNavigator";
import theme from "../constants/theme.json";
import HomeScreen from "../screens/HomeScreen";
import ProfileStackNavigator from "./ProfileStackNavigator";
import useUserProfile from "../hooks/useUserProfile";

Amplify.configure({ ...awsconfig });
Analytics.record("Initialization");

const window = Dimensions.get("window");

const strictTheme = { "text-font-family": "Quicksand_500Medium" }; // set global default font
const mapping = {
  strict: strictTheme,
  components: {
    Button: {
      appearances: {
        filled: {
          mapping: {
            textFontFamily: "Quicksand_600SemiBold",
          },
        },
      },
    },
  },
};

export default function Navigation() {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <UiProvider
        {...eva}
        theme={{ ...eva.light, ...theme }}
        customMapping={merge(eva.mapping, mapping)}
      >
        <NavigationContainer
          theme={DefaultTheme}
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
    Poppins_700Bold,
    Quicksand_300Light,
    Quicksand_400Regular,
    Quicksand_500Medium,
    Quicksand_600SemiBold,
    Quicksand_700Bold,
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
  const {
    loading, id, userState, expoPushToken, set,
  } = useUserProfile();

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
      if (token.data !== "" && token.data !== expoPushToken) {
        set({ id, expoPushToken: token.data });
      }
    };
    if (!loading) {
      (async () => {
        await registerForPushNotificationsAsync();
      })();
    }
  }, [loading]);

  if (loading) {
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
      <SignUpStackNavigator initRoute={initRoute} />
    );
  }

  return (
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
          initialRouteName="Home"
        >
          <Stack.Screen
            name="Home"
            component={HomeScreen}
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
          <Stack.Screen
            name="ProfileStack"
            component={ProfileStackNavigator}
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
  );
};

const AuthenticatedApp = withAuthenticator(AuthorizedApp, {
  signUpConfig: {
    hiddenDefaults: ["phone_number"],
  },
  authenticatorComponents: [<LoginFlowController />],
});
