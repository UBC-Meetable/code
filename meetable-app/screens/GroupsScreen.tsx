import React from "react";
import {
  List,
} from "@ui-kitten/components";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { GroupTabParamList } from "../types";
import { View } from "../components/Themed";

const GroupsScreen = ({
  navigation,
}: {
  navigation: StackNavigationProp<GroupTabParamList, "GroupScreen">;
}) => {
  const joinGroup = (groupId: string, groupName: string) => {
    navigation.navigate("GroupScreen", { groupId, groupName });
  };

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
        <Text style={styles.bubbleText}>
          ECON 101
        </Text>

        <View style={styles.sectionBubble}>
          <Text style={styles.sectionBubbleText}>101</Text>
        </View>
        <Text style={styles.bubbleTextDesc}>lorem ipsum lorem ipsum lorem ipsum lorem ipsum</Text>

        <View>
          <View>
            <View>
              <View>

              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <List
      style={styles.card}
      data={groups}
      renderItem={renderItem}
    />
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
    width: 35,
    height: 20,
    borderRadius: 50,
    marginHorizontal: 100,
    marginTop: -32.5,
    marginBottom: 10,
    backgroundColor: "steelblue",
  },
  sectionBubbleText: {
    color: "white",
    marginLeft: 5,
  },
  bubbleText: {
    fontSize: 16,
    lineHeight: 24,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  bubbleTextDesc: {
    fontSize: 9,
    marginHorizontal: 20,
    marginVertical: 5,
    paddingVertical: 5,
  },
  card: {
    maxHeight: "100%",
    overflow: "scroll",
    backgroundColor: "#FEEDDE",
  },
});

export default GroupsScreen;
