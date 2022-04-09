import { StackNavigationProp } from "@react-navigation/stack";
import { Button, Layout, Text } from "@ui-kitten/components";
import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import Chat from "../components/Chat/Chat";
import CourseGroup from "../components/courseGroup/CourseGroup";
import Colors from "../constants/Colors";
import { Ionicon } from "../navigation/ProfileStackNavigator";
import { GroupType, RootStackParamList } from "../types";

type HeaderComponentProps = {
  navigation: StackNavigationProp<RootStackParamList, "Group">;
};

const HeaderLeft = ({ navigation }: HeaderComponentProps) => {
  return (
    <Layout style={styles.headerLeftRoot}>
      <Button
        onPress={() => navigation.popToTop()}
        style={styles.iconButton}
        appearance="ghost"
        accessoryLeft={<Ionicon name="home" size={20} />}
      />
    </Layout>
  );
};

type HeaderRightProps = {
  navigation: StackNavigationProp<RootStackParamList, "Group">;
  groupTitle: string;
  groupID: string;
  groupType: GroupType;
}

const HeaderRight = ({
  navigation, groupID, groupTitle, groupType,
}: HeaderRightProps) => {
  return (
    <Layout style={styles.headerLeftRoot}>
      <Button
        onPress={() => navigation.navigate("Chat", {
          groupID,
          groupTitle,
          groupType,
        })}
        style={styles.iconButton}
        appearance="ghost"
        accessoryLeft={<Ionicon name="chatbox" size={20} />}
      />
    </Layout>
  );
};

const GroupScreen = ({
  navigation,
  groupTitle,
  groupType,
  groupID,
}: {
  navigation: StackNavigationProp<RootStackParamList, "Group">;
  groupTitle: string;
  groupType: GroupType;
  groupID: string;
}) => {
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitleAlign: "left",
      headerTitleStyle: styles.headerTitle,
      headerTransparent: true,
      headerTitle: groupTitle,
      headerLeft: () => (
        <HeaderLeft navigation={navigation} />
      ),
      headerRight: () => (
        <HeaderRight
          navigation={navigation}
          groupID={groupID}
          groupTitle={groupTitle}
          groupType={groupType}
        />
      ),
    });
  }, [groupTitle, groupType]);
  return (
    <Layout style={styles.root}>
      <CourseGroup />
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
    marginRight: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  headerLeftRoot: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  headerTitle: {
    fontSize: 30,
    fontFamily: "Poppins_600SemiBold",
  },
});

export default GroupScreen;
