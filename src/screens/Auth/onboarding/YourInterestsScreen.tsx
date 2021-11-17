import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { Layout } from "@ui-kitten/components";
import useUserProfile from "../../../hooks/useUserProfile";
import InterestChipsArray from "../../../components/ui/InterestChipsArray";
import { Button } from "@ui-kitten/components";
import updateUserProfile from "../../../calls/updateUserCourses";

const YourInterestsScreen = () => {
  const [interests, setInterests] = useState<string[]>([]);
  const { info: userProfile } = useUserProfile();

  useEffect(() => {
    console.log(interests);
  }, [interests]);

  const addInterest = (interestToAdd: string) => {
    // setInterests((prevState) => prevState.concat(interestToAdd));
    setInterests([...interests, interestToAdd]);
  };

  const removeInterest = (interestToRemove: string) => {
    setInterests((prevState) =>
      prevState.filter((interest) => interest !== interestToRemove)
    );
  };

  // Add a Done button at the end of the return. that's where the  user's data gets updated in the back-end
  return (
    <Layout style={styles.container}>
      <InterestChipsArray
        addInterest={addInterest}
        removeInterest={removeInterest}
        interestsList={["reading", "coding", "anime", "painting"]}
        interestCategory={"nerd stuff"}
      />
      <InterestChipsArray
        addInterest={addInterest}
        removeInterest={removeInterest}
        interestsList={[
          "swimming",
          "snowboarding",
          "hiking",
          "mountain biking",
        ]}
        interestCategory={"outdoor activities"}
      />
      <Button
        style={styles.button}
        onPress={async () => {
          if (userProfile) {
            console.log(userProfile.id);
          }
          await updateUserProfile({
            id: userProfile!.id,
            interests: interests,
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
