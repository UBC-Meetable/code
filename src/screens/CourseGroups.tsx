import { CommonActions } from "@react-navigation/native";
import { StackNavigationProp, useHeaderHeight } from "@react-navigation/stack";
import { Layout, List, Spinner } from "@ui-kitten/components";
import React, {
  useContext, useEffect, useState,
} from "react";
import {
  RefreshControl,
  StyleSheet,
} from "react-native";
import CourseGroupBubble from "../components/Chat/CourseGroupBubble";
import CourseGroupsContext from "../context/SubscriptionContext";
import useAuthenticatedUser from "../hooks/useAuthenticatedUser";
import {
  ChatMessage, CourseGroup, GroupStackParamList,
} from "../types";

const CourseGroups = ({
  navigation,
}: {
  navigation: StackNavigationProp<GroupStackParamList, "GroupScreen">;
}) => {
  const user = useAuthenticatedUser();
  const groups = useContext(CourseGroupsContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (typeof groups !== "undefined") {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [groups]);
  const moveToGroupScreen = (groupTitle: string, groupID: string) => {
    navigation.dispatch(
      CommonActions.navigate("Group", {
        screen: "GroupScreen",
        groupID,
        groupTitle,
      }),
    );
  };

  const fakeLoad = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const headerHeight = useHeaderHeight();

  const renderItem = ({ item }:{item: CourseGroup}) => {
    if (!item.groupID) return <Spinner />;
    const messages = item.messages?.items as ChatMessage[];

    return (
      <CourseGroupBubble
        courseGroup={item}
        messages={messages}
        moveToGroupScreen={() => moveToGroupScreen(item.title as string, item.groupID as string)}
      />
    );
  };

  return (
    <Layout style={{ paddingTop: headerHeight, backgroundColor: "#0000" }}>
      <List
        refreshControl={(
          <RefreshControl
            refreshing={loading}
            onRefresh={fakeLoad}
          />
        )}
        style={[styles.card]}
        data={groups}
        renderItem={renderItem}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    display: "flex",
    minHeight: "100%",
    alignItems: "center",
    overflow: "scroll",
    borderColor: "black",
    borderWidth: 1,
    maxHeight: "100%",
  },
  bubble: {
    minHeight: 100,
    height: 100,
    display: "flex",
    margin: 10,
    borderColor: "white",
    borderRadius: 24,
    backgroundColor: "#E6F4F9",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  sectionBubble: {
    width: 50,
    height: 23,
    borderRadius: 50,
    position: "absolute",
    left: 101,
    top: 17,
    backgroundColor: "white",
  },
  sectionBubbleText: {
    color: "black",
    top: -5,
  },
  bubbleText: {
    fontSize: 16,
    lineHeight: 24,
    marginHorizontal: 20,
    marginBottom: 20,
    top: 16,
  },
  bubbleTextDesc: {
    fontSize: 10,
    marginHorizontal: 20,
    marginTop: 7.5,
    marginBottom: 10,
  },
  facePileBubble: {
    position: "absolute",
    flexDirection: "row",
    left: "52.5%",
    top: "45%",
    backgroundColor: "#E6F4F9",
  },
  backPile: {
    backgroundColor: "steelblue",
    position: "relative",
    left: "120%",
  },
  secondBackPile: {
    backgroundColor: "skyblue",
    position: "relative",
    left: "90%",
  },
  secondPile: {
    backgroundColor: "red",
    position: "relative",
    left: "60%",
  },
  frontPile: {
    backgroundColor: "black",
    position: "relative",
    left: "30%",
  },
  card: {
    height: "100%",
    overflow: "scroll",
    backgroundColor: "#0000",
  },
});

export default CourseGroups;
