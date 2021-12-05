import { CommonActions } from "@react-navigation/native";
import { StackNavigationProp, useHeaderHeight } from "@react-navigation/stack";
import {
  Layout, List, Spinner, Text,
} from "@ui-kitten/components";
import React, { useContext, useEffect, useState } from "react";
import { RefreshControl, StyleSheet } from "react-native";
import { GroupType } from "../API";
import CourseGroupBubble from "../components/Chat/CourseGroupBubble";
import Colors from "../constants/Colors";
import CourseGroupsContext from "../context/CourseGroupsContext";
import {
  ChatMessage, CourseGroup, GroupStackParamList, RootStackParamList,
} from "../types";

const CourseGroups = ({
  navigation,
}: {
  navigation: StackNavigationProp<RootStackParamList, "GroupsView">;
}) => {
  const groups = useContext(CourseGroupsContext);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (typeof groups !== "undefined") {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [groups]);
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

  const headerHeight = useHeaderHeight();

  const renderItem = ({ item }: { item: CourseGroup }) => {
    if (!item.groupID) return <Spinner />;
    const messages = item.messages?.items as ChatMessage[];
    const itemName = `${item.title} ${item.code}`;
    return (
      <CourseGroupBubble
        courseGroup={item}
        messages={messages}
        moveToGroupScreen={() => moveToGroupScreen(
          itemName,
          item.groupID!,
          GroupType.COURSE,
        )}
      />
    );
  };

  return (
    <List
      bounces={false}
      // refreshControl={
      //   <RefreshControl refreshing={loading} />
      // }
      style={[styles.card]}
      data={[...groups]}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    // height: "100%",
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
