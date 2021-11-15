import * as React from "react";
import { Chip } from "react-native-paper";
import { StyleSheet, View } from "react-native";

interface InterestChipsProps {
  label: string;
  id: number;
  textStyle: { color: string; fontSize: number };
  addInterest: any;
  removeInterest: any;
}

export default function InterestChip({
  label,
  id,
  textStyle,
  addInterest,
  removeInterest,
}: InterestChipsProps) {
  const [selected, setSelected] = React.useState<boolean>(false);
  return (
    <View nativeID={id ? id.toString() : ""}>
      <Chip
        selected={selected}
        style={styles.chip}
        onPress={() => {
          setSelected(!selected);
          if (selected) {
            addInterest(label);
          } else {
            removeInterest(label);
          }
        }}
        mode={"outlined"}
        textStyle={textStyle}
      >
        {label}
      </Chip>
    </View>
  );
}

const styles = StyleSheet.create({
  chip: {
    width: "50%",
    marginLeft: 10,
    marginBottom: 10,
  },
});
