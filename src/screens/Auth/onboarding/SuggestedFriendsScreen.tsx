import React, { useContext, useEffect, useState } from "react";
import { useWindowDimensions, StyleSheet } from "react-native";
import { Layout, Text } from "@ui-kitten/components";
import useUserProfile from "../../../hooks/useUserProfile";
import updateUserProfile from "../../../calls/updateUserCourses";
import BubbleBackground from "../../../assets/images/quizBubble.svg";
import PrimaryButton from "../../../components/ui/PrimaryButton";

const SuggestedFriendsScreen = () => {
  const [findFriendsOption, setFindFriendsOption] = useState<boolean>(false);
  const { info: userProfile } = useUserProfile();
  const { height, width } = useWindowDimensions();
  return (
    <Layout style={styles.container}>
      <BubbleBackground
        width={width}
        height={height}
        style={{ position: "absolute" }}
      />
      <Text>Would you like for us to help you find some new friends?</Text>
    
      <PrimaryButton
        status="primary"
        onPress={() => {
          console.log(`yes was clicked: ${findFriendsOption}`);
          setFindFriendsOption(true);
        }}
      >
        yes
      </PrimaryButton>
      <PrimaryButton
        status="primary"
        onPress={() => {
          console.log(`no was clicked: ${findFriendsOption}`);
          setFindFriendsOption(false);
        }}
      >
        no
      </PrimaryButton>
      <PrimaryButton
        status="primary"
        onPress={async () => {
          console.log(`done was clicked: ${findFriendsOption}`);
          await updateUserProfile({
            id: userProfile!.id,
            findFriendsOptionSelected: findFriendsOption,
          });
        }}
      >
        done
      </PrimaryButton>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#0000",
    marginTop: 250,
    marginLeft: 30
  },
});

export default SuggestedFriendsScreen;
