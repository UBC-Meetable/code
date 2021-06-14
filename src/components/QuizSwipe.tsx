import { Layout, Text } from "@ui-kitten/components";
import React, { useRef, useState } from "react";
import { Dimensions, StyleSheet } from "react-native";
import Swiper from "react-native-deck-swiper";
import { SwipeActions } from "../screens/Auth/QuizScreen";
import { QuestionType } from "../types";
import QuizCard from "./QuizCard";

const window = Dimensions.get("window");

const q1 = () => <Layout style={{ height: 200, backgroundColor: "green" }}><Text>Hi</Text></Layout>;

const Cards = Array(100).fill(q1);

type SwipeProps = {
  onFinish?: () => void,
  data: QuestionType[],
  swiperRef: React.RefObject<Swiper<QuestionType>>
  cardIndex: number;
  setCardIndex: React.Dispatch<React.SetStateAction<number>>;
  onSwiped: (data: QuestionType, direction: SwipeActions) => void;
  remainingLoves: number;
}

const DEV_SKIP = false;

const QuizSwipe = ({
  onFinish, data, swiperRef, onSwiped, remainingLoves,
}: SwipeProps) => {
  const [title, setTitle] = useState("");

  const renderCard = (cardData: QuestionType, index: number) => <QuizCard {...cardData} />;

  const indexToCardSwipe = (index: number, direction: SwipeActions) => {
    const card = data[index];
    onSwiped(card, direction);
  };

  const layoutRef = useRef<Layout>(null);
  swiperRef.current?.forceUpdate();

  return (
    <Layout style={{
      flex: 1, marginTop: 50, backgroundColor: "#0000",
    }}
    >
      <Layout
        ref={layoutRef}
        style={{
          flex: 1, marginTop: 0, backgroundColor: "#0000",
        }}
      >
        <Swiper
          containerStyle={styles.container}
          cardStyle={styles.card}
          cards={data}
          onSwipedRight={(index) => indexToCardSwipe(index, SwipeActions.LIKE)}
          onSwipedLeft={(index) => indexToCardSwipe(index, SwipeActions.DISLIKE)}
          onSwipedTop={(index) => indexToCardSwipe(index, SwipeActions.LOVE)}
          renderCard={renderCard}
          showSecondCard
          disableTopSwipe={remainingLoves <= 0}
          childrenOnTop
          stackSize={2}
          cardIndex={DEV_SKIP ? 52 : 0}
          ref={swiperRef}
          disableBottomSwipe
          onSwipedAll={onFinish}
          swipeBackCard
          backgroundColor="#0000"
          overlayLabelWrapperStyle={styles.wrapper}
        />
      </Layout>
    </Layout>
  );
};

const styles = StyleSheet.create({
  card: {
    height: "auto",
    display: "flex",
    justifyContent: "flex-start",
    padding: 0,
    margin: 0,
  },
  container: {
    flex: 1,
  },
  wrapper: {
    backgroundColor: "#0000",
  },
});

export default QuizSwipe;
