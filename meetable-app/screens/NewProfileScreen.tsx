import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StackNavigationProp } from "@react-navigation/stack";
import { Button, Input, Layout } from "@ui-kitten/components";
import { getExpoPushTokenAsync, requestPermissionsAsync } from "expo-notifications";
import * as React from "react";
import {
  Image, KeyboardAvoidingView, StyleSheet, TextInput,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import * as Device from "expo-device";
import Constants from "expo-constants";
import { AppManifest } from "expo-constants/build/Constants.types";
import * as SecureStore from "expo-secure-store";
import noAvatar from "../assets/images/noavatar.png";
import { Text } from "../components/Themed";
import { RootStackParamList, User } from "../types";
import { UserContext } from "../utils/UserContext";
import ENV from "../config/env";

const NewProfileScreen = ({ navigation }: { navigation: StackNavigationProp<RootStackParamList, "NewProfileScreen"> }) => {
  const { user, setUser } = React.useContext(UserContext);

  const [name, setName] = React.useState(user.name);
  const [bio, setBio] = React.useState("");

  const onSubmit = async () => {
    const consent = await requestPermissionsAsync();
    let token;
    if (Device.isDevice) {
      token = await getExpoPushTokenAsync();
    }
    const newUser = {
      ...user, name, bio, token,
    };
    setUser(newUser);
    console.log(newUser);

    console.log(token);

    const res = await createUser(newUser);

    if (res.ok) {
      await SecureStore.setItemAsync("user", JSON.stringify(newUser));
      console.log(await res.json());
      navigation.reset({
        index: 0,
        routes: [{ name: "Tabs" }],
      });
    } else {
      console.error(await res.text());
    }
  };

  const createUser = async (newUser: User) => fetch(`${ENV.API_URL}/api/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...newUser,
      authid: newUser.sub,
      profileImage: newUser.picture,
    }),
  });

  return (

    <ScrollView
      overScrollMode="never"
      bounces={false}
      contentContainerStyle={{ ...styles.container, flex: 0, height: "100%" }}
      keyboardShouldPersistTaps="handled"
    >
      <Layout
        style={{ backgroundColor: "#0000", position: "relative" }}
      >
        <MaterialCommunityIcons
          name="pencil"
          size={30}
          style={{
            position: "absolute",
            right: -10,
            top: -10,
            color: "#7ED1EF",
            shadowColor: "#000",
            shadowOpacity: 1,
            shadowRadius: 1,
            shadowOffset: {
              width: 0,
              height: 1,
            },
            zIndex: 1000,
          }}
        />
        {user.picture ? (
          <Image
            source={{ width: 125, height: 125, uri: user.picture }}
            style={{ borderRadius: 100 }}
          />
        )
          : (
            <Image
              source={noAvatar}
              style={{ borderRadius: 100, height: 125, width: 125 }}
            />
          )}
      </Layout>

      <Layout
        style={styles.nameContainer}
      >
        <Input
          value={name}
          onChangeText={(e) => setName(e)}
          style={styles.inputStyle}
          textStyle={styles.inputTextStyle}
        />
      </Layout>

      <KeyboardAvoidingView
        behavior="position"
        keyboardVerticalOffset={175}
        contentContainerStyle={styles.bioBubble}
        style={styles.keyboardHider}

      >

        <Text style={styles.bigBioHead}>Bio</Text>
        <TextInput
          placeholder="Write a short bio about yourself..."
          multiline
          maxLength={175}
          style={styles.bioInput}
          value={bio}
          onChangeText={(e) => setBio(e)}
        />

      </KeyboardAvoidingView>

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
            Finish Sign Up
          </Text>
        )}
      </Button>

    </ScrollView>
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
    paddingHorizontal: 20,
    position: "absolute",
    top: 40,
    fontSize: 16,
    fontWeight: "600",
    textAlignVertical: "top",
    width: "100%",
    height: "50%",
  },
  bioBubble: {
    height: "100%",
    borderWidth: 1,
    maxHeight: 300,
    flex: 1,
    padding: 10,
    width: "100%",
    backgroundColor: "white",
    borderRadius: 24,
    marginVertical: 5,
  },
  keyboardHider: {
    height: "100%",
    maxHeight: 300,
    flex: 1,
    padding: 10,
    width: "90%",
    marginVertical: 5,
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
  inputStyle: {
    borderRadius: 50,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 10,
    backgroundColor: "#ffff",
  },
  inputTextStyle: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 24,
    textAlign: "center",
  },
  nameContainer: {
    backgroundColor: "#0000",
    width: "100%",
    margin: 10,
  },
});

export { styles };

export default NewProfileScreen;
