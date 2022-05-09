import { StackNavigationProp } from "@react-navigation/stack";
import { Layout, Spinner, Text } from "@ui-kitten/components";
import React from "react";
import {
  Platform, SafeAreaView, StyleSheet, View,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { IconButton } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Smile from "../assets/images/meetable-logo.svg";
import EventsList from "../components/events/EventsList";
import ProfilePicture from "../components/ProfilePicture";
import SuggestedFriendsList from "../components/SuggestedFriendsList";
import Colors from "../constants/Colors";
import useUserProfile from "../hooks/useUserProfile";
import { ProfilePictureSize, RootStackParamList } from "../types";
import CourseGroups from "./CourseGroups";

type HomeProps = {
  navigation: StackNavigationProp<RootStackParamList>;
};

const Home = ({ navigation }: HomeProps) => {
  const units = useSafeAreaInsets();
  const { loading, profilePicture } = useUserProfile();
  if (loading) return <Spinner />;

  return (
    <>
      <SafeAreaView style={{ marginTop: Platform.OS === "android" ? units.top : 0, flex: 1 }}>
        {/* Welcome Banner */}
        <ScrollView>
          <Layout style={styles.topContainer}>
            <Layout style={[styles.titleContainer]}>
              <Smile />
            </Layout>
            <Layout style={styles.topRightButtonContainer}>
              <ProfilePicture
                onPress={() => navigation.navigate("ProfileStack")}
                imageStyle={styles.profilePicture}
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
            <SuggestedFriendsList />
            <View style={styles.row}>
              <Text style={styles.titleText}>Upcoming Events</Text>
              <EventsList navigation={navigation} />
            </View>
            <View style={styles.row}>
              <Text style={styles.titleText}>Courses</Text>
              <Layout style={styles.courseGroupContainer}>
                <CourseGroups navigation={navigation} />
              </Layout>
            </View>
          </Layout>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  row: {
    marginVertical: 10,
  },
  eventsContainer: {
    backgroundColor: "transparent",
  },
  suggestedFriendsContainer: {
    marginRight: -20,
    paddingLeft: 5,
    flexDirection: "row",
    marginBottom: 15,
  },
  courseGroupContainer: {
    flex: 1,
    flexBasis: "50%",
    backgroundColor: "transparent",
  },
  body: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "transparent",
  },
  titleText: {
    fontSize: 20,
    marginBottom: 10,
    color: "#000",
    fontFamily: "Poppins_600SemiBold",
  },
  topRightButtonContainer: {
    backgroundColor: "transparent",
    flexDirection: "row",
    marginRight: 25,
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
  profilePicture: {
    marginRight: 20,
    marginBottom: 20,
    alignSelf: "center",
  },
  buttonGroup: {
    justifyContent: "center",
    backgroundColor: Colors.theme.transparent,
  },
  scrollView: {
    marginRight: 0,
  },
});

export default Home;
