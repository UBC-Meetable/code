/* eslint-disable no-array-constructor */
/* eslint-disable no-param-reassign */
import { Layout } from "@ui-kitten/components";
import React, { useState } from "react";
import {
  Dimensions, StyleSheet,
} from "react-native";
import { Card } from "react-native-elements";
import { Button } from "react-native-paper";
import BubbleBackground from "../../assets/images/auth0-bubble.svg";
import rootStyles from "../../components/styles/rootStyles";
import Swipe from "../../components/Swipe";
import questions from "../../data/data";
import sampleData from "../../data/sampleQuiz.json";
import { QuestionType } from "../../types";

const window = Dimensions.get("window");

const DEVSKIP = true;
const QuizScreen = ({ onFinish }: {onFinish: () => void}) => {
  const [responses, setResponses] = useState(DEVSKIP ? sampleData.responses : [] as QuestionType[]);
  const handleResponse = (question: QuestionType, response: string) => {
    question.response = response;
    setResponses([...responses, question]);
  };

  const renderNoMoreCards = () => (
    <Card>
      <Button onPress={() => {
        onFinish();
      }}
      >
        {" "}
        Next

      </Button>
    </Card>
  );

  return (
    <Layout style={rootStyles}>
      <BubbleBackground
        width={window.width}
        height={window.height}
        style={{ position: "absolute" }}
      />
      <Swipe
        onSwipe={handleResponse}
        data={questions}
        keyProp="id"
        renderNoMoreCards={renderNoMoreCards}
        devSkip={DEVSKIP}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF8F3",
  },
});

export default QuizScreen;
