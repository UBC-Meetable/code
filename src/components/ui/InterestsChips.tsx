import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Chip } from "react-native-paper";

export interface Interest {
  name: string;
  selected: boolean;
}

interface InterestChipsProps {
  updateSelectStatus: any;
  userInterests: Interest[];
  interestCategory: string;
}

export default function InterestChips({
  updateSelectStatus,
  userInterests,
  interestCategory,
}: InterestChipsProps) {
  return (
    <View style={styles.view}>
      <Text style={styles.title}>{interestCategory}</Text>
      {userInterests.map((interest, index) => (
        <Chip
          key={index}
          textStyle={styles.text}
          style={styles.chip}
          selected={interest.selected}
          onPress={() => {
            updateSelectStatus(index);
          }}
          mode={"outlined"}
        >
          {interest.name}
        </Chip>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    marginLeft: 75,
  },
  title: {
    fontFamily: "Poppins_500Medium",
    fontSize: 16,
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
