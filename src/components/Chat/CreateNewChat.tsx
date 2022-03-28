import { Layout } from "@ui-kitten/components";
import React from "react";
import {
  Dimensions,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
} from "react-native";
import { IconButton, Searchbar } from "react-native-paper";
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
        <Layout style={styles.topLayer}>
          <IconButton style={styles.closeButton} icon="close" />
        </Layout>

        <Layout style={[styles.titleContainer]}>
          <Text style={styles.titleText}>New Chat</Text>
        </Layout>

        <Searchbar placeholder="Search" style={styles.searchBar} />
        <Text style={styles.text}>Suggested Contacts</Text>
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
  text: {
    marginLeft: 40,
    marginTop: 20,
  },
  closeButton: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },

  topLayer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    backgroundColor: "transparent",
  },
  searchBar: {
    width: "80%",
    marginTop: 26,
    marginLeft: 38,
  },

  titleText: {
    fontSize: 20,
    color: "#000",
    fontFamily: "Poppins_700Bold",
    justifyContent: "center",
    display: "flex",
  },

  titleContainer: {
    marginLeft: "5%",
    marginRight: "5%",
    flexDirection: "row",
    backgroundColor: "transparent",
    justifyContent: "center",
  },
});

export default CreateNewChat;
