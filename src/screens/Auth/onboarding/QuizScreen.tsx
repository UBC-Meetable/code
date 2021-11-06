/* eslint-disable no-array-constructor */
/* eslint-disable no-param-reassign */
import { Layout } from "@ui-kitten/components";
import _ from "lodash";
import React, { useRef, useState } from "react";
import { Dimensions, StyleSheet } from "react-native";
import Swiper from "react-native-deck-swiper";
import QuizButtons from "../../../components/QuizButtons";
import QuizSwipe from "../../../components/QuizSwipe";
import { QuestionType, SwipeActions } from "../../../types";
import sampleData from "../../../data/sampleQuiz.json";
import BubbleBackground from "../../../assets/images/quizBubble.svg";
import questions from "../../../data/data";

const window = Dimensions.get("window");

const DEV_SKIP = true;

const QuizScreen = ({
  onFinish,
}: {
  onFinish: (q: QuestionType[]) => void;
}) => {
  const [responses, setResponses] = useState(
    DEV_SKIP ? sampleData.responses : ([] as QuestionType[]),
  );
  const swiperRef = useRef<Swiper<QuestionType>>(null);
  const [cardIndex, setCardIndex] = useState(0);
  const [remainingLoves, setRemainingLoves] = useState(3);
  const [responseStack] = useState([] as SwipeActions[]);
  const debouncedSwipeHandler = _.debounce(
    (action: SwipeActions) => {
      switch (action) {
      case SwipeActions.LIKE:
        swiperRef.current?.swipeRight();
        break;
      case SwipeActions.LOVE:
        if (remainingLoves > 0) swiperRef.current?.swipeTop();
        break;
      case SwipeActions.DISLIKE:
        swiperRef.current?.swipeLeft();
        break;
      case SwipeActions.UNDO:
        swiperRef.current?.swipeBack(() => {
          const prevResponse = responseStack.pop() as SwipeActions;

          if (prevResponse === SwipeActions.LOVE) {
            setRemainingLoves((prev) => prev + 1);
          }
        });
        break;
      default:
        throw new Error("Swiper error");
      }
    },
    500,
    { leading: true, trailing: false },
  );

  const handleSwipe = (data: QuestionType, answer: SwipeActions) => {
    const formattedAnswer = data;
    formattedAnswer.response = answer;
    if (answer === SwipeActions.LOVE) {
      setRemainingLoves((prev) => prev - 1);
    }
    responseStack.push(answer);
    setResponses((prevResponses) => [...prevResponses, formattedAnswer]);
  };

  return (
    <Layout style={styles.container}>
      <BubbleBackground
        width={window.width}
        style={{ position: "absolute", top: 0, left: 0 }}
      />
      <Layout style={styles.container}>
        <QuizSwipe
          remainingLoves={remainingLoves}
          onSwiped={handleSwipe}
          onFinish={() => onFinish(responses)}
          cardIndex={cardIndex}
          setCardIndex={setCardIndex}
          swiperRef={swiperRef}
          data={questions}
        />
      </Layout>
      <Layout style={{ flexBasis: 150, backgroundColor: "#0000" }}>
        <QuizButtons
          remainingLoves={remainingLoves}
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
