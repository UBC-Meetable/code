import {
  Layout,
  Text,
} from "@ui-kitten/components";
import React from "react";
import {
  Image,
  StyleSheet,
  View,
} from "react-native";
import { QuestionType } from "../types";

const QuizCard = ({ title, img }: QuestionType) => (
  <Layout style={styles.card}>
    <Text style={styles.questionTitle}>{title}</Text>
    <View style={styles.questionView}>
      <Layout style={{
        flex: 1, height: 300, backgroundColor: "#0000", overflow: "hidden",
      }}
      >
        <Image
          resizeMethod="resize"
          source={img}
          style={{ width: "100%", borderWidth: 0, height: "100%" }}
        />
      </Layout>
    </View>
  </Layout>
);

const styles = StyleSheet.create({
  card: {
    borderColor: "#FBBA82",
    backgroundColor: "#fff",
    borderRadius: 15,
  },
  questionView: {
    alignContent: "center",
    backgroundColor: "#F9DAC4",
    borderRadius: 15,
  },
  questionTitle: {
    color: "#FBBA82",
    backgroundColor: "#0000",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 30,
    marginBottom: 30,
  },
});

export default QuizCard;
