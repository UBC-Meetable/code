import { Avatar, Layout, Text } from "@ui-kitten/components";
import React from "react";
import { StyleSheet, View } from "react-native";
import Colors from "../../constants/Colors";

type OtherMessageProps = {};

const OtherMessage = (props:OtherMessageProps) => {
  return (
    <View style={styles.root}>
      <Text style={styles.name}>Trevor</Text>
      <View style={styles.row}>
        <Avatar size="tiny" source={require("../../assets/images/profilePic2.jpg")} />
        <Layout style={styles.message}>
          <Text style={{
            color: "white",
            fontFamily: "Quicksand_400Regular",
          }}
          >
            hello
          </Text>
        </Layout>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  name: {
    fontSize: 10,
  },
  message: {
    marginLeft: 5,
    alignSelf: "flex-start",
    maxWidth: "80%",
    padding: 5,
    marginBottom: 5,
    borderBottomLeftRadius: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
    backgroundColor: Colors.theme.grey,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  root: {
    flexDirection: "column",
  },
});

export default OtherMessage;
