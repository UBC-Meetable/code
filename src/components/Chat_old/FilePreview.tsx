import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Layout } from "@ui-kitten/components";
import React from "react";
import { Image, View, StyleSheet } from "react-native";
import { FileAttachment } from "../../API";

type FilePreviewProps = {
  file: FileAttachment,
  remove: (toDel: FileAttachment) => void,
};

const FilePreview = ({ file, remove }:FilePreviewProps) => {
  return (
    <View style={styles.root}>
      <Layout style={styles.container}>
        <MaterialCommunityIcons
          onPress={() => remove(file)}
          name="close-circle"
          size={20}
          style={styles.icon}
        />
        <Image
          style={[styles.image, { aspectRatio: file.width! / file.height! }]}
          source={{ uri: file.fileURI }}
          height={100}
          width={100}
        />
      </Layout>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#0000",
    position: "relative",
    overflow: "visible",
  },
  container: {
    backgroundColor: "#0000",
    position: "relative",
  },
  icon: {
    width: 20,
    height: 20,
    position: "absolute",
    top: 0,
    zIndex: 1,
    right: -3,
  },
  image: { borderRadius: 5, margin: 5 },
});

export default FilePreview;
