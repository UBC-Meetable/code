import { Layout, Spinner } from "@ui-kitten/components";
import * as FileSystem from "expo-file-system";
import React, { useEffect, useState } from "react";
import { Image, StyleSheet } from "react-native";
import { Storage } from "aws-amplify";
import noAvatar from "../assets/images/noavatar.png";
import { ProfilePictureSize } from "../types";

type ProfilePictureProps = {
    imageKey: string;
    size?: ProfilePictureSize;
};

const ProfilePicture = ({ imageKey, size = ProfilePictureSize.PROFILE }:ProfilePictureProps) => {
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
        setUri(image.uri);
        setImageLoading(false);
        return;
      }

      const s3Uri = await Storage.get(imageKey, { download: false, expires: 604800 }) as string;

      const newImage = await FileSystem.downloadAsync(s3Uri, path);
      setUri(newImage.uri);
      setImageLoading(false);
    };

    checkCache();
  }, [imageKey]);

  let sizeObj: {height: number, width: number};
  /** TODO: Maybe have these not as static sizes? */
  switch (size) {
  case ProfilePictureSize.PROFILE:
    sizeObj = { height: 125, width: 125 };
    break;
  case ProfilePictureSize.BUBBLE:
    sizeObj = { height: 38, width: 38 };
    break;
  case ProfilePictureSize.MESSAGE:
    sizeObj = { height: 30, width: 30 };
    break;
  default:
    throw new Error("Size Object Error");
  }

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
      <Image
        source={uri ? { uri } : noAvatar}
        style={{ borderRadius: 100, ...sizeObj }}
      />
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
