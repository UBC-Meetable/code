import { Layout, Spinner, StyleType } from "@ui-kitten/components";
import { Analytics, Storage } from "aws-amplify";
import * as FileSystem from "expo-file-system";
import React, { useEffect, useState } from "react";
import { Image, StyleSheet, TouchableWithoutFeedback } from "react-native";
import noAvatar from "../assets/images/noavatar.png";
import { ProfilePictureDimensions, ProfilePictureSize } from "../types";

type ProfilePictureProps = {
  imageKey: string | null | undefined;
  size?: ProfilePictureSize;
  onPress?: () => void;
  imageStyle?: StyleType;
  editable?: boolean;
};

const ProfilePicture = ({
  imageKey,
  size = ProfilePictureSize.PROFILE,
  onPress,
  imageStyle = {},
  editable = false,
}: ProfilePictureProps) => {
  const [uri, setUri] = useState("");
  const [imageLoading, setImageLoading] = useState(false);

  /** Get image from cache first, download it if there is an update  */
  useEffect(() => {
    const checkCache = async (key: string) => {
      setImageLoading(true);
      const safePathName = key.replace(/^.*[\\/]/, "");
      const path = `${FileSystem.cacheDirectory}${safePathName}`;
      const image = await FileSystem.getInfoAsync(path);
      if (image.exists) {
        setUri(() => image.uri);
        setImageLoading(() => false);
        return;
      }
      console.log("Got from s3");
      setTimeout(async () => {
        const s3Uri = await Storage.get(key, { download: false, expires: 604800 })
          .catch((error) => console.log(error)) as string;
        Image.getSize(s3Uri, async () => {
          const newImage = await FileSystem.downloadAsync(s3Uri, path);
          const imageInfo = await FileSystem.getInfoAsync(path);
          Analytics.record({ name: "Fetch Picture from S3", attributes: { size: imageInfo.size } });
          setUri(newImage.uri);
          setImageLoading(false);
        }, () => {
          setUri("");
          setImageLoading(false);
        });
      }, 1000);
    };

    if (imageKey) { checkCache(imageKey); }
  }, [imageKey]);

  let sizeObj: { height: number, width: number };
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
  case ProfilePictureSize.FRIEND:
    sizeObj = ProfilePictureDimensions.FRIEND;
    break;
  case ProfilePictureSize.TOP:
    sizeObj = ProfilePictureDimensions.TOP;
    break;
  default:
    throw new Error("Size Object Error");
  }

  const DefaultAvatar = () => (
    <TouchableWithoutFeedback style={{ borderRadius: 100 }} onPress={onPress}>
      <Image
        source={noAvatar}
        style={{ borderRadius: 100, ...sizeObj, ...imageStyle }}
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
      <TouchableWithoutFeedback style={[{ borderRadius: 100 }]} onPress={onPress}>
        <Image
          source={uri ? { uri } : noAvatar}
          style={{ borderRadius: 100, ...sizeObj, ...imageStyle }}
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
