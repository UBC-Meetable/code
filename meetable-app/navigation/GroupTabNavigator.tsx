import { createStackNavigator } from "@react-navigation/stack";
import {
  Button, Layout,
} from "@ui-kitten/components";
import React from "react";
import { StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import GroupScreen from "../screens/GroupScreen";
import GroupsScreen from "../screens/GroupsScreen";
import { GroupTabParamList } from "../types";

const GroupTabStack = createStackNavigator<GroupTabParamList>();
const StarIcon = () => (
  <Layout style={{
    display: "flex", justifyContent: "center", alignItems: "center",
  }}
  >
    <Icon name="ios-settings" size={30} style={{ margin: -30 }} />
  </Layout>
);

const GroupTabNavigator = () => (
  <GroupTabStack.Navigator>
    <GroupTabStack.Screen
      name="GroupsScreen"
      component={GroupsScreen}
      options={{
        headerTitle: "Groups",
        headerRight: () => (
          <Button style={styles.iconButton} appearance="ghost" accessoryLeft={StarIcon} />
        ),
      }}
    />
    <GroupTabStack.Screen
      name="GroupScreen"
      component={GroupScreen}
      options={{
        headerTitle: "Group",
        headerBackTitle: "All Groups",
        headerTruncatedBackTitle: "Back",
      }}
    />
  </GroupTabStack.Navigator>

);

const styles = StyleSheet.create({
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

export default GroupTabNavigator;
