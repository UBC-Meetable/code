import { HeaderBackButton, StackNavigationProp } from "@react-navigation/stack";
import { Layout, Text } from "@ui-kitten/components";
import React from "react";
import { RootStackParamList } from "../../types";

const ChatBackButton = ({
  navigation,
  label,
  showBack = true,
}: {
  navigation: StackNavigationProp<RootStackParamList, keyof RootStackParamList>,
  label: string,
  showBack?: boolean
}) => (
  <Layout style={{ padding: 10, backgroundColor: "#0000" }}>
    {showBack && (
      <HeaderBackButton
        onPress={() => navigation.goBack()}
        tintColor="#000"
        labelVisible={false}
      />
    )}
    <Text
      style={{
        fontFamily: "Poppins_600SemiBold",
        fontSize: 24,
        marginLeft: 10,
        marginTop: 10,
      }}
    >
      {label}
    </Text>
  </Layout>
);

export default ChatBackButton;
