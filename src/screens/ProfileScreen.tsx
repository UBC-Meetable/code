import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useHeaderHeight } from "@react-navigation/stack";
import {
  Input, Layout, Spinner, Text,
} from "@ui-kitten/components";
import { Storage } from "aws-amplify";
import * as FileSystem from "expo-file-system";
import * as ImageManipulator from "expo-image-manipulator";
import * as ImagePicker from "expo-image-picker";
import { ImageInfo } from "expo-image-picker/build/ImagePicker.types";
import * as React from "react";
import { KeyboardAvoidingView, StyleSheet, TextInput } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import fetchUserProfile from "../calls/fetchUserProfile";
import updateUserProfile from "../calls/updateUserProfile";
import ProfilePicture from "../components/ProfilePicture";
import Colors from "../constants/Colors";
import useAuthenticatedUser from "../hooks/useAuthenticatedUser";
import { UserProfile } from "../types";
import { profileStyles } from "./Auth/onboarding/NewProfileScreen";
/** TODO: Cache user profile so we don't need to fetch so often. */
const ProfileScreen = () => {
  const headerHeight = useHeaderHeight();

  const user = useAuthenticatedUser();
  const [bio, setBio] = React.useState("");
  const [name, setName] = React.useState("");
  const [bioFocused, setBioFocused] = React.useState(false);
  const [fetchedProfile, setFetchedProfile] = React.useState<UserProfile>();
  const [localProfile, setLocalProfile] = React.useState<UserProfile>();
  const [key, setKey] = React.useState("");
  const path = `${FileSystem.cacheDirectory}profile${user.attributes.sub}`;

  const formatName = (unformattedName: string): [string, string] => {
    if (unformattedName.length > 0) {
      const split = unformattedName.split(" ");
      return [split[0], split.slice(1).join(" ")];
    }
    return ["", ""];
  };

  const updateProfile = async () => {
    const [firstName, lastName] = formatName(name);
    const updatedProfile = {
      email: user.attributes.email,
      id: user.attributes.sub,
      bio,
      firstName,
      lastName,
    };
    const same = compareProfiles(fetchedProfile, { ...localProfile, ...updatedProfile });

    if (!same) {
      updateUserProfile(updatedProfile);
      await FileSystem.writeAsStringAsync(path, JSON.stringify(updatedProfile));
    }
  };

  /** TODO Cache Profile Images */
  const updateImageKey = async (imageKey: string) => {
    await updateUserProfile({ id: user.attributes.sub, profilePicture: imageKey });
  };

  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      console.warn("Permission to access camera roll is required!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.5,
    });

    if (!result.cancelled) {
      const cropped = await ImageManipulator.manipulateAsync(result.uri, [{
        resize: {
          height: 125,
          width: 125,
        },
      }]);
      uploadImage(cropped);
    }
  };

  const uploadImage = (toUpload: ImageInfo) => {
    const imageName = toUpload.uri.replace(/^.*[\\/]/, "");
    const imageKey = `${user.attributes.sub}/${imageName}`;
    console.log(toUpload.uri);

    fetch(toUpload.uri).then((response) => {
      response.blob()
        .then((blob) => {
          const access = { level: "public", contentType: toUpload.type };
          Storage.put(imageKey, blob, access)
            .then(() => {
              Storage.get(imageKey, { download: false, expires: 604800 }).then(() => {
                updateImageKey(imageKey);
                setKey(imageKey);
              });
            });
        });
    });
  };

  const compareProfiles = (a: any, b: any) => Object.entries(a).sort().toString()
  === Object.entries(b).sort().toString();

  React.useEffect(() => {
    const f = async () => {
      const resPromise = fetchUserProfile({ id: user.attributes.sub });
      const cachedProfile = await FileSystem.getInfoAsync(path);
      if (cachedProfile.exists) {
        const stringProfile = await FileSystem.readAsStringAsync(cachedProfile.uri);
        const profile = JSON.parse(stringProfile) as UserProfile;
        setName(`${profile?.firstName} ${profile?.lastName}`);
        setBio(profile?.bio || "");
        setFetchedProfile(profile);
        setKey(profile.profilePicture || "");
        setLocalProfile(profile);
      }
      const res = await resPromise;
      if (await res.data) {
        const profile = res.data?.getUser as UserProfile;
        await FileSystem.writeAsStringAsync(path, JSON.stringify(profile));
        setName(`${profile?.firstName} ${profile?.lastName}`);
        setBio(profile?.bio || "");
        setFetchedProfile(profile);
        setKey(profile.profilePicture || "");
        setLocalProfile(profile);
      }
    };
    if (user) f();
  }, [user]);

  if (!localProfile) {
    return (
      <ScrollView
        contentContainerStyle={[profileStyles.container, { paddingTop: headerHeight }]}
        bounces={false}
      >
        <Spinner />
      </ScrollView>
    );
  }
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
          onPress={() => {
            pickImage();
          }}
        />
        <ProfilePicture
          imageKey={key}
          onPress={() => pickImage()}
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
    backgroundColor: Colors.theme.creme,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
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
  profileContainer: {
    borderRadius: 100,
    height: 125,
    width: 125,
    justifyContent: "center",
    alignItems: "center",
  },
  profileOverlay: {
    position: "absolute",
    borderRadius: 100,
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.3,
  },
});

export default ProfileScreen;
