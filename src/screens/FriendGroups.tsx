import { CommonActions } from "@react-navigation/native";
import { StackNavigationProp, useHeaderHeight } from "@react-navigation/stack";
import { Layout, List, Spinner } from "@ui-kitten/components";
import React, { useContext, useEffect, useState } from "react";
import { RefreshControl, StyleSheet } from "react-native";
import { FriendGroup, GroupType } from "../API";
import FriendGroupBubble from "../components/FriendGroupBubble";
import FriendGroupsContext from "../context/FriendGroupsContext";
import { ChatMessage, GroupStackParamList } from "../types";

const FriendGroups = ({
  navigation,
}: {
  navigation: StackNavigationProp<GroupStackParamList, "GroupScreen">;
}) => {
  const groups = useContext(FriendGroupsContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (typeof groups !== "undefined") {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [groups]);

  const moveToGroupScreen = (groupTitle: string, groupID: string, groupType: GroupType) => {
    navigation.dispatch(
      CommonActions.navigate("Group", {
        screen: "GroupScreen",
        groupID,
        groupTitle,
        groupType,
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

  const renderItem = ({ item }: { item: FriendGroup }) => {
    console.log("***item***", item);

    if (!item.groupID) return <Spinner />;
    const messages = item.messages!.items as ChatMessage[];

    return (
      <FriendGroupBubble
        friendGroup={item}
        messages={messages}
        onPress={() => moveToGroupScreen(item.title!, item.groupID!, GroupType.FRIEND)}
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

export default FriendGroups;
