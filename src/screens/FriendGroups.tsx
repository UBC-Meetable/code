/* eslint-disable max-len */
/* eslint-disable no-shadow */
import { CommonActions } from "@react-navigation/native";
import { StackNavigationProp, useHeaderHeight } from "@react-navigation/stack";
import { Layout, List, Spinner } from "@ui-kitten/components";
import React, { useContext, useEffect, useState } from "react";
import {
  RefreshControl, StyleSheet, Switch, Alert,
} from "react-native";
import {
  FriendGroup, GroupType, QAPairInput, Quiz,
} from "../API";
import getUserQuizzes from "../calls/fetchUserQuizzes";
import getBestFriendGroup from "../calls/getBestFriendGroup";
import joinFriendGroup from "../calls/joinFriendGroup";
import submitQuiz from "../calls/submitQuiz";
import updateUserProfile from "../calls/updateUserCourses";
import FriendGroupBubble from "../components/friend_group/FriendGroupBubble";
import NoQuizzes from "../components/friend_group/NoQuizzes";
import Returned from "../components/friend_group/Returned";
import FriendGroupsContext from "../context/FriendGroupsContext";
import useAuthenticatedUser from "../hooks/useAuthenticatedUser";
import useUserProfile from "../hooks/useUserProfile";
import {
  ChatMessage, QuestionType, RootStackParamList,
} from "../types";

// TODO: make global parameter, MAX_GROUP_SIZE = 5, w/ AWS.
const WEEKLY_GROUP_DAY = "Saturday";

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
  const [isEnabled, setIsEnabled] = useState(Boolean(userProfile!.user.multipleGroupsOptIn)); // multipleGroupsOptIn undefined gets cast to false
  // setIsEnabled(userProfile!.user.multipleGroupsOptIn); // note: this results in infinite re-render loop
  console.log(isEnabled);

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

          if (!returnVal) {
            console.error(groupOutput.errors);
            throw new Error("Failed to call joinFriendGroup");
          } else {
            const { groupID } = returnVal;
            const userID = user.attributes.sub;
            if (groupID) {
              // join existing group
              console.log("Joining existing Group");

              await joinFriendGroup(userID, groupID);
            } else {
              console.log("Creating new Group");
              await joinFriendGroup(userID, groupID);
              // create empty group so others will join.
            }
          }
        }
      }
    };
    // const getOptInStatus = async () => {
    // };

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

  const toggleSwitch = async () => {
    try {
      console.log(isEnabled);
      if (isEnabled) {
        Alert.alert(
          "Weekly Groups",
          `This ${WEEKLY_GROUP_DAY} you'll be added into a group chat with a new group of students in your year. If you want to opt out, you can disable weekly grouping below. You'll be able to toggle it back on again at any time you like.`,
          [
            {
              text: "Leave Enabled",
              onPress: () => {},
              style: "cancel",
            },
            {
              text: "Disable",
              onPress: async () => {
                try {
                  await updateUserProfile({
                    id: userProfile!.id,
                    multipleGroupsOptIn: !isEnabled,
                  });
                } catch (err) {
                  console.log(err);
                  Alert.alert("Failed to Toggle", "Please try again");
                  return;
                }
                setIsEnabled((previousState) => !previousState);
              },
            },
          ],
        );
      } else {
        Alert.alert(
          "Weekly Groups",
          `If you'd like to be added to a group chat with a new group of students every ${WEEKLY_GROUP_DAY}, you can toggle on weekly grouping below. You'll be able to opt out any time by hitting the toggle button again on the "Friend Groups" page.`,
          [
            {
              text: "Enable",
              onPress: async () => {
                try {
                  await updateUserProfile({
                    id: userProfile!.id,
                    multipleGroupsOptIn: !isEnabled,
                  });
                } catch (err) {
                  console.log(err);
                  Alert.alert("Failed to Toggle", "Please try again");
                  return;
                }
                setIsEnabled((previousState) => !previousState);
              },
              style: "cancel",
            },
            {
              text: "Leave Disabled",
              onPress: () => {},
            },
          ],
        );
      }
    } catch (err) {
      console.error(err);
    }
  };

  const renderGroups = () => (
    <Layout style={{ paddingTop: headerHeight, backgroundColor: "#0000" }}>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
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
