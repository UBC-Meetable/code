import Auth from "@aws-amplify/auth";
import { StackNavigationProp } from "@react-navigation/stack";
import { Layout } from "@ui-kitten/components";
import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PrimaryButton from "../components/ui/PrimaryButton";
import GradientButton from "../components/ui/GradientButton";
import { RootStackParamList } from "../types";

const ProfileSettingsScreen = ({ navigation }: { navigation: StackNavigationProp<RootStackParamList, "ProfileSettings", "EditInterests">; }) => {
  const handleLogout = async () => {
    Auth.signOut();
    navigation.reset({
      index: 0,
      routes: [{ name: "Home" }],
    });
  };

  return (
    <SafeAreaView style={styles.root}>
      {/* <Layout style={styles.container} /> */}
      {/* <ScrollView contentContainerStyle={styles.selectionsContainer} /> */}
      <Layout style={{ backgroundColor: "transparent", flex: 1, width: "90%" }}>
        <GradientButton onPress={() => navigation.push("EditInterests")} style={{ marginTop: 50, width: "100%", borderRadius: 25 }}>
          Edit Interests
        </GradientButton>
      </Layout>
      <PrimaryButton status="info" onPress={handleLogout}>
        Log Out
      </PrimaryButton>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    display: "flex",
    height: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    // margin: 20,
    // backgroundColor: Colors.theme.lightCreme,
  },
  // container: {
  //   width: "100%",
  //   margin: 10,
  //   // marginTop: 10,
  //   // marginLeft: 10,
  //   // marginRight: 10,
  //   // marginBottom: 10,
  //   // backgroundColor: Colors.theme.lightCreme,
  // },
  // selectionsContainer: {
  //   display: "flex",
  //   flexDirection: "column",
  //   justifyContent: "space-between",
  //   alignItems: "center",
  //   width: "75%",
  //   // backgroundColor: Colors.theme.lightCreme,
  //   marginTop: 10,
  //   marginBottom: 10,
  //   marginLeft: 10,
  //   marginRight: 10,
  // },
});

export default ProfileSettingsScreen;
