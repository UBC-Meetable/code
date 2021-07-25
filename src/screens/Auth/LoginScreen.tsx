import {
  Button, Layout, Modal, Text,
} from "@ui-kitten/components";
import React, { useState } from "react";
import { Dimensions, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import LoginRocket from "../../assets/images/login-background.svg";
import BottomText from "./BottomText";

const window = Dimensions.get("window");

type LoginScreenProps = {
    onSignUp: () => void,
    onLogIn: () => void,
    onForgot: () => void,
    onConfirm: () => void,
}

const LoginScreen = ({
  onSignUp, onLogIn, onForgot, onConfirm,
}:LoginScreenProps) => {
  const units = useSafeAreaInsets();
  const [modalActive, setModalActive] = useState(false);
  return (
    <Layout style={styles.root}>
      <LoginRocket
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1,
        }}
        width={window.width}
      />
      <Layout
        style={{
          flex: 1,
          alignItems: "flex-start",
          width: "100%",
          padding: 10,
        }}
      >
        <Button
          style={styles.iconButton}
          onPress={() => setModalActive(true)}
        >
          Forgot Password + More
        </Button>
        <Modal
          visible={modalActive}
          backdropStyle={styles.backdrop}
          onBackdropPress={() => {
            setModalActive(false);
          }}
          style={[styles.modal, { marginTop: units.top + 50 }]}
        >
          <Layout style={styles.modalContainer}>
            <Button
              style={[styles.modalButton]}
              onPress={() => onForgot()}
            >
              Forgot your Password?
            </Button>
            <Button
              style={styles.modalButton}
              onPress={() => onConfirm()}
            >
              Confirm your Email
            </Button>

          </Layout>
        </Modal>
      </Layout>
      <Layout style={styles.bottomcontainer}>
        <Button
          style={styles.button}
          onPress={() => onSignUp()}
        >
          {(evaProps: any) => (
            <Text
              {...evaProps}
              style={{ ...evaProps.style, ...styles.buttonText }}
            >
              Sign Up
            </Text>
          )}
        </Button>
        <BottomText onPressText={onLogIn} />
      </Layout>
    </Layout>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    borderRadius: 5,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  modalButton: {
    margin: 10,
    textAlign: "left",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#02A3F4",
    borderWidth: 0,
  },
  iconButton: {
    backgroundColor: "#02A3F4",
    borderWidth: 0,
  },
  root: {
    flex: 1,
    display: "flex",
    height: "100%",
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#0000",
  },
  image: {
    width: "75%",
    maxHeight: "50%",
    padding: 10,
    marginBottom: 20,
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#c4c4c4",
    borderRadius: 40,
    borderWidth: 0,
    shadowColor: "black",
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.5,
    overflow: "visible",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
    width: "100%",
    height: "auto",
    flexDirection: "column",
  },
  bottomcontainer: {
    flex: 0,
    display: "flex",
    flexBasis: 150,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "transparent",
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
  topcontainer: {
    flex: 1,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
  backdrop: {
    backgroundColor: "rgba(251, 186, 130, 0.5)",
    width: "100%",
    height: "100%",
    flex: 1,
  },
});

export default LoginScreen;
