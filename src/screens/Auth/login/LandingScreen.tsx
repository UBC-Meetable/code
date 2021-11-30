import { Layout } from "@ui-kitten/components";
import React from "react";
import { Dimensions, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import LoginRocket from "../../../assets/images/login-background.svg";
import LoginControllerRoot from "../../../components/ui/LoginControllerRoot";
import PrimaryButton from "../../../components/ui/PrimaryButton";
import BottomText from "../ui/BottomText";

const window = Dimensions.get("window");

type LoginScreenProps = {
    onSignUp?: () => void,
    onLogIn?: () => void,
}

const LandingScreen = ({
  onSignUp, onLogIn,
}:LoginScreenProps) => {
  const units = useSafeAreaInsets();
  return (
    <LoginControllerRoot>
      <LoginRocket
        style={[styles.rocket, { paddingBottom: -units.bottom - units.top }]}
        width={window.width}
        height={window.height}
      />
      <Layout style={styles.bottomcontainer}>
        <PrimaryButton
          status="info"
          onPress={onSignUp}
        >
          Sign Up
        </PrimaryButton>
        <BottomText onPressText={onLogIn} />
      </Layout>
    </LoginControllerRoot>
  );
};

const styles = StyleSheet.create({
  rocket: {
    opacity: 1,
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 0,
  },
  bottomcontainer: {
    flex: 0,
    display: "flex",
    flexBasis: 150,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "transparent",
  },
});

export default LandingScreen;
