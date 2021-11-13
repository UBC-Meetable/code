import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Layout, Text, Toggle } from "@ui-kitten/components";
import useUserProfile from "../../../hooks/useUserProfile";
import updateUserProfile from "../../../calls/updateUserCourses";



const YourInterestsScreen = () => {
  const [interests, setInterests] = useState<string[]>([]);
  const { info: userProfile } = useUserProfile();

  return (
    <Layout style={styles.container}>
      <Text>interests screen. will update this text</Text>
      
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0000",
    marginTop: 250,
    marginLeft: 30,
  },
});

export default YourInterestsScreen;
