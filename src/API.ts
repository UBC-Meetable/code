/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserProfileInput = {
  email: string,
  firstName?: string | null,
  lastName?: string | null,
  profilePicture?: string | null,
  bio?: string | null,
  userState?: UserState | null,
  university?: string | null,
  major?: string | null,
  courses?: Array< CourseInput > | null,
};

export enum UserState {
  SIGNED_UP = "SIGNED_UP",
  UNI_SELECTED = "UNI_SELECTED",
  PROFILE_CREATED = "PROFILE_CREATED",
  DONE = "DONE",
}


export type CourseInput = {
  code: string,
  section: string,
};

export type ModelUserProfileConditionInput = {
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  profilePicture?: ModelStringInput | null,
  bio?: ModelStringInput | null,
  userState?: ModelUserStateInput | null,
  university?: ModelStringInput | null,
  major?: ModelStringInput | null,
  and?: Array< ModelUserProfileConditionInput | null > | null,
  or?: Array< ModelUserProfileConditionInput | null > | null,
  not?: ModelUserProfileConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelUserStateInput = {
  eq?: UserState | null,
  ne?: UserState | null,
};

export type UserProfile = {
  __typename: "UserProfile",
  email?: string,
  firstName?: string | null,
  lastName?: string | null,
  profilePicture?: string | null,
  bio?: string | null,
  userState?: UserState | null,
  university?: string | null,
  major?: string | null,
  courses?:  Array<Course > | null,
  createdAt?: string,
  updatedAt?: string,
  owner?: string | null,
};

export type Course = {
  __typename: "Course",
  code?: string,
  section?: string,
};

export type UpdateUserProfileInput = {
  email: string,
  firstName?: string | null,
  lastName?: string | null,
  profilePicture?: string | null,
  bio?: string | null,
  userState?: UserState | null,
  university?: string | null,
  major?: string | null,
  courses?: Array< CourseInput > | null,
};

export type DeleteUserProfileInput = {
  email: string,
};

export type ModelUserProfileFilterInput = {
  email?: ModelStringInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  profilePicture?: ModelStringInput | null,
  bio?: ModelStringInput | null,
  userState?: ModelUserStateInput | null,
  university?: ModelStringInput | null,
  major?: ModelStringInput | null,
  and?: Array< ModelUserProfileFilterInput | null > | null,
  or?: Array< ModelUserProfileFilterInput | null > | null,
  not?: ModelUserProfileFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelUserProfileConnection = {
  __typename: "ModelUserProfileConnection",
  items?:  Array<UserProfile | null > | null,
  nextToken?: string | null,
};

export type CreateUserProfileMutationVariables = {
  input?: CreateUserProfileInput,
  condition?: ModelUserProfileConditionInput | null,
};

export type CreateUserProfileMutation = {
  createUserProfile?:  {
    __typename: "UserProfile",
    email: string,
    firstName?: string | null,
    lastName?: string | null,
    profilePicture?: string | null,
    bio?: string | null,
    userState?: UserState | null,
    university?: string | null,
    major?: string | null,
    courses?:  Array< {
      __typename: "Course",
      code: string,
      section: string,
    } > | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateUserProfileMutationVariables = {
  input?: UpdateUserProfileInput,
  condition?: ModelUserProfileConditionInput | null,
};

export type UpdateUserProfileMutation = {
  updateUserProfile?:  {
    __typename: "UserProfile",
    email: string,
    firstName?: string | null,
    lastName?: string | null,
    profilePicture?: string | null,
    bio?: string | null,
    userState?: UserState | null,
    university?: string | null,
    major?: string | null,
    courses?:  Array< {
      __typename: "Course",
      code: string,
      section: string,
    } > | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteUserProfileMutationVariables = {
  input?: DeleteUserProfileInput,
  condition?: ModelUserProfileConditionInput | null,
};

export type DeleteUserProfileMutation = {
  deleteUserProfile?:  {
    __typename: "UserProfile",
    email: string,
    firstName?: string | null,
    lastName?: string | null,
    profilePicture?: string | null,
    bio?: string | null,
    userState?: UserState | null,
    university?: string | null,
    major?: string | null,
    courses?:  Array< {
      __typename: "Course",
      code: string,
      section: string,
    } > | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type GetUserProfileQueryVariables = {
  email?: string,
};

export type GetUserProfileQuery = {
  getUserProfile?:  {
    __typename: "UserProfile",
    email: string,
    firstName?: string | null,
    lastName?: string | null,
    profilePicture?: string | null,
    bio?: string | null,
    userState?: UserState | null,
    university?: string | null,
    major?: string | null,
    courses?:  Array< {
      __typename: "Course",
      code: string,
      section: string,
    } > | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListUserProfilesQueryVariables = {
  email?: string | null,
  filter?: ModelUserProfileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListUserProfilesQuery = {
  listUserProfiles?:  {
    __typename: "ModelUserProfileConnection",
    items?:  Array< {
      __typename: "UserProfile",
      email: string,
      firstName?: string | null,
      lastName?: string | null,
      profilePicture?: string | null,
      bio?: string | null,
      userState?: UserState | null,
      university?: string | null,
      major?: string | null,
      courses?:  Array< {
        __typename: "Course",
        code: string,
        section: string,
      } > | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserProfileSubscriptionVariables = {
  owner?: string,
};

export type OnCreateUserProfileSubscription = {
  onCreateUserProfile?:  {
    __typename: "UserProfile",
    email: string,
    firstName?: string | null,
    lastName?: string | null,
    profilePicture?: string | null,
    bio?: string | null,
    userState?: UserState | null,
    university?: string | null,
    major?: string | null,
    courses?:  Array< {
      __typename: "Course",
      code: string,
      section: string,
    } > | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateUserProfileSubscriptionVariables = {
  owner?: string,
};

export type OnUpdateUserProfileSubscription = {
  onUpdateUserProfile?:  {
    __typename: "UserProfile",
    email: string,
    firstName?: string | null,
    lastName?: string | null,
    profilePicture?: string | null,
    bio?: string | null,
    userState?: UserState | null,
    university?: string | null,
    major?: string | null,
    courses?:  Array< {
      __typename: "Course",
      code: string,
      section: string,
    } > | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteUserProfileSubscriptionVariables = {
  owner?: string,
};

export type OnDeleteUserProfileSubscription = {
  onDeleteUserProfile?:  {
    __typename: "UserProfile",
    email: string,
    firstName?: string | null,
    lastName?: string | null,
    profilePicture?: string | null,
    bio?: string | null,
    userState?: UserState | null,
    university?: string | null,
    major?: string | null,
    courses?:  Array< {
      __typename: "Course",
      code: string,
      section: string,
    } > | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};
