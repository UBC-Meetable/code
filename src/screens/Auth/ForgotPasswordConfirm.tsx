import {
  Button, Input, Layout, Text,
} from "@ui-kitten/components";
import React from "react";
import {
  Dimensions, KeyboardAvoidingView, Platform, StyleSheet,
} from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { Auth } from "aws-amplify";
import Colors from "../../constants/Colors";
import LoginPageBubbleTop from "../../assets/images/login-page-bubble-top.svg";
import BottomText from "./BottomText";
import KeyboardSwipeLayout from "./KeyboardSwipeLayout";
import LoginControllerRoot from "../../components/ui/LoginControllerRoot";
import ForgotBubble from "../../assets/images/forgot-bubble.svg";
import PrimaryButton from "../../components/ui/PrimaryButton";
import TextField from "../../components/ui/TextField";

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
  const [currEmail, setCurrEmail] = React.useState(email);
  const units = useSafeAreaInsets();

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
          <TextField placeholder="Confirmation Code" onChangeText={(text) => setCode(text)} />
          <TextField secureTextEntry placeholder="New Password" onChangeText={(text) => setPassword(text)} />
          <TextField secureTextEntry placeholder="Confirm New Password" onChangeText={(text) => setConfirmPassword(text)} />
        </KeyboardAvoidingView>
        <Layout style={{
          backgroundColor: "#0000",
          alignItems: "center",
          justifyContent: "flex-end",
          marginBottom: Platform.OS === "ios" ? 0 : 20,
        }}
        >
          <PrimaryButton onPress={() => submit()}>
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
  emoji: { fontSize: 50 },
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
