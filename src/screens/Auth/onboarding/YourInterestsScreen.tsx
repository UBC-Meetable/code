import React, { useState, useEffect } from "react";
import { Dimensions, StyleSheet } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Layout, Button, Text } from "@ui-kitten/components";
import useUserProfile from "../../../hooks/useUserProfile";
import { SignUpParamList } from "../../../types";
import InterestChips, { Interest } from "../../../components/ui/InterestsChips";
import { nerdStuff, outdoorActivity } from "../../../constants/Interests";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import GradientButton from "../../../components/ui/GradientButton";
// import BubbleBackground from "../../../assets/images/quizBubble.svg";

// const window = Dimensions.get("window");

const YourInterestsScreen = ({
  navigation,
}: {
  navigation: StackNavigationProp<SignUpParamList, "YourInterestsScreen">;
}) => {
  const [userInterests, setUserInterests] = useState<Interest[]>([]);
  const { loading, set, ...userProfile } = useUserProfile();
  const units = useSafeAreaInsets();

  // useEffect(() => {
  //   if (userProfile && userProfile.interests) {
  //     setUserInterests(userProfile.interests);
  //   }
  // }, []);

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
    <ScrollView
      contentContainerStyle={[{
        flex: 1,
        // display: "flex",
        // height: "100%",
        // justifyContent: "space-between",
        alignItems: "center",
        margin: 20
      }, {
        paddingTop: units.top,
        // paddingHorizontal: 10,
        // paddingBottom: units.bottom
      }]}
      bounces={false}
    >
      {/* <BubbleBackground
        width={window.width}
        style={{ position: "absolute", top: -135, left: -30 }}
      /> */}
      <Text style={{
        fontFamily: "Poppins_600SemiBold",
        fontSize: 20,
        textAlign: "center",
      }}>Tell us your favourite interests!</Text>
      <InterestChips
        updateSelectStatus={updateSelectStatus}
        userInterests={nerdStuff}
        interestCategory="Nerd Stuff"
      />
      <InterestChips
        updateSelectStatus={updateSelectStatus}
        userInterests={outdoorActivity}
        interestCategory="Outdoor Activities"
      />
      <GradientButton style={styles.button} onPress={onSubmit}>
        Next
      </GradientButton>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  button: {
    // marginTop: 20,
    // marginLeft: 70,
    // width: "50%",
    alignContent: "flex-end",
  },
});

export default YourInterestsScreen;
