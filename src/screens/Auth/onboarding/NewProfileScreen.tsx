import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StackNavigationProp } from "@react-navigation/stack";
import {
  Button,
  Input, Layout, Text,
} from "@ui-kitten/components";
import { Storage } from "aws-amplify";
import * as ImageManipulator from "expo-image-manipulator";
import * as ImagePicker from "expo-image-picker";
import { ImageInfo } from "expo-image-picker/build/ImagePicker.types";
import * as React from "react";
import { KeyboardAvoidingView, StyleSheet, TextInput } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { UserState } from "../../../API";
import ProfilePicture from "../../../components/ProfilePicture";
import Colors from "../../../constants/Colors";
import useUserProfile from "../../../hooks/useUserProfile";
import { SignUpParamList } from "../../../types";

const NewProfileScreen = ({
  navigation,
}: {
  navigation: StackNavigationProp<SignUpParamList, "NewProfileScreen">;
}) => {
  const { id, set } = useUserProfile();
  const [bio, setBio] = React.useState("");
  const [name, setName] = React.useState("");
  const [bioFocused, setBioFocused] = React.useState(false);
  const [key, setKey] = React.useState("");
  const units = useSafeAreaInsets();

  const handleFinish = async () => {
    const [firstName, ...lastName] = name.trim().split(" ");
    if (firstName.length && bio.length) {
      await set({
        id,
        firstName,
        lastName: lastName.join(" "),
        bio,
        userState: UserState.PROFILE_CREATED,
      });
      navigation.navigate("YourInterestsScreen");
    }
  };

  /** TODO Cache Profile Images */
  const updateImageKey = (imageKey: string) => set({ id, profilePicture: imageKey });

  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      console.warn("Permission to access camera roll is required!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [125, 125],
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
    const imageKey = `${id}/${imageName}`;
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

  return (
    <ScrollView
      contentContainerStyle={[profileStyles.container,
      { paddingTop: units.top, paddingHorizontal: 10, paddingBottom: units.bottom }]}
      bounces={false}
    >
      <ProfilePicture
        imageKey={key}
        onPress={pickImage}
        imageStyle={{ margin: 30 }}
        editable
      />

      <Input
        value={name}
        placeholder="Your Name"
        onChangeText={setName}
        style={[profileStyles.inputStyle, { marginHorizontal: 30 }]}
        textStyle={profileStyles.inputTextStyle}
      />

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
          }}
          onSubmitEditing={() => {
            setBioFocused(false);
          }}
          placeholder="Write a short bio about yourself..."
          multiline
          scrollEnabled
          numberOfLines={1}
          maxLength={175}
          style={profileStyles.bioInput}
          value={bio}
          onChangeText={setBio}
        />
      </KeyboardAvoidingView>

      <Button
        style={profileStyles.button}
        onPress={handleFinish}
      >
        {(evaProps: any) => (
          <Text
            {...evaProps}
            style={[evaProps.style, profileStyles.buttonText]}
          >
            Finish Sign Up
          </Text>
        )}
      </Button>
    </ScrollView>
  );
};

export const profileStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: Colors.theme.transparent,
  },
  // bioPencil: {
  //   position: "absolute",
  //   right: -10,
  //   top: -10,
  //   color: "#7ED1EF",
  //   shadowColor: "#000",
  //   shadowOpacity: 1,
  //   shadowRadius: 1,
  //   shadowOffset: {
  //     width: 0,
  //     height: 1,
  //   },
  //   zIndex: 1000,
  // },
  bigBioHead: {
    fontSize: 16,
    // color: "#FBBA82",
    fontFamily: "Poppins_500Medium",
    marginBottom: 10,
  },
  bioInput: {
    paddingHorizontal: 20,
    position: "absolute",
    top: 40,
    fontSize: 16,
    textAlignVertical: "top",
    // width: "100%",
    // height: "50%",
  },
  bioBubble: {
    // height: "100%",
    maxHeight: 300,
    flex: 1,
    padding: 10,
    width: "100%",
    backgroundColor: "white",
    borderRadius: 24,
    // marginVertical: 5,
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
    width: "85%",
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
    backgroundColor: "#ffff",
    marginVertical: 5,
    borderRadius: 5,
  },
  inputTextStyle: {
    fontSize: 14,
  },
});

export default NewProfileScreen;
