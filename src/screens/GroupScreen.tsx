import { StackNavigationProp } from "@react-navigation/stack";
import {
  Button,
  Layout,
} from "@ui-kitten/components";
import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import Chat from "../components/Chat/Chat";
import Colors from "../constants/Colors";
import { GearIcon } from "../navigation/ProfileStackNavigator";
import { GroupType, RootStackParamList } from "../types";

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
    if (groupType === GroupType.FRIEND) {
      navigation.setOptions({
        headerRight: () => (
          <Button onPress={() => navigation.navigate("FriendOptions")} style={styles.iconButton} appearance="ghost" accessoryLeft={GearIcon} />
        ),
      });
    }
  }, [groupTitle, groupType]);
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
  iconButton: {
    width: 32,
    height: 32,
    borderRadius: 100,
    marginRight: 15,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
});

export default GroupScreen;
