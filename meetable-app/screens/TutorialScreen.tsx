import React, { createRef, useState } from "react";
import {
  Layout, Text, Button, Card,
} from "@ui-kitten/components";
import {
  StyleSheet, Image, ImageBackground, Dimensions,
} from "react-native";
import Carousel from "react-native-snap-carousel";
import { StackNavigationProp } from "@react-navigation/stack";
import MeetableCarousel from "../navigation/MeetableCarousel";
import { RootStackParamList } from "../types";
import BubbleBackground from "../assets/images/tutorial-bubble.svg";
import Intro from "../components/tutorial_slides/Intro";
import Middle from "../components/tutorial_slides/Middle";
import End from "../components/tutorial_slides/End";

const window = Dimensions.get("window");

const Cards = [Intro, Middle, End];

const TutorialScreen = ({ navigation }: { navigation: StackNavigationProp<RootStackParamList, "Tutorial"> }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const carouselRef = createRef<Carousel<any>>();
  return (
    <Layout style={styles.root}>
      <BubbleBackground width={window.width} height={window.height} style={{ position: "absolute" }} />

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
              navigation.replace("Login");
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
              {activeSlide === Cards.length - 1 ? "Take the Quiz" : "Next"}
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
  root: {
    flex: 1,
    display: "flex",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF8F3",
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
