import React from "react";
import {
  List, Layout,
} from "@ui-kitten/components";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { StackNavigationProp, useHeaderHeight } from "@react-navigation/stack";
import { CommonActions } from "@react-navigation/native";
import { GroupStackParamList } from "../types";

const GroupsScreen = ({
  navigation,
}: {
  navigation: StackNavigationProp<GroupStackParamList, "GroupScreen">;
}) => {
  const joinGroup = (groupId: string, groupName: string) => {
    // navigation.navigate("GroupScreen", { groupId, groupName });
    navigation.dispatch(CommonActions.navigate("Group", { screen: "GroupScreen", groupId, groupName }));
  };

  const headerHeight = useHeaderHeight();

  const groups = [
    ["BUCS", "1"],
    ["group 2", "2"],
    ["group 3", "3"],
    ["group 4", "4"],
    ["group 5", "5"],
    ["group 6", "6"],
    ["group 7", "7"],
    ["group 8", "8"],
    ["group 9", "9"],
    ["group 10", "10"],
    ["group 11", "11"],
    ["group 12", "12"],
    ["group 13", "13"],
    ["group 14", "14"],
    ["group 15", "15"],
  ];

  const renderItem = ({ item }:{item: string[]}) => {
    const [name, id] = item;
    return (
      <TouchableOpacity style={styles.bubble} onPress={() => joinGroup(id, name)}>
        <Text style={styles.bubbleText}>Group Name | Section Name</Text>
      </TouchableOpacity>
    );
  };

  return (
    <Layout style={{ paddingTop: headerHeight, backgroundColor: "#FEEDDE" }}>
      <List style={styles.card} data={groups} renderItem={renderItem} />
    </Layout>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    display: "flex",
    minHeight: "100%",
    alignItems: "center",
    overflow: "scroll",
    borderColor: "green",
    borderWidth: 1,
    maxHeight: "100%",
  },
  bubble: {
    minHeight: 100,
    height: 100,
    display: "flex",
    flexBasis: 40,
    borderWidth: 1,
    margin: 10,
    borderColor: "white",
    borderRadius: 24,
    backgroundColor: "white",
  },
  bubbleText: {
    fontSize: 20,
    lineHeight: 24,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  card: {
    maxHeight: "100%",
    overflow: "scroll",
    backgroundColor: "#FEEDDE",
  },
});

export default GroupsScreen;
