import { Layout, Text } from "@ui-kitten/components";
import { Auth } from "aws-amplify";
import React from "react";
import { Dimensions, KeyboardAvoidingView, StyleSheet } from "react-native";
import ForgotBubble from "../../../assets/images/forgot-bubble.svg";
import LoginControllerRoot from "../../../components/ui/LoginControllerRoot";
import PrimaryButton from "../../../components/ui/PrimaryButton";
import TextField from "../../../components/ui/TextField";
import KeyboardSwipeLayout from "../ui/KeyboardSwipeLayout";

const window = Dimensions.get("window");

type ForgotPasswordProps = {
  onBack: () => void
  afterSubmit: (email: string) => void
};

const ForgotPassword = ({ onBack, afterSubmit }:ForgotPasswordProps) => {
  const [email, setEmail] = React.useState("");
  // const [errors, setError] = React.useState<string[]>([]);
  const submit = async () => {
    try {
      await Auth.forgotPassword(email);
      afterSubmit(email);
    } catch (e) {
      // const message = e.message as string;
      // setError((prevErrors) => [...prevErrors, message]);
    }
  };

  return (
    <LoginControllerRoot>
      <ForgotBubble
        style={{
          position: "absolute",
          top: 0,
        }}
        width={window.width}
      />
      <KeyboardSwipeLayout>
        <KeyboardAvoidingView
          behavior="position"
          style={{
            padding: 30,
            flex: 1,
          }}
        >
          <Text style={styles.emoji}>🔐</Text>
          <Text style={{
            fontSize: 34, fontFamily: "Poppins_500Medium",
          }}
          >
            Forgot your password?
          </Text>
          <Layout style={{ marginTop: 20, backgroundColor: "#0000" }}>
            <Text style={{ fontSize: 14, fontWeight: "bold" }}>What is your Email Address?</Text>
          </Layout>
          <Layout style={styles.emailContainer}>
            <TextField
              placeholder="Enter Email Address"
              value={email}
              onChangeText={(e) => setEmail(e)}
              keyboardType="email-address"
              autoCompleteType="email"
            />
          </Layout>
        </KeyboardAvoidingView>
        <Layout style={styles.footer}>
          <PrimaryButton
            status="info"
            onPress={() => submit()}
          >
            Send Confirmation Email
          </PrimaryButton>

          <Text style={[styles.bold]}>
            I already have an account!
          </Text>
          <Text style={[styles.bold]}>
            Where can I
            {" "}
            <Text onPress={() => onBack()} style={[styles.bold, styles.clickable]}>sign in</Text>
            ?
          </Text>
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
  emailContainer: {
    marginVertical: 20,
    backgroundColor: "#0000",
  },
  footer: {
    backgroundColor: "#0000",
    alignItems: "center",
    justifyContent: "flex-end",
  },
});

export default ForgotPassword;
