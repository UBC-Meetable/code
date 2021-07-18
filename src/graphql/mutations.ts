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
      year
      major
      courseGroups {
        items {
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
            year
            major
            courseGroups {
              nextToken
            }
            friendGroups {
              nextToken
            }
            quizzes {
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      friendGroups {
        items {
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
              nextToken
            }
            owner
            size
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
            year
            major
            courseGroups {
              nextToken
            }
            friendGroups {
              nextToken
            }
            quizzes {
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      quizzes {
        items {
          id
          userID
          user {
            id
            email
            firstName
            lastName
            profilePicture
            bio
            userState
            university
            year
            major
            courseGroups {
              nextToken
            }
            friendGroups {
              nextToken
            }
            quizzes {
              nextToken
            }
            createdAt
            updatedAt
          }
          responses {
            q
            a
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
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
      year
      major
      courseGroups {
        items {
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
            year
            major
            courseGroups {
              nextToken
            }
            friendGroups {
              nextToken
            }
            quizzes {
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      friendGroups {
        items {
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
              nextToken
            }
            owner
            size
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
            year
            major
            courseGroups {
              nextToken
            }
            friendGroups {
              nextToken
            }
            quizzes {
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      quizzes {
        items {
          id
          userID
          user {
            id
            email
            firstName
            lastName
            profilePicture
            bio
            userState
            university
            year
            major
            courseGroups {
              nextToken
            }
            friendGroups {
              nextToken
            }
            quizzes {
              nextToken
            }
            createdAt
            updatedAt
          }
          responses {
            q
            a
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
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
      year
      major
      courseGroups {
        items {
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
            year
            major
            courseGroups {
              nextToken
            }
            friendGroups {
              nextToken
            }
            quizzes {
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      friendGroups {
        items {
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
              nextToken
            }
            owner
            size
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
            year
            major
            courseGroups {
              nextToken
            }
            friendGroups {
              nextToken
            }
            quizzes {
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      quizzes {
        items {
          id
          userID
          user {
            id
            email
            firstName
            lastName
            profilePicture
            bio
            userState
            university
            year
            major
            courseGroups {
              nextToken
            }
            friendGroups {
              nextToken
            }
            quizzes {
              nextToken
            }
            createdAt
            updatedAt
          }
          responses {
            q
            a
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
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
            year
            major
            courseGroups {
              nextToken
            }
            friendGroups {
              nextToken
            }
            quizzes {
              nextToken
            }
            createdAt
            updatedAt
          }
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
          author {
            id
            email
            firstName
            lastName
            profilePicture
            bio
            userState
            university
            year
            major
            courseGroups {
              nextToken
            }
            friendGroups {
              nextToken
            }
            quizzes {
              nextToken
            }
            createdAt
            updatedAt
          }
          body
          createdAt
          updatedAt
          groupType
        }
        nextToken
      }
      createdAt
      updatedAt
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
            year
            major
            courseGroups {
              nextToken
            }
            friendGroups {
              nextToken
            }
            quizzes {
              nextToken
            }
            createdAt
            updatedAt
          }
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
          author {
            id
            email
            firstName
            lastName
            profilePicture
            bio
            userState
            university
            year
            major
            courseGroups {
              nextToken
            }
            friendGroups {
              nextToken
            }
            quizzes {
              nextToken
            }
            createdAt
            updatedAt
          }
          body
          createdAt
          updatedAt
          groupType
        }
        nextToken
      }
      createdAt
      updatedAt
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
            year
            major
            courseGroups {
              nextToken
            }
            friendGroups {
              nextToken
            }
            quizzes {
              nextToken
            }
            createdAt
            updatedAt
          }
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
          author {
            id
            email
            firstName
            lastName
            profilePicture
            bio
            userState
            university
            year
            major
            courseGroups {
              nextToken
            }
            friendGroups {
              nextToken
            }
            quizzes {
              nextToken
            }
            createdAt
            updatedAt
          }
          body
          createdAt
          updatedAt
          groupType
        }
        nextToken
      }
      createdAt
      updatedAt
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
          friendGroup {
            users {
              nextToken
            }
            groupID
            title
            messages {
              nextToken
            }
            owner
            size
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
            year
            major
            courseGroups {
              nextToken
            }
            friendGroups {
              nextToken
            }
            quizzes {
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      groupID
      title
      messages {
        items {
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
            year
            major
            courseGroups {
              nextToken
            }
            friendGroups {
              nextToken
            }
            quizzes {
              nextToken
            }
            createdAt
            updatedAt
          }
          body
          createdAt
          updatedAt
          groupType
        }
        nextToken
      }
      owner
      size
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
          friendGroup {
            users {
              nextToken
            }
            groupID
            title
            messages {
              nextToken
            }
            owner
            size
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
            year
            major
            courseGroups {
              nextToken
            }
            friendGroups {
              nextToken
            }
            quizzes {
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      groupID
      title
      messages {
        items {
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
            year
            major
            courseGroups {
              nextToken
            }
            friendGroups {
              nextToken
            }
            quizzes {
              nextToken
            }
            createdAt
            updatedAt
          }
          body
          createdAt
          updatedAt
          groupType
        }
        nextToken
      }
      owner
      size
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
          friendGroup {
            users {
              nextToken
            }
            groupID
            title
            messages {
              nextToken
            }
            owner
            size
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
            year
            major
            courseGroups {
              nextToken
            }
            friendGroups {
              nextToken
            }
            quizzes {
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      groupID
      title
      messages {
        items {
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
            year
            major
            courseGroups {
              nextToken
            }
            friendGroups {
              nextToken
            }
            quizzes {
              nextToken
            }
            createdAt
            updatedAt
          }
          body
          createdAt
          updatedAt
          groupType
        }
        nextToken
      }
      owner
      size
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
        year
        major
        courseGroups {
          items {
            id
            groupID
            userID
            courseGroup {
              title
              groupID
              code
              section
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
              year
              major
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        friendGroups {
          items {
            id
            groupID
            userID
            friendGroup {
              groupID
              title
              owner
              size
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
              year
              major
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        quizzes {
          items {
            id
            userID
            user {
              id
              email
              firstName
              lastName
              profilePicture
              bio
              userState
              university
              year
              major
              createdAt
              updatedAt
            }
            responses {
              q
              a
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      body
      createdAt
      updatedAt
      groupType
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
        year
        major
        courseGroups {
          items {
            id
            groupID
            userID
            courseGroup {
              title
              groupID
              code
              section
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
              year
              major
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        friendGroups {
          items {
            id
            groupID
            userID
            friendGroup {
              groupID
              title
              owner
              size
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
              year
              major
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        quizzes {
          items {
            id
            userID
            user {
              id
              email
              firstName
              lastName
              profilePicture
              bio
              userState
              university
              year
              major
              createdAt
              updatedAt
            }
            responses {
              q
              a
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      body
      createdAt
      updatedAt
      groupType
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
        year
        major
        courseGroups {
          items {
            id
            groupID
            userID
            courseGroup {
              title
              groupID
              code
              section
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
              year
              major
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        friendGroups {
          items {
            id
            groupID
            userID
            friendGroup {
              groupID
              title
              owner
              size
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
              year
              major
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        quizzes {
          items {
            id
            userID
            user {
              id
              email
              firstName
              lastName
              profilePicture
              bio
              userState
              university
              year
              major
              createdAt
              updatedAt
            }
            responses {
              q
              a
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      body
      createdAt
      updatedAt
      groupType
    }
  }
`;
export const createCourseGroupConnection = /* GraphQL */ `
  mutation CreateCourseGroupConnection(
    $input: CreateCourseGroupConnectionInput!
    $condition: ModelCourseGroupConnectionConditionInput
  ) {
    createCourseGroupConnection(input: $input, condition: $condition) {
      id
      groupID
      userID
      courseGroup {
        users {
          items {
            id
            groupID
            userID
            courseGroup {
              title
              groupID
              code
              section
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
              year
              major
              createdAt
              updatedAt
            }
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
            author {
              id
              email
              firstName
              lastName
              profilePicture
              bio
              userState
              university
              year
              major
              createdAt
              updatedAt
            }
            body
            createdAt
            updatedAt
            groupType
          }
          nextToken
        }
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
        year
        major
        courseGroups {
          items {
            id
            groupID
            userID
            courseGroup {
              title
              groupID
              code
              section
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
              year
              major
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        friendGroups {
          items {
            id
            groupID
            userID
            friendGroup {
              groupID
              title
              owner
              size
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
              year
              major
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        quizzes {
          items {
            id
            userID
            user {
              id
              email
              firstName
              lastName
              profilePicture
              bio
              userState
              university
              year
              major
              createdAt
              updatedAt
            }
            responses {
              q
              a
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateCourseGroupConnection = /* GraphQL */ `
  mutation UpdateCourseGroupConnection(
    $input: UpdateCourseGroupConnectionInput!
    $condition: ModelCourseGroupConnectionConditionInput
  ) {
    updateCourseGroupConnection(input: $input, condition: $condition) {
      id
      groupID
      userID
      courseGroup {
        users {
          items {
            id
            groupID
            userID
            courseGroup {
              title
              groupID
              code
              section
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
              year
              major
              createdAt
              updatedAt
            }
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
            author {
              id
              email
              firstName
              lastName
              profilePicture
              bio
              userState
              university
              year
              major
              createdAt
              updatedAt
            }
            body
            createdAt
            updatedAt
            groupType
          }
          nextToken
        }
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
        year
        major
        courseGroups {
          items {
            id
            groupID
            userID
            courseGroup {
              title
              groupID
              code
              section
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
              year
              major
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        friendGroups {
          items {
            id
            groupID
            userID
            friendGroup {
              groupID
              title
              owner
              size
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
              year
              major
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        quizzes {
          items {
            id
            userID
            user {
              id
              email
              firstName
              lastName
              profilePicture
              bio
              userState
              university
              year
              major
              createdAt
              updatedAt
            }
            responses {
              q
              a
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteCourseGroupConnection = /* GraphQL */ `
  mutation DeleteCourseGroupConnection(
    $input: DeleteCourseGroupConnectionInput!
    $condition: ModelCourseGroupConnectionConditionInput
  ) {
    deleteCourseGroupConnection(input: $input, condition: $condition) {
      id
      groupID
      userID
      courseGroup {
        users {
          items {
            id
            groupID
            userID
            courseGroup {
              title
              groupID
              code
              section
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
              year
              major
              createdAt
              updatedAt
            }
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
            author {
              id
              email
              firstName
              lastName
              profilePicture
              bio
              userState
              university
              year
              major
              createdAt
              updatedAt
            }
            body
            createdAt
            updatedAt
            groupType
          }
          nextToken
        }
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
        year
        major
        courseGroups {
          items {
            id
            groupID
            userID
            courseGroup {
              title
              groupID
              code
              section
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
              year
              major
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        friendGroups {
          items {
            id
            groupID
            userID
            friendGroup {
              groupID
              title
              owner
              size
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
              year
              major
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        quizzes {
          items {
            id
            userID
            user {
              id
              email
              firstName
              lastName
              profilePicture
              bio
              userState
              university
              year
              major
              createdAt
              updatedAt
            }
            responses {
              q
              a
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createFriendGroupConnection = /* GraphQL */ `
  mutation CreateFriendGroupConnection(
    $input: CreateFriendGroupConnectionInput!
    $condition: ModelFriendGroupConnectionConditionInput
  ) {
    createFriendGroupConnection(input: $input, condition: $condition) {
      id
      groupID
      userID
      friendGroup {
        users {
          items {
            id
            groupID
            userID
            friendGroup {
              groupID
              title
              owner
              size
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
              year
              major
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        groupID
        title
        messages {
          items {
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
              year
              major
              createdAt
              updatedAt
            }
            body
            createdAt
            updatedAt
            groupType
          }
          nextToken
        }
        owner
        size
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
        year
        major
        courseGroups {
          items {
            id
            groupID
            userID
            courseGroup {
              title
              groupID
              code
              section
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
              year
              major
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        friendGroups {
          items {
            id
            groupID
            userID
            friendGroup {
              groupID
              title
              owner
              size
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
              year
              major
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        quizzes {
          items {
            id
            userID
            user {
              id
              email
              firstName
              lastName
              profilePicture
              bio
              userState
              university
              year
              major
              createdAt
              updatedAt
            }
            responses {
              q
              a
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateFriendGroupConnection = /* GraphQL */ `
  mutation UpdateFriendGroupConnection(
    $input: UpdateFriendGroupConnectionInput!
    $condition: ModelFriendGroupConnectionConditionInput
  ) {
    updateFriendGroupConnection(input: $input, condition: $condition) {
      id
      groupID
      userID
      friendGroup {
        users {
          items {
            id
            groupID
            userID
            friendGroup {
              groupID
              title
              owner
              size
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
              year
              major
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        groupID
        title
        messages {
          items {
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
              year
              major
              createdAt
              updatedAt
            }
            body
            createdAt
            updatedAt
            groupType
          }
          nextToken
        }
        owner
        size
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
        year
        major
        courseGroups {
          items {
            id
            groupID
            userID
            courseGroup {
              title
              groupID
              code
              section
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
              year
              major
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        friendGroups {
          items {
            id
            groupID
            userID
            friendGroup {
              groupID
              title
              owner
              size
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
              year
              major
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        quizzes {
          items {
            id
            userID
            user {
              id
              email
              firstName
              lastName
              profilePicture
              bio
              userState
              university
              year
              major
              createdAt
              updatedAt
            }
            responses {
              q
              a
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteFriendGroupConnection = /* GraphQL */ `
  mutation DeleteFriendGroupConnection(
    $input: DeleteFriendGroupConnectionInput!
    $condition: ModelFriendGroupConnectionConditionInput
  ) {
    deleteFriendGroupConnection(input: $input, condition: $condition) {
      id
      groupID
      userID
      friendGroup {
        users {
          items {
            id
            groupID
            userID
            friendGroup {
              groupID
              title
              owner
              size
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
              year
              major
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        groupID
        title
        messages {
          items {
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
              year
              major
              createdAt
              updatedAt
            }
            body
            createdAt
            updatedAt
            groupType
          }
          nextToken
        }
        owner
        size
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
        year
        major
        courseGroups {
          items {
            id
            groupID
            userID
            courseGroup {
              title
              groupID
              code
              section
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
              year
              major
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        friendGroups {
          items {
            id
            groupID
            userID
            friendGroup {
              groupID
              title
              owner
              size
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
              year
              major
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        quizzes {
          items {
            id
            userID
            user {
              id
              email
              firstName
              lastName
              profilePicture
              bio
              userState
              university
              year
              major
              createdAt
              updatedAt
            }
            responses {
              q
              a
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createQuiz = /* GraphQL */ `
  mutation CreateQuiz(
    $input: CreateQuizInput!
    $condition: ModelQuizConditionInput
  ) {
    createQuiz(input: $input, condition: $condition) {
      id
      userID
      user {
        id
        email
        firstName
        lastName
        profilePicture
        bio
        userState
        university
        year
        major
        courseGroups {
          items {
            id
            groupID
            userID
            courseGroup {
              title
              groupID
              code
              section
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
              year
              major
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        friendGroups {
          items {
            id
            groupID
            userID
            friendGroup {
              groupID
              title
              owner
              size
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
              year
              major
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        quizzes {
          items {
            id
            userID
            user {
              id
              email
              firstName
              lastName
              profilePicture
              bio
              userState
              university
              year
              major
              createdAt
              updatedAt
            }
            responses {
              q
              a
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      responses {
        q
        a
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateQuiz = /* GraphQL */ `
  mutation UpdateQuiz(
    $input: UpdateQuizInput!
    $condition: ModelQuizConditionInput
  ) {
    updateQuiz(input: $input, condition: $condition) {
      id
      userID
      user {
        id
        email
        firstName
        lastName
        profilePicture
        bio
        userState
        university
        year
        major
        courseGroups {
          items {
            id
            groupID
            userID
            courseGroup {
              title
              groupID
              code
              section
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
              year
              major
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        friendGroups {
          items {
            id
            groupID
            userID
            friendGroup {
              groupID
              title
              owner
              size
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
              year
              major
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        quizzes {
          items {
            id
            userID
            user {
              id
              email
              firstName
              lastName
              profilePicture
              bio
              userState
              university
              year
              major
              createdAt
              updatedAt
            }
            responses {
              q
              a
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      responses {
        q
        a
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteQuiz = /* GraphQL */ `
  mutation DeleteQuiz(
    $input: DeleteQuizInput!
    $condition: ModelQuizConditionInput
  ) {
    deleteQuiz(input: $input, condition: $condition) {
      id
      userID
      user {
        id
        email
        firstName
        lastName
        profilePicture
        bio
        userState
        university
        year
        major
        courseGroups {
          items {
            id
            groupID
            userID
            courseGroup {
              title
              groupID
              code
              section
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
              year
              major
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        friendGroups {
          items {
            id
            groupID
            userID
            friendGroup {
              groupID
              title
              owner
              size
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
              year
              major
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        quizzes {
          items {
            id
            userID
            user {
              id
              email
              firstName
              lastName
              profilePicture
              bio
              userState
              university
              year
              major
              createdAt
              updatedAt
            }
            responses {
              q
              a
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      responses {
        q
        a
      }
      createdAt
      updatedAt
    }
  }
`;
