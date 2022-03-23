import { Layout } from "@ui-kitten/components";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import TextField from "../../components/ui/TextField";

import React from "react";
import {
  StyleSheet,
  Text,
  Dimensions,
  Platform,
  SafeAreaView,
  TextInput,
  View,
} from "react-native";
import CourseGroupBackground from "../../assets/images/coursegroupbackground.svg";
import { IconButton } from "react-native-paper";

type DirectChatProp = {};

const window = Dimensions.get("window");

const DirectChat = ({}: DirectChatProp) => {
  const units = useSafeAreaInsets();
  return (
    <>
      <CourseGroupBackground
        width={window.width}
        style={{ position: "absolute", opacity: 0.7 }}
      />

      <SafeAreaView
        style={{
          marginTop: Platform.OS === "android" ? units.top : 0,
          flex: 1,
        }}
      >
        <Layout style={[styles.titleContainer]}>
          <Text style={styles.titleText}>John Doe</Text>
        </Layout>

        <View
          style={{
            marginTop: 35,
            marginLeft: 20,
            backgroundColor: "#D3D3D3",
            width: "70%",
            height: "7%",
            borderRadius: 100,
          }}
        >
          <Text style={styles.message}>Hello dude. pls respond</Text>
        </View>

        <View
          style={{
            marginTop: 35,
            marginLeft: 20,
            backgroundColor: "#D3D3D3",
            width: "70%",
            height: "7%",
            borderRadius: 100,
          }}
        >
          <Text style={styles.message}>Hello dude. pls respond</Text>
        </View>
        <View
          style={{
            marginTop: 35,
            marginLeft: 20,
            backgroundColor: "#D3D3D3",
            width: "70%",
            height: "7%",
            borderRadius: 100,
          }}
        >
          <Text style={styles.message}>Hello dude. pls respond</Text>
        </View>
        <Layout style={[styles.replyContainer]}>
          <TextField style={styles.replyBar} />
          <IconButton icon="send" />
        </Layout>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  message: {
    marginTop: 15,
    marginLeft: 50,
    fontSize: 14,
  },
  replyBar: {
    width: "75%",
    marginLeft: 40,
  },
  titleContainer: {
    marginLeft: "5%",
    marginRight: "5%",
    flexDirection: "row",
    backgroundColor: "transparent",
    justifyContent: "space-between",
  },

  root: {
    backgroundColor: "#0000",
    position: "relative",
    overflow: "visible",
    display: "flex",
    alignItems: "center",
  },
  titleText: {
    fontSize: 32,
    color: "#000",
    fontFamily: "Poppins_700Bold",
  },
  replyContainer: {
    marginTop: "auto",
    flexDirection: "row",
    backgroundColor: "transparent",
  },
});

export default DirectChat;
