import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import InterestChip from "./InterestChip";

interface ChipsArrayProps {
  interestsList: string[];
  interestCategory: string;
}

interface Interest {
  key: number;
  label: string;
}

export default function ChipsArray({
  interestsList,
  interestCategory,
}: ChipsArrayProps) {
  const interestObjArray: Interest[] = interestsList.map((interest, index) => ({
    key: index,
    label: interest,
  }));

  const [chipData, setChipData] = React.useState<Interest[]>(interestObjArray);

  return (
    <View>
      <Text style={styles.title}>{interestCategory} </Text>
      {chipData.map((data) => {
        return (
          <InterestChip
            label={data.label}
            key={data.key}
            textStyle={styles.text}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  chip: {
    width: "25%",
    marginLeft: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    margin: 10,
  },
  text: {
    color: "orange",
    fontSize: 15,
  },
});
