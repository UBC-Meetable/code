import Auth from "@aws-amplify/auth";
import {
  Button, Input, Layout, Text,
} from "@ui-kitten/components";
import React, { useState } from "react";
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
      console.log(user);
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
      <KeyboardAvoidingView
        behavior="height"
        style={styles.formContainer}
        collapsable
      >
        <Text style={styles.header}>Let's get Started!</Text>
        <Layout style={styles.emailContainer}>
          <Input
            style={styles.input}
            size="large"
            value={email}
            placeholder="Your Email"
            onChangeText={(e) => setEmail(e.toLowerCase())}
            keyboardType="email-address"
            autoCompleteType="email"
          />
          <Input
            style={styles.input}
            size="large"
            value={confirmEmail}
            placeholder="Confirm Email"
            onChangeText={(e) => setConfirmEmail(e.toLowerCase())}
            keyboardType="email-address"
            autoCompleteType="email"
          />
        </Layout>
        <Layout style={styles.emailContainer}>
          <Input
            style={styles.input}
            size="large"
            value={password}
            placeholder="Your Password"
            onChangeText={(e) => setPassword(e)}
            secureTextEntry
            autoCompleteType="password"
          />
          <Input
            style={styles.input}
            size="large"
            value={confirmPassword}
            placeholder="Confirm Password"
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
  header: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },
  input: {
    marginHorizontal: -50,
    borderRadius: 10,
    padding: 10,
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
});

export default SignUpFormScreen;
