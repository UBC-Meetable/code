import { CommonActions } from "@react-navigation/native";
import { StackNavigationProp, useHeaderHeight } from "@react-navigation/stack";
import { Layout, List, Spinner } from "@ui-kitten/components";
import React, { useContext, useEffect, useState } from "react";
import { RefreshControl, StyleSheet } from "react-native";
import { GroupType } from "../API";
import CourseGroupBubble from "../components/Chat/CourseGroupBubble";
import CourseGroupsContext from "../context/CourseGroupsContext";
import useAuthenticatedUser from "../hooks/useAuthenticatedUser";
import { ChatMessage, CourseGroup, GroupStackParamList } from "../types";

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
  const moveToGroupScreen = (
    groupTitle: string,
    groupID: string,
    groupType: GroupType,
  ) => {
    navigation.dispatch(
      CommonActions.navigate("Group", {
        screen: "GroupScreen",
        groupID,
        groupType,
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

  const renderItem = ({ item }: { item: CourseGroup }) => {
    if (!item.groupID) return <Spinner />;
    const messages = item.messages?.items as ChatMessage[];
    const itemName = `${item.title} ${item.code}`;
    return (
      <CourseGroupBubble
        courseGroup={item}
        messages={messages}
        moveToGroupScreen={() => moveToGroupScreen(
          itemName,
          item.groupID!,
          GroupType.COURSE,
        )}
      />
    );
  };

  return (
    <Layout style={{ paddingTop: headerHeight, backgroundColor: "#0000" }}>
      <List
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={fakeLoad} />
        }
        style={[styles.card]}
        data={groups}
        renderItem={renderItem}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  card: {
    height: "100%",
    overflow: "scroll",
    backgroundColor: "#0000",
  },
});

export default CourseGroups;
