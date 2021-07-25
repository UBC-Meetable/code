import { Layout } from "@ui-kitten/components";
import React, { ReactNode } from "react";
import { KeyboardAvoidingView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import rootStyles from "../../components/styles/rootStyles";

type KeyboardSwipeLayoutProps = {
  children?: ReactNode | ReactNode[]
};

const KeyboardSwipeLayout = ({ children }:KeyboardSwipeLayoutProps) => (
  <Layout style={[rootStyles, { height: "100%", width: "100%" }]}>
    <ScrollView
      style={{ width: "100%" }}
      scrollEnabled={false}
      keyboardDismissMode="interactive"
      contentContainerStyle={[rootStyles]}
      bounces={false}
    >
      {children}
    </ScrollView>
  </Layout>
);

export default KeyboardSwipeLayout;
