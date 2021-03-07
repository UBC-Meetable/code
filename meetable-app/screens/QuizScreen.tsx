/* eslint-disable no-array-constructor */
/* eslint-disable no-param-reassign */
import React, { Component } from "react";
import {
  StyleSheet, Text,
  SafeAreaView,
  Dimensions,
  Alert,
} from "react-native";
import { Card } from "react-native-elements";
import Swipe from "../components/Swipe";
import questions from "../data/data";
import { QuestionType } from "../types";
import BubbleBackground from "../assets/images/auth0-bubble.svg";

const window = Dimensions.get("window");
class QuizScreen extends Component {
  quizState = {
    id: null,
    responses: Array<QuestionType>(),
  };

  handleResponse = (question: QuestionType, response: string) => {
    question.response = response;
    this.quizState.responses.push(question);
  }

  renderNoMoreCards = () => (
    <Card>
      <Text>No more cards to render. Call move to auth0 screen fn</Text>
      <Text onPress={this.showReportModal}>Test report modal</Text>
    </Card>
  );

  // Android only supports 3 options. Replace with custom popup
  showReportModal = () => {
    Alert.alert(
      "Report User",
      "",
      [
        {
          text: "Spam",
          onPress: () => console.log("Spam"),
        },
        {
          text: "Inappropriate language",
          onPress: () => console.log("inappropriate language"),
        },
        { text: "Other", onPress: () => console.log("other") },
      ],
      { cancelable: true },
    );
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <BubbleBackground
          width={window.width}
          height={window.height}
          style={{ position: "absolute" }}
        />
        <Swipe
          onSwipe={this.handleResponse}
          data={questions}
          keyProp="id"
          renderNoMoreCards={this.renderNoMoreCards}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF8F3",
  },
});

export default QuizScreen;
