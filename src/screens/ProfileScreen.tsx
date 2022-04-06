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
import GradientButton from "../components/ui/GradientButton";
import Colors from "../constants/Colors";
import { profileStyles } from "./Auth/onboarding/NewProfileScreen";
import useUserProfile from "../hooks/useUserProfile";
import useCourseGroups from "../hooks/useCourseGroups";
import Tag from "../components/profile/Tag";
import { Chip } from "react-native-paper";
/** TODO: Cache user profile so we don't need to fetch so often. */

interface LabelProps {
  title: string
}
const Label = ({ title }: LabelProps) => <Text style={profileStyles.bigBioHead}>{title}</Text>;

const ProfileScreen = () => {
  const headerHeight = useHeaderHeight();

  const { loading, set, ...user } = useUserProfile();
  const [bio, setBio] = React.useState(user.bio);
  const [firstName, setFirstName] = React.useState(user.firstName);
  const [lastName, setLastName] = React.useState(user.lastName);
  const [key, setKey] = React.useState(user.profilePicture);
  const [visible, setVisible] = React.useState(false);

  const groups = useCourseGroups();

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
        { paddingTop: headerHeight, paddingHorizontal: 20 },
      ]}
      bounces={false}
    >
      <ProfilePicture imageKey={key} editable />
      <Text style={styles.name}>
        {`${firstName} ${lastName}`.trim()}
      </Text>
      <Text style={styles.email}>
        {user.email || ""}
      </Text>

      <Layout style={{ backgroundColor: "white", padding: 10, width: "100%", marginVertical: 10, borderRadius: 10 }}>
        <Text style={{ textAlign: "center" }}>{user.bio}</Text>
      </Layout>

      <Text style={{ fontFamily: 'Poppins_600SemiBold', fontSize: 20, margin: 10 }} category='h2'>Enrolled Classes</Text>
      <Layout style={{ padding: 10, borderRadius: 20, width: "100%" }}>
        {groups.length ? groups.map(({ title, code }, index) => <Tag key={index} type="course" text={`${title} ${code}`} />)
          : <Text style={{ margin: 10, textAlign: "center", color: "gray" }}>No courses registered</Text>}
      </Layout>

      <Text style={{ fontFamily: 'Poppins_600SemiBold', fontSize: 20, margin: 10 }} category='h2'>Interests</Text>
      <Layout style={{ padding: 10, borderRadius: 20, width: "100%", display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: "center", justifyContent: "center" }}>
        {user.interests.length ? user.interests.map((interest, index) => <Chip key={index} style={{ margin: 5, backgroundColor: "#FEEDDE" }} textStyle={{ fontFamily: "Poppins_500Medium", fontSize: 12 }}>{interest}</Chip>)
          : <Text style={{ margin: 10, textAlign: "center", color: "gray" }}>No interests selected</Text>}
      </Layout>

      <GradientButton
        onPress={open}
        style={{ marginVertical: 20 }}
      >
        Edit Profile
      </GradientButton>

      <Modal
        animationType="slide"
        presentationStyle="formSheet"
        visible={visible}
      >
        <Layout style={styles.modal}>
          <Text style={styles.title}>Edit Profile</Text>
          <Layout
            style={{ alignItems: "center", backgroundColor: "transparent" }}
          >
            <ProfilePicture
              imageKey={key}
              onPress={pickImage}
              editable
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
    fontFamily: "Poppins_600SemiBold",
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
    fontFamily: "Poppins_600SemiBold",
    color: "#FBBA82",
  },
});

export default ProfileScreen;
