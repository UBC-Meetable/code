import Auth from "@aws-amplify/auth";
import {
  Button, Input, Layout, Text,
} from "@ui-kitten/components";
import React, { useState } from "react";
import { Dimensions, KeyboardAvoidingView, StyleSheet } from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import LoginPageBubbleTop from "../assets/images/login-page-bubble-top.svg";
import LoginControllerRoot from "../components/ui/LoginControllerRoot";
import Colors from "../constants/Colors";
import BottomText from "./Auth/BottomText";
import VerifyBubble from "../assets/images/verify-bubble.svg";
import KeyboardSwipeLayout from "./Auth/KeyboardSwipeLayout";
import PrimaryButton from "../components/ui/PrimaryButton";
import TextField from "../components/ui/TextField";

const window = Dimensions.get("window");

type SignUpFormScreenProps = {
  onConfirmCode: () => void;
  onBack: () => void;
  initialEmail?: string;
};

const SignUpFormScreen = ({
  onConfirmCode,
  onBack,
  initialEmail,
}: SignUpFormScreenProps) => {
  const [code, setCode] = useState("");
  const [errors, setError] = useState<string[]>([]);
  const units = useSafeAreaInsets();
  const confirmForm = () => {
    setError(() => []);
    let flag = true;
    if (!code) {
      setError((prevErrors) => [...prevErrors, "Code cannot be blank"]);
      flag = false;
    }
    return flag;
  };

  if (!initialEmail) {
    onBack();
    return <Layout />;
  }

  const resendCode = async () => {
    await Auth.resendSignUp(initialEmail);
  };

  const createProfile = async () => {
    setError([]);
    if (!confirmForm()) return;
    try {
      await Auth.confirmSignUp(initialEmail, code);
      onConfirmCode();
    } catch (e) {
      const message = e.message as string;
      setError((prevErrors) => [...prevErrors, message]);
    }
  };

  return (
    <LoginControllerRoot>
      <VerifyBubble
        style={{
          position: "absolute",
          top: 0,
        }}
        width={window.width}
      />
      <KeyboardSwipeLayout>
        <Layout style={{
          backgroundColor: "#0000",
          width: "100%",
          flex: 1,
          marginTop: units.top,
          padding: 30,
        }}
        >
          <Text style={styles.emoji}> </Text>
          <Text style={{
            fontSize: 34, fontFamily: "Poppins_500Medium",
          }}
          >
            Verify your email
          </Text>
          <Layout style={{ marginTop: 20, backgroundColor: "#0000" }}>
            <Text style={styles.baseText}>
              Please verify that it is your
              account by entering the code sent to your email.
            </Text>
          </Layout>
          <Text style={[{ marginTop: 40 }, styles.baseText]}>
            Confirmation Code
          </Text>
          <Layout style={styles.emailContainer}>
            <TextField placeholder="ABC123" value={code} onChangeText={(text) => setCode(text)} />
          </Layout>
          <Text style={[{ textAlign: "center" }, styles.baseText]}>
            Didn't get a code?
            {" "}
            <Text style={[styles.baseText, { color: "#02A3F4" }]} onPress={resendCode}>Resend it</Text>
            .
          </Text>
        </Layout>
      </KeyboardSwipeLayout>
      <PrimaryButton onPress={createProfile}>
        Create Profile
      </PrimaryButton>
      <BottomText onPressText={onBack} />
    </LoginControllerRoot>
  );
};

const styles = StyleSheet.create({
  emoji: { fontSize: 50 },
  baseText: { fontSize: 14, fontFamily: "Poppins_500Medium" },
  error: {
    color: Colors.dark.error,
  },
  emailContainer: {
    height: "20%",
    marginVertical: 20,
    backgroundColor: "#0000",
  },
});

export default SignUpFormScreen;
