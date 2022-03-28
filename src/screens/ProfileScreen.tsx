import { useHeaderHeight } from "@react-navigation/stack";
import {
  Input, Layout, Spinner, Text, Button,
} from "@ui-kitten/components";
import { Storage } from "aws-amplify";
import * as ImageManipulator from "expo-image-manipulator";
import * as ImagePicker from "expo-image-picker";
import { ImageInfo } from "expo-image-picker/build/ImagePicker.types";
import * as React from "react";
import { StyleSheet, Modal, View, KeyboardAvoidingView  } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import ProfilePicture from "../components/ProfilePicture";
import Colors from "../constants/Colors";
import { profileStyles } from "./Auth/onboarding/NewProfileScreen";
import useUserProfile from "../hooks/useUserProfile";
import PrimaryButton from "../components/ui/PrimaryButton";
import GradientButton from "../components/ui/GradientButton";
import EditInterests from "./EditInterests"
// import { Modalize } from 'react-native-modalize';
/** TODO: Cache user profile so we don't need to fetch so often. */

interface LabelProps {
  title: string
}
const Label = ({ title }: LabelProps) => <Text style={styles.ModalField}>{title}</Text>;

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
      <ProfilePicture imageKey={key} style={styles.image}/>
      <Text style={styles.name}>
        {`${firstName} ${lastName}`.trim()}
      </Text>
      <Text style={styles.email}>
        {user.email || ""}
      </Text>
      <GradientButton
        onPress={open}
        style={styles.editButton}
        status="info"
      >
        Edit Profile
      </GradientButton>
      <Text
        style={styles.name}
      >
        Bio
      </Text>
      <View
        style={styles.itemContainer}
      >
        <Text
          style={styles.bio}
        >
          {bio}
        </Text>
      </View>
      <Text
        style={styles.name}
      >
        Enrolled Classes
      </Text>
      <View
        style={styles.itemContainer}
      >
        <View
          style={styles.textDiv}
        >
          <Text>
            CPEN211
          </Text>
        </View>
        <View
          style={styles.textDiv}
          >
          <Text>
            MATH256
          </Text>
        </View>
        <View
          style={styles.textDiv}
          >
          <Text>
            CPEN221
          </Text>
        </View>
      </View>
      <Text
        style={styles.name}
      >
        Interests
      </Text>
      <View
        style={styles.itemContainer}
      >
        <View
          style={styles.textDiv}
        >
          <Text>
            Anime 📺
          </Text>
        </View>
        <View
          style={styles.textDiv}
          >
          <Text>
            Gaming 🎮
          </Text>
        </View>
        <View
          style={styles.textDiv}
          >
          <Text>
            Formula 1 🏎️
          </Text>
        </View>
      </View>
      <Modal
        animationType="slide"
        presentationStyle="formSheet"
        swipeToClose={true}
        propagateSwipe={true}
        visible={visible}
      >
        <KeyboardAvoidingView
      // style={styles.container}
      behavior="position"
      style={{
        padding:10,
        backgroundColor: Colors.theme.lightCreme,
      }}
    >
        <ScrollView style={styles.MainModal}>
        <Layout style={styles.modal}>
          <Text style={styles.title}>Edit Profile</Text>
          <Layout
            style={styles.photoContainer}
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
            style={styles.inputStyle}
            textStyle={profileStyles.inputTextStyle}
          />
          <Input
            label={() => <Label title="Last Name" />}
            value={lastName || ""}
            placeholder="Last Name"
            onChangeText={setLastName}
            style={styles.inputStyle}
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
            style={styles.inputStyle}
            textStyle={profileStyles.inputTextStyle}
          />
          <GradientButton onPress={save} style={
            { marginTop: 16, marginBottom: 16, alignSelf: "center", width: "100%", height: 60 }
            }>Save</GradientButton>
          <GradientButton appearance="ghost" style={
            { alignSelf: "center", width: "100%", height: 60 }
            } onPress={close}>Close</GradientButton>
        </Layout>
        </ScrollView>
        </KeyboardAvoidingView>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  name: {
    fontFamily: "Quicksand_600SemiBold",
    color: "#000000",
    fontSize: 20,
    marginTop: 16,
    marginBottom: 8,
  },
  gradient: {
    height: 50,
    margin: 0,
    padding: 0,
    overflow: "visible",
    borderWidth: 1,
  },
  editButton: {
    marginVertical: 12,
    width: "90%",
    height: 60,
  },
  email: { fontSize: 14 },
  image: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  modal: {
    padding: 24,
    backgroundColor: Colors.theme.lightCreme,
    height: "100%",
  },
  title: {
    fontFamily: "Quicksand_600SemiBold",
    fontSize: 20,
    color: "#000000",
    textAlign: "center",
    marginTop: 16,
    marginBottom: 20
  },
  edit: {
    marginTop: 20
  },
  bio: {
    width: "90%",
    paddingTop:20,
    paddingBottom:20,
    color:'black',
    textAlign:'center',
  },
  ModalField: {
    width: "90%",
    paddingTop:20,
    paddingBottom:20,
    color:'black',
    marginLeft: 10,
    fontSize: 20
    // textAlign:'center',
  },
  textDiv: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    backgroundColor: '#FFEAB4',
    borderRadius: 20,
    padding:10,
    margin: 10
  },
  itemContainer: {
    width: "90%",
    backgroundColor: '#fff',
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  photoContainer: {
    backgroundColor: "#0000",
    width: "100%",
    margin: 10,
    alignItems: "center",
  },
  inputStyle: {
    backgroundColor: "#ffff",
    marginVertical: 5,
    borderRadius: 5,
  },
});

export default ProfileScreen;
