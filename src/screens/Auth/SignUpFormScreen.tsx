import Auth from "@aws-amplify/auth";
import {
  Button, Input, Layout, Text,
} from "@ui-kitten/components";
import React, { useRef, useState } from "react";
import {
  Dimensions, Keyboard, KeyboardAvoidingView, StyleSheet, TextInput,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import LoginPageBubbleTop from "../../assets/images/login-page-bubble-top.svg";
import rootStyles from "../../components/styles/rootStyles";
import Colors from "../../constants/Colors";
import KeyboardSwipeLayout from "./KeyboardSwipeLayout";

const window = Dimensions.get("window");

type SignUpFormScreenProps = {
    onLogIn: () => void,
    onCreate: (email: string) => void,
}

const SignUpFormScreen = ({ onLogIn, onCreate }: SignUpFormScreenProps) => {
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setError] = useState<string[]>([]);
  const emailRef = useRef<Input>(null);
  const passwordRef = useRef<Input>(null);
  const confirmEmailRef = useRef<Input>(null);
  const confirmPasswordRef = useRef<Input>(null);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const confirmForm = () => {
    setError(() => []);
    let flag = true;
    if (password !== confirmPassword) {
      setError((prevErrors) => [...prevErrors, "Passwords do not match"]);
      flag = false;
    }
    if (email !== confirmEmail) {
      setError((prevErrors) => [...prevErrors, "Emails do not match"]);
      flag = false;
    }
    if (!email) {
      setError((prevErrors) => [...prevErrors, "Email cannot be blank"]);
      flag = false;
    }
    if (!password) {
      setError((prevErrors) => [...prevErrors, "Password cannot be blank"]);
      flag = false;
    }
    return flag;
  };

  const createProfile = async () => {
    setError([]);
    if (!confirmForm()) return;
    try {
      const user = await Auth.signUp({
        username: email,
        password,
      });

      onCreate(email);
    } catch (e) {
      const message = e.message as string;
      setError((prevErrors) => [...prevErrors, message]);
    }
  };

  return (
    <KeyboardSwipeLayout>
      <LoginPageBubbleTop
        style={{ position: "absolute", top: 0 }}
        width={window.width}
        height={window.height}
      />
      <KeyboardAvoidingView
        behavior="position"
        enabled={passwordRef.current?.isFocused() || confirmPasswordRef.current?.isFocused()}
      >

        <Text style={styles.header}>Let's get Started!</Text>
        <Layout style={styles.emailContainer}>
          <Input
            ref={emailRef}
            style={styles.input}
            size="large"
            value={email}
            placeholder="Your Email"
            onChangeText={(e) => setEmail(e.toLowerCase())}
            keyboardType="email-address"
            autoCompleteType="email"
            onSubmitEditing={() => confirmEmailRef.current?.focus()}
          />
          <Input
            style={styles.input}
            size="large"
            value={confirmEmail}
            ref={confirmEmailRef}
            onSubmitEditing={() => passwordRef.current?.focus()}
            placeholder="Confirm Email"
            onChangeText={(e) => setConfirmEmail(e.toLowerCase())}
            keyboardType="email-address"
            autoCompleteType="email"
          />
        </Layout>
        <Layout style={styles.emailContainer}>
          <Input
            onFocus={() => setPasswordFocused(true)}
            onBlur={() => setPasswordFocused(false)}
            style={styles.input}
            size="large"
            value={password}
            ref={passwordRef}
            placeholder="Your Password"
            onChangeText={(e) => setPassword(e)}
            secureTextEntry
            onSubmitEditing={() => confirmPasswordRef.current?.focus()}
            autoCompleteType="password"
          />
          <Input
            onFocus={() => setPasswordFocused(true)}
            onBlur={() => setPasswordFocused(false)}
            style={styles.input}
            size="large"
            value={confirmPassword}
            ref={confirmPasswordRef}
            placeholder="Confirm Password"
            onSubmitEditing={() => createProfile()}
            onChangeText={(e) => setConfirmPassword(e)}
            secureTextEntry
            autoCompleteType="password"
          />
        </Layout>
        {errors.length > 0
          && errors.map((error, i) => (
            <Text key={i} style={styles.error}>
              {error}
            </Text>
          ))}
        <Layout style={{
          justifyContent: "center", alignItems: "center", backgroundColor: "#0000", flex: 0,
        }}
        >
          <Button
            style={styles.button}
            onPress={() => {
              createProfile();
            }}
          >
            {(evaProps: any) => (
              <Text
                {...evaProps}
                style={{ ...evaProps.style, ...styles.buttonText }}
              >
                Create Profile
              </Text>
            )}
          </Button>
          <Text style={{ ...styles.loginText }}>
            Already have an account?
            {" "}
            <Text
              style={{ ...styles.loginText, color: "#02A3F4" }}
              onPress={() => onLogIn()}
            >
              Log in
            </Text>
          </Text>
        </Layout>
      </KeyboardAvoidingView>
    </KeyboardSwipeLayout>
  );
};

const styles = StyleSheet.create({
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
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },
  input: {
    marginHorizontal: -50,
    borderRadius: 20,
    padding: 10,
    width: "100%",
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  loginText: {
    fontSize: 15,
    textAlign: "center",
  },
  bioBubble: {
    height: "100%",
    maxHeight: 300,
    flex: 1,
    padding: 10,
    width: "100%",
    backgroundColor: "white",
    borderRadius: 24,
    marginVertical: 5,
  },
  keyboardHider: {
    height: "100%",
    maxHeight: 300,
    flex: 1,
    padding: 10,
    width: "90%",
    marginVertical: 5,
  },
});

export default SignUpFormScreen;
