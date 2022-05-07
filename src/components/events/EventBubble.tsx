import { Layout, Text } from "@ui-kitten/components";
import React from "react";
import { StyleSheet, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/EvilIcons";
import GradientButton from "../ui/GradientButton";

type EventBubbleProps = {
  courseName?: string;
  onPress?: () => void;
};

const EventBubble = ({ courseName, onPress }:EventBubbleProps) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Layout style={styles.root}>
        <View>
          <View>
            <Text style={[styles.titleStyle]}>Quiz 1 Study Session</Text>
          </View>
          <View style={styles.iconContainer}>
            <Icon name="clock" size={24} />
            <Text style={[styles.text]}>Time</Text>
          </View>
          {courseName && (
            <View style={styles.iconContainer}>
              <Text style={{ paddingHorizontal: 2 }}>📚</Text>
              <Text style={[styles.text]}>CourseName</Text>
            </View>
          )}
        </View>
        <View>
          <GradientButton
            textStyle={{ fontSize: 16 }}
            style={{ borderRadius: 15, height: 32, width: 80 }}
          >
            View
          </GradientButton>
        </View>
      </Layout>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
  },
  text: {
    paddingLeft: 5,
  },
  titleStyle: {
    fontFamily: "Poppins_500Medium",
    paddingBottom: 5,
  },
  root: {
    flexDirection: "row",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    padding: 10,
    borderRadius: 20,
    justifyContent: "space-between",
  },
  buttonText: {
    color: "black",
  },
});

export default EventBubble;
