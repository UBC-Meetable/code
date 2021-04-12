/* eslint-disable no-array-constructor */
/* eslint-disable no-param-reassign */
import React, { Component, useState } from "react";
import {
  StyleSheet, Text,
  SafeAreaView,
  Dimensions,
} from "react-native";
import { Card, Icon } from "react-native-elements";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import Swipe from "../components/Swipe";
import questions from "../data/data";
import { QuestionType } from "../types";
import BubbleBackground from "../assets/images/auth0-bubble.svg";
import sampleData from "../data/sampleQuiz.json";
import { UserContext } from "../utils/UserContext";

const window = Dimensions.get("window");

const DEVSKIP = true;
const QuizScreen = ({ onFinish }: {onFinish: () => void}) => {
  const [responses, setResponses] = useState(DEVSKIP ? sampleData.responses : [] as QuestionType[]);
  const navigation = useNavigation();
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
    <SafeAreaView style={styles.container}>
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF8F3",
  },
});

export default QuizScreen;
