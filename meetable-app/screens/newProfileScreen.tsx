import * as React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Text, View } from "../components/Themed";

const ProfileScreen = () => (
  <View style={styles.container}>

    <View style={styles.profile}>
      <MaterialCommunityIcons name="pencil" size={24} style={styles.pencil} />
    </View>

    <View style={styles.nameInputBubble}>
      <Text style={styles.nameInput}>Name</Text>
      <MaterialCommunityIcons name="pencil" size={24} style={styles.pencil} />
    </View>

    <View style={styles.writeBioBubble}>
      <Text style={styles.writeBio}>Bio</Text>
      <Text style={styles.bioInput}>Hi I am </Text>
      <MaterialCommunityIcons name="pencil" size={24} style={styles.pencil} />
    </View>

    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Complete</Text>
    </TouchableOpacity>

  </View>
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
    marginTop: 20,
    marginBottom: 20,
  },
  nameInputBubble: {
    flex: 0.15,
    width: "90%",
    borderRadius: 24,
    backgroundColor: "white",
    marginVertical: 5,
  },
  writeBioBubble: {
    flex: 0.5,
    width: "90%",
    backgroundColor: "white",
    borderRadius: 24,
    marginVertical: 10,
  },
  writeBio: {
    color: "#7ED1EF",
    position: "absolute",
    paddingHorizontal: 20,
    paddingVertical: 20,
    fontSize: 22,
    fontWeight: "bold",
  },
  nameInput: {
    color: "#D2E2EE",
    position: "absolute",
    paddingHorizontal: 20,
    paddingVertical: 15,
    fontSize: 18,
    fontWeight: "normal",
  },
  bioInput: {
    color: "#D2E2EE",
    position: "absolute",
    paddingHorizontal: 20,
    paddingVertical: 60,
    fontSize: 18,
    fontWeight: "normal",
  },
  pencil: {
    color: "#7ED1EF",
    paddingHorizontal: 20,
    paddingVertical: 17.5,
    left: "80%",
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
    left: "43%",
    color: "#FFFFFF",
    fontSize: 18,
  },
});

export default ProfileScreen;
