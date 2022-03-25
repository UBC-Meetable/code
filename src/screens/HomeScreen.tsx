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
import { homeStyles } from "../styles";
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
      <CourseGroupBackground
        width={window.width}
        style={{ position: "absolute", opacity: 0.7 }}
      />

      {/* TODO make this safe area a global component */}
      <SafeAreaView
        style={{
          marginTop: Platform.OS === "android" ? units.top : 0,
          flex: 1,
        }}
      >
        {/* Welcome Banner */}
        <Layout style={homeStyles.topContainer}>
          <Layout style={[homeStyles.titleContainer]}>
            <Smile />
          </Layout>
          <Layout style={homeStyles.topRightButtonContainer}>
            <ProfilePicture
              onPress={() => navigation.navigate("ProfileStack")}
              imageStyle={homeStyles.profilePicture}
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
        <Layout style={homeStyles.body}>
          <Text style={homeStyles.titleText}>Suggested Friends</Text>
          <Layout style={homeStyles.eventsContainer}>
            <Text> List of friends here </Text>
          </Layout>
          <Text style={homeStyles.titleText}>Upcoming Events</Text>
          <Layout style={homeStyles.eventsContainer}>
            <Text> Events Should link to event page? </Text>
          </Layout>
          <Text style={homeStyles.titleText}>Courses</Text>
          <Layout style={homeStyles.courseGroupContainer}>
            <CourseGroups navigation={navigation} />
          </Layout>
        </Layout>
      </SafeAreaView>
    </>
  );
};

export default Home;
