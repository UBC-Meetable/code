import React from "react";
import {
  StyleSheet,
  View,
  Text,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import ProfilePicture from "./ProfilePicture";
import Tag from "./profile/Tag";
import { ProfilePictureSize } from "../types";

type SuggestFriendProps = {
  firstName: string;
  lastName: string;
  major: string;
  courses: string[];
  interests: string[];
  profilePicture: string;
  courseGroups: any;
}

const SuggestedFriend = ({
  firstName, lastName, interests = [], courses = ["APSC 280", "COMM 314", "CPSC 210", "CPSC 121"], major, profilePicture,
}: SuggestFriendProps) => {
  const firstTwoInterests = interests.slice(0, 2);
  const firstTwoCourses = courses.slice(0, 2);
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={["rgba(255, 255, 255, 0.2)", "rgba(255, 255, 255, 0.8)"]}
      style={styles.card}
    >
      <View>
        <ProfilePicture imageKey={profilePicture} size={ProfilePictureSize.FRIEND} imageStyle={{ alignSelf: "center", margin: 10 }} />
        <Text style={styles.name}>{[firstName, lastName].filter((s) => s).join(' ').trim() || "Test User"}</Text>
        <Text style={styles.major}>{major || "Major"}</Text>
      </View>
      <View>
        <View style={styles.interestsContainer}>
          {firstTwoInterests.map((interest, index) => <Tag type="interest" text={interest} key={index} />)}
        </View>
        <View style={styles.coursesContainer}>
          {firstTwoCourses.map((course, index) => <Tag type="course" text={course} key={index} />)}
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 170,
    height: 230,
    paddingRight: 2,
    paddingLeft: 2,
    paddingTop: 8,
    paddingBottom: 5,
    flex: 1,
    alignItems: "center",
    overflow: "hidden",
    marginRight: 10,
    borderRadius: 25,
  },
  name: {
    fontSize: 18,
    fontFamily: "Poppins_500Medium",
    textAlign: "center",
  },
  major: {
    fontSize: 14,
    fontFamily: "Poppins_400Regular",
    margin: 0,
    marginBottom: 10,
    textAlign: "center",
  },
  interestsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 3,
  },
  coursesContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
  },
});

export default SuggestedFriend;
