import Auth from "@aws-amplify/auth";
import {
  Button, Input, Layout, Text,
} from "@ui-kitten/components";
import React, { useState } from "react";
import { Dimensions, KeyboardAvoidingView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LoginPageBubbleTop from "../assets/images/login-page-bubble-top.svg";
import Colors from "../constants/Colors";

const window = Dimensions.get("window");

type SignUpFormScreenProps = {
  onConfirmCode: () => void;
  initialEmail?: string;
};

const SignUpFormScreen = ({
  onConfirmCode,
  initialEmail = "",
}: SignUpFormScreenProps) => {
  const [email, setEmail] = useState(initialEmail);
  const [code, setCode] = useState("");
  const [errors, setError] = useState<string[]>([]);

  const confirmForm = () => {
    setError(() => []);
    let flag = true;
    if (!email) {
      setError((prevErrors) => [...prevErrors, "Email cannot be blank"]);
      flag = false;
    }
    if (!code) {
      setError((prevErrors) => [...prevErrors, "Code cannot be blank"]);
      flag = false;
    }
    return flag;
  };
  const createProfile = async () => {
    setError([]);
    if (!confirmForm()) return;
    try {
      const user = await Auth.confirmSignUp(email, code);
      console.log(user);
      onConfirmCode();
    } catch (e) {
      const message = e.message as string;
      setError((prevErrors) => [...prevErrors, message]);
    }
  };

  return (
    <SafeAreaView style={styles.root}>
      <LoginPageBubbleTop
        style={{ position: "absolute", top: 0 }}
        width={window.width}
        height={window.height}
      />
      <KeyboardAvoidingView behavior="position" style={styles.formContainer}>
        <Layout style={styles.emailContainer}>
          <Input
            value={email}
            placeholder="Your Email"
            onChangeText={(e) => setEmail(e.toLowerCase())}
            keyboardType="email-address"
            disabled={initialEmail.length > 0}
            autoCompleteType="email"
          />
          <Input
            value={code}
            placeholder="Confirmation Code"
            onChangeText={(e) => setCode(e.toLowerCase())}
            keyboardType="email-address"
            autoCompleteType="email"
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
            Confirm Email
          </Text>
        )}
      </Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    display: "flex",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff8f3",
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
