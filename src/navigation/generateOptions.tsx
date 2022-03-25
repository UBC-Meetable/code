/* eslint-disable no-param-reassign */
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { Layout } from "@ui-kitten/components";
import { Dimensions, StyleProp, ViewStyle } from "react-native";
import ChatBackButton from "../components/Chat/ChatBackButton";
import Colors from "../constants/Colors";
import { RootStackParamList } from "../types";
import BubbleHeader from "../assets/images/chat-bubble.svg";

const window = Dimensions.get("window");

const generateOptions = (navigation:
  StackNavigationProp<RootStackParamList, keyof RootStackParamList>,
headerLeft: string | any) => {
  if (typeof headerLeft === "string") { headerLeft = () => <ChatBackButton navigation={navigation} label={headerLeft} />; }
  return ({
    cardStyle: {
      backgroundColor: Colors.theme.creme,
    },
    headerShown: true,
    headerTitle: "",
    headerLeft,
    // headerBackground: (props: {style: StyleProp<ViewStyle>}) => (
    //   <Layout
    //     {...props}
    //     style={{
    //       backgroundColor: Colors.theme.lightCreme,
    //     }}
    //   >
    //     <BubbleHeader width={window.width} height={100} />
    //   </Layout>
    // ),
  });
};
export default generateOptions;
