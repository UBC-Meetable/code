/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type User = {
  __typename: "User",
  id?: string,
  email?: string,
  firstName?: string | null,
  lastName?: string | null,
  profilePicture?: string | null,
  bio?: string | null,
  userState?: UserState | null,
  university?: string | null,
  major?: string | null,
  courses?:  Array<Course > | null,
  courseGroups?: ModelCourseGroupConnectionModelConnection,
  createdAt?: string,
  updatedAt?: string,
  owner?: string | null,
};

export enum UserState {
  SIGNED_UP = "SIGNED_UP",
  UNI_SELECTED = "UNI_SELECTED",
  PROFILE_CREATED = "PROFILE_CREATED",
  DONE = "DONE",
}


export type Course = {
  __typename: "Course",
  code?: string,
  section?: string,
};

export type ModelCourseGroupConnectionModelConnection = {
  __typename: "ModelCourseGroupConnectionModelConnection",
  items?:  Array<CourseGroupConnectionModel | null > | null,
  nextToken?: string | null,
};

export type CourseGroupConnectionModel = {
  __typename: "CourseGroupConnectionModel",
  id?: string,
  groupID?: string,
  userID?: string,
  courseGroup?: CourseGroup,
  friendGroup?: FriendGroup,
  user?: User,
  createdAt?: string,
  updatedAt?: string,
};

export type CourseGroup = {
  __typename: "CourseGroup",
  users?: ModelCourseGroupConnectionModelConnection,
  title?: string | null,
  course?: Course,
  groupID?: string,
  messages?: ModelChatMessageConnection,
  createdAt?: string,
  updatedAt?: string,
  owner?: string | null,
};

export type ModelChatMessageConnection = {
  __typename: "ModelChatMessageConnection",
  items?:  Array<ChatMessage | null > | null,
  nextToken?: string | null,
};

export type ChatMessage = {
  __typename: "ChatMessage",
  id?: string,
  groupChatID?: string,
  userID?: string,
  author?: User,
  body?: string,
  createdAt?: string | null,
  updatedAt?: string | null,
  owner?: string | null,
};

export type FriendGroup = {
  __typename: "FriendGroup",
  users?: ModelCourseGroupConnectionModelConnection,
  groupID?: string,
  title?: string,
  messages?:  Array<ChatMessage > | null,
  owner?: string | null,
  createdAt?: string,
  updatedAt?: string,
};

export type joinFriendGroupInput = {
  id: string,
};

export type CreateUserInput = {
  id: string,
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

export type CourseInput = {
  code: string,
  section: string,
};

export type ModelUserConditionInput = {
  email?: ModelStringInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  profilePicture?: ModelStringInput | null,
  bio?: ModelStringInput | null,
  userState?: ModelUserStateInput | null,
  university?: ModelStringInput | null,
  major?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
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

export type UpdateUserInput = {
  id: string,
  email?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  profilePicture?: string | null,
  bio?: string | null,
  userState?: UserState | null,
  university?: string | null,
  major?: string | null,
  courses?: Array< CourseInput > | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateCourseGroupInput = {
  title?: string | null,
  course: CourseInput,
  groupID: string,
};

export type ModelCourseGroupConditionInput = {
  title?: ModelStringInput | null,
  and?: Array< ModelCourseGroupConditionInput | null > | null,
  or?: Array< ModelCourseGroupConditionInput | null > | null,
  not?: ModelCourseGroupConditionInput | null,
};

export type UpdateCourseGroupInput = {
  title?: string | null,
  course?: CourseInput | null,
  groupID: string,
};

export type DeleteCourseGroupInput = {
  groupID: string,
};

export type CreateFriendGroupInput = {
  groupID: string,
  title: string,
  owner?: string | null,
};

export type ModelFriendGroupConditionInput = {
  title?: ModelStringInput | null,
  and?: Array< ModelFriendGroupConditionInput | null > | null,
  or?: Array< ModelFriendGroupConditionInput | null > | null,
  not?: ModelFriendGroupConditionInput | null,
};

export type UpdateFriendGroupInput = {
  groupID: string,
  title?: string | null,
  owner?: string | null,
};

export type DeleteFriendGroupInput = {
  groupID: string,
};

export type CreateChatMessageInput = {
  id?: string | null,
  groupChatID: string,
  userID: string,
  body: string,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelChatMessageConditionInput = {
  groupChatID?: ModelStringInput | null,
  userID?: ModelStringInput | null,
  body?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelChatMessageConditionInput | null > | null,
  or?: Array< ModelChatMessageConditionInput | null > | null,
  not?: ModelChatMessageConditionInput | null,
};

export type UpdateChatMessageInput = {
  groupChatID?: string | null,
  userID?: string | null,
  body?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteChatMessageInput = {
  id?: string | null,
};

export type CreateCourseGroupConnectionModelInput = {
  id?: string | null,
  groupID: string,
  userID: string,
};

export type ModelCourseGroupConnectionModelConditionInput = {
  groupID?: ModelStringInput | null,
  userID?: ModelStringInput | null,
  and?: Array< ModelCourseGroupConnectionModelConditionInput | null > | null,
  or?: Array< ModelCourseGroupConnectionModelConditionInput | null > | null,
  not?: ModelCourseGroupConnectionModelConditionInput | null,
};

export type UpdateCourseGroupConnectionModelInput = {
  id: string,
  groupID?: string | null,
  userID?: string | null,
};

export type DeleteCourseGroupConnectionModelInput = {
  id?: string | null,
};

export type ModelUserFilterInput = {
  id?: ModelStringInput | null,
  email?: ModelStringInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  profilePicture?: ModelStringInput | null,
  bio?: ModelStringInput | null,
  userState?: ModelUserStateInput | null,
  university?: ModelStringInput | null,
  major?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items?:  Array<User | null > | null,
  nextToken?: string | null,
};

export type ModelCourseGroupFilterInput = {
  title?: ModelStringInput | null,
  groupID?: ModelStringInput | null,
  and?: Array< ModelCourseGroupFilterInput | null > | null,
  or?: Array< ModelCourseGroupFilterInput | null > | null,
  not?: ModelCourseGroupFilterInput | null,
};

export type ModelCourseGroupConnection = {
  __typename: "ModelCourseGroupConnection",
  items?:  Array<CourseGroup | null > | null,
  nextToken?: string | null,
};

export type ModelFriendGroupFilterInput = {
  groupID?: ModelStringInput | null,
  title?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelFriendGroupFilterInput | null > | null,
  or?: Array< ModelFriendGroupFilterInput | null > | null,
  not?: ModelFriendGroupFilterInput | null,
};

export type ModelFriendGroupConnection = {
  __typename: "ModelFriendGroupConnection",
  items?:  Array<FriendGroup | null > | null,
  nextToken?: string | null,
};

export type ModelChatMessageFilterInput = {
  groupChatID?: ModelStringInput | null,
  userID?: ModelStringInput | null,
  body?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelChatMessageFilterInput | null > | null,
  or?: Array< ModelChatMessageFilterInput | null > | null,
  not?: ModelChatMessageFilterInput | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type GetUserCoursesQueryVariables = {
  id?: string,
};

export type GetUserCoursesQuery = {
  getUser?:  {
    __typename: "User",
    courseGroups?:  {
      __typename: "ModelCourseGroupConnectionModelConnection",
      items?:  Array< {
        __typename: "CourseGroupConnectionModel",
        courseGroup?:  {
          __typename: "CourseGroup",
          updatedAt: string,
          groupID: string,
          title?: string | null,
          messages?:  {
            __typename: "ModelChatMessageConnection",
            items?:  Array< {
              __typename: "ChatMessage",
              body: string,
              groupChatID: string,
              createdAt?: string | null,
              author:  {
                __typename: "User",
                firstName?: string | null,
                lastName?: string | null,
                id: string,
              },
            } | null > | null,
          } | null,
          users?:  {
            __typename: "ModelCourseGroupConnectionModelConnection",
            items?:  Array< {
              __typename: "CourseGroupConnectionModel",
              user:  {
                __typename: "User",
                firstName?: string | null,
                lastName?: string | null,
              },
            } | null > | null,
          } | null,
          course:  {
            __typename: "Course",
            code: string,
            section: string,
          },
        } | null,
      } | null > | null,
    } | null,
  } | null,
};

export type JoinFriendGroupMutationVariables = {
  user?: joinFriendGroupInput | null,
};

export type JoinFriendGroupMutation = {
  joinFriendGroup?:  {
    __typename: "CourseGroupConnectionModel",
    id: string,
    groupID: string,
    userID: string,
    courseGroup?:  {
      __typename: "CourseGroup",
      users?:  {
        __typename: "ModelCourseGroupConnectionModelConnection",
        nextToken?: string | null,
      } | null,
      title?: string | null,
      course:  {
        __typename: "Course",
        code: string,
        section: string,
      },
      groupID: string,
      messages?:  {
        __typename: "ModelChatMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    friendGroup?:  {
      __typename: "FriendGroup",
      users?:  {
        __typename: "ModelCourseGroupConnectionModelConnection",
        nextToken?: string | null,
      } | null,
      groupID: string,
      title: string,
      messages?:  Array< {
        __typename: "ChatMessage",
        id: string,
        groupChatID: string,
        userID: string,
        body: string,
        createdAt?: string | null,
        updatedAt?: string | null,
        owner?: string | null,
      } > | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    user:  {
      __typename: "User",
      id: string,
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
      courseGroups?:  {
        __typename: "ModelCourseGroupConnectionModelConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserMutationVariables = {
  input?: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
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
    courseGroups?:  {
      __typename: "ModelCourseGroupConnectionModelConnection",
      items?:  Array< {
        __typename: "CourseGroupConnectionModel",
        id: string,
        groupID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  input?: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
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
    courseGroups?:  {
      __typename: "ModelCourseGroupConnectionModelConnection",
      items?:  Array< {
        __typename: "CourseGroupConnectionModel",
        id: string,
        groupID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  input?: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
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
    courseGroups?:  {
      __typename: "ModelCourseGroupConnectionModelConnection",
      items?:  Array< {
        __typename: "CourseGroupConnectionModel",
        id: string,
        groupID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateCourseGroupMutationVariables = {
  input?: CreateCourseGroupInput,
  condition?: ModelCourseGroupConditionInput | null,
};

export type CreateCourseGroupMutation = {
  createCourseGroup?:  {
    __typename: "CourseGroup",
    users?:  {
      __typename: "ModelCourseGroupConnectionModelConnection",
      items?:  Array< {
        __typename: "CourseGroupConnectionModel",
        id: string,
        groupID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    title?: string | null,
    course:  {
      __typename: "Course",
      code: string,
      section: string,
    },
    groupID: string,
    messages?:  {
      __typename: "ModelChatMessageConnection",
      items?:  Array< {
        __typename: "ChatMessage",
        id: string,
        groupChatID: string,
        userID: string,
        body: string,
        createdAt?: string | null,
        updatedAt?: string | null,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateCourseGroupMutationVariables = {
  input?: UpdateCourseGroupInput,
  condition?: ModelCourseGroupConditionInput | null,
};

export type UpdateCourseGroupMutation = {
  updateCourseGroup?:  {
    __typename: "CourseGroup",
    users?:  {
      __typename: "ModelCourseGroupConnectionModelConnection",
      items?:  Array< {
        __typename: "CourseGroupConnectionModel",
        id: string,
        groupID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    title?: string | null,
    course:  {
      __typename: "Course",
      code: string,
      section: string,
    },
    groupID: string,
    messages?:  {
      __typename: "ModelChatMessageConnection",
      items?:  Array< {
        __typename: "ChatMessage",
        id: string,
        groupChatID: string,
        userID: string,
        body: string,
        createdAt?: string | null,
        updatedAt?: string | null,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteCourseGroupMutationVariables = {
  input?: DeleteCourseGroupInput,
  condition?: ModelCourseGroupConditionInput | null,
};

export type DeleteCourseGroupMutation = {
  deleteCourseGroup?:  {
    __typename: "CourseGroup",
    users?:  {
      __typename: "ModelCourseGroupConnectionModelConnection",
      items?:  Array< {
        __typename: "CourseGroupConnectionModel",
        id: string,
        groupID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    title?: string | null,
    course:  {
      __typename: "Course",
      code: string,
      section: string,
    },
    groupID: string,
    messages?:  {
      __typename: "ModelChatMessageConnection",
      items?:  Array< {
        __typename: "ChatMessage",
        id: string,
        groupChatID: string,
        userID: string,
        body: string,
        createdAt?: string | null,
        updatedAt?: string | null,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateFriendGroupMutationVariables = {
  input?: CreateFriendGroupInput,
  condition?: ModelFriendGroupConditionInput | null,
};

export type CreateFriendGroupMutation = {
  createFriendGroup?:  {
    __typename: "FriendGroup",
    users?:  {
      __typename: "ModelCourseGroupConnectionModelConnection",
      items?:  Array< {
        __typename: "CourseGroupConnectionModel",
        id: string,
        groupID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    groupID: string,
    title: string,
    messages?:  Array< {
      __typename: "ChatMessage",
      id: string,
      groupChatID: string,
      userID: string,
      author:  {
        __typename: "User",
        id: string,
        email: string,
        firstName?: string | null,
        lastName?: string | null,
        profilePicture?: string | null,
        bio?: string | null,
        userState?: UserState | null,
        university?: string | null,
        major?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      body: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } > | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateFriendGroupMutationVariables = {
  input?: UpdateFriendGroupInput,
  condition?: ModelFriendGroupConditionInput | null,
};

export type UpdateFriendGroupMutation = {
  updateFriendGroup?:  {
    __typename: "FriendGroup",
    users?:  {
      __typename: "ModelCourseGroupConnectionModelConnection",
      items?:  Array< {
        __typename: "CourseGroupConnectionModel",
        id: string,
        groupID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    groupID: string,
    title: string,
    messages?:  Array< {
      __typename: "ChatMessage",
      id: string,
      groupChatID: string,
      userID: string,
      author:  {
        __typename: "User",
        id: string,
        email: string,
        firstName?: string | null,
        lastName?: string | null,
        profilePicture?: string | null,
        bio?: string | null,
        userState?: UserState | null,
        university?: string | null,
        major?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      body: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } > | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteFriendGroupMutationVariables = {
  input?: DeleteFriendGroupInput,
  condition?: ModelFriendGroupConditionInput | null,
};

export type DeleteFriendGroupMutation = {
  deleteFriendGroup?:  {
    __typename: "FriendGroup",
    users?:  {
      __typename: "ModelCourseGroupConnectionModelConnection",
      items?:  Array< {
        __typename: "CourseGroupConnectionModel",
        id: string,
        groupID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    groupID: string,
    title: string,
    messages?:  Array< {
      __typename: "ChatMessage",
      id: string,
      groupChatID: string,
      userID: string,
      author:  {
        __typename: "User",
        id: string,
        email: string,
        firstName?: string | null,
        lastName?: string | null,
        profilePicture?: string | null,
        bio?: string | null,
        userState?: UserState | null,
        university?: string | null,
        major?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      body: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } > | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateChatMessageMutationVariables = {
  input?: CreateChatMessageInput,
  condition?: ModelChatMessageConditionInput | null,
};

export type CreateChatMessageMutation = {
  createChatMessage?:  {
    __typename: "ChatMessage",
    id: string,
    groupChatID: string,
    userID: string,
    author:  {
      __typename: "User",
      id: string,
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
      courseGroups?:  {
        __typename: "ModelCourseGroupConnectionModelConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    body: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateChatMessageMutationVariables = {
  input?: UpdateChatMessageInput,
  condition?: ModelChatMessageConditionInput | null,
};

export type UpdateChatMessageMutation = {
  updateChatMessage?:  {
    __typename: "ChatMessage",
    id: string,
    groupChatID: string,
    userID: string,
    author:  {
      __typename: "User",
      id: string,
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
      courseGroups?:  {
        __typename: "ModelCourseGroupConnectionModelConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    body: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteChatMessageMutationVariables = {
  input?: DeleteChatMessageInput,
  condition?: ModelChatMessageConditionInput | null,
};

export type DeleteChatMessageMutation = {
  deleteChatMessage?:  {
    __typename: "ChatMessage",
    id: string,
    groupChatID: string,
    userID: string,
    author:  {
      __typename: "User",
      id: string,
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
      courseGroups?:  {
        __typename: "ModelCourseGroupConnectionModelConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    body: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
  } | null,
};

export type CreateCourseGroupConnectionModelMutationVariables = {
  input?: CreateCourseGroupConnectionModelInput,
  condition?: ModelCourseGroupConnectionModelConditionInput | null,
};

export type CreateCourseGroupConnectionModelMutation = {
  createCourseGroupConnectionModel?:  {
    __typename: "CourseGroupConnectionModel",
    id: string,
    groupID: string,
    userID: string,
    courseGroup?:  {
      __typename: "CourseGroup",
      users?:  {
        __typename: "ModelCourseGroupConnectionModelConnection",
        nextToken?: string | null,
      } | null,
      title?: string | null,
      course:  {
        __typename: "Course",
        code: string,
        section: string,
      },
      groupID: string,
      messages?:  {
        __typename: "ModelChatMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    friendGroup?:  {
      __typename: "FriendGroup",
      users?:  {
        __typename: "ModelCourseGroupConnectionModelConnection",
        nextToken?: string | null,
      } | null,
      groupID: string,
      title: string,
      messages?:  Array< {
        __typename: "ChatMessage",
        id: string,
        groupChatID: string,
        userID: string,
        body: string,
        createdAt?: string | null,
        updatedAt?: string | null,
        owner?: string | null,
      } > | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    user:  {
      __typename: "User",
      id: string,
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
      courseGroups?:  {
        __typename: "ModelCourseGroupConnectionModelConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCourseGroupConnectionModelMutationVariables = {
  input?: UpdateCourseGroupConnectionModelInput,
  condition?: ModelCourseGroupConnectionModelConditionInput | null,
};

export type UpdateCourseGroupConnectionModelMutation = {
  updateCourseGroupConnectionModel?:  {
    __typename: "CourseGroupConnectionModel",
    id: string,
    groupID: string,
    userID: string,
    courseGroup?:  {
      __typename: "CourseGroup",
      users?:  {
        __typename: "ModelCourseGroupConnectionModelConnection",
        nextToken?: string | null,
      } | null,
      title?: string | null,
      course:  {
        __typename: "Course",
        code: string,
        section: string,
      },
      groupID: string,
      messages?:  {
        __typename: "ModelChatMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    friendGroup?:  {
      __typename: "FriendGroup",
      users?:  {
        __typename: "ModelCourseGroupConnectionModelConnection",
        nextToken?: string | null,
      } | null,
      groupID: string,
      title: string,
      messages?:  Array< {
        __typename: "ChatMessage",
        id: string,
        groupChatID: string,
        userID: string,
        body: string,
        createdAt?: string | null,
        updatedAt?: string | null,
        owner?: string | null,
      } > | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    user:  {
      __typename: "User",
      id: string,
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
      courseGroups?:  {
        __typename: "ModelCourseGroupConnectionModelConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCourseGroupConnectionModelMutationVariables = {
  input?: DeleteCourseGroupConnectionModelInput,
  condition?: ModelCourseGroupConnectionModelConditionInput | null,
};

export type DeleteCourseGroupConnectionModelMutation = {
  deleteCourseGroupConnectionModel?:  {
    __typename: "CourseGroupConnectionModel",
    id: string,
    groupID: string,
    userID: string,
    courseGroup?:  {
      __typename: "CourseGroup",
      users?:  {
        __typename: "ModelCourseGroupConnectionModelConnection",
        nextToken?: string | null,
      } | null,
      title?: string | null,
      course:  {
        __typename: "Course",
        code: string,
        section: string,
      },
      groupID: string,
      messages?:  {
        __typename: "ModelChatMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    friendGroup?:  {
      __typename: "FriendGroup",
      users?:  {
        __typename: "ModelCourseGroupConnectionModelConnection",
        nextToken?: string | null,
      } | null,
      groupID: string,
      title: string,
      messages?:  Array< {
        __typename: "ChatMessage",
        id: string,
        groupChatID: string,
        userID: string,
        body: string,
        createdAt?: string | null,
        updatedAt?: string | null,
        owner?: string | null,
      } > | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    user:  {
      __typename: "User",
      id: string,
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
      courseGroups?:  {
        __typename: "ModelCourseGroupConnectionModelConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetUserQueryVariables = {
  id?: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
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
    courseGroups?:  {
      __typename: "ModelCourseGroupConnectionModelConnection",
      items?:  Array< {
        __typename: "CourseGroupConnectionModel",
        id: string,
        groupID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListUsersQueryVariables = {
  id?: string | null,
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items?:  Array< {
      __typename: "User",
      id: string,
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
      courseGroups?:  {
        __typename: "ModelCourseGroupConnectionModelConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetCourseGroupQueryVariables = {
  groupID?: string,
};

export type GetCourseGroupQuery = {
  getCourseGroup?:  {
    __typename: "CourseGroup",
    users?:  {
      __typename: "ModelCourseGroupConnectionModelConnection",
      items?:  Array< {
        __typename: "CourseGroupConnectionModel",
        id: string,
        groupID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    title?: string | null,
    course:  {
      __typename: "Course",
      code: string,
      section: string,
    },
    groupID: string,
    messages?:  {
      __typename: "ModelChatMessageConnection",
      items?:  Array< {
        __typename: "ChatMessage",
        id: string,
        groupChatID: string,
        userID: string,
        body: string,
        createdAt?: string | null,
        updatedAt?: string | null,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListCourseGroupsQueryVariables = {
  groupID?: string | null,
  filter?: ModelCourseGroupFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListCourseGroupsQuery = {
  listCourseGroups?:  {
    __typename: "ModelCourseGroupConnection",
    items?:  Array< {
      __typename: "CourseGroup",
      users?:  {
        __typename: "ModelCourseGroupConnectionModelConnection",
        nextToken?: string | null,
      } | null,
      title?: string | null,
      course:  {
        __typename: "Course",
        code: string,
        section: string,
      },
      groupID: string,
      messages?:  {
        __typename: "ModelChatMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetFriendGroupQueryVariables = {
  groupID?: string,
};

export type GetFriendGroupQuery = {
  getFriendGroup?:  {
    __typename: "FriendGroup",
    users?:  {
      __typename: "ModelCourseGroupConnectionModelConnection",
      items?:  Array< {
        __typename: "CourseGroupConnectionModel",
        id: string,
        groupID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    groupID: string,
    title: string,
    messages?:  Array< {
      __typename: "ChatMessage",
      id: string,
      groupChatID: string,
      userID: string,
      author:  {
        __typename: "User",
        id: string,
        email: string,
        firstName?: string | null,
        lastName?: string | null,
        profilePicture?: string | null,
        bio?: string | null,
        userState?: UserState | null,
        university?: string | null,
        major?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      body: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } > | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListFriendGroupsQueryVariables = {
  groupID?: string | null,
  filter?: ModelFriendGroupFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListFriendGroupsQuery = {
  listFriendGroups?:  {
    __typename: "ModelFriendGroupConnection",
    items?:  Array< {
      __typename: "FriendGroup",
      users?:  {
        __typename: "ModelCourseGroupConnectionModelConnection",
        nextToken?: string | null,
      } | null,
      groupID: string,
      title: string,
      messages?:  Array< {
        __typename: "ChatMessage",
        id: string,
        groupChatID: string,
        userID: string,
        body: string,
        createdAt?: string | null,
        updatedAt?: string | null,
        owner?: string | null,
      } > | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetChatMessageQueryVariables = {
  id?: string,
};

export type GetChatMessageQuery = {
  getChatMessage?:  {
    __typename: "ChatMessage",
    id: string,
    groupChatID: string,
    userID: string,
    author:  {
      __typename: "User",
      id: string,
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
      courseGroups?:  {
        __typename: "ModelCourseGroupConnectionModelConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    body: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
  } | null,
};

export type ListChatMessagesQueryVariables = {
  filter?: ModelChatMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListChatMessagesQuery = {
  listChatMessages?:  {
    __typename: "ModelChatMessageConnection",
    items?:  Array< {
      __typename: "ChatMessage",
      id: string,
      groupChatID: string,
      userID: string,
      author:  {
        __typename: "User",
        id: string,
        email: string,
        firstName?: string | null,
        lastName?: string | null,
        profilePicture?: string | null,
        bio?: string | null,
        userState?: UserState | null,
        university?: string | null,
        major?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      body: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type MessagesByCourseGroupChatIdQueryVariables = {
  groupChatID?: string | null,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelChatMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type MessagesByCourseGroupChatIdQuery = {
  messagesByCourseGroupChatID?:  {
    __typename: "ModelChatMessageConnection",
    items?:  Array< {
      __typename: "ChatMessage",
      id: string,
      groupChatID: string,
      userID: string,
      author:  {
        __typename: "User",
        id: string,
        email: string,
        firstName?: string | null,
        lastName?: string | null,
        profilePicture?: string | null,
        bio?: string | null,
        userState?: UserState | null,
        university?: string | null,
        major?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      body: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
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
    courseGroups?:  {
      __typename: "ModelCourseGroupConnectionModelConnection",
      items?:  Array< {
        __typename: "CourseGroupConnectionModel",
        id: string,
        groupID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
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
    courseGroups?:  {
      __typename: "ModelCourseGroupConnectionModelConnection",
      items?:  Array< {
        __typename: "CourseGroupConnectionModel",
        id: string,
        groupID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
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
    courseGroups?:  {
      __typename: "ModelCourseGroupConnectionModelConnection",
      items?:  Array< {
        __typename: "CourseGroupConnectionModel",
        id: string,
        groupID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateCourseGroupSubscription = {
  onCreateCourseGroup?:  {
    __typename: "CourseGroup",
    users?:  {
      __typename: "ModelCourseGroupConnectionModelConnection",
      items?:  Array< {
        __typename: "CourseGroupConnectionModel",
        id: string,
        groupID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    title?: string | null,
    course:  {
      __typename: "Course",
      code: string,
      section: string,
    },
    groupID: string,
    messages?:  {
      __typename: "ModelChatMessageConnection",
      items?:  Array< {
        __typename: "ChatMessage",
        id: string,
        groupChatID: string,
        userID: string,
        body: string,
        createdAt?: string | null,
        updatedAt?: string | null,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateCourseGroupSubscription = {
  onUpdateCourseGroup?:  {
    __typename: "CourseGroup",
    users?:  {
      __typename: "ModelCourseGroupConnectionModelConnection",
      items?:  Array< {
        __typename: "CourseGroupConnectionModel",
        id: string,
        groupID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    title?: string | null,
    course:  {
      __typename: "Course",
      code: string,
      section: string,
    },
    groupID: string,
    messages?:  {
      __typename: "ModelChatMessageConnection",
      items?:  Array< {
        __typename: "ChatMessage",
        id: string,
        groupChatID: string,
        userID: string,
        body: string,
        createdAt?: string | null,
        updatedAt?: string | null,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteCourseGroupSubscription = {
  onDeleteCourseGroup?:  {
    __typename: "CourseGroup",
    users?:  {
      __typename: "ModelCourseGroupConnectionModelConnection",
      items?:  Array< {
        __typename: "CourseGroupConnectionModel",
        id: string,
        groupID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    title?: string | null,
    course:  {
      __typename: "Course",
      code: string,
      section: string,
    },
    groupID: string,
    messages?:  {
      __typename: "ModelChatMessageConnection",
      items?:  Array< {
        __typename: "ChatMessage",
        id: string,
        groupChatID: string,
        userID: string,
        body: string,
        createdAt?: string | null,
        updatedAt?: string | null,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateFriendGroupSubscription = {
  onCreateFriendGroup?:  {
    __typename: "FriendGroup",
    users?:  {
      __typename: "ModelCourseGroupConnectionModelConnection",
      items?:  Array< {
        __typename: "CourseGroupConnectionModel",
        id: string,
        groupID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    groupID: string,
    title: string,
    messages?:  Array< {
      __typename: "ChatMessage",
      id: string,
      groupChatID: string,
      userID: string,
      author:  {
        __typename: "User",
        id: string,
        email: string,
        firstName?: string | null,
        lastName?: string | null,
        profilePicture?: string | null,
        bio?: string | null,
        userState?: UserState | null,
        university?: string | null,
        major?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      body: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } > | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateFriendGroupSubscription = {
  onUpdateFriendGroup?:  {
    __typename: "FriendGroup",
    users?:  {
      __typename: "ModelCourseGroupConnectionModelConnection",
      items?:  Array< {
        __typename: "CourseGroupConnectionModel",
        id: string,
        groupID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    groupID: string,
    title: string,
    messages?:  Array< {
      __typename: "ChatMessage",
      id: string,
      groupChatID: string,
      userID: string,
      author:  {
        __typename: "User",
        id: string,
        email: string,
        firstName?: string | null,
        lastName?: string | null,
        profilePicture?: string | null,
        bio?: string | null,
        userState?: UserState | null,
        university?: string | null,
        major?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      body: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } > | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteFriendGroupSubscription = {
  onDeleteFriendGroup?:  {
    __typename: "FriendGroup",
    users?:  {
      __typename: "ModelCourseGroupConnectionModelConnection",
      items?:  Array< {
        __typename: "CourseGroupConnectionModel",
        id: string,
        groupID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    groupID: string,
    title: string,
    messages?:  Array< {
      __typename: "ChatMessage",
      id: string,
      groupChatID: string,
      userID: string,
      author:  {
        __typename: "User",
        id: string,
        email: string,
        firstName?: string | null,
        lastName?: string | null,
        profilePicture?: string | null,
        bio?: string | null,
        userState?: UserState | null,
        university?: string | null,
        major?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      body: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } > | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateChatMessageSubscription = {
  onCreateChatMessage?:  {
    __typename: "ChatMessage",
    id: string,
    groupChatID: string,
    userID: string,
    author:  {
      __typename: "User",
      id: string,
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
      courseGroups?:  {
        __typename: "ModelCourseGroupConnectionModelConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    body: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateChatMessageSubscription = {
  onUpdateChatMessage?:  {
    __typename: "ChatMessage",
    id: string,
    groupChatID: string,
    userID: string,
    author:  {
      __typename: "User",
      id: string,
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
      courseGroups?:  {
        __typename: "ModelCourseGroupConnectionModelConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    body: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteChatMessageSubscription = {
  onDeleteChatMessage?:  {
    __typename: "ChatMessage",
    id: string,
    groupChatID: string,
    userID: string,
    author:  {
      __typename: "User",
      id: string,
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
      courseGroups?:  {
        __typename: "ModelCourseGroupConnectionModelConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    body: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
  } | null,
};

export type OnCreateCourseGroupConnectionModelSubscription = {
  onCreateCourseGroupConnectionModel?:  {
    __typename: "CourseGroupConnectionModel",
    id: string,
    groupID: string,
    userID: string,
    courseGroup?:  {
      __typename: "CourseGroup",
      users?:  {
        __typename: "ModelCourseGroupConnectionModelConnection",
        nextToken?: string | null,
      } | null,
      title?: string | null,
      course:  {
        __typename: "Course",
        code: string,
        section: string,
      },
      groupID: string,
      messages?:  {
        __typename: "ModelChatMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    friendGroup?:  {
      __typename: "FriendGroup",
      users?:  {
        __typename: "ModelCourseGroupConnectionModelConnection",
        nextToken?: string | null,
      } | null,
      groupID: string,
      title: string,
      messages?:  Array< {
        __typename: "ChatMessage",
        id: string,
        groupChatID: string,
        userID: string,
        body: string,
        createdAt?: string | null,
        updatedAt?: string | null,
        owner?: string | null,
      } > | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    user:  {
      __typename: "User",
      id: string,
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
      courseGroups?:  {
        __typename: "ModelCourseGroupConnectionModelConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCourseGroupConnectionModelSubscription = {
  onUpdateCourseGroupConnectionModel?:  {
    __typename: "CourseGroupConnectionModel",
    id: string,
    groupID: string,
    userID: string,
    courseGroup?:  {
      __typename: "CourseGroup",
      users?:  {
        __typename: "ModelCourseGroupConnectionModelConnection",
        nextToken?: string | null,
      } | null,
      title?: string | null,
      course:  {
        __typename: "Course",
        code: string,
        section: string,
      },
      groupID: string,
      messages?:  {
        __typename: "ModelChatMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    friendGroup?:  {
      __typename: "FriendGroup",
      users?:  {
        __typename: "ModelCourseGroupConnectionModelConnection",
        nextToken?: string | null,
      } | null,
      groupID: string,
      title: string,
      messages?:  Array< {
        __typename: "ChatMessage",
        id: string,
        groupChatID: string,
        userID: string,
        body: string,
        createdAt?: string | null,
        updatedAt?: string | null,
        owner?: string | null,
      } > | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    user:  {
      __typename: "User",
      id: string,
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
      courseGroups?:  {
        __typename: "ModelCourseGroupConnectionModelConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCourseGroupConnectionModelSubscription = {
  onDeleteCourseGroupConnectionModel?:  {
    __typename: "CourseGroupConnectionModel",
    id: string,
    groupID: string,
    userID: string,
    courseGroup?:  {
      __typename: "CourseGroup",
      users?:  {
        __typename: "ModelCourseGroupConnectionModelConnection",
        nextToken?: string | null,
      } | null,
      title?: string | null,
      course:  {
        __typename: "Course",
        code: string,
        section: string,
      },
      groupID: string,
      messages?:  {
        __typename: "ModelChatMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    friendGroup?:  {
      __typename: "FriendGroup",
      users?:  {
        __typename: "ModelCourseGroupConnectionModelConnection",
        nextToken?: string | null,
      } | null,
      groupID: string,
      title: string,
      messages?:  Array< {
        __typename: "ChatMessage",
        id: string,
        groupChatID: string,
        userID: string,
        body: string,
        createdAt?: string | null,
        updatedAt?: string | null,
        owner?: string | null,
      } > | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    user:  {
      __typename: "User",
      id: string,
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
      courseGroups?:  {
        __typename: "ModelCourseGroupConnectionModelConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};
