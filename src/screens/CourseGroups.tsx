import { CommonActions } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { List, Spinner } from "@ui-kitten/components";
import React, { useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import { GroupType } from "../API";
import CourseGroupBubble from "../components/Chat_old/CourseGroupBubble";
import CourseGroupsContext from "../context/CourseGroupsContext";
import { MessageProvider } from "../context/MessageContext";
import useCourseGroups from "../hooks/useCourseGroups";
import {
  ChatMessage, CourseGroup, RootStackParamList,
} from "../types";

const CourseGroups = ({
  navigation,
}: {
  navigation: StackNavigationProp<RootStackParamList>;
}) => {
  const { groups, loading } = useCourseGroups();

  if (loading) {
    return <Spinner />;
  }
  const moveToGroupScreen = (
    groupTitle: string,
    groupID: string,
    groupType: GroupType,
  ) => {
    navigation.dispatch(
      CommonActions.navigate("Group", {
        screen: "GroupScreen",
        groupID,
        groupType,
        groupTitle,
      }),
    );
  };

  const renderItem = ({ item }: { item: CourseGroup }) => {
    if (!item.groupID) return <Spinner />;
    const itemName = `${item.title} ${item.code}`;
    return (
      <MessageProvider groupID={item.groupID}>
        <CourseGroupBubble
          courseGroup={item}
          moveToGroupScreen={() => moveToGroupScreen(
            itemName,
          item.groupID!,
          GroupType.COURSE,
          )}
        />
      </MessageProvider>
    );
  };

  return (
    groups.length
      ? (
        <List
          bounces={false}
          style={[styles.card]}
          data={groups}
          renderItem={renderItem}
        />
      ) : (
        <View style={{ padding: 10, width: "100%", marginVertical: 10 }}>
          <Text style={{
            margin: 10, textAlign: "center", color: "#404040", fontSize: 15,
          }}
          >
            No registered courses
          </Text>
        </View>
      )
  );
};

const styles = StyleSheet.create({
  card: {
    overflow: "scroll",
    backgroundColor: "transparent",
  },
  empty: {
    color: "#c2c2c2",
  },
  sectionTitleText: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Poppins_700Bold",
    color: "#000",
  },
  iconButton: {
    width: 32,
    height: 32,
    borderRadius: 100,
    marginRight: 15,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  pinned: {
    marginBottom: 10,
    marginLeft: 10,
    backgroundColor: "transparent",
  },
  allCourses: {
    marginVertical: 10,
    marginLeft: 10,
    backgroundColor: "transparent",
  },
});

export default CourseGroups;
