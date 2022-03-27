/* eslint-disable no-shadow */
import { StackNavigationProp } from "@react-navigation/stack";
import { Layout, Spinner, Text } from "@ui-kitten/components";
import React, { useState } from "react";
import { Dimensions, Platform, SafeAreaView, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { IconButton, Searchbar } from "react-native-paper";
// import SwitchSelector from "react-native-switch-selector";
import CourseGroupBackground from "../assets/images/coursegroupbackground.svg";
import useUserProfile from "../hooks/useUserProfile";
import { RootStackParamList } from "../types";
import DirectChats from "../components/Chat/DirectChats";
import CourseChats from "../components/Chat/CourseChats";

const window = Dimensions.get("window");

enum ChatScreenNavigation {
  COURSE_CHATS = "COURSE_CHATS",
  DIRECT_CHATS = "DIRECT_CHATS",
}

type ChatProps = {
  navigation: StackNavigationProp<RootStackParamList, "Chats">;
};

const Chat = ({ navigation }: ChatProps) => {
  const [chatScreenMode, setChatScreenMode] = useState(
    ChatScreenNavigation.DIRECT_CHATS
  );
  const units = useSafeAreaInsets();
  const { loading } = useUserProfile();

  if (loading) return <Spinner />;
  return (
    <>
      {/* Background, Outside of Safe Area View */}
      <CourseGroupBackground
        width={window.width}
        style={{ position: "absolute", opacity: 0.7 }}
      />

      {/* TODO make this safe area a global component */}
      <SafeAreaView
        style={{
          marginTop: Platform.OS === "android" ? units.top : 0,
          flex: 1,
        }}
      >
        <Layout style={[styles.titleContainer]}>
          <IconButton
            onPress={() => {
              navigation.navigate("Home");
            }}
            icon="home"
          />

          <Text style={styles.titleText}>Chats</Text>
          <IconButton 
           onPress={() => {
            navigation.navigate("NewChat");
          }}
          
          icon="pencil" />
        </Layout>
        {/* <SwitchSelector
          font="bold"
          style={styles.switch}
          initial={0}
          onPress={(value: ChatScreenNavigation) => setChatScreenMode(value)}
          textColor="grey"
          selectedColor="black"
          buttonColor="#B5E6FE"
          borderColor="#B5E6FE"
          hasPadding
          options={[
            { label: "Course Chats", value: ChatScreenNavigation.COURSE_CHATS },
            { label: "Direct Chats", value: ChatScreenNavigation.DIRECT_CHATS },
          ]}
          testID="gender-switch-selector"
          accessibilityLabel="gender-switch-selector"
        /> */}
        <Searchbar placeholder="Search" style={styles.searchBar} />

        {chatScreenMode == ChatScreenNavigation.COURSE_CHATS ? (
          <Layout style={styles.chats}>
            <CourseChats />
          </Layout>
        ) : (
          <Layout style={styles.chats}>
            <DirectChats navigation={navigation} />
          </Layout>
        )}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  chats: {
    marginTop: 30,
    justifyContent: "center",
    flexDirection: "row",
  },
  switch: {
    width: "85%",
    marginLeft: 28,
    marginTop: 25,
  },
  searchBar: {
    width: "80%",
    marginTop: 30,
    marginLeft: 40,
  },

  titleText: {
    fontSize: 32,
    color: "#000",
    fontFamily: "Poppins_700Bold",
  },

  titleContainer: {
    marginLeft: "5%",
    marginRight: "5%",
    flexDirection: "row",
    backgroundColor: "transparent",
    justifyContent: "space-between",
  },
});

export default Chat;
