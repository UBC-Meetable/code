import React, { createRef, useState } from "react";
import {
  Layout, Text, Button, Card,
} from "@ui-kitten/components";
<<<<<<< HEAD
import { StyleSheet, Image } from "react-native";
import Carousel from "react-native-snap-carousel";
import { StackNavigationProp } from "@react-navigation/stack";
import MeetableCarousel from "../navigation/MeetableCarousel";
import logo from "../assets/images/logo.png";
import { RootStackParamList } from "../types";

const Intro = (
  <>
    <Image source={logo} />
    <Text>Hello</Text>
  </>
);

const Middle = (
  <>
    <Text>Hello</Text>
    <Image source={logo} />
  </>
);

const End = <Image source={logo} />;
=======
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
>>>>>>> 1dc95e5404d9b9e336c25b499a0f427193751d32

const Cards = [Intro, Middle, End];

const TutorialScreen = ({ navigation }: { navigation: StackNavigationProp<RootStackParamList, "Tutorial"> }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const carouselRef = createRef<Carousel<any>>();
  return (
    <Layout style={styles.root}>
<<<<<<< HEAD
      <Layout style={styles.topcontainer}>
        <MeetableCarousel
          ref={carouselRef}
          layout="stack"
=======
      <BubbleBackground width={window.width} height={window.height} style={{ position: "absolute" }} />

      <Layout style={styles.topcontainer}>
        <MeetableCarousel
          ref={carouselRef}
          layout="default"
>>>>>>> 1dc95e5404d9b9e336c25b499a0f427193751d32
          slideState={[activeSlide, setActiveSlide]}
          style={styles.carouselContainer}
          containerStyle={styles.carouselContainer}
        >
<<<<<<< HEAD
          {Cards.map((card, key) => (
            <Card key={key + 1} style={styles.card}>
              {card}
=======

          {Cards.map((TutScreen, key) => (
            <Card style={styles.card} key={key}>
              <TutScreen />
>>>>>>> 1dc95e5404d9b9e336c25b499a0f427193751d32
            </Card>
          ))}
        </MeetableCarousel>
      </Layout>

      <Layout style={styles.bottomcontainer}>
        <Button
          style={styles.button}
          onPress={() => {
            if (activeSlide === Cards.length - 1) {
<<<<<<< HEAD
              navigation.replace("Login");
=======
              navigation.replace("Quiz");
>>>>>>> 1dc95e5404d9b9e336c25b499a0f427193751d32
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
<<<<<<< HEAD
              {activeSlide === Cards.length - 1 ? "Continue" : "Next"}
=======
              {activeSlide === Cards.length - 1 ? "Take the Quiz" : "Next"}
>>>>>>> 1dc95e5404d9b9e336c25b499a0f427193751d32
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
<<<<<<< HEAD
=======
  title: {
    color: "#FBBA82",
  },
>>>>>>> 1dc95e5404d9b9e336c25b499a0f427193751d32
  root: {
    flex: 1,
    display: "flex",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
<<<<<<< HEAD
  },
  card: {
    width: "90%",
    padding: 10,
    marginBottom: 20,
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    maxHeight: "90%",
    backgroundColor: "#FADAC5",
    borderRadius: 40,
    borderWidth: 0,
    shadowColor: "black",
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.5,
    overflow: "visible",
=======
    backgroundColor: "#0000",
  },
  card: {
    width: "100%",
    padding: 0,
    margin: 0,
    height: "100%",
    maxHeight: "91%",
    backgroundColor: "#0000",
    borderWidth: 0,
>>>>>>> 1dc95e5404d9b9e336c25b499a0f427193751d32
  },
  button: {
    marginBottom: 20,
    width: "90%",
    borderRadius: 100,
<<<<<<< HEAD
    backgroundColor: "#000",
=======
    borderWidth: 0,
    backgroundColor: "#02A3F4",
>>>>>>> 1dc95e5404d9b9e336c25b499a0f427193751d32
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
<<<<<<< HEAD
=======
    backgroundColor: "rgba(0,0,0,0)",
>>>>>>> 1dc95e5404d9b9e336c25b499a0f427193751d32
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
<<<<<<< HEAD
=======
    backgroundColor: "#0000",
>>>>>>> 1dc95e5404d9b9e336c25b499a0f427193751d32
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
