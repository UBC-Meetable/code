import React, { useState, useEffect } from "react";
import { StyleSheet, Text } from "react-native";
import { Layout } from "@ui-kitten/components";
import useUserProfile from "../../../hooks/useUserProfile";
import { Button } from "@ui-kitten/components";
import updateUserProfile from "../../../calls/updateUserCourses";
import InterestChips from "../../../../src/components/ui/InterestChips";
import { Interest } from "../../../../src/types";
import { interests } from "../../../../src/constants/interests";

const YourInterestsScreen = () => {
  const [userInterests, setUserInterests] = useState<Interest[]>(interests);
  const { info: userProfile } = useUserProfile();

  useEffect(() => {
    // load user interests data
    // setUserInterests
  }, []);

  useEffect(() => {
    console.log(userInterests);
  }, [userInterests]);

  // const selectInterest = (interest) => {
  //   setUserInterests({ ...userInterests, [interest]: true });
  // };
  // const deselectInterest = (interest) => {
  //   setUserInterests({ ...userInterests, [interest]: false });
  // };

  const selectInterest = {};
  const deselectInterest = {};

  return (
    <Layout style={styles.container}>
      <InterestChips
        selectInterest={selectInterest}
        deselectInterest={deselectInterest}
        userInterests={userInterests}
        interestCategory={"nerd stuff"}
      />
      <InterestChips
        selectInterest={selectInterest}
        deselectInterest={deselectInterest}
        userInterests={userInterests}
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
