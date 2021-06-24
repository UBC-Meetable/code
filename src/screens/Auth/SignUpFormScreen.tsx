import Auth from "@aws-amplify/auth";
import {
  Button, Input, Layout, Text,
} from "@ui-kitten/components";
import React, { useRef, useState } from "react";
import { Dimensions, KeyboardAvoidingView, StyleSheet } from "react-native";
import LoginPageBubbleTop from "../../assets/images/login-page-bubble-top.svg";
import rootStyles from "../../components/styles/rootStyles";
import Colors from "../../constants/Colors";

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
    <Layout style={rootStyles}>
      <LoginPageBubbleTop
        style={{ position: "absolute", top: 0 }}
        width={window.width}
        height={window.height}
      />
      <KeyboardAvoidingView behavior="padding" style={styles.formContainer} collapsable>
        <Layout style={styles.emailContainer}>

          <Input
            ref={emailRef}
            value={email}
            placeholder="Your Email"
            onChangeText={(e) => setEmail(e.toLowerCase())}
            keyboardType="email-address"
            autoCompleteType="email"
            onSubmitEditing={() => confirmEmailRef.current?.focus()}
          />
          <Input
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
            value={password}
            ref={passwordRef}
            placeholder="Your Password"
            onChangeText={(e) => setPassword(e)}
            secureTextEntry
            onSubmitEditing={() => confirmPasswordRef.current?.focus()}
            autoCompleteType="password"
          />

          <Input
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
      </KeyboardAvoidingView>

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
    width: "70%",
    minWidth: 200,
  },
  error: {
    color: Colors.dark.error,
  },
  emailContainer: {
    marginVertical: 20,
    backgroundColor: "#0000",
  },
  loginText: {
    fontSize: 15,
    textAlign: "center",
  },
});

export default SignUpFormScreen;
