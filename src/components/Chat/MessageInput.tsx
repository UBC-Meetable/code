import { Layout } from "@ui-kitten/components";
import React from "react";
import { KeyboardAvoidingView, StyleSheet, TextInput } from "react-native";
import Colors from "../../constants/Colors";

type MessageInputProps = {
    value: string;
    onChangeText: (text: string) => void;
    onFocus: () => void;
    onSubmitEditing: () => void;
};

const styles = StyleSheet.create({
  input: {
    minHeight: 60,
    borderRadius: 20,
    padding: 10,
    width: "90%",
    backgroundColor: Colors.theme.creme,
  },
  inputContainer: {
    // width: "100%",
    backgroundColor: "#0000",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    // flexBasis: 50,
    // height: "%",
  },
});

const MessageInput = ({
  value, onChangeText, onFocus, onSubmitEditing,
}: MessageInputProps) => (
  <Layout style={styles.inputContainer}>
    <TextInput
      value={value}
      onChangeText={onChangeText}
      style={styles.input}
      onFocus={
        onFocus
      }
      placeholder="Say Hi!"
      placeholderTextColor="#c4c4c4"
      textBreakStrategy="highQuality"
      numberOfLines={1}
      underlineColorAndroid="rgba(0,0,0,0)"
      blurOnSubmit={false}
      onSubmitEditing={
        onSubmitEditing
      }
    />
  </Layout>
//   </KeyboardAvoidingView>
);

export default MessageInput;
