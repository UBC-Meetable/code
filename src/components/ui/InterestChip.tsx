import * as React from "react";
import { Chip } from "react-native-paper";
import { StyleSheet, View, Text } from "react-native";

interface InterestChipsProps {
  label: string;
  textStyle: { color: string; fontSize: number };
}

export default function InterestChip({ label, textStyle }: InterestChipsProps) {
  const [selected, setSelected] = React.useState<boolean>(false);
  return (
    <Chip
      selected={selected}
      style={styles.chip}
      onPress={() => {
        setSelected(!selected);
      }}
      mode={"outlined"}
      textStyle={textStyle}
    >
      {label}
    </Chip>
  );
}

const styles = StyleSheet.create({
  chip: {
    width: "25%",
    marginLeft: 10,
    marginBottom: 10,
  },
});
