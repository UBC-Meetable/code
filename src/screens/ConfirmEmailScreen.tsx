import Auth from "@aws-amplify/auth";
import { Layout, Text } from "@ui-kitten/components";
import React, { useEffect, useState, useContext } from "react";
import { Dimensions, KeyboardAvoidingView, StyleSheet } from "react-native";
import LoginControllerRoot from "../components/ui/LoginControllerRoot";
import Colors from "../constants/Colors";
import BottomText from "./Auth/ui/BottomText";
import VerifyBubble from "../assets/images/verify-bubble.svg";
import PrimaryButton from "../components/ui/PrimaryButton";
import TextField from "../components/ui/TextField";
import KeyboardSwipeLayout from "./Auth/ui/KeyboardSwipeLayout";
import UserContext from "../context/UserContext";
import ErrorModal from "../navigation/ErrorsModal";

const window = Dimensions.get("window");

type SignUpFormScreenProps = {
  onConfirmCode: () => void;
  onBack: () => void;
  email?: string;
  password?: string;
  fromSignUp: boolean;
};

const ConfirmEmailScreen = ({
  onConfirmCode,
  onBack,
  email,
  password,
  fromSignUp,
}: SignUpFormScreenProps) => {
  const { setUser } = useContext(UserContext);
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setError] = useState<string[]>([]);
  const [errorModal, setErrorModal] = useState(false);

  useEffect(() => {
    if (email && !fromSignUp) {
      Auth.resendSignUp(email);
    }
  }, [email]);

  const confirmForm = () => {
    setError(() => []);
    let flag = true;
    if (!code) {
      setError((prevErrors) => [...prevErrors, "Code cannot be blank"]);
      flag = false;
    }
    return flag;
  };

  if (!email || !password) {
    onBack();
    return <Layout />;
  }

  const resendCode = async () => {
    await Auth.resendSignUp(email);
  };

  const createProfile = async () => {
    console.log("Attempting email validation");
    setError([]);
    if (!confirmForm()) {
      console.error(errors);
      setErrorModal(true);
    }
    try {
      await Auth.confirmSignUp(email, code);
      await login();
    } catch (e: any) {
      const message = e.message as string;
      setError((prevErrors) => [...prevErrors, message]);
      setErrorModal(true);
    }
  };

  const login = async () => {
    setError([]);

    if (!confirmForm()) {
      console.error(errors);
      setErrorModal(true);
      return;
    }
    try {
      setLoading(true);
      const user = await Auth.signIn({
        username: email,
        password,
      });
      setUser(user);
    } catch (e: any) {
      const message = e.message as string;
      setError((prevErrors) => [...prevErrors, message]);
      setErrorModal(true);
    } finally {
      setLoading(false);
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
        <KeyboardAvoidingView
          behavior="position"
          style={{
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
        </KeyboardAvoidingView>
        <Layout style={{
          backgroundColor: "#0000",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
        >
          <PrimaryButton status="info" onPress={createProfile} loading={loading}>
            Create Profile
          </PrimaryButton>
          <BottomText onPressText={onBack} />
        </Layout>
      </KeyboardSwipeLayout>
      <ErrorModal
        open={errorModal}
        setOpen={setErrorModal}
        title="Error signing up"
        errors={errors}
      />
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

export default ConfirmEmailScreen;
