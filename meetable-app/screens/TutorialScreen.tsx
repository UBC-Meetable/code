import React, { createRef, useState } from "react";
import {
  Layout, Text, Button, Card,
} from "@ui-kitten/components";
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

const Cards = [Intro, Middle, End];

const TutorialScreen = ({ navigation }: { navigation: StackNavigationProp<RootStackParamList, "Tutorial"> }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const carouselRef = createRef<Carousel<any>>();
  return (
    <Layout style={styles.root}>
      <Layout style={styles.topcontainer}>
        <MeetableCarousel
          ref={carouselRef}
          layout="stack"
          slideState={[activeSlide, setActiveSlide]}
          style={styles.carouselContainer}
          containerStyle={styles.carouselContainer}
        >
          {Cards.map((card, key) => (
            <Card key={key + 1} style={styles.card}>
              {card}
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
              {activeSlide === Cards.length - 1 ? "Continue" : "Next"}
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
  root: {
    flex: 1,
    display: "flex",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
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
  },
  button: {
    marginBottom: 20,
    width: "90%",
    borderRadius: 100,
    backgroundColor: "#000",
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
