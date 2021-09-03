import React, { useEffect, useState } from "react";
import * as FileSystem from "expo-file-system";
import { Analytics, Storage } from "aws-amplify";
import { Spinner } from "@ui-kitten/components";
import { Image } from "react-native";
import { FileAttachment } from "../../API";

type CachedImageProps = {
  file: FileAttachment
  onLoad?: (uri: string) => void;
};

const CachedImage = ({ file, onLoad }:CachedImageProps) => {
  const [uri, setUri] = useState(file.fileURI);
  const [imageLoading, setImageLoading] = useState(true);
  useEffect(() => {
    if (!file.fileURI) {
      return;
    }

    const checkCache = async () => {
      const safePathName = file.fileURI!.replace(/^.*[\\/]/, "");
      const path = `${FileSystem.cacheDirectory}${safePathName}`;

      setImageLoading(true);
      const image = await FileSystem.getInfoAsync(path);

      if (image.exists) {
        setUri(() => image.uri);
        setImageLoading(() => false);
        if (onLoad) { onLoad(image.uri); }
        return;
      }
      console.log("Got from s3");
      const s3Uri = await Storage.get(file.fileURI!,
        { download: false, expires: 604800 }) as string;
      const newImage = await FileSystem.downloadAsync(s3Uri, path).catch((error) => {
        console.error(error);
      });
      if (!newImage) return;
      const imageInfo = await FileSystem.getInfoAsync(path);
      if (imageInfo && imageInfo.size! < 10000) console.log(s3Uri, imageInfo);

      Analytics.record({ name: "Fetch Picture from S3", attributes: { size: imageInfo.size } });
      setUri(newImage.uri);
      if (onLoad) { onLoad(newImage.uri); }
      setImageLoading(false);
    };

    if (file.fileURI) checkCache();
  }, [file.fileURI]);

  if (imageLoading) return <Spinner />;

  return (
    <Image
      source={{ uri }}
      style={{
        height: 100, width: 100, borderRadius: 5, marginHorizontal: 5,
      }}
    />
  );
};

export default CachedImage;
