import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Chip } from "react-native-paper";
import { Interest } from "../../types";

interface InterestChipsProps {
  selectInterest: any;
  deselectInterest: any;
  userInterests: Interest[];
  interestCategory: string;
}

export default function InterestChips({
  selectInterest,
  deselectInterest,
  userInterests,
  interestCategory,
}: InterestChipsProps) {
  return (
    <View style={styles.view}>
      <Text style={styles.title}>{interestCategory}</Text>
      {userInterests.map((interest, index) => {
        if (interest.category == "nerd stuff") {
          return (
            <Chip
              key={index}
              textStyle={styles.text}
              style={styles.chip}
              selected={interest.selected}
              mode={"outlined"}
            >
              {interest.name}
            </Chip>
          );
        }
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    marginLeft: 75,
  },
  title: {
    fontSize: 20,
    margin: 10,
  },
  chip: {
    width: "50%",
    marginLeft: 10,
    marginBottom: 10,
  },
  text: {
    color: "orange",
    fontSize: 15,
  },
});
