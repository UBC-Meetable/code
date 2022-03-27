import { Layout } from "@ui-kitten/components";
import React from "react";
import {
  Dimensions,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
} from "react-native";
import CourseGroupBackground from "../../assets/images/coursegroupbackground.svg";
const window = Dimensions.get("window");
import { useSafeAreaInsets } from "react-native-safe-area-context";

type CreateNewChatProps = {};

const CreateNewChat = ({}: CreateNewChatProps) => {
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
          <Text style={styles.titleText}>New Chat</Text>
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
  },

  titleText: {
    fontSize: 20,
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

export default CreateNewChat;
