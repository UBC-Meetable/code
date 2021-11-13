import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Layout, Text, Toggle } from "@ui-kitten/components";
import useUserProfile from "../../../hooks/useUserProfile";
import updateUserProfile from "../../../calls/updateUserCourses";

const SuggestedFriendsScreen = () => {
  const [findFriendsOption, setFindFriendsOption] = useState<boolean>(false);
  const { info: userProfile } = useUserProfile();

  return (
    <Layout style={styles.container}>
      <Text>Would you like for us to help you find some new friends?</Text>
      <Toggle
        onChange={async () => {
          setFindFriendsOption(!findFriendsOption);
          console.log(`current option selected: ${findFriendsOption}`);
          if (userProfile) {
            console.log(userProfile.id);
          }
          await updateUserProfile({
            id: userProfile!.id,
            findFriendsOptionSelected: findFriendsOption,
          });
        }}
        checked={!findFriendsOption}
        style={styles.toggle}
      >
        Activate
      </Toggle>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0000",
    marginTop: 250,
    marginLeft: 30,
  },
  toggle: {
    marginTop: 75,
  },
});

export default SuggestedFriendsScreen;
