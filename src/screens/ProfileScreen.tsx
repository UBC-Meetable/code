import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useHeaderHeight } from "@react-navigation/stack";
import { Input, Layout, Text } from "@ui-kitten/components";
import * as React from "react";
import {
  Image, KeyboardAvoidingView, StyleSheet, TextInput,
} from "react-native";
// import { Poppins_500Medium, Poppins_600SemiBold } from "@expo-google-fonts/poppins";
import { ScrollView } from "react-native-gesture-handler";
import noAvatar from "../assets/images/noavatar.png";
import fetchUserProfile from "../calls/fetchUserProfile";
import updateUserProfile from "../calls/updateUserProfile";
import useAuthenticatedUser from "../hooks/useAuthenticatedUser";
import { UserProfile } from "../types";
import { styles as profileStyles } from "./Auth/NewProfileScreen";

/** TODO: Cache user profile so we don't need to fetch so often. */

const ProfileScreen = () => {
  const headerHeight = useHeaderHeight();

  const user = useAuthenticatedUser();
  const [bio, setBio] = React.useState("");
  const [name, setName] = React.useState("");
  const [bioFocused, setBioFocused] = React.useState(false);
  const [fetchedProfile, setFetchedProfile] = React.useState<UserProfile>();
  const [localProfile, setLocalProfile] = React.useState<UserProfile>();
  const updateProfile = async () => {
    const [firstName, ...lastName] = name.trim().split(" ");
    const updatedProfile = {
      email: user.attributes.email,
      bio,
      firstName,
      lastName: lastName.join(""),
    };
    const same = compareProfiles(fetchedProfile, { ...localProfile, ...updatedProfile });

    if (!same) {
      updateUserProfile(updatedProfile);
    }
  };

  const compareProfiles = (a: any, b: any) => Object.entries(a).sort().toString()
  === Object.entries(b).sort().toString();

  React.useEffect(() => {
    const f = async () => {
      const res = await fetchUserProfile({ email: user.attributes.email });

      if (res.data) {
        const profile = res.data.getUserProfile as UserProfile;
        setName(`${profile?.firstName} ${profile?.lastName}`);
        setBio(profile?.bio || "");
        setFetchedProfile(profile);
        setLocalProfile(profile);
      }
    };
    if (user) f();
  }, [user]);
  return (
    <ScrollView
      contentContainerStyle={[profileStyles.container, { paddingTop: headerHeight }]}
      bounces={false}
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
        <Image
          source={noAvatar}
          style={{ borderRadius: 100, height: 125, width: 125 }}
        />
      </Layout>

      <Layout
        style={profileStyles.nameContainer}
      >
        <Input
          value={name}
          placeholder="Your Name"
          onChangeText={(e) => setName(e)}
          style={profileStyles.inputStyle}
          textStyle={profileStyles.inputTextStyle}
          onSubmitEditing={() => updateProfile()}
          onBlur={() => updateProfile()}
        />
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
            setBioFocused(false);
            updateProfile();
          }}
          onSubmitEditing={() => {
            setBioFocused(false);
            updateProfile();
          }}
          placeholder="Write a short bio about yourself..."
          multiline
          scrollEnabled
          numberOfLines={1}
          maxLength={175}
          style={styles.bioInput}
          value={bio}
          onChangeText={(e) => {
            setBio(e);
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
