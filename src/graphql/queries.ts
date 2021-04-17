/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUserProfile = /* GraphQL */ `
  query GetUserProfile($email: String!) {
    getUserProfile(email: $email) {
      email
      firstName
      lastName
      profilePicture
      bio
      userState
      university
      major
      courses {
        code
        section
      }
      courseGroups {
        items {
          id
          groupID
          email
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
export const listUserProfiles = /* GraphQL */ `
  query ListUserProfiles(
    $email: String
    $filter: ModelUserProfileFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUserProfiles(
      email: $email
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        email
        firstName
        lastName
        profilePicture
        bio
        userState
        university
        major
        courses {
          code
          section
        }
        courseGroups {
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
  query GetCourseGroup($courseID: String!) {
    getCourseGroup(courseID: $courseID) {
      users {
        items {
          id
          groupID
          email
          createdAt
          updatedAt
        }
        nextToken
      }
      title
      course {
        code
        section
      }
      courseID
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listCourseGroups = /* GraphQL */ `
  query ListCourseGroups(
    $courseID: String
    $filter: ModelCourseGroupFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listCourseGroups(
      courseID: $courseID
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        users {
          nextToken
        }
        title
        course {
          code
          section
        }
        courseID
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getGroupChat = /* GraphQL */ `
  query GetGroupChat($groupChatID: String!) {
    getGroupChat(groupChatID: $groupChatID) {
      groupChatID
      users {
        items {
          id
          groupID
          email
          createdAt
          updatedAt
        }
        nextToken
      }
      messages {
        items {
          id
          groupChatID
          email
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
export const listGroupChats = /* GraphQL */ `
  query ListGroupChats(
    $groupChatID: String
    $filter: ModelGroupChatFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listGroupChats(
      groupChatID: $groupChatID
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        groupChatID
        users {
          nextToken
        }
        messages {
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
export const getChatMessage = /* GraphQL */ `
  query GetChatMessage($id: ID!) {
    getChatMessage(id: $id) {
      id
      groupChatID
      email
      author {
        email
        firstName
        lastName
        profilePicture
        bio
        userState
        university
        major
        courses {
          code
          section
        }
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
        email
        author {
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
      nextToken
    }
  }
`;
export const messagesByGroupChatId = /* GraphQL */ `
  query MessagesByGroupChatId(
    $groupChatID: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelChatMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    messagesByGroupChatID(
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
        email
        author {
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
      nextToken
    }
  }
`;
