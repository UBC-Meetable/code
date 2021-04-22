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
  const [messages, setMessages] = useState<ChatMessage[]>(route.params.groupMessages);
  const [rerender, setRerender] = useState(false);
  useEffect(() => {
    const { courseGroup, groupMessages }:
    {courseGroup: CourseGroup, groupMessages: ChatMessage[]} = route.params;
    // console.log("groupMessages", groupMessages);

    navigation.setOptions({ headerBackTitle: courseGroup.title || courseGroup.groupID });
  }, []);

  useEffect(() => {
    console.log("Groupmessages updated");
    // setMessages(() => route.params.groupMessages);
    console.log("Groupmessages done updated");
    setRerender(!rerender);
  }, [route.params.groupMessages]);

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
