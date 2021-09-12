import { Layout, Spinner } from "@ui-kitten/components";
import * as FileSystem from "expo-file-system";
import React, { useEffect, useState } from "react";
import { Image, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { Analytics, Storage } from "aws-amplify";
import { TouchableOpacity } from "react-native-gesture-handler";
import noAvatar from "../assets/images/noavatar.png";
import { ProfilePictureDimensions, ProfilePictureSize } from "../types";

type ProfilePictureProps = {
    imageKey: string;
    size?: ProfilePictureSize;
    onPress?: () => void;
};

const ProfilePicture = ({
  imageKey,
  size = ProfilePictureSize.PROFILE,
  onPress,
}:ProfilePictureProps) => {
  const [uri, setUri] = useState("");
  const [imageLoading, setImageLoading] = useState(false);

  /** Get image from cache first, download it if there is an update  */
  useEffect(() => {
    const checkCache = async () => {
      setImageLoading(true);
      const safePathName = imageKey.replace(/^.*[\\/]/, "");
      const path = `${FileSystem.cacheDirectory}${safePathName}`;
      const image = await FileSystem.getInfoAsync(path);
      if (image.exists) {
        setUri(() => image.uri);
        setImageLoading(() => false);
        return;
      }
      console.log("Got from s3");
      setTimeout(async () => {
        const s3Uri = await Storage.get(imageKey, { download: false, expires: 604800 }) as string;
        const newImage = await FileSystem.downloadAsync(s3Uri, path);
        const imageInfo = await FileSystem.getInfoAsync(path);
        Analytics.record({ name: "Fetch Picture from S3", attributes: { size: imageInfo.size } });
        setUri(newImage.uri);
        setImageLoading(false);
      }, 1000);
    };

    if (imageKey) { checkCache(); }
  }, [imageKey]);

  let sizeObj: {height: number, width: number};
  /** TODO: Maybe have these not as static sizes? */
  switch (size) {
  case ProfilePictureSize.PROFILE:
    sizeObj = ProfilePictureDimensions.PROFILE;
    break;
  case ProfilePictureSize.BUBBLE:
    sizeObj = ProfilePictureDimensions.BUBBLE;
    break;
  case ProfilePictureSize.MESSAGE:
    sizeObj = ProfilePictureDimensions.MESSAGE;
    break;
  default:
    throw new Error("Size Object Error");
  }

  const DefaultAvatar = () => (
    <TouchableWithoutFeedback style={{ borderRadius: 100 }} onPress={onPress}>
      <Image
        source={noAvatar}
        style={{ borderRadius: 100, ...sizeObj }}
      />
    </TouchableWithoutFeedback>
  );

  if (!uri) return <DefaultAvatar />;

  return (
    imageLoading ? (
      <Layout style={styles.profileContainer}>
        <Image
          source={uri ? { uri } : noAvatar}
          style={{ borderRadius: 100, ...sizeObj }}
        />
        <Layout style={[styles.profileOverlay, styles.profileContainer, sizeObj]}>
          <Spinner />
        </Layout>
      </Layout>
    ) : (
      <TouchableWithoutFeedback style={{ borderRadius: 100 }} onPress={onPress}>
        <Image
          source={uri ? { uri } : noAvatar}
          style={{ borderRadius: 100, ...sizeObj }}
        />
      </TouchableWithoutFeedback>
    )
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    borderRadius: 100,
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

export default ProfilePicture;
