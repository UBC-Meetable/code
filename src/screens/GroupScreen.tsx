import { StackNavigationProp } from "@react-navigation/stack";
import { Button, Layout, Text } from "@ui-kitten/components";
import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import Chat from "../components/Chat/Chat";
import CourseGroup from "../components/courseGroup/CourseGroup";
import Colors from "../constants/Colors";
import { GearIcon, HomeIcon } from "../navigation/ProfileStackNavigator";
import { GroupType, RootStackParamList } from "../types";

type HeaderRightProps = {
  navigation: StackNavigationProp<RootStackParamList, "Group">;
};

const HeaderLeft = ({ navigation }: HeaderRightProps) => {
  return (
    <Layout style={styles.headerLeftRoot}>
      <Button
        onPress={() => navigation.popToTop()}
        style={styles.iconButton}
        appearance="ghost"
        accessoryLeft={HomeIcon}
      />
    </Layout>
  );
};

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
    navigation.setOptions({
      headerShown: true,
      headerTitleAlign: "left",
      headerTitleStyle: styles.headerTitle,
      headerTransparent: true,
      headerTitle: groupTitle,
      headerLeft: () => (
        <HeaderLeft navigation={navigation} />
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
