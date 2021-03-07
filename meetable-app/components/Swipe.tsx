/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from "react";
import {
  StyleSheet, PanResponderInstance,
  View, PanResponder, Animated, Dimensions, Text, Image,
} from "react-native";
import { Icon } from "react-native-elements";
import { QuestionType } from "../types";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SWIPE_THRESHOLD = 0.25 * SCREEN_WIDTH;
const SWIPE_OUT_DURATION = 250;
const ACTIONS = {
  LIKE: "like",
  DISLIKE: "dislike",
  PREVIOUS: "previous",
  SKIP: "skip",
  SUPERLIKE: "superlike",
};
type SwipeProps = {
    // eslint-disable-next-line no-unused-vars
    onSwipe: (question: QuestionType, response: string)=>void,
    data: QuestionType[],
    keyProp: string,
    renderNoMoreCards: Function,
}
type SwipeState = {
    position: any,
    panResponder: PanResponderInstance,
    index: number,
}
class Swipe extends Component<SwipeProps, SwipeState> {
  constructor(props: SwipeProps) {
    super(props);
    this.state = {
      position: new Animated.ValueXY(),
      panResponder: PanResponder.create({
        // Ask to be the responder:
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: (evt, gestureState) => {
          // The most recent move distance is gestureState.move{X,Y}
          // The accumulated gesture distance since becoming responder is gestureState.d{x,y}
          // eslint-disable-next-line react/destructuring-assignment
          this.state.position.setValue({ x: gestureState.dx, y: gestureState.dy });
        },
        onPanResponderRelease: (evt, gestureState) => {
          // The user has released all touches while this view is the
          // responder. This typically means a gesture has succeeded
          if (gestureState.dx > SWIPE_THRESHOLD) {
            this.forceSwipe("right"); // User swiped right
          } else if (gestureState.dx < -SWIPE_THRESHOLD) {
            this.forceSwipe("left"); // User swiped left
          } else {
            this.resetPosition();
          }
        },
      }),
      index: 0,
    };
  }

  // handle swipe/button press actions
  handleAction(response: string) {
    const { onSwipe, data } = this.props;
    const item = data[this.state.index];
    const currIndex = this.state.index;
    this.state.position.setValue({ x: 0, y: 0 });
    if (response === ACTIONS.PREVIOUS) {
      this.setState({ index: currIndex - 1 });
      return;
    }
    if (response === ACTIONS.SKIP) {
      this.setState({ index: currIndex + 1 });
      return;
    }
    onSwipe(item, response);
    this.setState({ index: currIndex + 1 });
  }

  getCardStyle() {
    const { position } = this.state;
    const rotate = position.x.interpolate({
      inputRange: [-SCREEN_WIDTH * 1.5, 0, SCREEN_WIDTH * 1.5],
      outputRange: ["-120deg", "0deg", "120deg"],
    });

    return {
      ...position.getLayout(),
      transform: [{ rotate }],
    };
  }

  forceSwipe(direction: string) {
    const x = direction === "right" ? SCREEN_WIDTH : -SCREEN_WIDTH;
    Animated.timing(this.state.position, {
      toValue: { x, y: 0 },
      useNativeDriver: false,
      duration: SWIPE_OUT_DURATION,
    }).start(() => this.handleAction(direction === "right" ? ACTIONS.LIKE : ACTIONS.DISLIKE));
  }

  resetPosition() {
    Animated.spring(this.state.position, {
      toValue: { x: 0, y: 0 },
      useNativeDriver: false,
    }).start();
  }

  renderCard= (question: QuestionType) => (
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
            onPress={() => this.handleAction(ACTIONS.PREVIOUS)}
            size={30}
          />
          <Icon
            name="dislike1"
            type="antdesign"
            color="#F5A159"
            raised
            onPress={() => this.handleAction(ACTIONS.DISLIKE)}
            size={40}
          />
          <Icon
            name="like1"
            type="antdesign"
            color="#7ED1EF"
            raised
            onPress={() => this.handleAction(ACTIONS.LIKE)}
            size={40}
          />
          <Icon
            name="heart"
            type="antdesign"
            color="#FF8D8D"
            raised
            onPress={() => this.handleAction(ACTIONS.SUPERLIKE)}
            size={30}
          />
        </View>
        <Text style={styles.skip} onPress={() => this.handleAction(ACTIONS.SKIP)}>Skip</Text>
      </View>
    </View>
  );

    renderCards = () => {
      if (this.state.index >= this.props.data.length) {
        return this.props.renderNoMoreCards();
      }

      return this.props.data.map((item, i) => {
        if (i < this.state.index) { return null; }

        if (i === this.state.index) {
          return (
            <Animated.View
              key={item.id}
              style={[this.getCardStyle(), styles.cardStyle]}
              {...this.state.panResponder.panHandlers}
            >
              {this.renderCard(item)}
            </Animated.View>
          );
        }

        return (
          <Animated.View
            key={item.id}
            style={[styles.cardStyle]}
          >
            {this.renderCard(item)}
          </Animated.View>
        );
      }).reverse();
    };

    render() {
      return <View>{this.renderCards()}</View>;
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF8F3",
  },
  cardStyle: {
    position: "absolute",
    width: SCREEN_WIDTH,
  },
  card: {
    backgroundColor: "#FFF8F3",
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "10%",
    height: "140%",
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
  skip: {
    width: "08%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 20,
  },
});

export default Swipe;
