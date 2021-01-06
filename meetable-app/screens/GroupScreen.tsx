import React, { useEffect } from "react";
import {
  Layout,
} from "@ui-kitten/components";
import { StyleSheet } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types";
import Chat from "../components/Chat";

const GroupScreen = ({
  navigation,
  route,
}: {
  navigation: StackNavigationProp<RootStackParamList, "Group">;
  route: any;
}) => {
  useEffect(() => {
    const { groupName } = route.params;
    navigation.setOptions({ headerBackTitle: groupName });
  }, []);

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
