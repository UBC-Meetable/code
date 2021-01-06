import React, { useEffect } from "react";
import {
  Layout, Text,
} from "@ui-kitten/components";
import { StyleSheet } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
<<<<<<< HEAD
import { RootStackParamList } from "../types";
=======
import { GroupStackParamList, RootStackParamList } from "../types";
>>>>>>> 1dc95e5404d9b9e336c25b499a0f427193751d32
import Chat from "../components/Chat";

const GroupScreen = ({
  navigation,
  route,
}: {
<<<<<<< HEAD
  navigation: StackNavigationProp<RootStackParamList, "Login">,
=======
  navigation: StackNavigationProp<RootStackParamList, "Group">;
>>>>>>> 1dc95e5404d9b9e336c25b499a0f427193751d32
  route: any;
}) => {
  useEffect(() => {
    const { groupName } = route.params;
<<<<<<< HEAD
    navigation.setOptions({ headerTitle: groupName });
=======
    navigation.setOptions({ headerBackTitle: groupName });
>>>>>>> 1dc95e5404d9b9e336c25b499a0f427193751d32
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
