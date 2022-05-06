/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import { ImageInfo } from "expo-image-picker/build/ImagePicker.types";
import { ExpoPushToken } from "expo-notifications";
import React from "react";
import {
  GestureResponderEvent,
  StyleProp,
  TextStyle,
  ViewStyle,
} from "react-native";
import {
  User as UserProfileAPIType,
  CourseGroup as CourseGroupAPIType, ChatMessage as ChatMessageAPIType,
} from "./API";

// eslint-disable-next-line no-shadow
export enum GroupType {
  COURSE = "COURSE",
  FRIEND = "FRIEND"
}

export type RootStackParamList = {
  Home: undefined;
  NotFound: undefined;
  Tutorial: undefined;
  Login: undefined;
  Signup: undefined;
  Quiz: {
    return: (q: QuestionType[]) => void;
  };
  Group: {
    groupID: string;
    groupType: GroupType;
    groupTitle: string;
  };
  Event: {
    eventID: string;
    eventTitle: string;
  };
  UniScreen: undefined;
  EditCourses: undefined;
  ProfileSettings: undefined;
  NewProfileScreen: undefined;
  FriendOptions: undefined;
  ProfileStack: undefined;
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
  CourseGroups: undefined;
  FriendGroups: undefined;
  GroupScreen: {
    courseGroup: CourseGroup;
    groupMessages: ChatMessage[];
  };
  ProfileScreen: undefined;
};

export type FriendGroupStackScreens = {
  FriendGroups: undefined;
  Quiz: undefined;
};

export type TabTwoParamList = {
  ProfileScreen: undefined;
};

export type User =
  {
    at_hash: string;
    interests: string[];
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
    major?: string;
    university?: string;
    bio?: string;
    token?: ExpoPushToken;
  }

export type ButtonProps = {
  children: React.ReactChild;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  onPress?: (event: GestureResponderEvent) => void;
};

export type MessageProps = {
  message: any;
};

export type QuestionType = {
  title: string,
  id: string,
  img: number,
  response?: string,
}

export type SignUpParamList = {
  UniScreen: undefined;
  NewProfileScreen: undefined;
  NewEditCoursesScreen: undefined;
  YourInterestsScreen: undefined;
};

export type CognitoUser = {
  Session: any;
  attributes: {
    email: string;
    email_verified: true;
    phone_number: string;
    phone_number_verified: false;
    sub: string;
  };
  authenticationFlowType: string;
  client: {
    endpoint: string;
    fetchOptions: any;
  };
  keyPrefix: string;
  pool: any;
  signInUserSession: any;
  storage: any;
  userDataKey: string;
  username: string;
};

export type MessageMap = {
  [id: string]: ChatMessage[]
}

export type UserProfile = Omit<Exclude<UserProfileAPIType, null>, "createdAt" | "owner" | "updatedAt">;
export type CourseGroup = Omit<CourseGroupAPIType, "createdAt" | "owner">;
export type ChatMessage = Omit<ChatMessageAPIType, "owner" | "userID" | "id" | "updatedAt">;
export type ChatMessageWithPending = ChatMessage & { pending?: boolean }

export type ModelChatMessageConnection = {
  items?: Array<Omit<ChatMessage, "__typename"> | null> | null,
  nextToken?: string | null,
};

export type ImageInfoType = ImageInfo & { cancelled: boolean };

export enum ProfilePictureSize {
  "PROFILE",
  "BUBBLE",
  "MESSAGE",
  "FRIEND",
  "TOP"
}

export const ProfilePictureDimensions = {
  PROFILE: { height: 125, width: 125 },
  BUBBLE: { height: 38, width: 38 },
  MESSAGE: { height: 30, width: 30 },
  FRIEND: { height: 70, width: 70 },
  TOP: { height: 50, width: 50 },
};

export enum SwipeActions {
  "LIKE" = "liked",
  "LOVE" = "loved",
  "DISLIKE" = "disliked",
  "UNDO" = "undo",
}

export enum AuthState {
  LANDING_SCREEN = "LANDING_SCREEN",
  TUTORIAL = "TUTORIAL",
  SIGN_UP = "SIGN_UP",
  LOGIN = "LOGIN",
  UNIVERSITY_SCREEN = "UNIVERSITY_SCREEN",
  CONFIRM_EMAIL = "CONFIRM_EMAIL",
  FORGOT_PASSWORD = "FORGOT_PASSWORD",
  FORGOT_PASSWORD_CONFIRM = "FORGOT_PASSWORD_CONFIRM"
}

export type SimpleCourseGroup = {
  title: string;
  code: string;
  section: string;
  groupID: string;
};
