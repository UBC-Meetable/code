import * as React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import { Poppins_500Medium, Poppins_600SemiBold } from "@expo-google-fonts/poppins";
import { Text, View } from "../components/Themed";

const ProfileScreen = () => (
  <View style={styles.container}>

    <View style={styles.profile}>
      <MaterialCommunityIcons name="pencil" size={26} style={styles.pencil} />
    </View>

    <Text style={styles.name}>
      Thomas
      {"\n"}
      Fridrich
    </Text>

    <Text style={styles.bioTitle}>Bio</Text>

    <View style={styles.bioDescBubble}>
      <Text style={styles.bioDesc}>Hello World I am roboto.</Text>
    </View>

    <Text style={styles.socialTitle}>Social Media</Text>

    <View style={styles.socialBubble}>
      <TouchableOpacity style={styles.socialButton}>
        <FontAwesome5 name="twitter-square" size={50} color="#FBBA82" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.socialButton}>
        <FontAwesome5 name="instagram-square" size={50} color="#FBBA82" />
      </TouchableOpacity>
    </View>

    <TouchableOpacity style={styles.settingsButton}>
      <Text style={styles.settingsText}>Account Settings</Text>
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
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: -30,
    textAlign: "center",
  },
  profile: {
    backgroundColor: "#C9E8F3",
    height: 144,
    width: 144,
    borderRadius: 100,
    paddingTop: 10,
  },
  pencil: {
    color: "#7ED1EF",
    left: "80%",
  },
  bioTitle: {
    top: "38%",
    left: "5%",
    color: "#3A3A3A",
    position: "absolute",
    paddingHorizontal: 20,
    paddingVertical: 20,
    fontSize: 18,
    fontWeight: "bold",
  },
  bioDesc: {
    color: "#3A3A3A",
    position: "absolute",
    paddingHorizontal: 20,
    paddingVertical: 20,
    fontSize: 18,
    fontWeight: "normal",
  },
  bioDescBubble: {
    flex: 0.25,
    width: "90%",
    borderRadius: 24,
    backgroundColor: "white",
    paddingVertical: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  socialTitle: {
    display: "flex",
    top: "63%",
    left: "5%",
    color: "#3A3A3A",
    position: "absolute",
    paddingHorizontal: 20,
    paddingVertical: 20,
    fontSize: 18,
    fontWeight: "bold",
  },
  socialBubble: {
    flex: 0.125,
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    backgroundColor: "white",
    borderRadius: 24,
    paddingVertical: 10,
    paddingHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  socialButton: {
    display: "flex",
    backgroundColor: "white",
    paddingRight: 10,
  },
  settingsButton: {
    flex: 0.05,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    backgroundColor: "#E5F6FC",
    borderRadius: 24,
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
  settingsText: {
    color: "#7ED1EF",
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 24,
  },
});

export default ProfileScreen;
