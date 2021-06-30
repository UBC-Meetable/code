import { StackNavigationOptions } from "@react-navigation/stack";
import { Layout } from "@ui-kitten/components";
import React from "react";
import { Dimensions } from "react-native";
import BubbleHeader from "../assets/images/header-bubble.svg";

const window = Dimensions.get("window");

export default {
  headerShown: false,
  headerStyle: {
    height: 150,
  },
  headerTitleAlign: "left",
  headerTitleContainerStyle: {
    height: "100%",
    alignItems: "flex-start",
    justifyContent: "flex-end",
  },
  headerTitleStyle: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 24,
    margin: 10,
    textAlign: "left",
  },
  headerBackground: () => (
    <Layout style={{ backgroundColor: "#0000" }}>
      <BubbleHeader width={window.width} height={150} />
    </Layout>
  ),
  cardStyle: { backgroundColor: "#FFF9F5" },
} as StackNavigationOptions;
