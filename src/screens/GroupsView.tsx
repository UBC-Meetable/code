import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Layout, Spinner, Text } from "@ui-kitten/components";
import React from "react";
import {
  Dimensions, Platform, SafeAreaView, StyleSheet,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import CourseGroupBackground from "../assets/images/coursegroupbackground.svg";
import Smile from "../assets/images/smile.svg";
import ProfilePicture from "../components/ProfilePicture";
import Colors from "../constants/Colors";
import useUserProfile from "../hooks/useUserProfile";
import GroupTabBar from "../navigation/GroupTabBar";
import { ProfilePictureSize, RootStackParamList } from "../types";
import CourseGroups from "./CourseGroups";
import FriendGroups from "./FriendGroups";

const window = Dimensions.get("window");

type GroupsViewProps = {
  navigation: StackNavigationProp<RootStackParamList, "GroupsView">;
};
const GroupTabs = createMaterialTopTabNavigator();

const GroupScreenNavigator = ({ parentNavigator }: any) => {
  return (
    <NavigationContainer independent>
      <GroupTabs.Navigator
        sceneContainerStyle={{ display: "flex", flexDirection: "column-reverse" }}
        tabBar={(props:any) => <GroupTabBar {...props} />}
        initialRouteName="Course Groups"
      >
        <GroupTabs.Screen
          name="Course Groups"
        >
          {(props) => {
            return <CourseGroups navigation={parentNavigator} />;
          }}
        </GroupTabs.Screen>
        <GroupTabs.Screen name="Friend Groups" component={FriendGroups} />
      </GroupTabs.Navigator>
    </NavigationContainer>
  );
};

const GroupsView = ({ navigation }:GroupsViewProps) => {
  const units = useSafeAreaInsets();
  const { loading, info: userProfile } = useUserProfile();

  if (loading) return <Spinner />;
  return (
    <>
      {/* Background, Outside of Safe Area View */}
      <CourseGroupBackground width={window.width} style={{ position: "absolute", opacity: 0.7 }} />

      {/* TODO make this safe area a global component */}
      <SafeAreaView style={{ marginTop: Platform.OS === "android" ? units.top : 0 }}>
        {/* Welcome Banner */}
        <Layout style={styles.topContainer}>
          <Layout style={[styles.titleContainer]}>
            <Text style={styles.titleText}>{`Hi ${userProfile?.user.firstName},`}</Text>
            <Smile />
          </Layout>
          <ProfilePicture
            onPress={() => navigation.navigate("ProfileStack")}
            imageStyle={styles.profilePicture}
            imageKey={userProfile?.user.profilePicture || ""}
            size={ProfilePictureSize.TOP}
          />
        </Layout>
        {/* Group Viewer Selector */}

      </SafeAreaView>
      <GroupScreenNavigator parentNavigator={navigation} />
    </>
  );
};

const styles = StyleSheet.create({
  titleText: {
    fontSize: 24,
    marginBottom: 10,
    color: "#000",
    fontFamily: "Poppins_700Bold",
  },
  titleContainer: {
    backgroundColor: "transparent",
    padding: 20,
    marginTop: 40,
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

export default GroupsView;
