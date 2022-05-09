import { Auth } from "@aws-amplify/auth";
import { Input, Layout, Text } from "@ui-kitten/components";
import React, { useContext, useRef, useState } from "react";
import { Dimensions, KeyboardAvoidingView, StyleSheet } from "react-native";
import LoginPageBubbleTop from "../../../assets/images/login-page-bubble-top.svg";
import LoginControllerRoot from "../../../components/ui/LoginControllerRoot";
import PrimaryButton from "../../../components/ui/PrimaryButton";
import TextField from "../../../components/ui/TextField";
import UserContext from "../../../context/UserContext";
import KeyboardSwipeLayout from "../ui/KeyboardSwipeLayout";

const window = Dimensions.get("window");

type LoginFormScreenProps = {
  onSignUp: () => void;
  onForgot: () => void;
  onNotConfirmed: (email: string) => void;
};

const LoginFormScreen = ({ onSignUp, onNotConfirmed, onForgot }: LoginFormScreenProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailRef = useRef<Input>(null);
  const passwordRef = useRef<Input>(null);
  const { setUser } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const confirmForm = () => {
    let flag = true;
    if (!email) {
      flag = false;
    }
    if (!password) {
      flag = false;
    }
    return flag;
  };
  const login = async () => {
    if (!confirmForm()) return;
    try {
      setLoading(true);
      const user = await Auth.signIn({
        username: email,
        password,
      });
      setUser(user);
    } catch (e: any) {
      console.log(e);
      if (e.code === "UserNotConfirmedException") {
        onNotConfirmed(email);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <LoginControllerRoot>
      <LoginPageBubbleTop
        style={{ position: "absolute", top: 0 }}
        width={window.width}
      />
      <KeyboardSwipeLayout>
        <KeyboardAvoidingView
          behavior="position"
          style={{
            padding: 30,
          }}
        >
          <Text style={styles.emoji}>👋</Text>
          <Text style={{
            fontSize: 34, fontFamily: "Poppins_500Medium",
          }}
          >
            Welcome to Meetable
          </Text>
          <Layout style={{ marginTop: 20, marginBottom: 10, backgroundColor: "#0000" }}>
            <Text style={{ fontSize: 14, fontFamily: "Poppins_500Medium" }}>Email Address</Text>
          </Layout>
          <TextField
            placeholder="hello@getmeetable.com"
            value={email}
            ref={emailRef}
            onSubmitEditing={() => passwordRef.current?.focus()}
            onChangeText={(e) => setEmail(e)}
            keyboardType="email-address"
            autoCompleteType="email"
          />
          <Layout style={{ marginTop: 20, marginBottom: 10, backgroundColor: "#0000" }}>
            <Text style={{ fontSize: 14, fontFamily: "Poppins_500Medium" }}>Password</Text>
          </Layout>
          <TextField
            secureTextEntry
            placeholder="•••••••••••"
            onChangeText={setPassword}
            onSubmitEditing={login}
            value={password}
            ref={passwordRef}
          />
        </KeyboardAvoidingView>
        <Layout style={styles.footer}>
          <Text
            style={[styles.bold, { marginTop: 10 }]}
            onPress={onForgot}
          >
            Forgot Password?
          </Text>
          <Layout style={styles.buttonContainer}>
            <PrimaryButton
              status="info"
              onPress={login}
              loading={loading}
            >
              Sign In
            </PrimaryButton>
            <Text style={[styles.bold]}>
              I'm new!
              Where can I
              {" "}
              <Text
                onPress={onSignUp}
                style={[styles.bold, styles.clickable]}
              >
                sign up
              </Text>
              ?
            </Text>
          </Layout>
        </Layout>
      </KeyboardSwipeLayout>
    </LoginControllerRoot>
  );
};

const styles = StyleSheet.create({
  emoji: {
    fontSize: 50,
  },
  clickable: {
    color: "#02A3F4",
  },
  bold: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 14,
  },
  footer: {
    backgroundColor: "#0000",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  buttonContainer: {
    backgroundColor: "#0000",
    flex: 0,
    alignItems: "center",
    justifyContent: "flex-end",
  },
});

export default LoginFormScreen;
