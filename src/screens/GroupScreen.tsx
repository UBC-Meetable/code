import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Button, Layout, Text } from "@ui-kitten/components";
import React, { useEffect } from "react";
import { ImageBackground, StyleSheet } from "react-native";
import Chat from "../components/Chat_old/Chat";
import CourseGroup from "../components/courseGroup/CourseGroup";
import Colors from "../constants/Colors";
import { Ionicon } from "../navigation/ProfileStackNavigator";
import { GroupType, RootStackParamList } from "../types";
import background from "../assets/images/meetable-background.jpeg";

type HeaderComponentProps = {
  navigation: StackNavigationProp<RootStackParamList>;
};

export const HeaderLeft = ({ navigation }: HeaderComponentProps) => {
  return (
    <Layout style={styles.headerLeftRoot}>
      <Ionicon name="ios-chevron-back" size={32} onPress={() => navigation.pop()} />
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
      <Ionicon
        name="chatbox"
        size={25}
        style={styles.iconButton}
        onPress={() => navigation.navigate("ChatScreen", {
          groupID,
          groupTitle,
        })}
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
      headerTitleAlign: "center",
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
    <ImageBackground source={background} style={{ flex: 1 }}>
      <Layout style={styles.root}>
        <CourseGroup groupTitle={groupTitle} courseId={groupID} navigation={navigation} />
      </Layout>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    display: "flex",
    height: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: Colors.theme.transparent,
  },
  iconButton: {
    marginRight: 15,
  },
  headerLeftRoot: {
    backgroundColor: "transparent",
  },
  headerTitle: {
    fontFamily: "Poppins_700Bold",
    fontSize: 32,
  },
});

export default GroupScreen;
