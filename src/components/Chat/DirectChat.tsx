import { Layout } from "@ui-kitten/components";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import React from "react";
import {
  StyleSheet,
  Text,
  Dimensions,
  Platform,
  SafeAreaView,
} from "react-native";
import CourseGroupBackground from "../../assets/images/coursegroupbackground.svg";

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
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
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
  titleContainer: {
    marginLeft: "5%",
    marginRight: "5%",
    flexDirection: "row",
    backgroundColor: "transparent",
    justifyContent: "space-between",
  },
});

export default DirectChat;
