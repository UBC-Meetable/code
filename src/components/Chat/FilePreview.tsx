import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Layout } from "@ui-kitten/components";
import { ImageInfo } from "expo-image-picker/build/ImagePicker.types";
import React from "react";
import { Image, View } from "react-native";
import { Icon } from "react-native-elements";
import { FileAttachment } from "../../API";

type FilePreviewProps = {
  file: FileAttachment,
  remove: (toDel: FileAttachment) => void,
};

const FilePreview = ({ file, remove }:FilePreviewProps) => {
  return (
    <View style={{
      backgroundColor: "#0000", position: "relative", overflow: "visible",
    }}
    >
      <Layout
        style={{ backgroundColor: "#0000", position: "relative" }}
      >
        <MaterialCommunityIcons
          onPress={() => remove(file)}
          name="close-circle"
          size={20}
          style={{
            width: 20,
            height: 20,
            position: "absolute",
            top: 0,
            zIndex: 1,
            right: -3,
          }}
        />
        <Image
          style={{ borderRadius: 5, margin: 5, aspectRatio: file.width! / file.height! }}
          source={{ uri: file.fileURI }}
          height={100}
          width={100}
        />
      </Layout>

    </View>
  );
};

export default FilePreview;
