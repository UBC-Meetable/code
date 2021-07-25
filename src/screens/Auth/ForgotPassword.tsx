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

const window = Dimensions.get("window");

type ForgotPasswordProps = {
  onBack: () => void
  afterSubmit: (email: string) => void
};

const ForgotPassword = ({ onBack, afterSubmit }:ForgotPasswordProps) => {
  const [email, setEmail] = React.useState("");
  const [errors, setError] = React.useState<string[]>([]);

  const submit = async () => {
    try {
      await Auth.forgotPassword(email);
      afterSubmit(email);
    } catch (e) {
      const message = e.message as string;
      setError((prevErrors) => [...prevErrors, message]);
    }
  };

  return (
    <SafeAreaView style={styles.root}>
      <LoginPageBubbleTop
        style={{
          position: "absolute", top: 0,
        }}
        width={window.width}
        height={window.height}
      />
      <KeyboardAvoidingView behavior="height" style={styles.formContainer}>
        <Layout style={styles.emailContainer}>
          <Input
            value={email}
            placeholder="Your Email"
            onChangeText={(e) => setEmail(e.toLowerCase())}
            keyboardType="email-address"
            autoCompleteType="email"
            style={styles.email}
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

      <BottomText onPressText={() => onBack()} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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

export default ForgotPassword;
