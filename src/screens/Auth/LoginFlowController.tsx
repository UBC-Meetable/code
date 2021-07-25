import * as SecureStore from "expo-secure-store";
import React, { useState } from "react";
import AuthStateContext from "../../context/AuthStateContext";
import useAuthenticatedUser from "../../hooks/useAuthenticatedUser";
import { AuthState } from "../../types";
import ConfirmEmailScreen from "../ConfirmEmailScreen";
import LoginFormScreen from "./LoginFormScreen";
import LoginScreen from "./LoginScreen";
import SignUpFormScreen from "./SignUpFormScreen";
import SignupScreen from "./SignupScreen";
import TutorialScreen from "./TutorialScreen";

// eslint-disable-next-line no-shadow

const LoginFlowController = () => {
  const [email, setEmail] = useState("");
  const [authState, setAuthState] = useState<AuthState>(
    AuthState.LANDING_SCREEN,
  );
  const user = useAuthenticatedUser();

  React.useEffect(() => {
    console.log(user);

    SecureStore.getItemAsync("firstLaunch").then(
      (firstLaunch) => {
        console.log(firstLaunch);
        if (!firstLaunch) {
          SecureStore.setItemAsync("firstLaunch", "true").then(() => {
            setAuthState(() => AuthState.TUTORIAL);
          });
        }
      },
    );
  }, []);
  const renderFromAuthState = () => {
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
      return <TutorialScreen onContinue={() => setAuthState(AuthState.SIGN_UP)} />;
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
            setAuthState(AuthState.SIGN_UP);
          }}
        />
      );
    }
  };
  return (
    <AuthStateContext.Provider value={authState}>
      {renderFromAuthState()}
    </AuthStateContext.Provider>
  );
};

export default LoginFlowController;
