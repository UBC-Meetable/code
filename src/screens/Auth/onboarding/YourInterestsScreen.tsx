import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Text } from "@ui-kitten/components";
import useUserProfile from "../../../hooks/useUserProfile";
import { SignUpParamList } from "../../../types";
import InterestChips from "../../../components/ui/InterestsChips";
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
  const [userInterests, setUserInterests] = useState<string[]>([]);
  const { loading, set, ...userProfile } = useUserProfile();
  const units = useSafeAreaInsets();

  const onSubmit = async () => {
    await set({
      id: userProfile!.id,
      interests: userInterests,
    });
    navigation.navigate("NewEditCoursesScreen");
  };

  const updateSelectStatus = (interest: string) => {
    setUserInterests([...userInterests, interest]);
  };

  return (
    <ScrollView
      contentContainerStyle={[{
        alignItems: "center",
        margin: 20,
      }, {
        paddingTop: units.top,
      }]}
      bounces={false}
    >
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
    // marginTop: 50
  },
});

export default YourInterestsScreen;
