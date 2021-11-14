import * as React from "react";
import { Chip } from "react-native-paper";
import { Layout } from "@ui-kitten/components";
import { StyleSheet, View, Text } from "react-native";

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
          <Chip
            style={styles.chip}
            onPress={() => {
              console.log("hey");
            }}
            key={data.key}
            mode={"outlined"}
            textStyle={styles.text}
          >
            {data.label}
          </Chip>
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
