import { StackNavigationProp } from "@react-navigation/stack";
import {
  Layout, Spinner, Text, Button,
} from "@ui-kitten/components";
import React from "react";
import {
  Dimensions, Image, Platform, SafeAreaView, StyleSheet, FlatList, View
} from "react-native";
import { IconButton } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import CourseGroupBackground from "../assets/images/coursegroupbackground.svg";
import Smile from "../assets/images/meetable_logo.svg";
import ProfilePicture from "../components/ProfilePicture";
import Colors from "../constants/Colors";
import useUserProfile from "../hooks/useUserProfile";
import { ProfilePictureSize, RootStackParamList } from "../types";
import CourseGroups from "./CourseGroups";
import placeholder from "../assets/images/man.png";

const window = Dimensions.get("window");

type HomeProps = {
  navigation: StackNavigationProp<RootStackParamList, "Home">;
};

const Home = ({ navigation }: HomeProps) => {
  const units = useSafeAreaInsets();
  const { loading, profilePicture } = useUserProfile();

  if (loading) return <Spinner />;
  return (
    <>
      {/* Background, Outside of Safe Area View */}
      <CourseGroupBackground width={window.width} style={{ position: "absolute", opacity: 0.7 }} />

      {/* TODO make this safe area a global component */}
      <SafeAreaView style={{ marginTop: Platform.OS === "android" ? units.top : 0, flex: 1 }}>
        {/* Welcome Banner */}
        <Layout style={styles.topContainer}>
          <Layout style={[styles.titleContainer]}>
            <Smile />
          </Layout>
          <Layout style={styles.topRightButtonContainer}>
            <ProfilePicture
              onPress={() => navigation.navigate("ProfileStack")}
              imageKey={profilePicture || ""}
              size={ProfilePictureSize.TOP}
            />
            <IconButton
              icon="forum"
              size={32}
              onPress={() => console.log("this button should link to the chat list screen")}
            />
          </Layout>
        </Layout>
        <Layout style={styles.body}>
          <Text style={styles.titleText}>Suggested Friends</Text>
          <Layout style={styles.eventsContainer}>
            <FlatList
              horizontal
              data={[
                { name: "Kira Yan" },
                { name: "Steven Wong" },
                { name: "Mayank Rastogi" },
                { name: "Gordon Cheung" },
              ]}
              renderItem={({ item: { name } }) => (
                <View style={{
                  backgroundColor: "#FCF8EC",
                  margin: 10,
                  padding: 15,
                  display: "flex",
                  alignItems: "center",
                  shadowOffset: { width: 5, height: 3 },
                  shadowRadius: 3,
                  shadowOpacity: 0.2,
                  shadowColor: "black",
                  borderRadius: 5,
                }}
                >
                  <Image
                    source={placeholder}
                    style={{
                      borderRadius: 100, width: 55, height: 55, margin: 5,
                    }}
                  />
                  <Text style={{ width: 70, textAlign: "center" }}>{name}</Text>
                </View>
              )}
            />
          </Layout>
          <Text style={styles.titleText}>Upcoming Events</Text>
          <Layout style={styles.eventsContainer}>
            <FlatList
              // horizontal
              data={[
                {
                  name: "Quiz 1 Study Session",
                  date: "March 21st",
                  time: "1:00 - 3:00 pm",
                  joined: true,
                },
                {
                  name: "Climbing Meetup",
                  date: "March 23rd",
                  time: "3:30 - 5:00 pm",
                  joined: false,
                },
              ]}
              renderItem={({
                item: {
                  name, date, time, joined,
                },
              }) => (
                <View style={{
                  backgroundColor: "#FCF8EC",
                  margin: 10,
                  padding: 15,
                  display: "flex",
                  // alignItems: "center",
                  shadowOffset: { width: 5, height: 3 },
                  shadowRadius: 3,
                  shadowOpacity: 0.2,
                  shadowColor: "black",
                  borderRadius: 5,
                }}
                >
                  <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
                    <Text style={{ fontFamily: "Quicksand_700Bold", fontSize: 16 }}>{name}</Text>
                    <Button style={{
                      padding: 5,
                      paddingHorizontal: 10,
                      borderRadius: 5,
                      borderWidth: 0,
                      backgroundColor: joined ? "#9AE399" : "#FFDE71",
                    }}
                    >
                      {joined ? "Joined!" : "Join"}
                    </Button>
                  </View>
                  <Text>{`${date}, ${time}`}</Text>
                </View>
              )}
            />
          </Layout>
          <Text style={styles.titleText}>Courses</Text>
          <Layout style={styles.courseGroupContainer}>
            <CourseGroups navigation={navigation} />
          </Layout>
        </Layout>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  eventsContainer: {
    backgroundColor: "transparent",
    marginVertical: 20,
  },
  courseGroupContainer: {
    flexBasis: "50%",
    backgroundColor: "transparent",
  },
  body: {
    display: "flex",
    flexDirection: "column",
    padding: 20,
    backgroundColor: "transparent",
  },
  titleText: {
    fontSize: 22,
    color: "#000",
    fontFamily: "Poppins_700Bold",
  },
  topRightButtonContainer: {
    backgroundColor: "transparent",
    flexDirection: "row",
    marginRight: 10,
    alignItems: "center",
  },
  titleContainer: {
    backgroundColor: "transparent",
    padding: 20,
  },
  topContainer: {
    flexDirection: "row",
    position: "relative",
    backgroundColor: "transparent",
    justifyContent: "space-between",
  },
  buttonGroup: {
    justifyContent: "center",
    backgroundColor: Colors.theme.transparent,
  },
});

export default Home;
