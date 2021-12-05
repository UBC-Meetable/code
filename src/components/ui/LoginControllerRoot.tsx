import { Layout } from "@ui-kitten/components";
import React from "react";
import { StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Colors from "../../constants/Colors";

type LoginControllerRootProps = {children: React.ReactNode};

const LoginControllerRoot = ({ children }:LoginControllerRootProps) => {
  const units = useSafeAreaInsets();
  return (
    <Layout style={[styles.root, {
      top: -units.top,
      marginBottom: -units.top * 2 - units.bottom,
      paddingBottom: units.bottom + units.top,
    }]}
    >
      {children}
    </Layout>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    position: "relative",
    display: "flex",
    height: "100%",
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: Colors.theme.background,
  },
});
export default LoginControllerRoot;
