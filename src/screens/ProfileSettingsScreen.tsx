import { Auth } from "@aws-amplify/auth";
import { StackNavigationProp } from "@react-navigation/stack";
import { Layout } from "@ui-kitten/components";
import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CommonActions } from "@react-navigation/core";
import PrimaryButton from "../components/ui/PrimaryButton";
import GradientButton from "../components/ui/GradientButton";
import { ProfileStackParamList } from "../types";

const ProfileSettingsScreen = ({ navigation }: {
  navigation: StackNavigationProp<ProfileStackParamList>;
}) => {
  const handleLogout = async () => {
    Auth.signOut();
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          { name: "Home" },
        ],
      }),
    );
  };

  return (
    <SafeAreaView style={styles.root}>
      <Layout style={{ backgroundColor: "transparent", flex: 1 }}>
        <GradientButton onPress={() => navigation.push("EditInterests")} style={{ marginTop: 50, width: "90%" }}>
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
  },
});

export default ProfileSettingsScreen;
