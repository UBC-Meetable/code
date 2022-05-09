import { StackNavigationProp, useHeaderHeight } from "@react-navigation/stack";
import { Input, Layout, Text } from "@ui-kitten/components";
import React, { useEffect } from "react";
import {
  ImageBackground,
  KeyboardAvoidingView, Platform, StyleSheet, View,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import OtherMessage from "../components/chat/OtherMessage";
import SelfMessage from "../components/chat/SelfMessage";
import { RootStackParamList } from "../types";
import { HeaderLeft } from "./GroupScreen";
import background from "../assets/images/meetable-background.jpeg";

type ChatScreenProps = {
  navigation: StackNavigationProp<RootStackParamList>;
  route: any;
}

const ChatScreen = ({ navigation, route }: ChatScreenProps) => {
  const { groupID, groupTitle } = route.params;
  console.log("groupID", groupID);

  const headerHeight = useHeaderHeight();
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitleAlign: "center",
      headerTitleStyle: styles.headerTitle,
      headerTransparent: true,
      headerLeft: () => <HeaderLeft navigation={navigation} />,
      headerTitle: groupTitle,
    });
  }, []);
  return (
    <ImageBackground source={background} style={{ flex: 1 }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={[styles.messageContainer, styles.background, { paddingTop: headerHeight }]}
      >
        <View style={{ flex: 1 }}>
          <ScrollView
            maintainVisibleContentPosition={{ minIndexForVisible: 0 }}
            keyboardDismissMode="interactive"
            keyboardShouldPersistTaps="handled"
            style={[styles.scroll]}
          >
            <SelfMessage />
            <SelfMessage />
            <OtherMessage />
            <OtherMessage />
            <SelfMessage />
            <OtherMessage />
            <SelfMessage />
            <SelfMessage />
            <OtherMessage />
            <OtherMessage />
            <SelfMessage />
            <OtherMessage />
            <SelfMessage />
            <SelfMessage />
            <OtherMessage />
            <OtherMessage />
            <SelfMessage />
            <OtherMessage />
            <SelfMessage />
            <SelfMessage />
            <OtherMessage />
            <OtherMessage />
            <SelfMessage />
            <OtherMessage />
          </ScrollView>
        </View>
        <Input multiline textStyle={[styles.inputText]} style={[styles.input]} placeholder="Say Hello 👋" />
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  scroll: {
    paddingHorizontal: 20,
  },
  inputText: {
    fontFamily: "Quicksand_400Regular",
  },
  input: {
    borderRadius: 20,
    borderWidth: 0,
    shadowColor: "#F0D9C8",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    maxHeight: "33%",
    shadowOpacity: 1,
    shadowRadius: 0,
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  background: {
    backgroundColor: "transparent",
    height: "100%",
  },
  rowTop: {
    backgroundColor: "transparent",
    marginTop: 30,
    marginLeft: -10,
  },
  row: {
    marginVertical: 10,
    backgroundColor: "transparent",
  },
  headerTitle: {
    fontFamily: "Poppins_700Bold",
    fontSize: 32,
  },
  messageContainer: {
    flex: 1,
    backgroundColor: "#0000",
    width: "100%",
  },
});
export default ChatScreen;
