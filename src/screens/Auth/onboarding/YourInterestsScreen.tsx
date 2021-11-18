import React, { useState, useEffect } from "react";
import { StyleSheet, Text } from "react-native";
import { Layout } from "@ui-kitten/components";
import useUserProfile from "../../../hooks/useUserProfile";
import { Button } from "@ui-kitten/components";
import updateUserProfile from "../../../calls/updateUserCourses";
import { Interest } from "../../../../src/types";
import { Chip } from "react-native-paper";

const YourInterestsScreen = () => {
  const [userInterests, setUserInterests] = useState<Interest[]>([]);
  const { info: userProfile } = useUserProfile();

  useEffect(() => {
    // load user interests data
    // setUserInterests
  }, []);

  useEffect(() => {
    console.log(userInterests);
  }, [userInterests]);

  // const selectInterest = (interest) => {
  //   setUserInterests({...userInterests, [interest]: true})
  // }
  // const deselectInterest = (interest) => {
  //   setUserInterests({...userInterests, [interest]: false})
  // }

  return (
    <Layout style={styles.container}>
      <Text style={styles.title}>nerd stuff</Text>
      {userInterests.map((interest) => {
        if (interest.category == "nerd stuff") {
          return <Chip>label={interest.name}</Chip>;
        }
      })}

      <Text style={styles.title}>out-door activities</Text>
      {userInterests.map((interest) => {
        if (interest.category == "out-door activities") {
          return <Chip>label={interest.name}</Chip>;
        }
      })}

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
  title: {
    fontSize: 20,
    margin: 10,
  },
});

export default YourInterestsScreen;
