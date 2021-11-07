import {
  Divider, Layout, useTheme,
} from "@ui-kitten/components";
import React, { SetStateAction } from "react";
import { StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { FileAttachment } from "../../API";
import PreviewWrapper from "./PreviewWrapper";

type MessageInputProps = {
    value: string;
    onChangeText: (text: string) => void;
    onFocus: () => void;
    onSubmitEditing: () => void;
    onPressPhoto?: () => void;
    files?: FileAttachment[];
    setFiles: React.Dispatch<SetStateAction<FileAttachment[]>>;
};

const styles = StyleSheet.create({
  input: {
    minHeight: 60,
    borderRadius: 5,
    flex: 0.9,
    padding: 10,
  },
  previewContainer: {
    minHeight: 60,
    borderRadius: 5,
    backgroundColor: "#0000",
    flex: 0.9,
  },
  inputContainer: {
    marginRight: 10,
    backgroundColor: "#0000",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    flexDirection: "row",
  },
  iconContainer: {
    flex: 0.1,
    minHeight: 60,
    backgroundColor: "#0000",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  icon: {
    flex: 0,
    backgroundColor: "#0000",
    justifyContent: "flex-end",
  },
});

const MessageInput = ({
  value, onChangeText, onFocus, onSubmitEditing, onPressPhoto, files, setFiles,
}: MessageInputProps) => {
  const units = useSafeAreaInsets();
  const theme = useTheme();

  return (
    <Layout style={[styles.inputContainer, {
      paddingHorizontal: units.left + units.right,
      paddingBottom: units.bottom / 2,
      marginTop: files?.length ? units.top : 0,
    }]}
    >
      <Layout style={[styles.iconContainer, { height: "0%" }]}>
        <TouchableOpacity
          style={[styles.icon,
            { marginBottom: units.bottom / 2 }]}
          onPress={onPressPhoto}
        >
          <Icon name="photo" />
        </TouchableOpacity>
      </Layout>
      <Layout style={[styles.previewContainer, { marginHorizontal: units.left + units.right }]}>
        {!!files?.length && (
          <>
            <PreviewWrapper setFiles={setFiles} files={files} />
            <Divider style={{ backgroundColor: theme["color-primary-default"], marginVertical: 0 }} />
          </>
        )}

        <TextInput
          value={value}
          onChangeText={onChangeText}
          style={[styles.input, {
            marginHorizontal: units.left + units.right,
            backgroundColor: theme["color-primary-200"],
            borderTopLeftRadius: files?.length ? 0 : 5,
            borderTopRightRadius: files?.length ? 0 : 5,
          }]}
          onFocus={
            onFocus
          }
          placeholder="Say Hi!"
          placeholderTextColor={theme["color-basic-600"]}
          textBreakStrategy="highQuality"
          numberOfLines={1}
          underlineColorAndroid="rgba(0,0,0,0)"
          blurOnSubmit={false}
          onSubmitEditing={
            onSubmitEditing
          }
        />
      </Layout>
    </Layout>
  );
};

export default MessageInput;
