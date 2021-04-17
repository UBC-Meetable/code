/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

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
  courseGroups?: ModelCourseGroupMemberConnection,
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

export type ModelCourseGroupMemberConnection = {
  __typename: "ModelCourseGroupMemberConnection",
  items?:  Array<CourseGroupMember | null > | null,
  nextToken?: string | null,
};

export type CourseGroupMember = {
  __typename: "CourseGroupMember",
  id?: string,
  groupID?: string,
  email?: string,
  courseGroup?: CourseGroup,
  user?: UserProfile,
  createdAt?: string,
  updatedAt?: string,
};

export type CourseGroup = {
  __typename: "CourseGroup",
  users?: ModelCourseGroupMemberConnection,
  title?: string | null,
  course?: Course,
  courseID?: string,
  createdAt?: string,
  updatedAt?: string,
  owner?: string | null,
};

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

export type CreateCourseGroupInput = {
  title?: string | null,
  course: CourseInput,
  courseID: string,
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
  courseID: string,
};

export type DeleteCourseGroupInput = {
  courseID: string,
};

export type CreateGroupChatInput = {
  groupChatID: string,
};

export type ModelGroupChatConditionInput = {
  and?: Array< ModelGroupChatConditionInput | null > | null,
  or?: Array< ModelGroupChatConditionInput | null > | null,
  not?: ModelGroupChatConditionInput | null,
};

export type GroupChat = {
  __typename: "GroupChat",
  groupChatID?: string,
  users?: ModelGroupChatMemberConnection,
  messages?: ModelChatMessageConnection,
  createdAt?: string,
  updatedAt?: string,
  owner?: string | null,
};

export type ModelGroupChatMemberConnection = {
  __typename: "ModelGroupChatMemberConnection",
  items?:  Array<GroupChatMember | null > | null,
  nextToken?: string | null,
};

export type GroupChatMember = {
  __typename: "GroupChatMember",
  id?: string,
  groupID?: string,
  email?: string,
  groupChat?: GroupChat,
  user?: UserProfile,
  createdAt?: string,
  updatedAt?: string,
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
  email?: string,
  author?: UserProfile,
  body?: string,
  createdAt?: string | null,
  updatedAt?: string | null,
  owner?: string | null,
};

export type UpdateGroupChatInput = {
  groupChatID: string,
};

export type DeleteGroupChatInput = {
  groupChatID: string,
};

export type CreateChatMessageInput = {
  id: string,
  groupChatID: string,
  email: string,
  body: string,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelChatMessageConditionInput = {
  groupChatID?: ModelStringInput | null,
  email?: ModelStringInput | null,
  body?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelChatMessageConditionInput | null > | null,
  or?: Array< ModelChatMessageConditionInput | null > | null,
  not?: ModelChatMessageConditionInput | null,
};

export type UpdateChatMessageInput = {
  id: string,
  groupChatID?: string | null,
  email?: string | null,
  body?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteChatMessageInput = {
  id?: string | null,
};

export type CreateCourseGroupMemberInput = {
  id?: string | null,
  groupID: string,
  email: string,
};

export type ModelCourseGroupMemberConditionInput = {
  groupID?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelCourseGroupMemberConditionInput | null > | null,
  or?: Array< ModelCourseGroupMemberConditionInput | null > | null,
  not?: ModelCourseGroupMemberConditionInput | null,
};

export type UpdateCourseGroupMemberInput = {
  id: string,
  groupID?: string | null,
  email?: string | null,
};

export type DeleteCourseGroupMemberInput = {
  id?: string | null,
};

export type CreateGroupChatMemberInput = {
  id?: string | null,
  groupID: string,
  email: string,
};

export type ModelGroupChatMemberConditionInput = {
  groupID?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelGroupChatMemberConditionInput | null > | null,
  or?: Array< ModelGroupChatMemberConditionInput | null > | null,
  not?: ModelGroupChatMemberConditionInput | null,
};

export type UpdateGroupChatMemberInput = {
  id: string,
  groupID?: string | null,
  email?: string | null,
};

export type DeleteGroupChatMemberInput = {
  id?: string | null,
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

export type ModelCourseGroupFilterInput = {
  title?: ModelStringInput | null,
  courseID?: ModelStringInput | null,
  and?: Array< ModelCourseGroupFilterInput | null > | null,
  or?: Array< ModelCourseGroupFilterInput | null > | null,
  not?: ModelCourseGroupFilterInput | null,
};

export type ModelCourseGroupConnection = {
  __typename: "ModelCourseGroupConnection",
  items?:  Array<CourseGroup | null > | null,
  nextToken?: string | null,
};

export type ModelGroupChatFilterInput = {
  groupChatID?: ModelStringInput | null,
  and?: Array< ModelGroupChatFilterInput | null > | null,
  or?: Array< ModelGroupChatFilterInput | null > | null,
  not?: ModelGroupChatFilterInput | null,
};

export type ModelGroupChatConnection = {
  __typename: "ModelGroupChatConnection",
  items?:  Array<GroupChat | null > | null,
  nextToken?: string | null,
};

export type ModelChatMessageFilterInput = {
  id?: ModelStringInput | null,
  groupChatID?: ModelStringInput | null,
  email?: ModelStringInput | null,
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
  email?: string,
};

export type GetUserCoursesQuery = {
  getUserProfile?:  {
    __typename: "UserProfile",
    courseGroups?:  {
      __typename: "ModelCourseGroupMemberConnection",
      items?:  Array< {
        __typename: "CourseGroupMember",
        courseGroup:  {
          __typename: "CourseGroup",
          course:  {
            __typename: "Course",
            code: string,
            section: string,
          },
          courseID: string,
          title?: string | null,
          users?:  {
            __typename: "ModelCourseGroupMemberConnection",
            items?:  Array< {
              __typename: "CourseGroupMember",
              user:  {
                __typename: "UserProfile",
                firstName?: string | null,
                lastName?: string | null,
                profilePicture?: string | null,
              },
            } | null > | null,
          } | null,
        },
      } | null > | null,
    } | null,
  } | null,
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
    courseGroups?:  {
      __typename: "ModelCourseGroupMemberConnection",
      items?:  Array< {
        __typename: "CourseGroupMember",
        id: string,
        groupID: string,
        email: string,
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
    courseGroups?:  {
      __typename: "ModelCourseGroupMemberConnection",
      items?:  Array< {
        __typename: "CourseGroupMember",
        id: string,
        groupID: string,
        email: string,
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
    courseGroups?:  {
      __typename: "ModelCourseGroupMemberConnection",
      items?:  Array< {
        __typename: "CourseGroupMember",
        id: string,
        groupID: string,
        email: string,
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
      __typename: "ModelCourseGroupMemberConnection",
      items?:  Array< {
        __typename: "CourseGroupMember",
        id: string,
        groupID: string,
        email: string,
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
    courseID: string,
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
      __typename: "ModelCourseGroupMemberConnection",
      items?:  Array< {
        __typename: "CourseGroupMember",
        id: string,
        groupID: string,
        email: string,
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
    courseID: string,
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
      __typename: "ModelCourseGroupMemberConnection",
      items?:  Array< {
        __typename: "CourseGroupMember",
        id: string,
        groupID: string,
        email: string,
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
    courseID: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateGroupChatMutationVariables = {
  input?: CreateGroupChatInput,
  condition?: ModelGroupChatConditionInput | null,
};

export type CreateGroupChatMutation = {
  createGroupChat?:  {
    __typename: "GroupChat",
    groupChatID: string,
    users?:  {
      __typename: "ModelGroupChatMemberConnection",
      items?:  Array< {
        __typename: "GroupChatMember",
        id: string,
        groupID: string,
        email: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelChatMessageConnection",
      items?:  Array< {
        __typename: "ChatMessage",
        id: string,
        groupChatID: string,
        email: string,
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

export type UpdateGroupChatMutationVariables = {
  input?: UpdateGroupChatInput,
  condition?: ModelGroupChatConditionInput | null,
};

export type UpdateGroupChatMutation = {
  updateGroupChat?:  {
    __typename: "GroupChat",
    groupChatID: string,
    users?:  {
      __typename: "ModelGroupChatMemberConnection",
      items?:  Array< {
        __typename: "GroupChatMember",
        id: string,
        groupID: string,
        email: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelChatMessageConnection",
      items?:  Array< {
        __typename: "ChatMessage",
        id: string,
        groupChatID: string,
        email: string,
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

export type DeleteGroupChatMutationVariables = {
  input?: DeleteGroupChatInput,
  condition?: ModelGroupChatConditionInput | null,
};

export type DeleteGroupChatMutation = {
  deleteGroupChat?:  {
    __typename: "GroupChat",
    groupChatID: string,
    users?:  {
      __typename: "ModelGroupChatMemberConnection",
      items?:  Array< {
        __typename: "GroupChatMember",
        id: string,
        groupID: string,
        email: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelChatMessageConnection",
      items?:  Array< {
        __typename: "ChatMessage",
        id: string,
        groupChatID: string,
        email: string,
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

export type CreateChatMessageMutationVariables = {
  input?: CreateChatMessageInput,
  condition?: ModelChatMessageConditionInput | null,
};

export type CreateChatMessageMutation = {
  createChatMessage?:  {
    __typename: "ChatMessage",
    id: string,
    groupChatID: string,
    email: string,
    author:  {
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
      courseGroups?:  {
        __typename: "ModelCourseGroupMemberConnection",
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
    email: string,
    author:  {
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
      courseGroups?:  {
        __typename: "ModelCourseGroupMemberConnection",
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
    email: string,
    author:  {
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
      courseGroups?:  {
        __typename: "ModelCourseGroupMemberConnection",
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

export type CreateCourseGroupMemberMutationVariables = {
  input?: CreateCourseGroupMemberInput,
  condition?: ModelCourseGroupMemberConditionInput | null,
};

export type CreateCourseGroupMemberMutation = {
  createCourseGroupMember?:  {
    __typename: "CourseGroupMember",
    id: string,
    groupID: string,
    email: string,
    courseGroup:  {
      __typename: "CourseGroup",
      users?:  {
        __typename: "ModelCourseGroupMemberConnection",
        nextToken?: string | null,
      } | null,
      title?: string | null,
      course:  {
        __typename: "Course",
        code: string,
        section: string,
      },
      courseID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    user:  {
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
      courseGroups?:  {
        __typename: "ModelCourseGroupMemberConnection",
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

export type UpdateCourseGroupMemberMutationVariables = {
  input?: UpdateCourseGroupMemberInput,
  condition?: ModelCourseGroupMemberConditionInput | null,
};

export type UpdateCourseGroupMemberMutation = {
  updateCourseGroupMember?:  {
    __typename: "CourseGroupMember",
    id: string,
    groupID: string,
    email: string,
    courseGroup:  {
      __typename: "CourseGroup",
      users?:  {
        __typename: "ModelCourseGroupMemberConnection",
        nextToken?: string | null,
      } | null,
      title?: string | null,
      course:  {
        __typename: "Course",
        code: string,
        section: string,
      },
      courseID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    user:  {
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
      courseGroups?:  {
        __typename: "ModelCourseGroupMemberConnection",
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

export type DeleteCourseGroupMemberMutationVariables = {
  input?: DeleteCourseGroupMemberInput,
  condition?: ModelCourseGroupMemberConditionInput | null,
};

export type DeleteCourseGroupMemberMutation = {
  deleteCourseGroupMember?:  {
    __typename: "CourseGroupMember",
    id: string,
    groupID: string,
    email: string,
    courseGroup:  {
      __typename: "CourseGroup",
      users?:  {
        __typename: "ModelCourseGroupMemberConnection",
        nextToken?: string | null,
      } | null,
      title?: string | null,
      course:  {
        __typename: "Course",
        code: string,
        section: string,
      },
      courseID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    user:  {
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
      courseGroups?:  {
        __typename: "ModelCourseGroupMemberConnection",
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

export type CreateGroupChatMemberMutationVariables = {
  input?: CreateGroupChatMemberInput,
  condition?: ModelGroupChatMemberConditionInput | null,
};

export type CreateGroupChatMemberMutation = {
  createGroupChatMember?:  {
    __typename: "GroupChatMember",
    id: string,
    groupID: string,
    email: string,
    groupChat:  {
      __typename: "GroupChat",
      groupChatID: string,
      users?:  {
        __typename: "ModelGroupChatMemberConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelChatMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    user:  {
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
      courseGroups?:  {
        __typename: "ModelCourseGroupMemberConnection",
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

export type UpdateGroupChatMemberMutationVariables = {
  input?: UpdateGroupChatMemberInput,
  condition?: ModelGroupChatMemberConditionInput | null,
};

export type UpdateGroupChatMemberMutation = {
  updateGroupChatMember?:  {
    __typename: "GroupChatMember",
    id: string,
    groupID: string,
    email: string,
    groupChat:  {
      __typename: "GroupChat",
      groupChatID: string,
      users?:  {
        __typename: "ModelGroupChatMemberConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelChatMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    user:  {
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
      courseGroups?:  {
        __typename: "ModelCourseGroupMemberConnection",
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

export type DeleteGroupChatMemberMutationVariables = {
  input?: DeleteGroupChatMemberInput,
  condition?: ModelGroupChatMemberConditionInput | null,
};

export type DeleteGroupChatMemberMutation = {
  deleteGroupChatMember?:  {
    __typename: "GroupChatMember",
    id: string,
    groupID: string,
    email: string,
    groupChat:  {
      __typename: "GroupChat",
      groupChatID: string,
      users?:  {
        __typename: "ModelGroupChatMemberConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelChatMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    user:  {
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
      courseGroups?:  {
        __typename: "ModelCourseGroupMemberConnection",
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
    courseGroups?:  {
      __typename: "ModelCourseGroupMemberConnection",
      items?:  Array< {
        __typename: "CourseGroupMember",
        id: string,
        groupID: string,
        email: string,
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
      courseGroups?:  {
        __typename: "ModelCourseGroupMemberConnection",
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
  courseID?: string,
};

export type GetCourseGroupQuery = {
  getCourseGroup?:  {
    __typename: "CourseGroup",
    users?:  {
      __typename: "ModelCourseGroupMemberConnection",
      items?:  Array< {
        __typename: "CourseGroupMember",
        id: string,
        groupID: string,
        email: string,
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
    courseID: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListCourseGroupsQueryVariables = {
  courseID?: string | null,
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
        __typename: "ModelCourseGroupMemberConnection",
        nextToken?: string | null,
      } | null,
      title?: string | null,
      course:  {
        __typename: "Course",
        code: string,
        section: string,
      },
      courseID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetGroupChatQueryVariables = {
  groupChatID?: string,
};

export type GetGroupChatQuery = {
  getGroupChat?:  {
    __typename: "GroupChat",
    groupChatID: string,
    users?:  {
      __typename: "ModelGroupChatMemberConnection",
      items?:  Array< {
        __typename: "GroupChatMember",
        id: string,
        groupID: string,
        email: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelChatMessageConnection",
      items?:  Array< {
        __typename: "ChatMessage",
        id: string,
        groupChatID: string,
        email: string,
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

export type ListGroupChatsQueryVariables = {
  groupChatID?: string | null,
  filter?: ModelGroupChatFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListGroupChatsQuery = {
  listGroupChats?:  {
    __typename: "ModelGroupChatConnection",
    items?:  Array< {
      __typename: "GroupChat",
      groupChatID: string,
      users?:  {
        __typename: "ModelGroupChatMemberConnection",
        nextToken?: string | null,
      } | null,
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

export type GetChatMessageQueryVariables = {
  id?: string,
};

export type GetChatMessageQuery = {
  getChatMessage?:  {
    __typename: "ChatMessage",
    id: string,
    groupChatID: string,
    email: string,
    author:  {
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
      courseGroups?:  {
        __typename: "ModelCourseGroupMemberConnection",
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
      email: string,
      author:  {
        __typename: "UserProfile",
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

export type MessagesByGroupChatIdQueryVariables = {
  groupChatID?: string | null,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelChatMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type MessagesByGroupChatIdQuery = {
  messagesByGroupChatID?:  {
    __typename: "ModelChatMessageConnection",
    items?:  Array< {
      __typename: "ChatMessage",
      id: string,
      groupChatID: string,
      email: string,
      author:  {
        __typename: "UserProfile",
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
    courseGroups?:  {
      __typename: "ModelCourseGroupMemberConnection",
      items?:  Array< {
        __typename: "CourseGroupMember",
        id: string,
        groupID: string,
        email: string,
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
    courseGroups?:  {
      __typename: "ModelCourseGroupMemberConnection",
      items?:  Array< {
        __typename: "CourseGroupMember",
        id: string,
        groupID: string,
        email: string,
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
    courseGroups?:  {
      __typename: "ModelCourseGroupMemberConnection",
      items?:  Array< {
        __typename: "CourseGroupMember",
        id: string,
        groupID: string,
        email: string,
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
      __typename: "ModelCourseGroupMemberConnection",
      items?:  Array< {
        __typename: "CourseGroupMember",
        id: string,
        groupID: string,
        email: string,
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
    courseID: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateCourseGroupSubscription = {
  onUpdateCourseGroup?:  {
    __typename: "CourseGroup",
    users?:  {
      __typename: "ModelCourseGroupMemberConnection",
      items?:  Array< {
        __typename: "CourseGroupMember",
        id: string,
        groupID: string,
        email: string,
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
    courseID: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteCourseGroupSubscription = {
  onDeleteCourseGroup?:  {
    __typename: "CourseGroup",
    users?:  {
      __typename: "ModelCourseGroupMemberConnection",
      items?:  Array< {
        __typename: "CourseGroupMember",
        id: string,
        groupID: string,
        email: string,
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
    courseID: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateGroupChatSubscription = {
  onCreateGroupChat?:  {
    __typename: "GroupChat",
    groupChatID: string,
    users?:  {
      __typename: "ModelGroupChatMemberConnection",
      items?:  Array< {
        __typename: "GroupChatMember",
        id: string,
        groupID: string,
        email: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelChatMessageConnection",
      items?:  Array< {
        __typename: "ChatMessage",
        id: string,
        groupChatID: string,
        email: string,
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

export type OnUpdateGroupChatSubscription = {
  onUpdateGroupChat?:  {
    __typename: "GroupChat",
    groupChatID: string,
    users?:  {
      __typename: "ModelGroupChatMemberConnection",
      items?:  Array< {
        __typename: "GroupChatMember",
        id: string,
        groupID: string,
        email: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelChatMessageConnection",
      items?:  Array< {
        __typename: "ChatMessage",
        id: string,
        groupChatID: string,
        email: string,
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

export type OnDeleteGroupChatSubscription = {
  onDeleteGroupChat?:  {
    __typename: "GroupChat",
    groupChatID: string,
    users?:  {
      __typename: "ModelGroupChatMemberConnection",
      items?:  Array< {
        __typename: "GroupChatMember",
        id: string,
        groupID: string,
        email: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelChatMessageConnection",
      items?:  Array< {
        __typename: "ChatMessage",
        id: string,
        groupChatID: string,
        email: string,
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

export type OnCreateChatMessageSubscription = {
  onCreateChatMessage?:  {
    __typename: "ChatMessage",
    id: string,
    groupChatID: string,
    email: string,
    author:  {
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
      courseGroups?:  {
        __typename: "ModelCourseGroupMemberConnection",
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
    email: string,
    author:  {
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
      courseGroups?:  {
        __typename: "ModelCourseGroupMemberConnection",
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
    email: string,
    author:  {
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
      courseGroups?:  {
        __typename: "ModelCourseGroupMemberConnection",
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

export type OnCreateCourseGroupMemberSubscription = {
  onCreateCourseGroupMember?:  {
    __typename: "CourseGroupMember",
    id: string,
    groupID: string,
    email: string,
    courseGroup:  {
      __typename: "CourseGroup",
      users?:  {
        __typename: "ModelCourseGroupMemberConnection",
        nextToken?: string | null,
      } | null,
      title?: string | null,
      course:  {
        __typename: "Course",
        code: string,
        section: string,
      },
      courseID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    user:  {
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
      courseGroups?:  {
        __typename: "ModelCourseGroupMemberConnection",
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

export type OnUpdateCourseGroupMemberSubscription = {
  onUpdateCourseGroupMember?:  {
    __typename: "CourseGroupMember",
    id: string,
    groupID: string,
    email: string,
    courseGroup:  {
      __typename: "CourseGroup",
      users?:  {
        __typename: "ModelCourseGroupMemberConnection",
        nextToken?: string | null,
      } | null,
      title?: string | null,
      course:  {
        __typename: "Course",
        code: string,
        section: string,
      },
      courseID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    user:  {
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
      courseGroups?:  {
        __typename: "ModelCourseGroupMemberConnection",
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

export type OnDeleteCourseGroupMemberSubscription = {
  onDeleteCourseGroupMember?:  {
    __typename: "CourseGroupMember",
    id: string,
    groupID: string,
    email: string,
    courseGroup:  {
      __typename: "CourseGroup",
      users?:  {
        __typename: "ModelCourseGroupMemberConnection",
        nextToken?: string | null,
      } | null,
      title?: string | null,
      course:  {
        __typename: "Course",
        code: string,
        section: string,
      },
      courseID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    user:  {
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
      courseGroups?:  {
        __typename: "ModelCourseGroupMemberConnection",
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

export type OnCreateGroupChatMemberSubscription = {
  onCreateGroupChatMember?:  {
    __typename: "GroupChatMember",
    id: string,
    groupID: string,
    email: string,
    groupChat:  {
      __typename: "GroupChat",
      groupChatID: string,
      users?:  {
        __typename: "ModelGroupChatMemberConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelChatMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    user:  {
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
      courseGroups?:  {
        __typename: "ModelCourseGroupMemberConnection",
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

export type OnUpdateGroupChatMemberSubscription = {
  onUpdateGroupChatMember?:  {
    __typename: "GroupChatMember",
    id: string,
    groupID: string,
    email: string,
    groupChat:  {
      __typename: "GroupChat",
      groupChatID: string,
      users?:  {
        __typename: "ModelGroupChatMemberConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelChatMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    user:  {
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
      courseGroups?:  {
        __typename: "ModelCourseGroupMemberConnection",
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

export type OnDeleteGroupChatMemberSubscription = {
  onDeleteGroupChatMember?:  {
    __typename: "GroupChatMember",
    id: string,
    groupID: string,
    email: string,
    groupChat:  {
      __typename: "GroupChat",
      groupChatID: string,
      users?:  {
        __typename: "ModelGroupChatMemberConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelChatMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    user:  {
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
      courseGroups?:  {
        __typename: "ModelCourseGroupMemberConnection",
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
