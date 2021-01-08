/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import React from "react";
import {
  GestureResponderEvent,
  StyleProp,
  TextStyle,
  ViewStyle,
} from "react-native";

export type RootStackParamList = {
  Tabs: undefined;
  NotFound: undefined;
  Tutorial: undefined;
  Login: undefined;
  Signup: undefined;
  Quiz: undefined;
  Group: undefined;
  UniScreen: undefined;
  EditCourses: undefined;
};

export type BottomTabParamList = {
  "Course Groups": {
    groupName: string;
    groupId: string;
  };
  Profile: undefined;
  "Friend Groups": {
    groupId: string;
    groupName: string;
  };
};

export type GroupStackParamList = {
  GroupsScreen: undefined;
  GroupScreen: {
    groupName: string;
    groupId: string;
  };
  ProfileScreen: undefined;
};

export type TabTwoParamList = {
  ProfileScreen: undefined;
};

export type User =
  | {
      at_hash: string;
      aud: string;
      exp: number;
      family_name: string;
      given_name: string;
      iat: number;
      iss: string;
      locale: string;
      name: string;
      nickname: string;
      nonce: string;
      picture: string;
      sub: string;
      updated_at: string;
    }
  | Boolean;

export type ButtonProps = {
  children: React.ReactChild;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  onPress?: (event:GestureResponderEvent) => void;
};

export type MessageType = {
  author: string,
  message: string,
  date: Date
}

export type MessageProps = {
  message: MessageType;
};
