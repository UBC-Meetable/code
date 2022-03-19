import { StackNavigationProp } from "@react-navigation/stack";
import { Layout, Spinner, Text } from "@ui-kitten/components";
import React from "react";
import {
  Dimensions, Platform, SafeAreaView, StyleSheet,
} from "react-native";
import { IconButton } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import CourseGroupBackground from "../assets/images/coursegroupbackground.svg";
import Smile from "../assets/images/smile.svg";
import ProfilePicture from "../components/ProfilePicture";
import Colors from "../constants/Colors";
import useUserProfile from "../hooks/useUserProfile";
import { ProfilePictureSize, RootStackParamList } from "../types";
import CourseGroups from "./CourseGroups";

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
              imageStyle={styles.profilePicture}
              imageKey={profilePicture || ""}
              size={ProfilePictureSize.TOP}
            />
            <IconButton
              icon="forum"
              size={32}
              onPress={() => navigation.navigate("Chat")}
            />
          </Layout>
        </Layout>
        <Layout style={styles.body}>
          <Text style={styles.titleText}>Suggested Friends</Text>
          <Layout style={styles.eventsContainer}>
            <Text> List of friends here </Text>
          </Layout>
          <Text style={styles.titleText}>Upcoming Events</Text>
          <Layout style={styles.eventsContainer}>
            <Text> Events Should link to event page? </Text>
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
    flex: 1,
    backgroundColor: "transparent",
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
    fontSize: 24,
    marginBottom: 10,
    color: "#000",
    fontFamily: "Poppins_700Bold",
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
});

export default Home;
