import { useHeaderHeight } from "@react-navigation/stack";
import { Layout, Text } from "@ui-kitten/components";
import React from "react";
import { StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Colors from "../../constants/Colors";

type MainProps = any;

const MainDMScreen = (props:MainProps) => {
  const headerHeight = useHeaderHeight();
  const units = useSafeAreaInsets();
  return (
    <Layout style={{
      paddingTop: headerHeight,
      backgroundColor: Colors.theme.background,
      flex: 1,
    }}
    >
      <Layout style={{
        backgroundColor: "#0000", flex: 1, paddingBottom: units.bottom, padding: 10,
      }}
      >
        <Text>hi</Text>
      </Layout>
    </Layout>

  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: "column",
    alignItems: "center",
    flex: 1,
    borderWidth: 1,
  },
});

export default MainDMScreen;
