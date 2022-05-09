import { CommonActions } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import {
  Button, Layout, Spinner, Text,
} from "@ui-kitten/components";
import React, { useEffect, useState } from "react";
import {
  Modal, Platform, SafeAreaView, StyleSheet, View,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { IconButton } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Smile from "../assets/images/meetable-logo.svg";
import fetchSuggestedFriends from "../calls/fetchSuggestedFriends";
import UserProfile from "../components/profile/UserProfile";
import ProfilePicture from "../components/ProfilePicture";
import SuggestedFriend from "../components/SuggestedFriend";
import GradientButton from "../components/ui/GradientButton";
import Colors from "../constants/Colors";
import useEvents from "../hooks/useEvents";
import useUserProfile from "../hooks/useUserProfile";
import { ProfilePictureSize, RootStackParamList } from "../types";
import CourseGroups from "./CourseGroups";
import EventBubble from "../components/events/EventBubble";
import EventsList from "../components/events/EventsList";

type HomeProps = {
  navigation: StackNavigationProp<RootStackParamList, "Home">;
};

const Home = ({ navigation }: HomeProps) => {
  const units = useSafeAreaInsets();
  const { loading, profilePicture, id } = useUserProfile();
  const [suggestedFriends, setSuggestedFriends] = useState<any[]>([]);
  const [visible, setVisible] = useState(false);
  const [friend, setFriend] = useState({});
  if (loading) return <Spinner />;

  useEffect(() => {
    if (id) {
      fetchSuggestedFriends({ id }).then((friends) => setSuggestedFriends(friends || []));
    }
  }, []);

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
            <View style={styles.row}>
              <Text style={styles.titleText}>Suggested Friends</Text>
              <ScrollView
                horizontal
                style={[styles.scrollView, styles.suggestedFriendsContainer]}
              >
                {suggestedFriends.map((suggestedFriend: any) => (
                  <Button key={suggestedFriend.id} appearance="ghost" onPress={() => { setFriend(suggestedFriend); setVisible(true); }}>
                    <SuggestedFriend {...suggestedFriend} />
                  </Button>
                ))}
              </ScrollView>
            </View>
            <View style={styles.row}>
              <Text style={styles.titleText}>Upcoming Events</Text>
              <EventsList navigation={navigation} />
              {/* <EventBubble onPress={() => eventNavigation(
                "Quiz 8",
                "1",
              )}
              />
              <View style={{ padding: 10, width: "100%", marginVertical: 10 }}>
                <Text style={{ margin: 10,
                  textAlign: "center", color: "#404040" }}>No upcoming events</Text>
              </View> */}
            </View>
            <View style={styles.row}>
              <Text style={styles.titleText}>Courses</Text>
              <Layout style={styles.courseGroupContainer}>
                <CourseGroups navigation={navigation} />
              </Layout>
            </View>
          </Layout>
        </ScrollView>
        <Modal
          animationType="slide"
          presentationStyle="formSheet"
          visible={visible}
        >
          <View style={{ backgroundColor: Colors.theme.creme, flex: 1, padding: 20 }}>
            <UserProfile user={friend} style={{ paddingTop: 50 }} />
            <GradientButton
              onPress={() => setVisible(false)}
              style={{
                marginVertical: 50,
                borderRadius: 30,
              }}
            >
              Close
            </GradientButton>
          </View>
        </Modal>
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
