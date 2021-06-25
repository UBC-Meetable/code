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
import getUserQuizzes from "../calls/fetchUserQuizzes";
import submitQuiz from "../calls/submitQuiz";
import FriendGroupBubble from "../components/friend_group/FriendGroupBubble";
import NoQuizzes from "../components/friend_group/NoQuizzes";
import Returned from "../components/friend_group/Returned";
import FriendGroupsContext from "../context/FriendGroupsContext";
import useAuthenticatedUser from "../hooks/useAuthenticatedUser";
import {
  ChatMessage, FriendGroupStackScreens, GroupStackParamList, QuestionType, RootStackParamList,
} from "../types";

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
  const [responses, setResponses] = useState<QuestionType[]>([]);
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [UIState, setUIState] = useState<UIStateOptions>(UIStateOptions.DEFAULT);
  const user = useAuthenticatedUser();

  useEffect(() => {
    setLoading((old) => ({ ...old, quizzes: true }));
    getUserQuizzes({ id: user.attributes.sub }).then((result) => {
      if (result.errors) {
        console.error(result.errors);
        throw new Error("Failed to fetch user quizzes");
      } else {
        const fetchedQuizzes = result.data?.getUser?.quizzes?.items?.filter(Boolean) as Quiz[];
        if (!fetchedQuizzes) {
          console.error("failed to get quizzes");
          throw new Error("failed to get quizzes");
        }
        setQuizzes(fetchedQuizzes);
        if (!fetchedQuizzes.length) {
          setUIState(UIStateOptions.NO_QUIZZES);
        } else if (fetchedQuizzes.length && !groups.length) {
          setUIState(UIStateOptions.RETURNED);
        }
      }
      setLoading((old) => ({ ...old, quizzes: false }));
    });
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

  const headerHeight = useHeaderHeight();

  const renderItem = ({ item }: { item: FriendGroup }) => {
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

  const isLoading = (test: LoadingType) => test.groups || test.quizzes;

  const questionTypeToQAPair = (responses: QuestionType[]) => responses.map((response) => ({
    q: response.id,
    a: response.response,
  } as QAPairInput));

  const handleReturn = (responses: QuestionType[]) => {
    setResponses(responses);
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

  if (isLoading(loading)) {
    return (
      <Layout style={[{
        paddingTop: headerHeight,
        backgroundColor: "#0000",
        justifyContent: "center",
        alignItems: "center",
      }, StyleSheet.absoluteFill]}
      >
        <Spinner />
      </Layout>
    );
  }

  const render = () => {
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
