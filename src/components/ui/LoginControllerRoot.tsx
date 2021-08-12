import { Layout } from "@ui-kitten/components";
import React from "react";
import { Platform, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Colors from "../../constants/Colors";

type LoginControllerRootProps = {children: React.ReactNode};

const LoginControllerRoot = ({ children }:LoginControllerRootProps) => {
  const units = useSafeAreaInsets();
  return (
    <Layout style={[styles.root, {
      position: "relative",
      top: -units.top,
      marginBottom: -units.bottom - units.top,
      paddingBottom: units.bottom,
    }]}
    >
      {children}
    </Layout>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    display: "flex",
    height: "100%",
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: Colors.theme.background,
  },
});
export default LoginControllerRoot;
