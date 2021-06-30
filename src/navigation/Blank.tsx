import { Layout } from "@ui-kitten/components";
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
      justifyContent: "flex-end",
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
      <LoginRocket
        style={{ position: "absolute", top: 0 }}
        width={window.width}
      />
    </Layout>
  );
};

export default Blank;
