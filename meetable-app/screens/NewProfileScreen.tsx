import * as React from "react";
import {
  KeyboardAvoidingView, StyleSheet, TextInput, TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Button } from "@ui-kitten/components";
import { StackNavigationProp } from "@react-navigation/stack";
import { Text, View } from "../components/Themed";
import { RootStackParamList } from "../types";
import { UserContext } from "../utils/UserContext";

const NewProfileScreen = ({ navigation }: { navigation: StackNavigationProp<RootStackParamList, "NewProfileScreen"> }) => {
  const { user, setUser } = React.useContext(UserContext);

  const onSubmit = () => {
    console.log(user);
    navigation.reset({
      index: 0,
      routes: [{ name: "Tabs" }],
    });
  };

  return (
    <KeyboardAvoidingView
      behavior="height"
      style={styles.container}
    >

      <View style={styles.profile}>
        <MaterialCommunityIcons name="pencil" size={30} style={styles.pencil} />
      </View>

      <View style={styles.nameBubble}>
        <MaterialCommunityIcons name="pencil" size={30} style={styles.pencil} />
        <TextInput placeholder="Name" maxLength={30} style={styles.input} />
      </View>

      <View style={styles.bioBubble}>
        <Text style={styles.bigBioHead}>Bio</Text>
        <MaterialCommunityIcons name="pencil" size={30} style={styles.bioPencil} />
        <TextInput placeholder="Write a short bio about yourself..." multiline maxLength={175} style={styles.bioInput} />
      </View>

      <Button
        style={styles.button}
        onPress={() => {
          onSubmit();
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

    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "#FFF8F3",
  },
  profile: {
    backgroundColor: "#C9E8F3",
    height: 144,
    width: 144,
    borderRadius: 100,
    paddingVertical: 10,
  },
  pencil: {
    position: "absolute",
    color: "#7ED1EF",
    left: "85%",
    top: "15%",
  },
  input: {
    color: "#D2E2EE",
    paddingHorizontal: 20,
    position: "absolute",
    top: 10,
    fontSize: 16,
    fontWeight: "600",
  },
  nameBubble: {
    height: 50,
    width: "90%",
    borderRadius: 24,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  bigBioHead: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#7ED1EF",

    marginHorizontal: 20,
    top: 10,
  },
  bioPencil: {
    position: "absolute",
    color: "#7ED1EF",
    left: "85%",
    top: 5,
  },
  bioInput: {
    color: "#D2E2EE",
    paddingHorizontal: 20,
    position: "absolute",
    top: 40,
    fontSize: 16,
    fontWeight: "600",
    textAlignVertical: "top",
  },
  bioBubble: {
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
    marginBottom: 20,
    width: "75%",
    borderRadius: 100,
    borderWidth: 0,
    backgroundColor: "#02A3F4",
  },
  buttonText: {
    fontSize: 20,
    textAlign: "center",
    flex: 1,
  },
});

export default NewProfileScreen;
