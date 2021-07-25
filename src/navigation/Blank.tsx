import { Layout, Spinner } from "@ui-kitten/components";
import React from "react";
import { Dimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import LoginRocket from "../assets/images/login-background.svg";
import LoginPageBubbleTop from "../assets/images/login-page-bubble-top.svg";

const window = Dimensions.get("window");
const Blank = () => {
  const units = useSafeAreaInsets();
  return (
    <Layout style={{
      flex: 1,
      display: "flex",
      height: "100%",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#0000",
    }}
    >
      <LoginPageBubbleTop
        style={{
          position: "absolute",
          top: -units.top,
        }}
        width={window.width}
        height={window.height}
      />
      <Layout style={{ position: "absolute", top: window.height / 2, zIndex: 1000 }}>
        <Spinner />
      </Layout>
      <LoginRocket
        style={{ position: "absolute", top: 0 }}
        width={window.width}
      />
    </Layout>
  );
};

export default Blank;
