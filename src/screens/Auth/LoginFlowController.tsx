import * as SecureStore from "expo-secure-store";
import React, { useState } from "react";
import AuthStateContext from "../../context/AuthStateContext";
import { AuthState } from "../../types";
import ConfirmEmailScreen from "../ConfirmEmailScreen";
import ForgotPassword from "./ForgotPassword";
import ForgotPasswordConfirm from "./ForgotPasswordConfirm";
import LoginFormScreen from "./LoginFormScreen";
import LoginScreen from "./LoginScreen";
import SignUpFormScreen from "./SignUpFormScreen";
import SignupScreen from "./SignupScreen";
import TutorialScreen from "./TutorialScreen";

const LoginFlowController = () => {
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [fromSignUp, setFromSignUp] = useState(false);
  const [authState, setAuthState] = useState<AuthState>(
    AuthState.LANDING_SCREEN,
  );

  React.useEffect(() => {
    SecureStore.getItemAsync("firstLaunch").then(
      (firstLaunch) => {
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
    // Unused
    case AuthState.CREATE:
      return (
        <SignupScreen onContinue={() => setAuthState(AuthState.SIGN_UP)} />
      );
    case AuthState.CONFIRM_EMAIL:
      return (
        <ConfirmEmailScreen
          fromSignUp={fromSignUp}
          onBack={() => setAuthState(AuthState.SIGN_UP)}
          initialEmail={email}
          onConfirmCode={() => setAuthState(AuthState.LOGIN)}
        />
      );
    case AuthState.SIGN_UP:
      return (
        <SignUpFormScreen
          onCreate={(initEmail: string) => {
            setEmail(() => initEmail);
            setFromSignUp(() => true);
            setAuthState(AuthState.CONFIRM_EMAIL);
          }}
          onLogIn={() => setAuthState(AuthState.LOGIN)}
        />
      );
    case AuthState.LOGIN:
      return (
        <LoginFormScreen
          onNotConfirmed={(initEmail) => {
            setEmail(() => initEmail);
            setAuthState(AuthState.CONFIRM_EMAIL);
          }}
          onForgot={() => setAuthState(AuthState.FORGOT_PASSWORD)}
          onSignUp={() => setAuthState(AuthState.SIGN_UP)}
        />
      );
    case AuthState.FORGOT_PASSWORD:
      return (
        <ForgotPassword
          onBack={() => setAuthState(AuthState.LOGIN)}
          afterSubmit={(confirmedEmail:string) => {
            setConfirmEmail(confirmedEmail);
            setAuthState(AuthState.FORGOT_PASSWORD_CONFIRM);
          }}
        />
      );
    case AuthState.FORGOT_PASSWORD_CONFIRM:
      return (
        <ForgotPasswordConfirm
          afterSubmit={() => setAuthState(AuthState.LOGIN)}
          onBack={() => setAuthState(AuthState.LANDING_SCREEN)}
          email={confirmEmail}
        />
      );
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
