import { Layout, Text } from "@ui-kitten/components";
import React from "react";
import { StyleSheet, TextInput } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Badge, Icon } from "react-native-elements";
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
    flex: 0.9,
    padding: 10,
    backgroundColor: Colors.theme.creme,
  },
  inputContainer: {
    backgroundColor: "#0000",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  iconContainer: {
    flex: 0.1,
    minHeight: 60,
    backgroundColor: "#0000",
    justifyContent: "center",
    alignItems: "center",
  },
});

const MessageInput = ({
  value, onChangeText, onFocus, onSubmitEditing,
}: MessageInputProps) => {
  const units = useSafeAreaInsets();
  return (
    <Layout style={[styles.inputContainer, {
      paddingHorizontal: units.left + units.right,
      paddingBottom: 10,
    }]}
    >
      <Layout style={styles.iconContainer}>
        <Icon name="photo" />
      </Layout>

      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={[styles.input, { marginHorizontal: units.left + units.right }]}
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
};

export default MessageInput;
