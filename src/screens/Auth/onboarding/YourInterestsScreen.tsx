import React, { useState } from "react";
import { StyleSheet} from "react-native";
import { Layout} from "@ui-kitten/components";
import useUserProfile from "../../../hooks/useUserProfile";
import updateUserProfile from "../../../calls/updateUserCourses";
import InterestChipsArray from "../../../components/ui/InterestChipsArray";

const YourInterestsScreen = () => {
  const [interests, setInterests] = useState<string[]>([]);
  const { info: userProfile } = useUserProfile();

  return (
    <Layout style={styles.container}>
      <InterestChipsArray
        interestsList={["reading", "coding", "anime", "painting"]}
        interestCategory={"nerd stuff"}
      />

      <InterestChipsArray
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
