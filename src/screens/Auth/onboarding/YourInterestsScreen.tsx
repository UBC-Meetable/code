import React, { useState, useEffect } from "react";
import { StyleSheet, Text } from "react-native";
import { Layout } from "@ui-kitten/components";
import useUserProfile from "../../../hooks/useUserProfile";
import { Button } from "@ui-kitten/components";
import updateUserProfile from "../../../calls/updateUserCourses";
import InterestChips from "../../../../src/components/ui/InterestsChips";
import { Interest } from "../../../../src/types";
import { interests } from "../../../../src/constants/Interests";

const YourInterestsScreen = () => {
  const [userInterests, setUserInterests] = useState<Interest[]>(interests);
  const { info: userProfile } = useUserProfile();

  useEffect(() => {
    if (userProfile && userProfile.interests) {
      setUserInterests(userProfile.interests);
    }
  }, []);

  const updateSelectStatus = (index: number) => {
    let userInterestsCopy = [...userInterests];
    let userInterest = { ...userInterestsCopy[index] };
    userInterest.selected = !userInterest.selected;
    userInterestsCopy[index] = userInterest;
    setUserInterests(userInterestsCopy);
  };

  return (
    <Layout style={styles.container}>
      <InterestChips
        updateSelectStatus={updateSelectStatus}
        userInterests={userInterests}
        interestCategory={"nerd stuff"}
      />
      <InterestChips
        updateSelectStatus={updateSelectStatus}
        userInterests={userInterests}
        interestCategory={"outdoor activities"}
      />

      <Button
        style={styles.button}
        onPress={() => {
          if (userProfile) {
            console.log(userProfile.id);
          }
          updateUserProfile({
            id: userProfile!.id,
            interests: userInterests,
          });
        }}
      >
        Done
      </Button>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0000",
    marginTop: 135,
    marginLeft: 30,
  },
  button: {
    marginTop: 20,
    marginLeft: 70,
    width: "50%",
  },
});

export default YourInterestsScreen;
