import {
  Button,
  Layout,
  Text,
} from "@ui-kitten/components";
import React, { useState } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  View,
} from "react-native";
import { Badge, Icon } from "react-native-elements";
import { IconButton } from "react-native-paper";

const SCREEN_WIDTH = Dimensions.get("window").width;

type QuizButtonsProps = {
    onLike: () => void;
    onLove: () => void;
    onUndo: () => void;
    onDislike: () => void;
    remainingLoves: number;
}

const QuizButtons = ({
  onLike, onLove, onUndo, onDislike, remainingLoves,
}: QuizButtonsProps) => {
  const [undoIn, setUndoIn] = useState(false);
  const [likeIn, setLikeIn] = useState(false);
  const [loveIn, setLoveIn] = useState(false);
  const [dislikeIn, setDislikeIn] = useState(false);
  const loveDisabled = remainingLoves <= 0;
  return (
    <Layout style={styles.buttonsContainer}>
      <Layout style={styles.buttons}>
        <Button
          onPressIn={() => setUndoIn(true)}
          onPressOut={() => setUndoIn(false)}
          onPress={() => onUndo()}
          style={[!undoIn ? styles.shadow : styles.button, { width: 60, height: 60 }]}
        >
          {() => (
            <Icon
              name="undo-variant"
              type="material-community"
              color="#FDD0A9"
              size={30}
            />
          )}
        </Button>
        <Button
          onPressIn={() => setDislikeIn(true)}
          onPressOut={() => setDislikeIn(false)}
          onPress={() => onDislike()}
          style={[!dislikeIn ? styles.shadow : styles.button, { width: 80, height: 80 }]}
        >
          {() => (
            <Icon
              name="dislike1"
              type="antdesign"
              color="#F5A159"
              size={40}
            />
          )}
        </Button>
        <Button
          onPressIn={() => setLikeIn(true)}
          onPressOut={() => setLikeIn(false)}
          onPress={() => onLike()}
          style={[!likeIn ? styles.shadow : styles.button, { width: 80, height: 80 }]}
        >
          {() => (
            <Icon
              name="like1"
              type="antdesign"
              color="#7ED1EF"
              size={40}
            />
          )}
        </Button>
        <Button
          onPressIn={() => setLoveIn(true)}
          onPressOut={() => setLoveIn(false)}
          onPress={() => onLove()}
          style={[!loveIn ? styles.shadow
            : styles.button, { width: 60, height: 60 }, loveDisabled && styles.disabled]}
          disabled={loveDisabled}
        >
          {() => (
            <Layout style={{ justifyContent: "center", alignItems: "center", backgroundColor: "#0000" }}>
              <Icon
                name="heart"
                type="antdesign"
                color={loveDisabled ? "#cc8D8D" : "#FF8D8D"}
                backgroundColor="#0000"
                onPress={() => onLove()}
                disabledStyle={{ backgroundColor: "#0000" }}
                disabled={loveDisabled}
                size={30}
              />
              <Text style={{ position: "absolute", color: "white" }}>{remainingLoves}</Text>
            </Layout>
          )}
        </Button>
      </Layout>
    </Layout>
  );
};

const styles = StyleSheet.create({
  buttonsContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: -20,
    backgroundColor: "#0000",
  },
  buttons: {
    borderRadius: 15,
    flexDirection: "row",
    backgroundColor: "#0000",
    transform: [{ translateY: -10 }],
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 3,
    },
    shadowOpacity: 0.7,
    shadowRadius: 4.65,
    elevation: 7,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    overflow: "visible",
    marginHorizontal: 5,
    backgroundColor: "#fff",
    borderColor: "#000",
  },
  button: {
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    overflow: "visible",
    marginHorizontal: 5,
    backgroundColor: "#fff",
    borderColor: "#000",
  },
  disabled: {
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    overflow: "visible",
    marginHorizontal: 5,
    backgroundColor: "#c0c0c0",
    borderColor: "#000",
  },
});

export default QuizButtons;
