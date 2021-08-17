import Auth from "@aws-amplify/auth";
import {
  Button, CheckBox, Input, Layout, Text,
} from "@ui-kitten/components";
import React, { useRef, useState } from "react";
import {
  Dimensions, KeyboardAvoidingView, StyleSheet,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import SignUpBubble from "../../assets/images/verify-bubble.svg";
import LoginControllerRoot from "../../components/ui/LoginControllerRoot";
import PrimaryButton from "../../components/ui/PrimaryButton";
import TextField from "../../components/ui/TextField";
import Colors from "../../constants/Colors";
import TosModal, { PrivacyModal } from "../../navigation/TosModal";
import BottomText from "./BottomText";
import KeyboardSwipeLayout from "./KeyboardSwipeLayout";

const window = Dimensions.get("window");

type SignUpFormScreenProps = {
    onLogIn: () => void,
    onCreate: (email: string) => void,
}

// TODO error messages, disabled styles, theme
const SignUpFormScreen = ({ onLogIn, onCreate }: SignUpFormScreenProps) => {
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setError] = useState<string[]>([]);
  const emailRef = useRef<Input>(null);
  const passwordRef = useRef<Input>(null);
  const confirmEmailRef = useRef<Input>(null);
  const confirmPasswordRef = useRef<Input>(null);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [tosModal, setTosModal] = useState(false);
  const [privacyModal, setPrivacyModal] = useState(false);
  const units = useSafeAreaInsets();
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
      onCreate(email);
    } catch (e) {
      const message = e.message as string;
      setError((prevErrors) => [...prevErrors, message]);
    }
  };

  return (
    <LoginControllerRoot>
      <SignUpBubble
        style={{ position: "absolute", top: 0 }}
        width={window.width}
      />
      <KeyboardSwipeLayout>
        <ScrollView>
          <KeyboardAvoidingView
            behavior="position"
            style={{
              backgroundColor: "#0000",
              width: "100%",
              flex: 1,
              height: "100%",
              marginTop: units.top,
              padding: 30,
            }}
          >
            <Text style={styles.emoji}>👋</Text>
            <Text style={{
              fontSize: 34, fontFamily: "Poppins_500Medium",
            }}
            >
              Let's get started!
            </Text>
            <Layout style={{ marginTop: 20, marginBottom: 10, backgroundColor: "#0000" }}>
              <Text style={{ fontSize: 14, fontFamily: "Poppins_500Medium" }}>Email Address</Text>
            </Layout>
            <TextField
              placeholder="Email Address"
              value={email}
              ref={emailRef}
              onSubmitEditing={() => confirmEmailRef.current?.focus()}
              onChangeText={(e) => setEmail(e.toLowerCase())}
              keyboardType="email-address"
              autoCompleteType="email"
              scrollEnabled={false}
            />
            <TextField
              placeholder="Confirm Email Address"
              value={confirmEmail}
              ref={confirmEmailRef}
              onSubmitEditing={() => passwordRef.current?.focus()}
              onChangeText={(e) => setConfirmEmail(e.toLowerCase())}
              keyboardType="email-address"
              autoCompleteType="email"
              scrollEnabled={false}
            />
            <Layout style={{ marginTop: 20, marginBottom: 10, backgroundColor: "#0000" }}>
              <Text style={{ fontSize: 14, fontFamily: "Poppins_500Medium" }}>Password</Text>
            </Layout>
            <TextField
              scrollEnabled={false}
              secureTextEntry
              placeholder="•••••••••••"
              onChangeText={(e) => setPassword(e)}
              onSubmitEditing={() => confirmPasswordRef.current?.focus()}
              value={password}
              ref={passwordRef}
            />
            <TextField
              scrollEnabled={false}
              secureTextEntry
              placeholder="•••••••••••"
              onChangeText={(e) => setConfirmPassword(e)}
              onSubmitEditing={() => createProfile()}
              value={confirmPassword}
              ref={confirmPasswordRef}
            />
          </KeyboardAvoidingView>
          <Layout style={{
            backgroundColor: "#0000",
            flex: 0,
            alignItems: "center",
            justifyContent: "flex-end",
          }}
          >
            <Layout style={styles.tosContainer}>
              {/* Theme needs to be setup for this to be colored correctly */}
              <CheckBox
                style={styles.checkbox}
                checked={acceptedTerms}
                onChange={() => setAcceptedTerms(!acceptedTerms)}
              />
              <Text>
                I've read and accepted the
                {"\n"}
                <Text onPress={() => setTosModal(true)} style={[styles.bold, styles.clickable]}>
                  Terms and Conditions
                </Text>
                {" "}
                and
                {" "}
                <Text onPress={() => setPrivacyModal(true)} style={[styles.bold, styles.clickable]}>
                  Privacy Policy
                </Text>
              </Text>
            </Layout>
            <PrimaryButton
              disabled={!acceptedTerms}
              onPress={createProfile}
            >
              Create Profile
            </PrimaryButton>
            <Text style={[styles.bold]}>
              I already have an account!
            </Text>
            <Text style={[styles.bold]}>
              Where can I
              {" "}
              <Text onPress={() => onLogIn()} style={[styles.bold, styles.clickable]}>sign in</Text>
              ?
            </Text>
          </Layout>
        </ScrollView>
      </KeyboardSwipeLayout>
      <TosModal open={tosModal} setOpen={setTosModal} title="Terms of Service" />
      <PrivacyModal open={privacyModal} setOpen={setPrivacyModal} title="Privacy Policy" />
    </LoginControllerRoot>

  );
};

const styles = StyleSheet.create({
  checkbox: {
    color: "#FBBA82",
    marginRight: 20,
  },
  emoji: { fontSize: 50 },
  clickable: { color: "#02A3F4" },
  bold: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 14,
  },
  tosContainer: {
    flexDirection: "row",
    width: "70%",
    marginHorizontal: 10,
    textAlign: "center",
    backgroundColor: "#0000",
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "space-between",
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
    width: "80%",
    minWidth: 200,
    backgroundColor: "#0000",
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

export default SignUpFormScreen;
