import { createStackNavigator } from "@react-navigation/stack";
import { Button, Layout } from "@ui-kitten/components/ui";
import React from "react";
import { StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import FriendGroups from "../screens/FriendGroups";
import { FriendGroupStackScreens } from "../types";
import HeaderOptions from "./HeaderOptions";

const PlaneIcon = () => (
  <Layout style={{
    display: "flex", justifyContent: "center", alignItems: "center",
  }}
  >
    <Icon name="telegram-plane" size={30} style={{ margin: -30 }} />
  </Layout>
);

const GroupTabStack = createStackNavigator<FriendGroupStackScreens>();

const FriendGroupStackNavigator = () => (
  <GroupTabStack.Navigator
    screenOptions={{
      headerTransparent: true,
      headerTitle: "Friend Groups",
      ...HeaderOptions,
    }}
  >
    <GroupTabStack.Screen
      name="FriendGroups"
      options={({ navigation }) => ({
        headerShown: true,
        headerRight: () => {
          return <Button onPress={() => navigation.navigate("DMNavigator")} style={styles.iconButton} appearance="ghost" accessoryLeft={PlaneIcon} />;
        },
      })}
    >
      {(props) => <FriendGroups {...props} />}
    </GroupTabStack.Screen>
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

export default FriendGroupStackNavigator;
