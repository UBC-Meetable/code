/* eslint-disable no-array-constructor */
/* eslint-disable no-param-reassign */
import React, { Component } from "react";
import {
  StyleSheet, Text, View,
  Image,
  SafeAreaView,
  Dimensions,
} from "react-native";
import { Card, Icon } from "react-native-elements";
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

  handleButtonPress = () => {

  }

  renderCards= (question: QuestionType) => (
    <View>
      <View style={styles.card}>
        <Text style={styles.questionTitle}>{question.title}</Text>
        <View style={styles.questionView}>
          <Image
            source={question.img}
            style={{ width: "100%", height: "100%" }}
          />
        </View>
        <View style={styles.buttonsContainer}>
          <Icon
            name="undo-variant"
            type="material-community"
            color="#FDD0A9"
            raised
            onPress={this.handleButtonPress}
            size={30}
          />
          <Icon
            name="dislike1"
            type="antdesign"
            color="#F5A159"
            raised
            onPress={this.handleButtonPress}
            size={40}
          />
          <Icon
            name="like1"
            type="antdesign"
            color="#7ED1EF"
            raised
            onPress={this.handleButtonPress}
            size={40}
          />
          <Icon
            name="heart"
            type="antdesign"
            color="#FF8D8D"
            raised
            onPress={this.handleButtonPress}
            size={30}
          />
        </View>
      </View>
    </View>
  );

  renderNoMoreCards = () => (
    <Card>
      <Text>No more cards to render. Call move to auth0 screen fn</Text>
    </Card>
  );

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
          renderCard={this.renderCards}
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
  card: {
    backgroundColor: "#FFF8F3",
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "10%",
    height: "145%",
    borderRadius: 30,
  },
  questionView: {
    alignContent: "center",
    backgroundColor: "#F9DAC4",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  questionTitle: {
    color: "#FBBA82",
    backgroundColor: "#FFF8F3",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 30,
    marginBottom: 30,
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: -20,
  },
  buttonContainer: {
    flex: 1,
  },
});

export default QuizScreen;
