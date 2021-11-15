import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import InterestChip from "./InterestChip";

interface ChipsArrayProps {
  interestsList: string[];
  interestCategory: string;
  addInterest: any;
  removeInterest: any;
}

interface Interest {
  key: number;
  label: string;
}

export default function ChipsArray({
  interestsList,
  interestCategory,
  addInterest,
  removeInterest,
}: ChipsArrayProps) {
  const interestObjArray: Interest[] = interestsList.map((interest, index) => ({
    key: index,
    label: interest,
  }));

  const [chipData, setChipData] = React.useState<Interest[]>(interestObjArray);

  return (
    <View style={styles.view}>
      <Text style={styles.title}>{interestCategory} </Text>
      {chipData.map((data) => {
        return (
          <InterestChip
            addInterest={addInterest}
            removeInterest={removeInterest}
            id={data.key}
            label={data.label}
            textStyle={styles.text}
          />
        );
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
  text: {
    color: "orange",
    fontSize: 15,
  },
});
