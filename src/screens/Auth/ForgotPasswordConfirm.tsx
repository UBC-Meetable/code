import {
  Button, Input, Layout, Text,
} from "@ui-kitten/components";
import React from "react";
import { Dimensions, KeyboardAvoidingView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Auth } from "aws-amplify";
import Colors from "../../constants/Colors";
import LoginPageBubbleTop from "../../assets/images/login-page-bubble-top.svg";
import BottomText from "./BottomText";
import KeyboardSwipeLayout from "./KeyboardSwipeLayout";

const window = Dimensions.get("window");

type ForgotPasswordProps = {
  onBack: () => void;
  afterSubmit: () => void;
  email: string;
};

const ForgotPasswordConfirm = ({ onBack, afterSubmit, email }:ForgotPasswordProps) => {
  const [code, setCode] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [errors, setError] = React.useState<string[]>([]);

  const submit = async () => {
    setError([]);
    if (!password || !confirmPassword) {
      setError(["Password and Confirm Password are required"]);
      return;
    }
    if (confirmPassword !== password) {
      setError((prevErrors) => [...prevErrors, "Passwords don't match"]);
      return;
    }
    try {
      await Auth.forgotPasswordSubmit(email, code, password);
      afterSubmit();
    } catch (error) {
      setError([`Error: ${error.message}`]);
    }
  };

  return (
    <SafeAreaView style={styles.root}>
      <KeyboardSwipeLayout>
        <LoginPageBubbleTop
          style={{
            position: "absolute", top: 0,
          }}
          width={window.width}
          height={window.height}
        />
        <KeyboardAvoidingView behavior="position" style={styles.formContainer}>
          <Layout style={styles.emailContainer}>
            <Input
              disabled
              value={email}
              placeholder="Your Email"
              keyboardType="email-address"
              autoCompleteType="email"
              style={styles.email}
            />
            <Input
              value={code}
              placeholder="Authorization Code"
              onChangeText={setCode}
              keyboardType="default"
              autoCompleteType="off"
              style={styles.email}
            />
            <Input
              value={password}
              placeholder="New Password"
              keyboardType="visible-password"
              onChangeText={setPassword}
              autoCompleteType="password"
              secureTextEntry
              style={styles.email}
            />
            <Input
              value={confirmPassword}
              placeholder="Confirm New Password"
              onChangeText={setConfirmPassword}
              keyboardType="visible-password"
              autoCompleteType="password"
              secureTextEntry
              style={styles.email}
            />
          </Layout>

        </KeyboardAvoidingView>
        <KeyboardAvoidingView behavior="position" style={styles.buttonContainer}>
          {errors.length > 0
          && errors.map((error, i) => (
            <Text key={i} style={styles.error}>
              {error}
            </Text>
          ))}
          <Button
            style={styles.button}
            onPress={() => {
              submit();
            }}
          >
            {(evaProps: any) => (
              <Text
                {...evaProps}
                style={{ ...evaProps.style, ...styles.buttonText }}
              >
                Forgot Password
              </Text>
            )}
          </Button>
        </KeyboardAvoidingView>

        <BottomText onPressText={() => onBack()} />
      </KeyboardSwipeLayout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  buttonContainer: { width: "80%" },
  root: {
    flex: 1,
    display: "flex",
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.theme.background,
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
    width: "100%",
    minWidth: 200,
    alignItems: "center",
  },
  error: {
    color: Colors.dark.error,
  },
  emailContainer: {
    width: "80%",
    height: "20%",
    marginVertical: 20,
    backgroundColor: "#0000",
  },
  loginText: {
    fontSize: 15,
    textAlign: "center",
  },
  email: {
    width: "80%",
  },
});

export default ForgotPasswordConfirm;
