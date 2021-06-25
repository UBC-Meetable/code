import Auth from "@aws-amplify/auth";
import {
  Button, Input, Layout, Text,
} from "@ui-kitten/components";
import React, { useContext, useState } from "react";
import { Dimensions, KeyboardAvoidingView, StyleSheet } from "react-native";
import LoginPageBubbleTop from "../../assets/images/login-page-bubble-top.svg";
import rootStyles from "../../components/styles/rootStyles";
import Colors from "../../constants/Colors";
import UserContext from "../../context/UserContext";

const window = Dimensions.get("window");

type LoginFormScreenProps = {
  onSignUp: () => void;
};

const LoginFormScreen = ({ onSignUp }: LoginFormScreenProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setError] = useState<string[]>([]);
  const { setUser } = useContext(UserContext);

  const confirmForm = () => {
    setError(() => []);
    let flag = true;
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
  const login = async () => {
    setError([]);
    if (!confirmForm()) return;
    try {
      const user = await Auth.signIn({
        username: email,
        password,
      });
      setUser(user);
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
      <KeyboardAvoidingView behavior="height" style={styles.formContainer}>
        <Text style={styles.title}>Welcome to Meetable!</Text>
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
          login();
        }}
      >
        {(evaProps: any) => (
          <Text
            {...evaProps}
            style={{ ...evaProps.style, ...styles.buttonText }}
          >
            Log In
          </Text>
        )}
      </Button>
      <Text style={{ ...styles.loginText }}>
        Don't have an account?
        {" "}
        <Text
          style={{ ...styles.loginText, color: "#02A3F4" }}
          onPress={() => onSignUp()}
        >
          Sign Up
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
    width: "80%",
    minWidth: 200,
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
