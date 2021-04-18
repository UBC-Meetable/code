import { CommonActions } from "@react-navigation/native";
import { StackNavigationProp, useHeaderHeight } from "@react-navigation/stack";
import { Layout, List } from "@ui-kitten/components";
import { throttle } from "lodash";
import React, { useState } from "react";
import {
  RefreshControl,
  StyleSheet,
} from "react-native";
import fetchUserCourses from "../calls/fetchUserCourses";
import CourseGroupBubble from "../components/CourseGroupBubble";
import useAuthenticatedUser from "../hooks/useAuthenticatedUser";
import { CourseGroup, GroupStackParamList } from "../types";

const CourseGroups = ({
  navigation,
}: {
  navigation: StackNavigationProp<GroupStackParamList, "GroupScreen">;
}) => {
  const user = useAuthenticatedUser();
  const [loading, setLoading] = useState(true);
  const [groups, setGroups] = useState<CourseGroup[] | undefined>();

  const joinGroup = (courseGroup: CourseGroup) => {
    navigation.dispatch(
      CommonActions.navigate("Group", {
        screen: "GroupScreen",
        courseGroup,
      }),
    );
  };

  const headerHeight = useHeaderHeight();

  const getCourses = throttle(async () => {
    setLoading(() => true);
    try {
      const fetchedGroups = await fetchUserCourses({ id: user.attributes.sub });
      setGroups(() => fetchedGroups);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
      console.log("done");
    }
  }, 10000);

  React.useEffect(() => {
    if (user) {
      getCourses();
      getCourses.flush();
    }
  }, [user]);

  const renderItem = ({ item }:{item: CourseGroup}) => (
    <CourseGroupBubble courseGroup={item} joinGroup={joinGroup} />
  );

  return (
    <Layout style={{ paddingTop: headerHeight, backgroundColor: "#0000" }}>
      <List
        refreshControl={(
          <RefreshControl
            refreshing={loading}
            onRefresh={getCourses}
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
