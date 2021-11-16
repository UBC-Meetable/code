import Auth from "@aws-amplify/auth";
import {
  CheckBox, Input, Layout, Text,
} from "@ui-kitten/components";
import React, { useRef, useState } from "react";
import { Dimensions, KeyboardAvoidingView, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import LoginControllerRoot from "../../../components/ui/LoginControllerRoot";
import PrimaryButton from "../../../components/ui/PrimaryButton";
import TextField from "../../../components/ui/TextField";
import TosModal, { PrivacyModal } from "../../../navigation/TosModal";
import ErrorModal from "../../../navigation/ErrorsModal";
import SignUpBubble from "../../../assets/images/verify-bubble.svg";
import KeyboardSwipeLayout from "../ui/KeyboardSwipeLayout";

const window = Dimensions.get("window");

type SignUpFormScreenProps = {
  onLogIn: () => void,
  onCreate: (email: string, password: string) => void,
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
  const [errorModal, setErrorModal] = useState(false);
  const units = useSafeAreaInsets();
  const [loading, setLoading] = useState(false);

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
    console.log("Attempting create profile");
    setError([]);

    if (!confirmForm()) {
      console.error(errors);
      setErrorModal(true);
      return;
    }
    console.log("Confirmed form");

    try {
      setLoading(true);
      console.log("Creating user");

      const user = await Auth.signUp({
        username: email,
        password,
      });
      console.log(user);

      onCreate(email, password);
    } catch (e: any) {
      const message = e.message as string;
      console.log(e);

      setError((prevErrors) => [...prevErrors, message]);
      setErrorModal(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <LoginControllerRoot>
      <SignUpBubble
        style={styles.bubble}
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
            <Text
              style={{ fontSize: 34 }}
            >
              Let's get started!
            </Text>
            <Layout
              style={{
                marginTop: 20,
                marginBottom: 10,
                backgroundColor: "#0000",
              }}
            >
              <Text style={{ fontSize: 14, fontFamily: "Poppins_500Medium" }}>
                Email Address
              </Text>
            </Layout>
            <TextField
              style={styles.field}
              placeholder="Email Address"
              value={email}
              ref={emailRef}
              onSubmitEditing={() => confirmEmailRef.current?.focus()}
              onChangeText={(e) => {
                setEmail(e);
              }}
              keyboardType="email-address"
              autoCompleteType="email"
              scrollEnabled={false}
            />
            <TextField
              style={styles.field}
              placeholder="Confirm Email Address"
              value={confirmEmail}
              ref={confirmEmailRef}
              onSubmitEditing={() => passwordRef.current?.focus()}
              onChangeText={(e) => setConfirmEmail(e)}
              keyboardType="email-address"
              autoCompleteType="email"
              scrollEnabled={false}
            />
            <Layout
              style={{
                marginTop: 20,
                marginBottom: 10,
                backgroundColor: "#0000",
              }}
            >
              <Text style={{ fontSize: 14, fontFamily: "Poppins_500Medium" }}>
                Password
              </Text>
            </Layout>
            <TextField
              style={styles.field}
              scrollEnabled={false}
              secureTextEntry
              placeholder="•••••••••••"
              onChangeText={setPassword}
              onSubmitEditing={() => confirmPasswordRef.current?.focus()}
              value={password}
              ref={passwordRef}
            />
            <TextField
              style={styles.field}
              scrollEnabled={false}
              secureTextEntry
              placeholder="•••••••••••"
              onChangeText={(e) => setConfirmPassword(e)}
              onSubmitEditing={() => createProfile()}
              value={confirmPassword}
              ref={confirmPasswordRef}
            />
          </KeyboardAvoidingView>
          <Layout style={styles.footer}>
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
                <Text
                  onPress={() => setTosModal(true)}
                  style={[styles.bold, styles.clickable]}
                >
                  Terms and Conditions
                </Text>
                {" "}
                and
                {" "}
                <Text
                  onPress={() => setPrivacyModal(true)}
                  style={[styles.bold, styles.clickable]}
                >
                  Privacy Policy
                </Text>
              </Text>
            </Layout>
            <PrimaryButton
              status="info"
              loading={loading}
              disabled={!acceptedTerms}
              onPress={createProfile}
            >
              Create Profile
            </PrimaryButton>
            <Text>I already have an account!</Text>
            <Text>
              Where can I
              {" "}
              <Text onPress={onLogIn} style={styles.clickable}>
                sign in
              </Text>
              ?
            </Text>
          </Layout>
        </ScrollView>
      </KeyboardSwipeLayout>
      <TosModal
        open={tosModal}
        setOpen={setTosModal}
        title="Terms of Service"
      />
      <PrivacyModal
        open={privacyModal}
        setOpen={setPrivacyModal}
        title="Privacy Policy"
      />
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
  bubble: {
    position: "absolute",
    top: 0,
  },
  field: {
    marginVertical: 5,
  },
  checkbox: {
    color: "#FBBA82",
    marginRight: 20,
  },
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
  footer: {
    backgroundColor: "#0000",
    flex: 0,
    alignItems: "center",
    justifyContent: "flex-end",
  },
});

export default SignUpFormScreen;
