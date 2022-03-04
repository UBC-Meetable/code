import React, { useState, useEffect } from "react";
import { Dimensions, StyleSheet } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Layout, Button } from "@ui-kitten/components";
import useUserProfile from "../../../hooks/useUserProfile";
import { SignUpParamList, Interest } from "../../../types";
import InterestChips from "../../../components/ui/InterestsChips";
import { interests } from "../../../constants/Interests";
import BubbleBackground from "../../../assets/images/quizBubble.svg";

const window = Dimensions.get("window");

const YourInterestsScreen = ({
  navigation,
}: {
  navigation: StackNavigationProp<SignUpParamList, "YourInterestsScreen">;
}) => {
  const [userInterests, setUserInterests] = useState<Interest[]>(interests);
  const { loading, set, ...userProfile } = useUserProfile();

  useEffect(() => {
    if (userProfile && userProfile.interests) {
      setUserInterests(userProfile.interests);
    }
  }, []);

  const onSubmit = async () => {
    await set({
      id: userProfile!.id,
      interests: userInterests,
    });
    navigation.navigate("NewEditCoursesScreen");
  };

  const updateSelectStatus = (index: number) => {
    const userInterestsCopy = [...userInterests];
    const userInterest = { ...userInterestsCopy[index] };
    userInterest.selected = !userInterest.selected;
    userInterestsCopy[index] = userInterest;
    setUserInterests(userInterestsCopy);
  };

  return (
    <Layout style={styles.container}>
      <BubbleBackground
        width={window.width}
        style={{ position: "absolute", top: -135, left: -30 }}
      />
      <InterestChips
        updateSelectStatus={updateSelectStatus}
        userInterests={userInterests}
        interestCategory="nerd stuff"
      />
      <InterestChips
        updateSelectStatus={updateSelectStatus}
        userInterests={userInterests}
        interestCategory="outdoor activities"
      />
      <Button style={styles.button} onPress={onSubmit}>
        Next
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
