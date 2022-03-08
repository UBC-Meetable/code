import { Layout, Text } from "@ui-kitten/components";
import { Auth } from "aws-amplify";
import React from "react";
import {
  Dimensions, KeyboardAvoidingView, Platform, StyleSheet,
} from "react-native";
import ForgotBubble from "../../../assets/images/forgot-bubble.svg";
import LoginControllerRoot from "../../../components/ui/LoginControllerRoot";
import PrimaryButton from "../../../components/ui/PrimaryButton";
import TextField from "../../../components/ui/TextField";
import BottomText from "../ui/BottomText";
import KeyboardSwipeLayout from "../ui/KeyboardSwipeLayout";

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
  // const [errors, setError] = React.useState<string[]>([]);

  const submit = async () => {
    // setError([]);
    if (!password || !confirmPassword) {
      // setError(["Password and Confirm Password are required"]);
      return;
    }
    if (confirmPassword !== password) {
      // setError((prevErrors) => [...prevErrors, "Passwords don't match"]);
      return;
    }
    try {
      await Auth.forgotPasswordSubmit(email, code, password);
      afterSubmit();
    } catch (error) {
      // setError([`Error: ${error.message}`]);
    }
  };
  if (!email) {
    onBack();
    return <Layout />;
  }

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
          <Text style={styles.emoji}> </Text>
          <Text style={{
            fontSize: 34, fontFamily: "Poppins_500Medium",
          }}
          >
            Change
            {"\n"}
            Password
          </Text>
          <Text style={styles.codeLabel}>
            Please verify that it is your account by
            entering the code sent to your email.

          </Text>
          <TextField placeholder="Confirmation Code" onChangeText={setCode} />
          <TextField secureTextEntry placeholder="New Password" onChangeText={setPassword} />
          <TextField secureTextEntry placeholder="Confirm New Password" onChangeText={setConfirmPassword} />
        </KeyboardAvoidingView>
        <Layout style={{
          backgroundColor: "#0000",
          alignItems: "center",
          justifyContent: "flex-end",
          marginBottom: Platform.OS === "ios" ? 0 : 20,
        }}
        >
          <PrimaryButton
            status="info"
            onPress={() => submit()}
          >
            Change Password
          </PrimaryButton>
          <BottomText onPressText={onBack} />
        </Layout>
      </KeyboardSwipeLayout>
    </LoginControllerRoot>
  );
};

const styles = StyleSheet.create({
  codeLabel: {
    fontFamily: "Poppins_500Medium",
    fontSize: 14,
    marginVertical: 10,
    fontWeight: "bold",
    color: "#C5BEB9",
    width: "80%",
  },
  emoji: {
    fontSize: 50,
  },
});

export default ForgotPasswordConfirm;
