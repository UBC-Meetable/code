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
    <View>
      <Text style={styles.title}>{interestCategory}</Text>
      <View style={styles.container}>
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
            {`${interest.name} 🍩`}
          </Chip>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "Poppins_500Medium",
    fontSize: 16,
    margin: 10,
    textAlign: "center",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    flexWrap: "wrap",
  },
  chip: {
    width: "auto",
    marginLeft: 10,
    marginBottom: 10,
  },
  text: {
    fontFamily: "Poppins_500Medium",
    color: "#082737",
    fontSize: 15,
  },
});
