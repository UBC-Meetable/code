/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      email
      firstName
      lastName
      profilePicture
      bio
      userState
      university
      major
      courseGroups {
        items {
          id
          groupID
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      email
      firstName
      lastName
      profilePicture
      bio
      userState
      university
      major
      courseGroups {
        items {
          id
          groupID
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      email
      firstName
      lastName
      profilePicture
      bio
      userState
      university
      major
      courseGroups {
        items {
          id
          groupID
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createCourseGroup = /* GraphQL */ `
  mutation CreateCourseGroup(
    $input: CreateCourseGroupInput!
    $condition: ModelCourseGroupConditionInput
  ) {
    createCourseGroup(input: $input, condition: $condition) {
      users {
        items {
          id
          groupID
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      title
      groupID
      code
      section
      messages {
        items {
          id
          groupChatID
          userID
          body
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateCourseGroup = /* GraphQL */ `
  mutation UpdateCourseGroup(
    $input: UpdateCourseGroupInput!
    $condition: ModelCourseGroupConditionInput
  ) {
    updateCourseGroup(input: $input, condition: $condition) {
      users {
        items {
          id
          groupID
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      title
      groupID
      code
      section
      messages {
        items {
          id
          groupChatID
          userID
          body
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteCourseGroup = /* GraphQL */ `
  mutation DeleteCourseGroup(
    $input: DeleteCourseGroupInput!
    $condition: ModelCourseGroupConditionInput
  ) {
    deleteCourseGroup(input: $input, condition: $condition) {
      users {
        items {
          id
          groupID
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      title
      groupID
      code
      section
      messages {
        items {
          id
          groupChatID
          userID
          body
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createFriendGroup = /* GraphQL */ `
  mutation CreateFriendGroup(
    $input: CreateFriendGroupInput!
    $condition: ModelFriendGroupConditionInput
  ) {
    createFriendGroup(input: $input, condition: $condition) {
      users {
        items {
          id
          groupID
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      groupID
      title
      messages {
        id
        groupChatID
        userID
        author {
          id
          email
          firstName
          lastName
          profilePicture
          bio
          userState
          university
          major
          createdAt
          updatedAt
          owner
        }
        body
        createdAt
        updatedAt
        owner
      }
      owner
      createdAt
      updatedAt
    }
  }
`;
export const updateFriendGroup = /* GraphQL */ `
  mutation UpdateFriendGroup(
    $input: UpdateFriendGroupInput!
    $condition: ModelFriendGroupConditionInput
  ) {
    updateFriendGroup(input: $input, condition: $condition) {
      users {
        items {
          id
          groupID
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      groupID
      title
      messages {
        id
        groupChatID
        userID
        author {
          id
          email
          firstName
          lastName
          profilePicture
          bio
          userState
          university
          major
          createdAt
          updatedAt
          owner
        }
        body
        createdAt
        updatedAt
        owner
      }
      owner
      createdAt
      updatedAt
    }
  }
`;
export const deleteFriendGroup = /* GraphQL */ `
  mutation DeleteFriendGroup(
    $input: DeleteFriendGroupInput!
    $condition: ModelFriendGroupConditionInput
  ) {
    deleteFriendGroup(input: $input, condition: $condition) {
      users {
        items {
          id
          groupID
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      groupID
      title
      messages {
        id
        groupChatID
        userID
        author {
          id
          email
          firstName
          lastName
          profilePicture
          bio
          userState
          university
          major
          createdAt
          updatedAt
          owner
        }
        body
        createdAt
        updatedAt
        owner
      }
      owner
      createdAt
      updatedAt
    }
  }
`;
export const createChatMessage = /* GraphQL */ `
  mutation CreateChatMessage(
    $input: CreateChatMessageInput!
    $condition: ModelChatMessageConditionInput
  ) {
    createChatMessage(input: $input, condition: $condition) {
      id
      groupChatID
      userID
      author {
        id
        email
        firstName
        lastName
        profilePicture
        bio
        userState
        university
        major
        courseGroups {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      body
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateChatMessage = /* GraphQL */ `
  mutation UpdateChatMessage(
    $input: UpdateChatMessageInput!
    $condition: ModelChatMessageConditionInput
  ) {
    updateChatMessage(input: $input, condition: $condition) {
      id
      groupChatID
      userID
      author {
        id
        email
        firstName
        lastName
        profilePicture
        bio
        userState
        university
        major
        courseGroups {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      body
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteChatMessage = /* GraphQL */ `
  mutation DeleteChatMessage(
    $input: DeleteChatMessageInput!
    $condition: ModelChatMessageConditionInput
  ) {
    deleteChatMessage(input: $input, condition: $condition) {
      id
      groupChatID
      userID
      author {
        id
        email
        firstName
        lastName
        profilePicture
        bio
        userState
        university
        major
        courseGroups {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      body
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createCourseGroupConnectionModel = /* GraphQL */ `
  mutation CreateCourseGroupConnectionModel(
    $input: CreateCourseGroupConnectionModelInput!
    $condition: ModelCourseGroupConnectionModelConditionInput
  ) {
    createCourseGroupConnectionModel(input: $input, condition: $condition) {
      id
      groupID
      userID
      courseGroup {
        users {
          nextToken
        }
        title
        groupID
        code
        section
        messages {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      user {
        id
        email
        firstName
        lastName
        profilePicture
        bio
        userState
        university
        major
        courseGroups {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateCourseGroupConnectionModel = /* GraphQL */ `
  mutation UpdateCourseGroupConnectionModel(
    $input: UpdateCourseGroupConnectionModelInput!
    $condition: ModelCourseGroupConnectionModelConditionInput
  ) {
    updateCourseGroupConnectionModel(input: $input, condition: $condition) {
      id
      groupID
      userID
      courseGroup {
        users {
          nextToken
        }
        title
        groupID
        code
        section
        messages {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      user {
        id
        email
        firstName
        lastName
        profilePicture
        bio
        userState
        university
        major
        courseGroups {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteCourseGroupConnectionModel = /* GraphQL */ `
  mutation DeleteCourseGroupConnectionModel(
    $input: DeleteCourseGroupConnectionModelInput!
    $condition: ModelCourseGroupConnectionModelConditionInput
  ) {
    deleteCourseGroupConnectionModel(input: $input, condition: $condition) {
      id
      groupID
      userID
      courseGroup {
        users {
          nextToken
        }
        title
        groupID
        code
        section
        messages {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      user {
        id
        email
        firstName
        lastName
        profilePicture
        bio
        userState
        university
        major
        courseGroups {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
    }
  }
`;
export const createFriendGroupConnectionModel = /* GraphQL */ `
  mutation CreateFriendGroupConnectionModel(
    $input: CreateFriendGroupConnectionModelInput!
    $condition: ModelFriendGroupConnectionModelConditionInput
  ) {
    createFriendGroupConnectionModel(input: $input, condition: $condition) {
      id
      groupID
      userID
      friendGroup {
        users {
          nextToken
        }
        groupID
        title
        messages {
          id
          groupChatID
          userID
          body
          createdAt
          updatedAt
          owner
        }
        owner
        createdAt
        updatedAt
      }
      user {
        id
        email
        firstName
        lastName
        profilePicture
        bio
        userState
        university
        major
        courseGroups {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateFriendGroupConnectionModel = /* GraphQL */ `
  mutation UpdateFriendGroupConnectionModel(
    $input: UpdateFriendGroupConnectionModelInput!
    $condition: ModelFriendGroupConnectionModelConditionInput
  ) {
    updateFriendGroupConnectionModel(input: $input, condition: $condition) {
      id
      groupID
      userID
      friendGroup {
        users {
          nextToken
        }
        groupID
        title
        messages {
          id
          groupChatID
          userID
          body
          createdAt
          updatedAt
          owner
        }
        owner
        createdAt
        updatedAt
      }
      user {
        id
        email
        firstName
        lastName
        profilePicture
        bio
        userState
        university
        major
        courseGroups {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteFriendGroupConnectionModel = /* GraphQL */ `
  mutation DeleteFriendGroupConnectionModel(
    $input: DeleteFriendGroupConnectionModelInput!
    $condition: ModelFriendGroupConnectionModelConditionInput
  ) {
    deleteFriendGroupConnectionModel(input: $input, condition: $condition) {
      id
      groupID
      userID
      friendGroup {
        users {
          nextToken
        }
        groupID
        title
        messages {
          id
          groupChatID
          userID
          body
          createdAt
          updatedAt
          owner
        }
        owner
        createdAt
        updatedAt
      }
      user {
        id
        email
        firstName
        lastName
        profilePicture
        bio
        userState
        university
        major
        courseGroups {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
    }
  }
`;
