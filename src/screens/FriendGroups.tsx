/* eslint-disable no-shadow */
import { CommonActions, useNavigation } from "@react-navigation/native";
import { StackNavigationProp, useHeaderHeight } from "@react-navigation/stack";
import {
  Layout, List, Spinner, Text,
} from "@ui-kitten/components";
import React, { useContext, useEffect, useState } from "react";
import { GestureResponderEvent, RefreshControl, StyleSheet } from "react-native";
import {
  FriendGroup, GroupType, QAPairInput, Quiz,
} from "../API";
import fetchUserProfile from "../calls/fetchUserProfile";
import getUserQuizzes from "../calls/fetchUserQuizzes";
import getBestFriendGroup from "../calls/getBestFriendGroup";
import joinFriendGroup from "../calls/joinFriendGroup";
import submitQuiz from "../calls/submitQuiz";
import FriendGroupBubble from "../components/friend_group/FriendGroupBubble";
import NoQuizzes from "../components/friend_group/NoQuizzes";
import Returned from "../components/friend_group/Returned";
import FriendGroupsContext from "../context/FriendGroupsContext";
import UserSchoolInfoContext from "../context/UserProfileContext";
import useAuthenticatedUser from "../hooks/useAuthenticatedUser";
import useUserProfile from "../hooks/useUserProfile";
import {
  ChatMessage, FriendGroupStackScreens, GroupStackParamList, QuestionType, RootStackParamList,
} from "../types";

const MAX_GROUP_SIZE = 5; // todo make global parameter w/ aws.

export enum UIStateOptions {
  NO_QUIZZES,
  DEFAULT,
  RETURNED,
}

type LoadingType = {
  quizzes: boolean;
  groups: boolean;
}

const FriendGroups = ({
  navigation,
}: {
  navigation: StackNavigationProp<RootStackParamList, "Quiz">;
}) => {
  const groups = useContext(FriendGroupsContext);
  const [loading, setLoading] = useState<LoadingType>({ groups: false, quizzes: false });
  const [UIState, setUIState] = useState<UIStateOptions>(UIStateOptions.DEFAULT);
  const user = useAuthenticatedUser();
  const { info: userProfile } = useUserProfile();
  const headerHeight = useHeaderHeight();

  // this is the ugliest thing ever
  useEffect(() => {
    const getFriendGroupState = async () => {
      const quizResult = await getUserQuizzes({ id: user.attributes.sub });

      if (quizResult.errors) {
        console.error(quizResult.errors);
        throw new Error("Failed to fetch user quizzes");
      } else {
        const fetchedQuizzes = quizResult.data?.getUser?.quizzes?.items?.filter(Boolean) as Quiz[];
        if (!fetchedQuizzes) {
          console.error("failed to get quizzes");
          throw new Error("failed to get quizzes");
        }
        if (!fetchedQuizzes.length) {
          setUIState(UIStateOptions.NO_QUIZZES);
        } else if (fetchedQuizzes.length && !groups.length) {
          setUIState(UIStateOptions.RETURNED);
          setLoading((old) => ({ ...old, quizzes: false }));
          const groupOutput = await getBestFriendGroup({
            id: user.attributes.sub,
            university: userProfile.university,
            year: userProfile.year,
          });
          const returnVal = groupOutput.data?.joinFriendGroup;
          console.log(returnVal);

          if (!returnVal) {
            console.error(groupOutput.errors);
            throw new Error("Failed to call joinFriendGroup");
          } else {
            const { groupID } = returnVal;
            const userID = user.attributes.sub;
            if (groupID) {
              // join existing group
              console.log("join existing group");
              await joinFriendGroup(userID, groupID);
            } else {
              await joinFriendGroup(userID, groupID);
              // create empty group so others will join.
              console.log("create new group");
            }
          }
        }
      }
    };

    getFriendGroupState()
      .then(() => setLoading((old) => ({ ...old, quizzes: false })))
      .catch((e) => console.error(e));
  }, []);

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
    setLoading((old) => ({ ...old, groups: true }));
    setTimeout(() => {
      setLoading((old) => ({ ...old, groups: false }));
    }, 1000);
  };

  const renderItem = ({ item }: { item: FriendGroup }) => {
    if (!item.groupID) return <Spinner />;
    const messages = item.messages!.items as ChatMessage[];
    const users = item.users!.items!.map((item) => item!.user!);

    const lastInitialOrEmptyString = (lastName?: string | null) => {
      if (!lastName) return "";
      return lastName.substr(0, 1);
    };
    const renderGroupMemberNames = () => {
      const userNames = users.map((user) => `${user.firstName} ${lastInitialOrEmptyString(user.lastName)}`.trim());
      return userNames.join(", ");
    };

    const group = item;
    if (!group.title) group.title = renderGroupMemberNames();
    return (
      <FriendGroupBubble
        friendGroup={group}
        messages={messages}
        onPress={() => moveToGroupScreen(group.title!,
          item.groupID!, GroupType.FRIEND)}
      />
    );
  };

  const isLoading = (test: LoadingType) => test.groups || test.quizzes;

  const questionTypeToQAPair = (responses: QuestionType[]) => responses.map((response) => ({
    q: response.id,
    a: response.response,
  } as QAPairInput));

  const handleReturn = (responses: QuestionType[]) => {
    setUIState(UIStateOptions.RETURNED);
    const formattedResponses = questionTypeToQAPair(responses);
    submitQuiz({
      userID: user.attributes.sub,
      responses: formattedResponses,
    });
  };
  const handleContinue = () => {
    navigation.push("Quiz", { return: handleReturn });
  };

  const renderGroups = () => (
    <Layout style={{ paddingTop: headerHeight, backgroundColor: "#0000" }}>
      <List
        refreshControl={
          <RefreshControl refreshing={isLoading(loading)} onRefresh={fakeLoad} />
        }
        style={[styles.card]}
        data={groups}
        renderItem={renderItem}
      />
    </Layout>
  );

  const renderLoad = () => (
    <Layout style={{ paddingTop: headerHeight, backgroundColor: "#0000" }}>
      <List
        refreshControl={
          <RefreshControl refreshing onRefresh={fakeLoad} />
        }
        style={[styles.card]}
        data={[]}
        renderItem={renderItem}
      />
    </Layout>
  );

  const renderNoQuizzes = () => (
    <Layout style={[{
      paddingTop: headerHeight,
      backgroundColor: "#0000",
      justifyContent: "center",
      alignItems: "center",
    }, StyleSheet.absoluteFill]}
    >
      <NoQuizzes onContinue={handleContinue} />
    </Layout>
  );

  const renderReturned = () => (
    <Layout style={[{
      paddingTop: headerHeight,
      backgroundColor: "#0000",
      justifyContent: "center",
      alignItems: "center",
    }, StyleSheet.absoluteFill]}
    >
      <Returned />
    </Layout>
  );

  const render = () => {
    if (isLoading(loading)) {
      return renderLoad();
    }
    switch (UIState) {
    case UIStateOptions.DEFAULT:
      return renderGroups();
    case UIStateOptions.NO_QUIZZES:
      return renderNoQuizzes();
    case UIStateOptions.RETURNED:
      return renderReturned();
    default:
      return renderGroups();
    }
  };

  return (
    render()
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
