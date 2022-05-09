import { Layout, Text } from "@ui-kitten/components";
import React from "react";
import { StyleSheet, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/EvilIcons";
import {
  differenceInWeeks, format, formatRelative, isSameDay, subDays,
} from "date-fns";
import GradientButton from "../ui/GradientButton";

type EventBubbleProps = {
  courseName?: string;
  title: string;
  startTime: string;
  endTime: string;
  onPress?: () => void;
};

const handleDateFormatting = (startTime: string, endTime: string) => {
  const startDate = new Date(startTime);
  const endDate = new Date(endTime);
  const now = new Date();
  const diff = differenceInWeeks(startDate, now);

  if (Math.abs(diff) === 0) {
    const uncapitalized = formatRelative(startDate, now);
    const capitalized = uncapitalized.charAt(0).toUpperCase() + uncapitalized.slice(1);
    return capitalized;
  }

  if (isSameDay(startDate, endDate)) {
    return `${format(startDate, "MMM d")}, ${format(startDate, "h:mm aaa")} - ${format(endDate, "h:mm aaa")}`;
  }

  return `${format(startDate, "MMM d")}, ${format(startDate, "h:mm aaa")} - ${format(endDate, "MMM d")}, ${format(endDate, "h:mm aaa")}`;
};

const EventBubble = ({
  startTime, endTime, title, courseName, onPress,
}:EventBubbleProps) => {
  return (
    <TouchableWithoutFeedback onPress={onPress} style={{ marginBottom: 5 }}>
      <Layout style={styles.root}>
        <View>
          <View style={{ maxWidth: "90%" }}>
            <Text style={[styles.titleStyle]}>
              {title}
            </Text>
          </View>
          <View style={styles.iconContainer}>
            <Text style={{ paddingHorizontal: 2 }}>🕒</Text>
            <Text style={[styles.text]}>
              {handleDateFormatting(startTime, endTime)}
            </Text>
          </View>
          {courseName && (
            <View style={styles.iconContainer}>
              <Text style={{ paddingHorizontal: 2 }}>📚</Text>
              <Text style={[styles.text]}>{courseName}</Text>
            </View>
          )}
        </View>
        {onPress && (
          <View style={{ position: "absolute", top: 10, right: 10 }}>
            <GradientButton
              textStyle={{ fontSize: 16 }}
              style={{ borderRadius: 15, height: 32, width: 80 }}
            >
              View
            </GradientButton>
          </View>
        )}
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
    position: "relative",
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
