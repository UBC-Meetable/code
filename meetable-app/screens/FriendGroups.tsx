import { CommonActions } from "@react-navigation/native";
import { StackNavigationProp, useHeaderHeight } from "@react-navigation/stack";
import { Layout, List } from "@ui-kitten/components";
import React from "react";
import { StyleSheet } from "react-native";
import FriendGroupBubble from "../components/FriendGroupBubble";
import { GroupStackParamList } from "../types";

const FriendGroups = ({
  navigation,
}: {
  navigation: StackNavigationProp<GroupStackParamList, "GroupScreen">;
}) => {
  const joinGroup = (groupId: string, groupName: string) => {
    navigation.dispatch(
      CommonActions.navigate("Group", {
        screen: "GroupScreen",
        groupId,
        groupName,
      }),
    );
  };

  const headerHeight = useHeaderHeight();
  const groups = [
    ["BUCS but friends", "1"],
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

  const renderItem = ({ item }: { item: string[] }) => {
    const [name, id] = item;
    return (
      <FriendGroupBubble onPress={() => joinGroup(id, name)} />
    );
  };

  return (
    <Layout style={{ paddingTop: headerHeight, backgroundColor: "#0000" }}>
      <List style={[styles.card]} data={groups} renderItem={renderItem} />
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
    borderColor: "black",
    borderWidth: 1,
    maxHeight: "100%",
  },
  bubble: {
    minHeight: 100,
    height: 100,
    display: "flex",
    margin: 10,
    borderColor: "white",
    borderRadius: 24,
    backgroundColor: "#E6F4F9",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  sectionBubble: {
    width: 50,
    height: 23,
    borderRadius: 50,
    position: "absolute",
    left: 101,
    top: 17,
    backgroundColor: "white",
  },
  sectionBubbleText: {
    color: "black",
    top: -5,
  },
  bubbleText: {
    fontSize: 16,
    lineHeight: 24,
    marginHorizontal: 20,
    marginBottom: 20,
    top: 16,
  },
  bubbleTextDesc: {
    fontSize: 10,
    marginHorizontal: 20,
    marginTop: 7.5,
    marginBottom: 10,
  },
  facePileBubble: {
    position: "absolute",
    flexDirection: "row",
    left: "52.5%",
    top: "45%",
    backgroundColor: "#E6F4F9",
  },
  backPile: {
    backgroundColor: "steelblue",
    position: "relative",
    left: "120%",
  },
  secondBackPile: {
    backgroundColor: "skyblue",
    position: "relative",
    left: "90%",
  },
  secondPile: {
    backgroundColor: "red",
    position: "relative",
    left: "60%",
  },
  frontPile: {
    backgroundColor: "black",
    position: "relative",
    left: "30%",
  },
  card: {
    // maxHeight: "100%",
    overflow: "scroll",
    backgroundColor: "#0000",
  },
});

export default FriendGroups;
