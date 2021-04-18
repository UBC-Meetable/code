import { StackNavigationProp } from "@react-navigation/stack";
import {
  Layout,
} from "@ui-kitten/components";
import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import Chat from "../components/Chat";
import { CourseGroup, RootStackParamList } from "../types";

const GroupScreen = ({
  navigation,
  route,
}: {
  navigation: StackNavigationProp<RootStackParamList, "Group">;
  route: any;
}) => {
  useEffect(() => {
    const { courseGroup }: {courseGroup: CourseGroup} = route.params;

    navigation.setOptions({ headerBackTitle: courseGroup.title || courseGroup.groupID });
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
