import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, 
  Image, 
  SafeAreaView,
  Dimensions} from 'react-native';
import Swipe from '../components/Swipe';
import questions from '../data/data';
import { Card, Button } from 'react-native-elements';
import { DeviceEventEmitter } from 'react-native';
import { QuestionType } from '../types';
import BubbleBackground from "../assets/images/tutorial-bubble.svg";


const window = Dimensions.get("window");
class QuizScreen extends Component {
  quizState = {
    id: null,
    responses: Array<QuestionType>()
  };

  handleResponse = (question: QuestionType, response: string) => {
    question.response = response;
    this.quizState.responses.push(question);
  }


  renderCards= (question: QuestionType, i:number) => {
    return (
      <Card>
        <View style={styles.card}>
        <Text style={styles.questionTitle}>{question.title}</Text>
        <View style={styles.questionView}>
          <Image
            source={question.img}
            style={{ width: '100%', height: 600 }}
          />
        </View>
        </View>
      </Card>
    );
  };

  renderNoMoreCards = () => {
    return (
      <Card>
        <Text>No more cards to render. Call move to auth0 screen fn</Text>
      </Card>
    );
  };

  render() {
  return (
    <SafeAreaView style={styles.container}>
        {/* <BubbleBackground width={window.width} height={window.height} style={{ position: "absolute" }} /> */}
        <Swipe 
        onSwipe = {this.handleResponse}
        data={questions} 
        keyProp="id"
        renderCard={this.renderCards}
        renderNoMoreCards={this.renderNoMoreCards}/>
      </SafeAreaView>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8F3',
  },
  card: {
    backgroundColor: '#FFF8F3', // CHANGE TO TRANSPARENT
    marginTop:-20,
    marginBottom:-20,
    marginRight:-20,
    marginLeft:-20,
  },
  questionView: {
    alignContent: 'center',
    backgroundColor: "#F9DAC4",
    borderRadius: 30,
  },
  questionTitle: {
    color: '#FBBA82',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 30,
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1,
  }
});

export default QuizScreen;
