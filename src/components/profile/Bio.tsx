import { Layout, Text } from "@ui-kitten/components";
import React from "react";
import { StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

type BioProps = {
  bio?: string | null | undefined
};
const Bio = ({ bio }:BioProps) => {
  return (
    <ScrollView style={styles.root} bounces={false}>
      <Text style={[styles.text, bio ? styles.bio : styles.emptyText]}>{bio || "There isn't anything here"}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    width: "85%",
    flex: 0,
    maxHeight: 100,
    backgroundColor: "white",
    display: "flex",
    borderRadius: 20,
    padding: 10,
  },
  text: {
    textAlign: "center",
  },
  emptyText: {
    color: "grey",
  },
  bio: {
    textAlign: "center",
  },
});
export default Bio;
