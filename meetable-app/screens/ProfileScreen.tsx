import * as React from "react";
import { StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from "../components/Themed";

const ProfileScreen = () => (
  <SafeAreaView style={[styles.container]}>
    <View style={[styles.profile]}>
      <MaterialCommunityIcons name="pencil" size={24} style={styles.pencil} />
    </View>

    <Text style={styles.name}>FName LName</Text>

    <View style={styles.bioBubble}>
      <Text style={styles.bubbleTextHead}>Bio</Text>
      <Text style={styles.bubbleTextBody}>
        hi this is an introduction of myself.
      </Text>
      <MaterialCommunityIcons name="pencil" size={24} style={styles.pencil} />
    </View>

    <View style={styles.socialBubble}>
      <Text style={styles.bubbleTextHead}>Socials</Text>
      <Text style={styles.bubbleTextBody}>@some_instagram_account</Text>
      <MaterialCommunityIcons name="pencil" size={24} style={styles.pencil} />
    </View>

    {/* <EditScreenInfo path="/screens/TabTwoScreen.js" /> */}
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FEEDDE",
  },
  profile: {
    height: 144,
    width: 144,
    borderRadius: 100,
    marginTop: 20,
  },
  name: {
    marginVertical: 20,
    fontSize: 24,
    color: "#3A3A3A",
  },
  bioBubble: {
    flex: 1,
    width: "90%",
    borderRadius: 24,
    backgroundColor: "white",
    marginVertical: 10,

  },
  socialBubble: {
    flex: 2,
    width: "90%",
    backgroundColor: "white",
    borderRadius: 20,
    marginVertical: 20,
  },
  bubbleTextHead: {
    color: "#7ED1EF",
    position: "absolute",
    paddingHorizontal: 20,
    paddingVertical: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
  bubbleTextBody: {
    color: "#000000",
    position: "absolute",
    paddingHorizontal: 20,
    paddingVertical: 65,
    fontSize: 16,
    fontWeight: "normal",
  },
  pencil: {
    color: "#7ED1EF",
    paddingHorizontal: 20,
    paddingVertical: 20,
    left: "80%",
  },
});

export default ProfileScreen;
