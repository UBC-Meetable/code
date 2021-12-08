import React, { useState, useEffect } from "react";
import { Dimensions, StyleSheet } from "react-native";
import { SignUpParamList } from "../../../types";
import { StackNavigationProp } from "@react-navigation/stack";
import { Layout } from "@ui-kitten/components";
import useUserProfile from "../../../hooks/useUserProfile";
import { Button } from "@ui-kitten/components";
import updateUserProfile from "../../../calls/updateUserCourses";
import InterestChips from "../../../../src/components/ui/InterestsChips";
import { Interest } from "../../../../src/types";
import { interests } from "../../../../src/constants/Interests";
import BubbleBackground from "../../../assets/images/quizBubble.svg";


const window = Dimensions.get("window");

const YourInterestsScreen = ({
  navigation,
}: {
  navigation: StackNavigationProp<SignUpParamList, "YourInterestsScreen">;
}) => {
  const [userInterests, setUserInterests] = useState<Interest[]>(interests);
  const { info: userProfile } = useUserProfile();

  useEffect(() => {
    if (userProfile && userProfile.interests) {
      setUserInterests(userProfile.interests);
    }
  }, []);

  const onSubmit = async () => {
    if (userProfile) {
      console.log(userProfile.id);
    }
    const response = await updateUserProfile({
      id: userProfile!.id,
      interests: userInterests,
    });

    
    if (response.data) {
      navigation.navigate("NewEditCourses");
    }
  };

  const updateSelectStatus = (index: number) => {
    let userInterestsCopy = [...userInterests];
    let userInterest = { ...userInterestsCopy[index] };
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
        interestCategory={"nerd stuff"}
      />
      <InterestChips
        updateSelectStatus={updateSelectStatus}
        userInterests={userInterests}
        interestCategory={"outdoor activities"}
      />

      <Button
        style={styles.button}
        onPress={
          //   () => {
          //   if (userProfile) {
          //     console.log(userProfile.id);
          //   }
          //   updateUserProfile({
          //     id: userProfile!.id,
          //     interests: userInterests,
          //   });
          // }


          () => {
            onSubmit();
          }
        }
      >
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
