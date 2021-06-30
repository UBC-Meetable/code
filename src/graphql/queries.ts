/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const joinFriendGroup = /* GraphQL */ `
  query JoinFriendGroup($user: joinFriendGroupInput) {
    joinFriendGroup(user: $user) {
      statusCode
      groupID
      relevantUsers
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: String!) {
    getUser(id: $id) {
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
            owner
          }
          createdAt
          updatedAt
          owner
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
            owner
          }
          createdAt
          updatedAt
          owner
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
            owner
          }
          responses {
            q
            a
          }
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $id: String
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUsers(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
              year
              major
              createdAt
              updatedAt
              owner
            }
            createdAt
            updatedAt
            owner
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
              owner
            }
            createdAt
            updatedAt
            owner
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
              owner
            }
            responses {
              q
              a
            }
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
      nextToken
    }
  }
`;
export const getCourseGroup = /* GraphQL */ `
  query GetCourseGroup($groupID: String!) {
    getCourseGroup(groupID: $groupID) {
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
            owner
          }
          createdAt
          updatedAt
          owner
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
            owner
          }
          body
          createdAt
          updatedAt
          groupType
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
export const listCourseGroups = /* GraphQL */ `
  query ListCourseGroups(
    $groupID: String
    $filter: ModelCourseGroupFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listCourseGroups(
      groupID: $groupID
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
              year
              major
              createdAt
              updatedAt
              owner
            }
            createdAt
            updatedAt
            owner
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
              owner
            }
            body
            createdAt
            updatedAt
            groupType
            owner
          }
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getFriendGroup = /* GraphQL */ `
  query GetFriendGroup($groupID: String!) {
    getFriendGroup(groupID: $groupID) {
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
            owner
          }
          createdAt
          updatedAt
          owner
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
            owner
          }
          body
          createdAt
          updatedAt
          groupType
          owner
        }
        nextToken
      }
      owner
      createdAt
      updatedAt
    }
  }
`;
export const listFriendGroups = /* GraphQL */ `
  query ListFriendGroups(
    $groupID: String
    $filter: ModelFriendGroupFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listFriendGroups(
      groupID: $groupID
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        users {
          items {
            id
            groupID
            userID
            friendGroup {
              groupID
              title
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
              year
              major
              createdAt
              updatedAt
              owner
            }
            createdAt
            updatedAt
            owner
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
              owner
            }
            body
            createdAt
            updatedAt
            groupType
            owner
          }
          nextToken
        }
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getChatMessage = /* GraphQL */ `
  query GetChatMessage($id: ID!) {
    getChatMessage(id: $id) {
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
              year
              major
              createdAt
              updatedAt
              owner
            }
            createdAt
            updatedAt
            owner
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
              owner
            }
            createdAt
            updatedAt
            owner
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
              owner
            }
            responses {
              q
              a
            }
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
      body
      createdAt
      updatedAt
      groupType
      owner
    }
  }
`;
export const listChatMessages = /* GraphQL */ `
  query ListChatMessages(
    $filter: ModelChatMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChatMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
            items {
              id
              groupID
              userID
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          friendGroups {
            items {
              id
              groupID
              userID
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          quizzes {
            items {
              id
              userID
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
        body
        createdAt
        updatedAt
        groupType
        owner
      }
      nextToken
    }
  }
`;
export const getQuiz = /* GraphQL */ `
  query GetQuiz($id: ID!) {
    getQuiz(id: $id) {
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
              year
              major
              createdAt
              updatedAt
              owner
            }
            createdAt
            updatedAt
            owner
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
              owner
            }
            createdAt
            updatedAt
            owner
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
              owner
            }
            responses {
              q
              a
            }
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
      responses {
        q
        a
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listQuizs = /* GraphQL */ `
  query ListQuizs(
    $filter: ModelQuizFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuizs(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
            items {
              id
              groupID
              userID
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          friendGroups {
            items {
              id
              groupID
              userID
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          quizzes {
            items {
              id
              userID
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
        responses {
          q
          a
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const userByUniYear = /* GraphQL */ `
  query UserByUniYear(
    $university: String
    $year: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    UserByUniYear(
      university: $university
      year: $year
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
              year
              major
              createdAt
              updatedAt
              owner
            }
            createdAt
            updatedAt
            owner
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
              owner
            }
            createdAt
            updatedAt
            owner
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
              owner
            }
            responses {
              q
              a
            }
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
      nextToken
    }
  }
`;
export const messagesByCourseGroupChatId = /* GraphQL */ `
  query MessagesByCourseGroupChatId(
    $groupChatID: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelChatMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    messagesByCourseGroupChatID(
      groupChatID: $groupChatID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
            items {
              id
              groupID
              userID
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          friendGroups {
            items {
              id
              groupID
              userID
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          quizzes {
            items {
              id
              userID
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
        body
        createdAt
        updatedAt
        groupType
        owner
      }
      nextToken
    }
  }
`;
