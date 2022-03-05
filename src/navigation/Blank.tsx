import { Layout, Spinner } from "@ui-kitten/components";
import React from "react";
import { Dimensions, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import LoginRocket from "../assets/images/login-background.svg";
import LoginPageBubbleTop from "../assets/images/login-page-bubble-top.svg";

const window = Dimensions.get("window");
const Blank = () => {
  const units = useSafeAreaInsets();
  return (
    <Layout style={styles.root}>
      <LoginPageBubbleTop
        style={[styles.top, { top: -units.top }]}
        width={window.width}
        height={window.height}
      />
      <Layout style={[styles.container, { top: window.height / 2 }]}>
        <Spinner />
      </Layout>
      <LoginRocket
        style={styles.rocket}
        width={window.width}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    display: "flex",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0000",
  },
  top: {
    position: "absolute",
  },
  container: {
    position: "absolute",
    zIndex: 1000,
    backgroundColor: "#0000",
  },
  rocket: {
    position: "absolute",
    top: 0,
  },
});

export default Blank;
