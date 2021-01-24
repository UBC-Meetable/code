import React, { Component } from 'react';
import { StyleSheet, DeviceEventEmitter, PanResponderInstance } from 'react-native';
import {
  View, PanResponder, Animated, Dimensions
} from 'react-native';
import { QuestionType } from '../types';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SWIPE_THRESHOLD = 0.25 * SCREEN_WIDTH;
const SWIPE_OUT_DURATION = 250;
type SwipeProps = {
    onSwipe: (question: QuestionType, response: string)=>void,
    data: QuestionType[],
    keyProp: string,
    renderCard: Function, 
    renderNoMoreCards: Function, 
}
type SwipeState = {
    position: any,
    _panResponder: PanResponderInstance,
    index: number,
}
class Swipe extends Component<SwipeProps, SwipeState> {
    constructor(props: SwipeProps) {
        super(props);
        this.state = {
            position: new Animated.ValueXY(),
            _panResponder: PanResponder.create({
                // Ask to be the responder:
                onStartShouldSetPanResponder: (evt, gestureState) => true,
                onPanResponderMove: (evt, gestureState) => {
                  // The most recent move distance is gestureState.move{X,Y}
                  // The accumulated gesture distance since becoming responder is gestureState.d{x,y}
                  this.state.position.setValue({x: gestureState.dx, y: gestureState.dy});
                },
                onPanResponderRelease: (evt, gestureState) => {
                  // The user has released all touches while this view is the
                  // responder. This typically means a gesture has succeeded
                  if (gestureState.dx > SWIPE_THRESHOLD) {
                      this.forceSwipe('right'); // User swiped right
                    } else if (gestureState.dx < -SWIPE_THRESHOLD) {
                      this.forceSwipe('left'); // User swiped left
                    } else {
                      this.resetPosition();
                    }
                },
              }),
              index: 0,
        }
        // this.eventListener = DeviceEventEmitter.addListener('cardBtnPressed', this.handleCardBtnActions);
      }

      onSwipeComplete(direction: string, btnName = null) {
        const { onSwipe, data } = this.props;
        const item = data[this.state.index];
        direction === 'right' ? onSwipe(item, "liked") : onSwipe(item, "disliked");
        this.state.position.setValue({ x: 0, y: 0 });
        this.setState({ index: this.state.index + 1 });
      }

      forceSwipe(direction: string) {
        const x = direction === 'right' ? SCREEN_WIDTH : -SCREEN_WIDTH;
        Animated.timing(this.state.position, {
          toValue: { x, y: 0 },
          useNativeDriver: false,
          duration: SWIPE_OUT_DURATION
        }).start(() => this.onSwipeComplete(direction));
      }

    //   handleCardBtnActions = (btn) => {
    //     console.log("Hello!", btn);
    //   }

      resetPosition() {
        Animated.spring(this.state.position, {
          toValue: { x: 0, y: 0 },
          useNativeDriver: false
        }).start();
      }

      getCardStyle() {
        const { position } = this.state;
        const rotate = position.x.interpolate({
          inputRange: [-SCREEN_WIDTH * 1.5, 0, SCREEN_WIDTH * 1.5],
          outputRange: ['-120deg', '0deg', '120deg']
        });
    
        return {
          ...position.getLayout(),
          transform: [{ rotate }]
        };
      }

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
                {...this.state._panResponder.panHandlers}
              >
                {this.props.renderCard(item)}
              </Animated.View>
            );
          }
    
          return (
            <Animated.View
              key={item.id}
              style={[styles.cardStyle]}
            >
              {this.props.renderCard(item)}
            </Animated.View>
          );
        }).reverse();
    
     };
  render() {
    return <View>{this.renderCards()}</View>;
  }
}

const styles = StyleSheet.create({
    cardStyle: {
        position: 'absolute',
        width: SCREEN_WIDTH,
      }
  });

export default Swipe;
