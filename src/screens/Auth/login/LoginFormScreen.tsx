import Auth from "@aws-amplify/auth";
import { Input, Layout, Text } from "@ui-kitten/components";
import React, { useContext, useRef, useState } from "react";
import { Dimensions, KeyboardAvoidingView, StyleSheet } from "react-native";
import LoginPageBubbleTop from "../../../assets/images/login-page-bubble-top.svg";
import LoginControllerRoot from "../../../components/ui/LoginControllerRoot";
import PrimaryButton from "../../../components/ui/PrimaryButton";
import TextField from "../../../components/ui/TextField";
import Colors from "../../../constants/Colors";
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
  // const [errors, setError] = useState<string[]>([]);
  const emailRef = useRef<Input>(null);
  const passwordRef = useRef<Input>(null);
  const { setUser } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const confirmForm = () => {
    // setError(() => []);
    let flag = true;
    if (!email) {
      // setError((prevErrors) => [...prevErrors, "Email cannot be blank"]);
      flag = false;
    }
    if (!password) {
      // setError((prevErrors) => [...prevErrors, "Password cannot be blank"]);
      flag = false;
    }
    return flag;
  };
  const login = async () => {
    // setError([]);

    if (!confirmForm()) return;
    try {
      setLoading(true);
      const user = await Auth.signIn({
        username: email,
        password,
      });
      setUser(user);
    } catch (e) {
      console.log(e);
      if (e.code === "UserNotConfirmedException") {
        onNotConfirmed(email);
      }

      // const message = e.message as string;
      // setError((prevErrors) => [...prevErrors, message]);
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
            onChangeText={(e) => setPassword(e)}
            onSubmitEditing={() => login()}
            value={password}
            ref={passwordRef}
          />
        </KeyboardAvoidingView>
        <Layout style={{
          backgroundColor: "#0000",
          flex: 1,
          alignItems: "center",
          justifyContent: "space-between",
        }}
        >
          <Text
            style={[styles.bold, { marginTop: 10 }]}
            onPress={() => onForgot()}
          >
            Forgot Password?
          </Text>
          <Layout style={{
            backgroundColor: "#0000",
            flex: 0,
            alignItems: "center",
            justifyContent: "flex-end",
          }}
          >
            <PrimaryButton
              status="info"
              onPress={() => login()}
              loading={loading}
            >
              Sign In
            </PrimaryButton>
            <Text style={[styles.bold]}>
              I'm new!
              Where can I
              {" "}
              <Text
                onPress={() => onSignUp()}
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
  emoji: { fontSize: 50 },
  clickable: { color: "#02A3F4" },
  bold: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 14,
  },
  button: {
    marginBottom: 20,
    width: "90%",
    borderRadius: 100,
    borderWidth: 0,
    backgroundColor: "#02A3F4",
  },
  buttonText: {
    fontSize: 20,
    textAlign: "center",
    flex: 1,
  },
  formContainer: {
    flex: 1,
    justifyContent: "center",
    width: "80%",
    minWidth: 200,
    backgroundColor: "#0000",
  },
  error: {
    color: Colors.dark.error,
  },
  emailContainer: {
    marginVertical: 20,
    backgroundColor: "#0000",
  },
  input: {
    marginVertical: 2,
    marginHorizontal: -20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    borderRadius: 20,
    backgroundColor: "white",
  },
  loginText: {
    fontSize: 15,
    textAlign: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },
});

export default LoginFormScreen;
