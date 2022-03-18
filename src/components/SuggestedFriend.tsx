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
  return (
    <LinearGradient
      start={{ x: 0.3, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={["#fffefd", "#f5fbf5"]}
      style={styles.card}
    >
      <View>
        {/* Replace with profile picture component */}
        <View style={styles.image} />
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.faculty}>{faculty}</Text>
      </View>
      <View>
        <View style={styles.interestsContainer}>
          {interests.map((interest) => <Tag type="interest" text={interest} />)}
        </View>
        <View style={styles.coursesContainer}>
          {courses.map((course) => <Tag type="course" text={course} />)}
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
    backgroundColor: "#e7f0ff",
    flexDirection: "column",
    flex: 1,
    alignItems: "center",
    overflow: "hidden",
    marginRight: 10,
    borderRadius: 25,
    borderWidth: 1,
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
