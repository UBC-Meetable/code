import * as React from "react";
import {
  KeyboardAvoidingView, StyleSheet, TextInput, TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Text, View } from "../components/Themed";

const ProfileScreen = () => (
  <KeyboardAvoidingView
    behavior="height"
    style={styles.container}
  >

    <View style={styles.profile}>
      <MaterialCommunityIcons name="pencil" size={32} style={styles.pencil} />
    </View>

    <View style={styles.nameInputBubble}>
      <TextInput placeholder="Name" maxLength={35} style={styles.Input} />
    </View>

    <View style={styles.writeBioBubble}>
      <TextInput placeholder="Write a short bio about yourself..." multiline maxLength={150} style={styles.Input} />
    </View>

    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Complete</Text>
    </TouchableOpacity>

  </KeyboardAvoidingView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "#FEEDDE",
  },
  profile: {
    backgroundColor: "#C9E8F3",
    height: 144,
    width: 144,
    borderRadius: 100,
    paddingVertical: 10,
  },
  pencil: {
    color: "#7ED1EF",
    left: "80%",
  },
  Input: {
    color: "#D2E2EE",
    paddingHorizontal: 20,
    paddingVertical: 15,
    fontSize: 18,
    fontWeight: "normal",
  },
  nameInputBubble: {
    height: 60,
    width: "90%",
    borderRadius: 24,
    backgroundColor: "white",
    marginVertical: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  writeBioBubble: {
    height: 160,
    width: "90%",
    backgroundColor: "white",
    borderRadius: 24,
    marginVertical: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  button: {
    borderRadius: 24,
    height: "10%",
    width: "90%",
    backgroundColor: "#7ED1EF",
    marginBottom: 10,
  },
  buttonText: {
    top: "32.5%",
    left: "40%",
    color: "#FFFFFF",
    fontSize: 18,
  },
});

export default ProfileScreen;
