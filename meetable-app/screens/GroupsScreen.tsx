<<<<<<< HEAD
import React from "react";
import {
  Button, List, Layout,
} from "@ui-kitten/components";
import {
  StyleSheet, Text, TouchableOpacity,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Avatar, Chip } from "react-native-paper";
import { GroupTabParamList } from "../types";
import { View } from "../components/Themed";
import { Icon } from "react-native-vector-icons/Icon";
=======
import React, { useEffect } from "react";
import {
  List, Layout,
} from "@ui-kitten/components";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { StackNavigationProp, useHeaderHeight } from "@react-navigation/stack";
import { CommonActions } from "@react-navigation/native";
import { GroupStackParamList } from "../types";
>>>>>>> 1dc95e5404d9b9e336c25b499a0f427193751d32

const GroupsScreen = ({
  navigation,
}: {
<<<<<<< HEAD
  navigation: StackNavigationProp<GroupTabParamList, "GroupScreen">;
}) => {
  const joinGroup = (groupId: string, groupName: string) => {
    navigation.navigate("GroupScreen", { groupId, groupName });
  };

=======
  navigation: StackNavigationProp<GroupStackParamList, "GroupScreen">;
}) => {
  const joinGroup = (groupId: string, groupName: string) => {
    // navigation.navigate("GroupScreen", { groupId, groupName });
    navigation.dispatch(CommonActions.navigate("Group", { screen: "GroupScreen", groupId, groupName }));
  };

  const headerHeight = useHeaderHeight();

>>>>>>> 1dc95e5404d9b9e336c25b499a0f427193751d32
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
<<<<<<< HEAD
        <Text style={styles.bubbleText}>
          ECON 101
        </Text>

        {/* <View style={styles.sectionBubble}>
          <Text style={styles.sectionBubbleText}>201</Text>
        </View> */}

        <Chip style={styles.sectionBubble} textStyle={styles.sectionBubbleText}>
          100
        </Chip>

        <Text style={styles.bubbleTextDesc}>
          lorem ipsum lorem ipsum lorem ipsum
          {"\n"}
          hi hi hi hi ih ih lorem ipsum lorem ipsum
        </Text>

        <Layout style={styles.facePileBubble}>
          <Avatar.Icon size={38} style={styles.backPile} icon="folder" />
          <Avatar.Text size={38} style={styles.secondBackPile} label="TF" />
          <Avatar.Icon size={38} style={styles.secondPile} icon="folder" />
          <Avatar.Text size={38} style={styles.frontPile} label="DS" />
        </Layout>

=======
        <Text style={styles.bubbleText}>Group Name | Section Name</Text>
>>>>>>> 1dc95e5404d9b9e336c25b499a0f427193751d32
      </TouchableOpacity>
    );
  };

  return (
<<<<<<< HEAD
    <List
      style={styles.card}
      data={groups}
      renderItem={renderItem}
    />
=======
    <Layout style={{ paddingTop: headerHeight, backgroundColor: "#FEEDDE" }}>
      <List style={styles.card} data={groups} renderItem={renderItem} />
    </Layout>
>>>>>>> 1dc95e5404d9b9e336c25b499a0f427193751d32
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    display: "flex",
    minHeight: "100%",
    alignItems: "center",
    overflow: "scroll",
<<<<<<< HEAD
    borderColor: "black",
=======
    borderColor: "green",
>>>>>>> 1dc95e5404d9b9e336c25b499a0f427193751d32
    borderWidth: 1,
    maxHeight: "100%",
  },
  bubble: {
    minHeight: 100,
    height: 100,
    display: "flex",
<<<<<<< HEAD
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
=======
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
>>>>>>> 1dc95e5404d9b9e336c25b499a0f427193751d32
  },
  card: {
    maxHeight: "100%",
    overflow: "scroll",
    backgroundColor: "#FEEDDE",
  },
});

export default GroupsScreen;
