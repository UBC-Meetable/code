import React, { useState } from "react";
import { CreateQuizInput, QAPair } from "../../API";
import submitQuiz from "../../calls/submitQuiz";
import ConfirmEmailScreen from "../ConfirmEmailScreen";
import LoginFormScreen from "./LoginFormScreen";
import LoginScreen from "./LoginScreen";
import QuizScreen from "./QuizScreen";
import SignUpFormScreen from "./SignUpFormScreen";
import SignupScreen from "./SignupScreen";
import TutorialScreen from "./TutorialScreen";

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
    AuthState.LANDING_SCREEN,
  );

  switch (authState) {
  case AuthState.LANDING_SCREEN:
    return (
      <LoginScreen
        onLogIn={() => {
          setAuthState(AuthState.LOGIN);
        }}
        onSignUp={() => {
          setAuthState(AuthState.SIGN_UP);
        }}
      />
    );
  case AuthState.TUTORIAL:
    return <TutorialScreen onContinue={() => setAuthState(AuthState.QUIZ)} />;
  case AuthState.QUIZ:
    return (
      <QuizScreen onFinish={() => {
        // submitQuiz(finishedQuiz).then(() => {
        // });
        setAuthState(AuthState.CREATE);
      }}
      />
    );
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
          setAuthState(AuthState.CONFIRM_EMAIL);
        }}
        onLogIn={() => setAuthState(AuthState.LOGIN)}
      />
    );
  case AuthState.LOGIN:
    return <LoginFormScreen onSignUp={() => setAuthState(AuthState.SIGN_UP)} />;
  default:
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
  }
};

export default LoginFlowController;
