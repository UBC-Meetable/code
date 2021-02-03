/* eslint-disable react/jsx-indent */
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import { useHeaderHeight } from "@react-navigation/stack";
import {
  Button, Card, Input, Layout,
} from "@ui-kitten/components";
import * as SecureStore from "expo-secure-store";
import * as React from "react";
import {
  Image, KeyboardAvoidingView, Modal, StyleSheet, TextInput, TouchableOpacity,
} from "react-native";
// import { Poppins_500Medium, Poppins_600SemiBold } from "@expo-google-fonts/poppins";
import { ScrollView } from "react-native-gesture-handler";
import noAvatar from "../assets/images/noavatar.png";
import { Text } from "../components/Themed";
import ENV from "../config/env";
import { UserContext } from "../utils/UserContext";
import { styles as profileStyles } from "./NewProfileScreen";

const [visible, setVisible] = React.useState(false);

const socialPress = () => (
  <Modal
    visible={visible}
    backdropStyle={styles.backdrop}
    onBackdropPress={() => setVisible(false)}
  >
    <Card disabled>
      <Text>Testing 1 2 3</Text>
      <Button onPress={() => setVisible(false)}>
            DISMISS
      </Button>
    </Card>
  </Modal>
);

const SocialMediaButton = (props: { name: string }) => (
  <TouchableOpacity onPress={socialPress} style={styles.socialButton}>
    <FontAwesome5 size={50} color="#FBBA82" {...props} />
  </TouchableOpacity>
);

const ProfileScreen = () => {
  const headerHeight = useHeaderHeight();

  const { user, setUser } = React.useContext(UserContext);
  const [bio, setBio] = React.useState(user.bio);
  const [name, setName] = React.useState(user.name);
  const [bioFocused, setBioFocused] = React.useState(false);

  const updateUser = async () => {
    if (name === user.name && bio === user.bio) return;
    const res = await fetch(`${ENV.API_URL}/api/users/updateprofile/`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          uid: user.sub,
          name,
          bio,
        }),
      });
    if (res.ok) {
      console.log(await res.json());
      console.log("user updated");
      setUser({ ...user, name, bio });
      await SecureStore.setItemAsync("user", JSON.stringify({ ...user, name, bio }));
    } else {
      console.log(await res.text());
    }
  };
  return (
    <ScrollView contentContainerStyle={[profileStyles.container, { paddingTop: headerHeight }]}>

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
        style={profileStyles.nameContainer}
      >
        <Input
          value={name}
          onChangeText={(e) => setName(e)}
          onSubmitEditing={() => updateUser()}
          style={profileStyles.inputStyle}
          textStyle={profileStyles.inputTextStyle}
        />
      </Layout>
      <Layout style={styles.socialLayout}>
        <SocialMediaButton name="twitter-square" />
        <SocialMediaButton name="facebook-square" />
        <SocialMediaButton name="instagram" />
        <SocialMediaButton name="snapchat-square" />
        <MaterialCommunityIcons name="pencil" size={30} />
      </Layout>

      <KeyboardAvoidingView
        enabled={bioFocused}
        behavior="position"
        contentContainerStyle={profileStyles.bioBubble}
        style={profileStyles.keyboardHider}
      >

        <Text style={profileStyles.bigBioHead}>Bio</Text>
        <TextInput
          onFocus={() => {
            setBioFocused(true);
          }}
          onBlur={() => {
            updateUser();
            setBioFocused(false);
          }}
          onSubmitEditing={() => {
            updateUser();
            setBioFocused(false);
          }}
          placeholder="Write a short bio about yourself..."
          multiline
          scrollEnabled={false}
          numberOfLines={1}
          maxLength={175}
          style={styles.bioInput}
          value={bio}
          onChangeText={(e) => {
            if (e.endsWith("\n")) {
              console.log("enter");
            } else { setBio(e); }
          }}
        />

      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "#FEEDDE",
  },
  backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    // marginTop: -20,
    textAlign: "center",
  },
  nameContainer: {
    width: "90%",
    backgroundColor: "#fff",
    borderWidth: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderRadius: 24,
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
  bioDesc: {
    color: "#3A3A3A",
    backgroundColor: "#0000",
    flex: 1,
    width: "100%",
    height: "100%",
    position: "absolute",
    paddingHorizontal: 20,
    paddingVertical: 20,
    fontSize: 18,
    borderWidth: 1,
    fontWeight: "normal",
  },
  bioInput: {
    paddingHorizontal: 20,
    position: "relative",
    marginTop: 10,
    fontSize: 16,
    fontWeight: "600",
    textAlignVertical: "top",
    width: "100%",
    height: "85%",
  },
  bioDescBubble: {
    flex: 1,
    marginTop: 30,
    padding: 10,
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
  socialLayout: {
    width: "100%",
    flex: 0,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#0000",
    paddingBottom: 20,
  },
  socialTitle: {
    display: "flex",
    color: "#3A3A3A",
    position: "absolute",
    paddingHorizontal: 20,
    paddingVertical: 20,
    fontSize: 18,
    fontWeight: "bold",
  },
  socialBubble: {
    flex: 0.6,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 24,
    paddingVertical: 10,
    paddingHorizontal: 20,
    top: 50,
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
    paddingRight: 10,
    backgroundColor: "#0000",
  },
});

export default ProfileScreen;
