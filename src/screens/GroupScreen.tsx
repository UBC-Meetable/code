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
  route,
}: {
  navigation: StackNavigationProp<RootStackParamList, "Group">;
  route: any;
}) => {
  const { courseGroup, groupMessages }:
    {courseGroup: CourseGroup, groupMessages: ChatMessage[]} = route.params;
  const [messages, setMessages] = useState([] as ChatMessage[]);
  useEffect(() => {
    navigation.setOptions({ headerBackTitle: courseGroup.title || courseGroup.groupID });
  }, [courseGroup]);

  useEffect(() => {
    setMessages(groupMessages);
  }, []);
  return (
    <Layout style={styles.root}>
      <Chat {...route.params} />
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
