/* eslint-disable camelcase */
import {
  Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, useFonts,
} from "@expo-google-fonts/poppins";
import {
  Button, Card, Layout, Spinner, Text,
} from "@ui-kitten/components";
import { BlurView } from "expo-blur";
import React from "react";
import { Image, StyleSheet } from "react-native";
import { Chip } from "react-native-paper";
import Icon from "react-native-vector-icons/Entypo";
import profilePic from "../assets/images/profilePic2.jpg";
import { User } from "../API";
import Colors from "../constants/Colors";

const CrossIcon = () => (
  <Layout
    style={{
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
    }}
  >
    <Icon
      name="cross"
      size={37}
      style={{
        color: "white",
        marginRight: -37,
        marginBottom: -37,
        marginLeft: -36,
        marginTop: -19,
      }}
    />
  </Layout>
);

const InspectProfile = ({ user }:{user: User}) => {
  const [fontsLoaded] = useFonts({
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_400Regular,
  });

  if (!fontsLoaded) {
    return (
      <Card style={styles.card} disabled>
        <Spinner />
      </Card>
    );
  }

  return (
    <BlurView tint="default" intensity={80} style={[StyleSheet.absoluteFill]}>
      <Layout style={styles.backdrop}>
        <Card style={styles.card} disabled>
          <Image source={profilePic} style={styles.profilePic} />
          <Layout style={styles.buttonContainer}>
            <Button
              style={styles.button}
              activeOpacity={0.8}
              accessoryLeft={CrossIcon}
              onPress={() => console.log("hello")}
            />
          </Layout>
          <Layout style={styles.nameContainer}>
            <Text style={styles.name}>{`${user.firstName}`}</Text>
            <Text style={styles.name}>{`${user.lastName}`}</Text>
          </Layout>
          <Layout style={styles.bioContainer}>
            <Text style={styles.header}>Bio</Text>
            <Text style={styles.bio}>{`${user.bio}`}</Text>
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
        </Card>
      </Layout>
    </BlurView>
  );
};

const styles = StyleSheet.create({
  chips: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "baseline",
    flex: 1,
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
    // textAlign: "center",
    maxWidth: 120,
    margin: 3,
    flexGrow: 1,
  },
  bio: {
    marginTop: 5,
    marginBottom: 5,
  },
  header: {
    fontSize: 18,
    fontFamily: "Poppins_600SemiBold",
    color: "#FBBA82",
  },
  blurView: {
    overflow: "visible",
  },
  backdrop: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(2251, 186, 130, 0.2)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    margin: 2,
    width: 37,
    height: 37,
    borderRadius: 100,
    backgroundColor: "#FBBA82",
    borderWidth: 0,
  },
  card: {
    width: "85%",
    minWidth: 300,
    maxWidth: 500,
    height: "55%",
    minHeight: 300,
    maxHeight: 500,
    borderRadius: 20,
    overflow: "visible",
    borderWidth: 0,
    padding: 0,
  },
  profilePic: {
    height: 145,
    width: 145,
    position: "absolute",
    top: -72.5,
    zIndex: 2,
    margin: 0,
    alignSelf: "center",
    borderRadius: 100,
  },
  buttonContainer: {
    height: 40,
    width: "100%",
    padding: 0,
    margin: 0,
  },
  nameContainer: {
    display: "flex",
    flexDirection: "column",
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    fontSize: 24,
    fontFamily: "Poppins_500Medium",
  },
  bioContainer: {
    flexBasis: 110,
    flexDirection: "column",
    fontFamily: "Poppins_400Regular",
    fontSize: 16,
    flex: 1,
  },
  interestContainer: {
    flexBasis: 110,
    flexDirection: "column",
    fontFamily: "Poppins_400Regular",
    fontSize: 16,
  },
});

export default InspectProfile;
