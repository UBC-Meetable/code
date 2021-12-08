import React, { useState, useEffect } from "react";
import { StyleSheet, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Layout, Card, Button } from "@ui-kitten/components";
import ProfilePicture from "../../components/ProfilePicture";
import Colors from "../../constants/Colors";
import { UserProfile, ProfilePictureSize } from "../../types";
import noAvatar from "../../assets/images/noavatar.png";

const SuggestedFriendsScreen = () => {
  // TODO: Implement the friend suggestion mechanism
  return (
    <ScrollView>
      <Layout style={styles.container}>
        <ProfilePicture
          imageKey={noAvatar}
          size={ProfilePictureSize.PROFILE}
        />
        <Text style={styles.bigBioHead}>Ryan</Text>
        <Text style={styles.bioSubHead}>Engineering</Text>
        <Card style={styles.bioCard}>
          <Text>
            4-th year computer engineering student. A dog lover.
          </Text>
        </Card>
        <Text style={styles.bioSubHead}>Social Life</Text>
        <Layout style={styles.cardContainer}>
          <Card style={styles.Card}>
            <Text style={styles.subHead}>Festival</Text>
          </Card>
          <Card style={styles.Card}>
            <Text style={styles.subHead}>Cello</Text>
          </Card>
        </Layout>
        <Layout style={styles.cardContainer}>
          <Card style={styles.Card}>
            <Text style={styles.subHead}>Piano</Text>
          </Card>
          <Card style={styles.Card}>
            <Text style={styles.subHead}>Hiking</Text>
          </Card>
        </Layout>
        <Text style={styles.bioSubHead}>Shared Courses</Text>
        <Layout style={styles.cardContainer}>
          <Card style={styles.Card}>
            <Text style={styles.subHead}>CPSC 322</Text>
          </Card>
          <Card style={styles.Card}>
            <Text style={styles.subHead}>CPEN 221</Text>
          </Card>
        </Layout>
        <Layout style={styles.cardContainer}>
          <Card style={styles.Card}>
            <Text style={styles.subHead}>ENGL 112</Text>
          </Card>
          <Card style={styles.Card}>
            <Text style={styles.subHead}>CPSC 304</Text>
          </Card>
        </Layout>
        <Button style={styles.messageButton}>Message Ryan!</Button>
      </Layout>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0000",
    marginTop: 135,
    justifyContent: "center",
    alignItems: "center",
  },
  selectionsContainer: {
    backgroundColor: Colors.theme.lightCreme,
    justifyContent: "center",
    alignItems: "center",
  },
  bigBioHead: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#7ED1EF",
    marginHorizontal: 20,
    top: 10,
    marginBottom: 20,
  },
  bioSubHead: {
    fontSize: 22,
    marginTop: 20,
    marginBottom: 20,
    fontWeight: "bold",
    color: "#7ED1EF",
  },
  bioCard: {
    backgroundColor: "#0000",
    borderColor: "#EDEDED",
    marginBottom: 20,
    width: 260,
  },
  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#0000",
    borderColor: "#EDEDED",
    alignContent: "space-between",
    marginBottom: 20,
  },
  Card: {
    width: 120,
    backgroundColor: "#0000",
    borderColor: "#EDEDED",
    marginTop: 10,
    marginLeft: 15,
  },
  subHead: {
    textAlign: "center",
  },
  messageButton: {
    marginTop: 20,
    marginBottom: 20,
  },
});

export default SuggestedFriendsScreen;
