/* eslint-disable no-array-constructor */
/* eslint-disable no-param-reassign */
import { Layout, Text } from "@ui-kitten/components";
import React, { useRef, useState } from "react";
import { Dimensions, ImageBackground, StyleSheet } from "react-native";
import Swiper from "react-native-deck-swiper";
import { Card } from "react-native-elements";
import { Button } from "react-native-paper";
import _ from "lodash";
import BubbleBackground from "../../assets/images/quizBubble.svg";
import QuizBubbleBottom from "../../assets/images/quizBubbleBottom.svg";
import QuizButtons from "../../components/QuizButtons";
import QuizSwipe from "../../components/QuizSwipe";
import rootStyles from "../../components/styles/rootStyles";
import Swipe from "../../components/Swipe";
import questions from "../../data/data";
import sampleData from "../../data/sampleQuiz.json";
import { QuestionType } from "../../types";
import FitImage from "react-native-fit-image";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const window = Dimensions.get("window");

const DEVSKIP = false;

export enum SwipeActions {
  "LIKE",
  "LOVE",
  "DISLIKE",
  "UNDO",
}

const QuizScreen = ({ onFinish }: { onFinish: () => void }) => {
  const [responses, setResponses] = useState(
    DEVSKIP ? sampleData.responses : ([] as QuestionType[])
  );
  const swiperRef = useRef<Swiper<QuestionType>>(null);
  const [cardIndex, setCardIndex] = useState(0);
  const units = useSafeAreaInsets();
  const debouncedSwipeHandler = _.debounce(
    (action: SwipeActions) => {
      switch (action) {
        case SwipeActions.LIKE:
          swiperRef.current?.swipeRight();
          break;
        case SwipeActions.LOVE:
          swiperRef.current?.swipeTop();
          break;
        case SwipeActions.DISLIKE:
          swiperRef.current?.swipeLeft();
          break;
        case SwipeActions.UNDO:
          swiperRef.current?.swipeBack();
          break;
        default:
          throw new Error("Swiper error");
      }
    },
    500,
    { leading: true, trailing: false }
  );
  return (
    <Layout style={styles.container}>
      <BubbleBackground
        width={window.width}
        style={{ position: "absolute", top: 0, left: 0 }}
      />
      <Layout style={styles.container}>
        <QuizSwipe
          onFinish={onFinish}
          cardIndex={cardIndex}
          setCardIndex={setCardIndex}
          swiperRef={swiperRef}
          data={questions}
        />
      </Layout>
      <Layout style={{ flexBasis: 150, backgroundColor: "#0000" }}>
        <QuizButtons
          onLike={() => debouncedSwipeHandler(SwipeActions.LIKE)}
          onLove={() => debouncedSwipeHandler(SwipeActions.LOVE)}
          onUndo={() => debouncedSwipeHandler(SwipeActions.UNDO)}
          onDislike={() => debouncedSwipeHandler(SwipeActions.DISLIKE)}
        />
      </Layout>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: window.width,
    backgroundColor: "#0000",
    marginTop: -50,
    paddingTop: 50,
  },
});

export default QuizScreen;
