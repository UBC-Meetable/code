import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Chip } from "react-native-paper";
import { Tooltip } from "react-native-elements/dist/tooltip/Tooltip";
import { Layout, Spinner, Text } from "@ui-kitten/components";
import { QAPair, User } from "../../API";
import getMatchingInterests from "../../calls/getMatchingInterests";
import Colors from "../../constants/Colors";
import useAuthenticatedUser from "../../hooks/useAuthenticatedUser";
import quizData from "../../data/data";

type InterestsProps = {
  user: User
};

const LIKED_COLOR = "#94DBCE";
const UNMATCHED_COLOR = Colors.theme.creme;
const LOVED_COLOR = "pink";

// Function that gets n random interests from an array of interests
const getRandomInterests = (interests: string[], n: number) => {
  const randomInterests = [];
  for (let i = 0; i < n; i += 1) {
    const randomIndex = Math.floor(Math.random() * interests.length);
    if (interests[randomIndex]) { randomInterests.push(interests[randomIndex]); }
  }
  return randomInterests;
};

const Interests = ({ user }:InterestsProps) => {
  const [liked, setLiked] = useState([] as string[]);
  const [loved, setLoved] = useState([] as string[]);
  const [unmatched, setUnmatched] = useState([] as string[]);
  const [loading, setLoading] = useState(true);
  const me = useAuthenticatedUser();
  useEffect(() => {
    if (!me) return;
    const loadData = async () => {
      const fetchedInterests = await getMatchingInterests(user.id!, me.attributes.sub);
      if (!user.quizzes?.items?.length || !user.quizzes?.items[0]?.responses) {
        setLoading(false);
        return;
      }
      const quizMap = new Map();
      quizData.forEach((question) => quizMap.set(question.id, question.title));

      // Todo support multiple quizzes
      const userInterests = user.quizzes.items[0]?.responses!;
      const matchedLikedInterests = getRandomInterests(fetchedInterests.liked, 3)
        .filter((item) => !!item);
      const matchedLovedInterests = getRandomInterests(fetchedInterests.loved, 3)
        .filter((item) => !!item);
      const userInterestSet = new Set();
      matchedLovedInterests.forEach((interest: string) => userInterestSet.add(interest));
      matchedLikedInterests.forEach((interest: string) => userInterestSet.add(interest));
      const unmatchedList = userInterests
        .filter((interest: QAPair) => !userInterestSet.has(interest.q)).filter((item) => !!item);
      const unmatchedInterests = getRandomInterests(unmatchedList.map((pair) => pair.q!), 3);

      setLiked(matchedLikedInterests.map((interest) => quizMap.get(interest))
        .filter((item) => !!item));
      setLoved(matchedLovedInterests.map((interest) => quizMap.get(interest))
        .filter((item) => !!item));
      setUnmatched(unmatchedInterests.map((interest) => quizMap.get(interest))
        .filter((item) => !!item));
      setLoading(false);
    };
    loadData();
  }, [me]);

  if (loading) {
    return <Layout style={styles.loading}><Spinner /></Layout>;
  }
  return (
    <>
      {loved.map((title) => (

        <Chip style={[styles.loved, styles.chip]}>{title}</Chip>
      ))}
      {liked.map((title) => (

        <Chip style={[styles.liked, styles.chip]}>{title}</Chip>
      ))}
      {unmatched.map((title) => (
        <Chip style={[styles.nonMatching, styles.chip]}>{title}</Chip>
      ))}

    </>
  );
};

const styles = StyleSheet.create({
  liked: {
    backgroundColor: LIKED_COLOR,
  },
  loved: {
    backgroundColor: LOVED_COLOR,
  },
  chip: {
    display: "flex",
    justifyContent: "center",
    // maxWidth: 120,
    margin: 3,
    flexGrow: 1,
  },
  nonMatching: {
    backgroundColor: UNMATCHED_COLOR,
  },
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
});

export default Interests;
