import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";

type TagProps = {
  type: string;
  text: string;
}

const Tag = ({ type, text }: TagProps) => {
  const tagColor = type === "course" ? "#FFEAB4" : "#FEEDDE";

  return (
    <View style={[styles.tag, { backgroundColor: tagColor }]}>
      <Text style={styles.tagText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tag: {
    color: "black",
    padding: 2,
    paddingTop: 7,
    paddingBottom: 7,
    paddingLeft: 7,
    paddingRight: 7,
    borderRadius: 800,
    minWidth: "40%",
    maxWidth: "50%",
    margin: 2,
    marginBottom: 3,
    maxHeight: 35,
  },
  tagText: {
    fontSize: 11,
    textAlign: "center",
  },
});

export default Tag;
