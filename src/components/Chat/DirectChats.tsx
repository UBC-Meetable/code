import React from "react";
import { Image, View, StyleSheet, Text } from "react-native";
import { Layout } from "@ui-kitten/components";
import { IconButton} from "react-native-paper";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../types";

type Chat = {
  imageUrl: string;
  message: string;
  name: string;
};

type DirectChatProps = {
  navigation: StackNavigationProp<RootStackParamList, "Chats">;
};

const chats: Chat[] = [
  {
    imageUrl: "../../assets/images/profilePic2.jpg",
    message: "Hello dude. please respond",
    name: "John Doe",
  },
];

const DirectChats = ({ navigation }: DirectChatProps) => {
  return (
    <View style={styles.root}>
      {chats.length &&
        chats.map((chat) => (
          <Layout>
            <Image
              style={styles.image}
              source={require("../../assets/images/profilePic2.jpg")}
            />
            <Layout style={styles.chatWrapper}>
              <IconButton
                onPress={() => {
                  navigation.navigate("DirectChat");
                }}
                icon="message"
              />
              <Text style={styles.name}>{chat.name}</Text>
              <Text>{chat.message}</Text>
            </Layout>
          </Layout>
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#0000",
    position: "relative",
    overflow: "visible",
    display: "flex",
    alignItems: "center",
  },

  name: {
    fontWeight: "bold",
  },
  searchBar: {
    width: "100%",
  },
  chatWrapper: {
    justifyContent: "center",
    marginTop: -85,
    marginLeft: 100,
  },

  image: {
    width: 80,
    height: 80,
    marginRight: 200,
    borderRadius: 100,
  },
});

export default DirectChats;
