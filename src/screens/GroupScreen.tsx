import { StackNavigationProp } from "@react-navigation/stack";
import {
  Layout,
} from "@ui-kitten/components";
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import Chat from "../components/Chat";
import { ChatMessage, CourseGroup, RootStackParamList } from "../types";

const GroupScreen = ({
  navigation,
  groupTitle,
}: {
  navigation: StackNavigationProp<RootStackParamList, "Group">;
  groupTitle: string;
}) => {
  useEffect(() => {
    navigation.setOptions({ headerBackTitle: groupTitle });
  }, [groupTitle]);
  return (
    <Layout style={styles.root}>
      <Chat />
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
  },
});

export default GroupScreen;
