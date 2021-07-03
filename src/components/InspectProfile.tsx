/* eslint-disable camelcase */
import { Layout, Text } from "@ui-kitten/components";
import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Chip } from "react-native-paper";
import { User } from "../API";
import Colors from "../constants/Colors";
import { ProfilePictureDimensions, ProfilePictureSize } from "../types";
import ProfilePicture from "./ProfilePicture";

const InspectProfile = ({ user }:{user: User}) => {
  const g = "h";
  return (
    <Layout style={styles.card}>
      <Layout style={styles.profileContainer}>
        <ProfilePicture
          imageKey={user.profilePicture || ""}
          size={ProfilePictureSize.PROFILE}
        />
      </Layout>
      <Layout style={styles.nameContainer}>
        <Text style={styles.name}>{`${user.firstName}`}</Text>
        <Text style={styles.name}>{`${user.lastName}`}</Text>
      </Layout>
      <Layout style={styles.mainContent}>
        <Layout style={styles.bioContainer}>
          <Text style={styles.header}>Bio</Text>
          <ScrollView style={styles.scroll}>
            <Text style={styles.bio}>
              {`${user.bio}`}
            </Text>
          </ScrollView>
        </Layout>
        <Layout style={styles.interestContainer}>
          <Text style={styles.header}>Matching Interests</Text>
          <Layout style={styles.chips}>
            <Chip style={[styles.matching, styles.chip]}>Coding</Chip>
            <Chip style={[styles.matching, styles.chip]}>Music</Chip>
            <Chip style={[styles.matching, styles.chip]}>Biology</Chip>
            <Chip style={[styles.nonMatching, styles.chip]}>Basketball</Chip>
            <Chip style={[styles.nonMatching, styles.chip]}>Marketing</Chip>
          </Layout>
        </Layout>
      </Layout>
    </Layout>
  );
};

const transformPictureDistance = -ProfilePictureDimensions.PROFILE.height / 2;

const styles = StyleSheet.create({
  scroll: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#C9E8F3",
  },
  root: {
    width: "100%",
  },
  profileContainer: {
    backgroundColor: "#0000",
    transform: [{ translateY: transformPictureDistance }],
    marginBottom: transformPictureDistance,
    alignItems: "center",
  },
  mainContent: {
    backgroundColor: "#0000",
    flex: 1,
    flexGrow: 1,
    borderColor: "green",
    width: "100%",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: "space-evenly",
  },
  chips: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "baseline",
    flex: 1,
    backgroundColor: "#0000",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  matching: {
    backgroundColor: "#94DBCE",
  },
  nonMatching: {
    backgroundColor: Colors.theme.creme,
  },
  chip: {
    display: "flex",
    justifyContent: "center",
    maxWidth: 120,
    margin: 3,
    flexGrow: 1,
  },
  bio: {
    margin: 5,
    flex: 1,
  },
  header: {
    fontSize: 18,
    fontFamily: "Poppins_600SemiBold",
    color: "#FBBA82",
  },
  card: {
    flex: 1,
    borderRadius: 20,
    overflow: "visible",
    alignItems: "center",
    flexDirection: "column",
    display: "flex",
    shadowOffset: { height: 3, width: 2 },
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowRadius: 4,
    padding: 0,
    width: "100%",
  },
  nameContainer: {
    alignItems: "center",
    flex: 0,
  },
  name: {
    marginTop: 10,
    fontSize: 24,
    fontFamily: "Poppins_500Medium",
  },
  bioContainer: {
    flexGrow: 1,
    flexDirection: "column",
    fontFamily: "Poppins_400Regular",
    fontSize: 16,
    flex: 1,
    margin: 10,
    overflow: "visible",
  },
  interestContainer: {
    margin: 10,
    flexBasis: 110,
    flexDirection: "column",
    fontFamily: "Poppins_400Regular",
    fontSize: 16,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
});

export default InspectProfile;
