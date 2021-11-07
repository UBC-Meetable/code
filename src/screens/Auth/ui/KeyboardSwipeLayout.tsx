import { Layout } from "@ui-kitten/components";
import React, { ReactNode } from "react";
import { StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

type KeyboardSwipeLayoutProps = {
  children?: ReactNode | ReactNode[]
};

const KeyboardSwipeLayout = ({ children }:KeyboardSwipeLayoutProps) => (
  <Layout style={styles.root}>
    <ScrollView
      style={styles.container}
      scrollEnabled={false}
      keyboardDismissMode="on-drag"
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{ flex: 1 }}
      bounces={false}
    >
      {children}
    </ScrollView>
  </Layout>
);

const styles = StyleSheet.create({
  root: {
    flex: 1,
    width: "100%",
    backgroundColor: "#0000",
    display: "flex",
    flexDirection: "column",
  },
  container: {
    display: "flex", flexDirection: "column", width: "100%",
  },
});

export default KeyboardSwipeLayout;
