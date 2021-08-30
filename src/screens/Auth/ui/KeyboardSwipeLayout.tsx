import { Layout } from "@ui-kitten/components";
import React, { ReactNode } from "react";
import { ScrollView } from "react-native-gesture-handler";

type KeyboardSwipeLayoutProps = {
  children?: ReactNode | ReactNode[]
};

const KeyboardSwipeLayout = ({ children }:KeyboardSwipeLayoutProps) => (
  <Layout style={[{
    flex: 1,
    width: "100%",
    backgroundColor: "#0000",
    display: "flex",
    flexDirection: "column",
  }]}
  >
    <ScrollView
      style={{
        display: "flex", flexDirection: "column", width: "100%",
      }}
      scrollEnabled={false}
      keyboardDismissMode="none"
      contentContainerStyle={{ flex: 1 }}
      bounces={false}
    >
      {children}
    </ScrollView>
  </Layout>
);

export default KeyboardSwipeLayout;
