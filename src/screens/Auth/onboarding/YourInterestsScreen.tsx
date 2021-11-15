import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Layout } from "@ui-kitten/components";
import useUserProfile from "../../../hooks/useUserProfile";
import InterestChipsArray from "../../../components/ui/InterestChipsArray";
import updateUserProfile from "../../../calls/updateUserCourses";

const YourInterestsScreen = () => {
  const [interests, setInterests] = useState<string[]>([]);
  const { info: userProfile } = useUserProfile();

  const addInterest = (interestToAdd: string) => {
    setInterests((prevState) => prevState.concat(interestToAdd));
    console.log(interests);
  };

  const removeInterest = (interestToRemove: string) => {
    setInterests((prevState) =>
      prevState.filter((interest) => interest !== interestToRemove)
    );
    console.log(interests);
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
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0000",
    marginTop: 135,
    marginLeft: 30,
  },
});

export default YourInterestsScreen;
