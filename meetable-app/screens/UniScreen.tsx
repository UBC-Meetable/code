import React, { useState } from "react";
import {
  Layout, Text, Button, IndexPath,
  Select, SelectItem, Input,
} from "@ui-kitten/components";
import { StyleSheet, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BubbleBackground from "../assets/images/tutorial-bubble.svg";
// import Auth0BubbleBackground from "../assets/images/auth0-bubble.svg";

const UniScreen = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));
  const [major, setMajor] = useState("");
  const university = selectedIndex.row === 0 ? "The University of British Columbia" : "The University of Toronto";
  const window = Dimensions.get("window");

  const onSumbit = () => {
    alert("Saved");
  };

  return (
    <SafeAreaView style={styles.root}>
      <BubbleBackground width={window.width} height={window.height} style={{ position: "absolute" }} />
      <Layout style={stylesTwo.container}>
        <Text style={styles.textStyle}>
          What university are you currently attending?
        </Text>
        <Select
          selectedIndex={selectedIndex}
          onSelect={(i) => setSelectedIndex(i as React.SetStateAction<IndexPath>)}
          style={styles.dropDownStyle}
          value={university}
        >
          <SelectItem title="The University Of British Columbia" />
          <SelectItem title="The University of Toronto" />
        </Select>
      </Layout>
      <Layout style={stylesTwo.container}>
        <Text style={styles.textStyle}>
          What is your major?
        </Text>
        <Input
          placeholder="Business"
          value={major}
          onChangeText={(myMajor) => setMajor(myMajor)}
          style={styles.inputStyle}
        />
      </Layout>
      <Button
        style={styles.button}
        onPress={() => {
          onSumbit();
        }}
      >
        {(evaProps: any) => (
          <Text
            {...evaProps}
            style={{ ...evaProps.style, ...styles.buttonText }}
          >
            Next
          </Text>
        )}
      </Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    display: "flex",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF8F3",
    paddingTop: 100,
  },
  button: {
    marginBottom: 20,
    width: "75%",
    borderRadius: 100,
    borderWidth: 0,
    backgroundColor: "#02A3F4",
  },
  buttonText: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 20,
    textAlign: "center",
    flex: 1,
  },
  blacktext: {
    color: "#000",
  },
  topcontainer: {
    flex: 1,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  bottomcontainer: {
    flex: 0,
    display: "flex",
    flexBasis: 150,
    flexDirection: "column",
    alignItems: "center",
  },
  bodyContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    marginTop: 30,
  },
  selectionsContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  courseContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    height: "100%",
  },
  dropDownStyle: {
    borderRadius: 100,
    marginTop: 10,
    marginLeft: 30,
    marginRight: 30,
    fontFamily: "Poppins_400Regular",
  },
  inputStyle: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 10,
    backgroundColor: "#ffff",
  },
  textStyle: {
    fontFamily: "Poppins_600SemiBold",
    textAlign: "left",
    fontSize: 20,
    fontWeight: "500",
    lineHeight: 24,
    marginHorizontal: 20,
    marginVertical: 10,
    marginLeft: 30,
    marginRight: 30,
  },
});

const stylesTwo = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 80,
    backgroundColor: "#FFF8F3",
  },
});

export default UniScreen;
