import React from "react";
import {
  StyleSheet,
  View,
  Text,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Tag from "./profile/Tag";

type SuggestFriendProps = {
  name: string;
  faculty: string;
  courses: string[];
  interests: string[];
}

const SuggestedFriend = ({
  name, interests, courses, faculty,
}: SuggestFriendProps) => {
  const firstTwoInterests = interests.slice(0, 2);
  const firstFourCourses = courses.slice(0, 4);
  return (
    // TODO: fix linear gradient
    <LinearGradient
      start={{ x: 0.3, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={["rgba(255, 255, 255, 0.6)", "rgba(255, 255, 255, 1)"]}
      style={styles.card}
    >
      <View>
        <View style={styles.image} />
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.faculty}>{faculty}</Text>
      </View>
      <View>
        <View style={styles.interestsContainer}>
          {firstTwoInterests.map((interest, index) => <Tag type="interest" text={interest} key={index} />)}
        </View>
        <View style={styles.coursesContainer}>
          {firstFourCourses.map((course, index) => <Tag type="course" text={course} key={index} />)}
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 170,
    height: 225,
    paddingRight: 2,
    paddingLeft: 2,
    paddingTop: 8,
    paddingBottom: 5,
    flex: 1,
    alignItems: "center",
    overflow: "hidden",
    marginRight: 10,
    borderRadius: 25,
    borderWidth: 0.1,
  },
  name: {
    fontSize: 21,
    fontWeight: "500",
    margin: 0,
    alignSelf: "center",
  },
  faculty: {
    fontSize: 15,
    fontWeight: "300",
    margin: 0,
    marginBottom: 10,
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
  image: {
    alignSelf: "center",
    height: 50,
    width: 50,
    backgroundColor: "#e7f0ff",
    borderRadius: 50,
  },
});

export default SuggestedFriend;
