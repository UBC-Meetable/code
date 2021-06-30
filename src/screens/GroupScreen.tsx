import { StackNavigationProp } from "@react-navigation/stack";
import {
  Layout,
} from "@ui-kitten/components";
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import Chat from "../components/Chat/Chat";
import Colors from "../constants/Colors";
import {
  ChatMessage, CourseGroup, GroupType, RootStackParamList,
} from "../types";

const GroupScreen = ({
  navigation,
  groupTitle,
  groupType,
}: {
  navigation: StackNavigationProp<RootStackParamList, "Group">;
  groupTitle: string;
  groupType: GroupType;
}) => {
  useEffect(() => {
    navigation.setOptions({ headerBackTitle: groupTitle });
  }, [groupTitle]);
  return (
    <Layout style={styles.root}>
      <Chat groupType={groupType} />
    </Layout>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    display: "flex",
    height: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: Colors.theme.lightCreme,
  },
});

export default GroupScreen;
