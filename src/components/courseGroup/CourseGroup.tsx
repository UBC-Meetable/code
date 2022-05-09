import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp, useHeaderHeight } from "@react-navigation/stack";
import { Layout, Text } from "@ui-kitten/components";
import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { homeStyles } from "../../styles";
import { RootStackParamList } from "../../types";
import EventsList from "../events/EventsList";
import JoinChatButton from "../JoinChatButton";
import SuggestedFriendsList from "../SuggestedFriendsList";

const window = Dimensions.get("window");

type CourseGroupProps = {
  courseId: string;
  groupTitle: string;
  navigation: StackNavigationProp<RootStackParamList, "Group">;
};

const CourseGroup = ({ navigation, courseId, groupTitle }: CourseGroupProps) => {
  const headerHeight = useHeaderHeight();
  return (
    <>
      <Layout style={[homeStyles.body, styles.root, { marginTop: headerHeight }]}>
        <ScrollView>
          <SuggestedFriendsList />
          <View style={styles.row}>
            <Text style={[styles.titleText]}>Upcoming Events</Text>
            <EventsList courseId={courseId} navigation={navigation} />
          </View>
          <View style={styles.row}>
            <Text style={[styles.titleText]}>Course Chat</Text>
            <JoinChatButton
              groupId={courseId}
              groupTitle={groupTitle}
              label="Join Event Chat"
              navigation={navigation}
            />
          </View>
        </ScrollView>
      </Layout>
    </>
  );
};

const styles = StyleSheet.create({
  row: {
    marginVertical: 10,
  },
  titleText: {
    fontSize: 20,
    marginBottom: 10,
    color: "#000",
    fontFamily: "Poppins_600SemiBold",
  },
  root: {
    paddingTop: 0,
    display: "flex",
    width: "100%",
    flex: 1,
    backgroundColor: "transparent",
  },
});

export default CourseGroup;
