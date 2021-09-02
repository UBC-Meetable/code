import {
  Button, Card, Layout, Text,
} from "@ui-kitten/components";
import React, { createRef, useState } from "react";
import { Dimensions, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Carousel from "react-native-snap-carousel";
import QuizBubbleTop from "../../../assets/images/tutorial-bubble.svg";
import rootStyles from "../../../components/styles/rootStyles";
import End from "../../../components/tutorial_slides/End";
import Intro from "../../../components/tutorial_slides/Intro";
import Middle from "../../../components/tutorial_slides/Middle";
import MeetableCarousel from "../../../navigation/MeetableCarousel";

const window = Dimensions.get("window");

const Cards = [Intro, Middle, End];

type TutorialProps = {
  onContinue?: () => void;
}

const TutorialScreen = ({ onContinue }: TutorialProps) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const carouselRef = createRef<Carousel<any>>();
  const units = useSafeAreaInsets();
  return (
    <Layout style={rootStyles}>
      <QuizBubbleTop
        width={window.width}
        height={window.height + 4 * units.top}
        style={{ position: "absolute" }}
      />

      <Layout style={styles.topcontainer}>
        <MeetableCarousel
          ref={carouselRef}
          layout="default"
          slideState={[activeSlide, setActiveSlide]}
          style={styles.carouselContainer}
          containerStyle={styles.carouselContainer}
        >
          {Cards.map((TutScreen, key) => (
            <Card style={styles.card} key={key}>
              <TutScreen />
            </Card>
          ))}
        </MeetableCarousel>
      </Layout>

      <Layout style={styles.bottomcontainer}>
        <Button
          style={styles.button}
          onPress={() => {
            if (activeSlide === Cards.length - 1) {
              if (onContinue) onContinue();
            } else {
              carouselRef.current?.snapToNext();
            }
          }}
        >
          {(evaProps: any) => (
            <Text
              {...evaProps}
              style={{ ...evaProps.style, ...styles.buttonText }}
            >
              {activeSlide === Cards.length - 1 ? "Let's Go!" : "Next"}
            </Text>
          )}
        </Button>
        {activeSlide === Cards.length - 1 ? null : (
          <Text
            style={styles.buttonText}
            onPress={() => carouselRef.current?.snapToItem(Cards.length - 1)}
          >
            Skip
          </Text>
        )}
      </Layout>
    </Layout>
  );
};

const styles = StyleSheet.create({
  title: {
    color: "#FBBA82",
  },
  card: {
    width: "100%",
    padding: 0,
    margin: 0,
    height: "100%",
    maxHeight: "91%",
    backgroundColor: "#0000",
    borderWidth: 0,
  },
  button: {
    marginBottom: 20,
    width: "90%",
    borderRadius: 100,
    borderWidth: 0,
    backgroundColor: "#02A3F4",
  },
  buttonText: {
    fontSize: 20,
    textAlign: "center",
    flex: 1,
  },
  carousel: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  blacktext: {
    color: "#000",
  },
  slide: {
    height: "90%",
    display: "flex",
    width: "90%",
    marginTop: 10,
    backgroundColor: "rgba(0,0,0,0)",
    justifyContent: "center",
    alignItems: "center",
    color: "#000000",
  },
  topcontainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0)",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  bottomcontainer: {
    flex: 0,
    display: "flex",
    flexBasis: 150,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#0000",
  },
  carouselContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    marginTop: 30,
  },
});

export default TutorialScreen;
