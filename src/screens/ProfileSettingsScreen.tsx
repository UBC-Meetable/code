import Auth from "@aws-amplify/auth";
import { StackNavigationProp } from "@react-navigation/stack";
import { Layout } from "@ui-kitten/components";
import React from "react";
import { StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/Colors";
import { RootStackParamList } from "../types";

const ProfileSettingsScreen = ({ navigation }:{ navigation: StackNavigationProp<RootStackParamList, "ProfileSettings">; }) => {
  const handleLogout = async () => {
    Auth.signOut();
    navigation.reset({
      index: 0,
      routes: [{ name: "Home" }],
    });
  };

  return (
    <Layout style={styles.root}>
      <ScrollView style={styles.listContainer} contentContainerStyle={styles.mainList}>
        <PrimaryButton
          status="control"
          onPress={() => navigation.push("EditCourses")}
        >
          Edit Courses
        </PrimaryButton>
      </ScrollView>
      <PrimaryButton
        status="info"
        onPress={handleLogout}
      >
        Log Out
      </PrimaryButton>
    </Layout>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
  },
  mainList: {
    width: "100%",
    // flex: 1,
    backgroundColor: Colors.theme.transparent,
  },
  root: {
    paddingTop: 10,
    flex: 1,
    display: "flex",
    height: "100%",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: Colors.theme.lightCreme,
  },
  container: {
    width: "100%",
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    backgroundColor: Colors.theme.lightCreme,
  },
  selectionsContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "75%",
    backgroundColor: Colors.theme.lightCreme,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },
});

export default ProfileSettingsScreen;
