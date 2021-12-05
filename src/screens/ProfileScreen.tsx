import { useHeaderHeight } from "@react-navigation/stack";
import {
  Input, Layout, Spinner, Text, Button,
} from "@ui-kitten/components";
import { Storage } from "aws-amplify";
import * as ImageManipulator from "expo-image-manipulator";
import * as ImagePicker from "expo-image-picker";
import { ImageInfo } from "expo-image-picker/build/ImagePicker.types";
import * as React from "react";
import { StyleSheet, Modal } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import ProfilePicture from "../components/ProfilePicture";
import Colors from "../constants/Colors";
import { profileStyles } from "./Auth/onboarding/NewProfileScreen";
import useUserProfile from "../hooks/useUserProfile";
/** TODO: Cache user profile so we don't need to fetch so often. */
const ProfileScreen = () => {
  const headerHeight = useHeaderHeight();

  const { loading, set, ...user } = useUserProfile();
  const [bio, setBio] = React.useState(user.bio);
  const [firstName, setFirstName] = React.useState(user.firstName);
  const [lastName, setLastName] = React.useState(user.lastName);
  const [key, setKey] = React.useState(user.profilePicture);
  const [visible, setVisible] = React.useState(false);

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
    const imageKey = `${user.id}/${imageName}`;
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

  /** TODO Cache Profile Images */
  const updateImageKey = (imageKey: string) => {
    set({ id: user.id, profilePicture: imageKey });
  };

  if (loading) {
    return (
      <ScrollView
        contentContainerStyle={[profileStyles.container, { paddingTop: headerHeight }]}
        bounces={false}
      >
        <Spinner />
      </ScrollView>
    );
  }

  const Label = ({ title }) => <Text style={profileStyles.bigBioHead}>{title}</Text>;

  const open = () => setVisible(true);
  const close = () => {
    reset();
    setVisible(false);
  };
  const save = () => {
    set({
      id: user.id,
      email: user.email,
      bio,
      firstName,
      lastName,
    });
    setVisible(false);
  };
  const reset = () => {
    setBio(user.bio);
    setFirstName(user.firstName);
    setLastName(user.lastName);
  };

  return (
    <ScrollView
      contentContainerStyle={[
        profileStyles.container,
        { paddingTop: headerHeight },
      ]}
      bounces={false}
    >
      <ProfilePicture imageKey={key} />
      <Text style={styles.name}>
        {`${firstName} ${lastName}`.trim()}
      </Text>
      <Text style={styles.email}>
        {user.email || ""}
      </Text>
      <Button
        appearance="ghost"
        onPress={open}
      >
        Edit Profile
      </Button>
      <Modal
        animationType="slide"
        presentationStyle="formSheet"
        visible={visible}
      >
        <Layout style={styles.modal}>
          <Text style={styles.title}>Edit Profile</Text>
          <Layout
            style={profileStyles.nameContainer}
          >
            <ProfilePicture
              imageKey={key}
              onPress={pickImage}
            />
          </Layout>
          <Input
            label={() => <Label title="First Name" />}
            value={firstName || ""}
            placeholder="First Name"
            onChangeText={setFirstName}
            style={profileStyles.inputStyle}
            textStyle={profileStyles.inputTextStyle}
          />
          <Input
            label={() => <Label title="Last Name" />}
            value={lastName || ""}
            placeholder="Last Name"
            onChangeText={setLastName}
            style={profileStyles.inputStyle}
            textStyle={profileStyles.inputTextStyle}
          />
          <Input
            label={() => <Label title="Bio" />}
            value={bio || ""}
            placeholder="Write a short bio about yourself..."
            multiline
            scrollEnabled
            numberOfLines={1}
            maxLength={175}
            onChangeText={setBio}
            style={profileStyles.inputStyle}
            textStyle={profileStyles.inputTextStyle}
          />
          <Button onPress={save} style={{ marginTop: 16 }}>Save</Button>
          <Button appearance="ghost" onPress={close}>Close</Button>
        </Layout>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  name: {
    fontFamily: "Quicksand_600SemiBold",
    fontSize: 20,
    marginTop: 16,
    marginBottom: 8,
  },
  email: { fontSize: 14 },
  modal: {
    padding: 24,
    backgroundColor: Colors.theme.creme,
    height: "100%",
  },
  title: {
    fontFamily: "Quicksand_600SemiBold",
    color: "#FBBA82",
  },
});

export default ProfileScreen;
