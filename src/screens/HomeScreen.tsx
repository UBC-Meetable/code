import { StackNavigationProp } from "@react-navigation/stack";
import { Layout, Spinner, Text } from "@ui-kitten/components";
import React, { useEffect, useState } from "react";
import {
  Dimensions, Platform, SafeAreaView, StyleSheet,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { IconButton } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import CourseGroupBackground from "../assets/images/meetable-background.jpeg";
import Smile from "../assets/images/meetable-logo.svg";
import ProfilePicture from "../components/ProfilePicture";
import SuggestedFriend from "../components/SuggestedFriend";
import Colors from "../constants/Colors";
import useUserProfile from "../hooks/useUserProfile";
import { ProfilePictureSize, RootStackParamList } from "../types";
import CourseGroups from "./CourseGroups";
import fetchSuggestedFriends from "../calls/fetchSuggestedFriends";

const window = Dimensions.get("window");

type HomeProps = {
  navigation: StackNavigationProp<RootStackParamList, "Home">;
};

const Home = ({ navigation }: HomeProps) => {
  const units = useSafeAreaInsets();
  const { loading, profilePicture, id } = useUserProfile();
  const [suggestedFriends, setSuggestedFriends] = useState([]);

  if (loading) return <Spinner />;
  useEffect(() => {
    fetchSuggestedFriends({ id }).then(setSuggestedFriends);
  }, []);
  return (
    <>
      {/* Background, Outside of Safe Area View */}
      {/* <CourseGroupBackground width={window.width} style={{ position: "absolute", opacity: 0.7 }} /> */}

      {/* TODO make this safe area a global component */}
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
            <Text style={styles.titleText}>Suggested Friends</Text>
            <ScrollView
              horizontal
              style={[styles.scrollView, styles.suggestedFriendsContainer]}
            >
              {suggestedFriends.map(suggestedFriend => <SuggestedFriend key={suggestedFriend.id} {...suggestedFriend} />)}
            </ScrollView>
            <Text style={styles.titleText}>Upcoming Events</Text>
            <Layout style={styles.eventsContainer}>
              <Text> Events Should link to event page? </Text>
            </Layout>
            <Text style={styles.titleText}>Courses</Text>
            <Layout style={styles.courseGroupContainer}>
              <CourseGroups navigation={navigation} />
              <CourseGroups navigation={navigation} />
              <CourseGroups navigation={navigation} />
            </Layout>
          </Layout>
        </ScrollView>

      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  eventsContainer: {
    flex: 1,
    backgroundColor: "transparent",
  },
  suggestedFriendsContainer: {
    marginLeft: -10,
    marginRight: -20,
    paddingLeft: 5,
    width: "auto",
    flex: 1,
    backgroundColor: "transparent",
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
    padding: 20,
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
