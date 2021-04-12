import { StackNavigationProp } from "@react-navigation/stack";
import {
  Button, Layout, Text,
} from "@ui-kitten/components";
import * as SecureStore from "expo-secure-store";
import React, { useState } from "react";
import { StyleSheet, Dimensions } from "react-native";
import ENV from "../config/env";
import getSettings from "../config/GetSettings";
import { RootStackParamList, User } from "../types";
import Auth from "../utils/Auth";
import LoginPage from "../assets/images/login-background.svg";
import LoginPageBubbleTop from "../assets/images/login-page-bubble-top.svg";
import LoginScreen from "./LoginScreen";
import TutorialScreen from "./TutorialScreen";
import QuizScreen from "./QuizScreen";
import SignupScreen from "./SignupScreen";
import SignUpFormScreen from "./SignUpFormScreen";
import ConfirmEmailScreen from "./ConfirmEmailScreen";

const window = Dimensions.get("window");

const {
  auth0: { passwordlessClient },
} = getSettings();

// eslint-disable-next-line no-shadow
enum AuthState {
  LANDING_SCREEN,
  TUTORIAL,
  QUIZ,
  CREATE,
  SIGN_UP,
  LOGIN,
  UNIVERSITY_SCREEN,
  CONFIRM_EMAIL,
}

const LoginFlowController = () => {
  const [email, setEmail] = useState("");
  const [authState, setAuthState] = useState<AuthState>(
    AuthState.SIGN_UP,
  );

  switch (authState) {
  case AuthState.LANDING_SCREEN:
    return (
      <LoginScreen
        onLogIn={() => {
          setAuthState(AuthState.LOGIN);
        }}
        onSignUp={() => {
          setAuthState(AuthState.TUTORIAL);
        }}
      />
    );
  case AuthState.TUTORIAL:
    return <TutorialScreen onContinue={() => setAuthState(AuthState.QUIZ)} />;
  case AuthState.QUIZ:
    return <QuizScreen onFinish={() => setAuthState(AuthState.CREATE)} />;
  case AuthState.CREATE:
    return (
      <SignupScreen onContinue={() => setAuthState(AuthState.SIGN_UP)} />
    );
  case AuthState.CONFIRM_EMAIL:
    return (
      <ConfirmEmailScreen
        initialEmail={email}
        onConfirmCode={() => setAuthState(AuthState.LOGIN)}
      />
    );
  case AuthState.SIGN_UP:
    return (
      <SignUpFormScreen
        onCreate={(initEmail: string) => {
          setEmail(() => initEmail);
          console.log("email", initEmail);
          setAuthState(AuthState.CONFIRM_EMAIL);
        }}
        onLogIn={() => setAuthState(AuthState.LOGIN)}
      />
    );
    // case AuthState.LOGIN:
    // return <LoginScreen />;
  default:
    return (
      <LoginScreen
        onLogIn={() => console.log("login")}
        onSignUp={() => {
          console.log("Sign Up");
        }}
      />
    );
  }
};

export default LoginFlowController;
