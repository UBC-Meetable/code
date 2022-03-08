/* tslint:disable */
/* eslint-disable */

export const getUserCourses = /* GraphQL */ `
  query GetUserCourses($id: String!) {
    getUser(id: $id) {
        courseGroups {
      items {
        courseGroup {
        updatedAt
          groupID
          title
          section
          code
          messages {
            items {
              body
              groupChatID
              createdAt
              author {
                firstName
                lastName
                profilePicture
                id
              }
            }
          }
          users {
            items {
              user {
                firstName
                lastName
                profilePicture
                id
              }
            }
          }
        }
      }
    }
    }
  }
`;

export const getUserFriendGroups = /* GraphQL */ `
  query GetUserFriendGroups($id: String!) {
    getUser(id: $id) {
      friendGroups {
        items {
          friendGroup {
            updatedAt
            groupID
            title
            users {
              items {
                user {
                  firstName
                  lastName
                  profilePicture
                  id
                }
              }
            }
            messages {
              items {
                body
                groupChatID
                createdAt
                author {
                  firstName
                  lastName
                  profilePicture
                  id
                }
              }
            }
          }
        }
      }
    }
  }
`


export const getUserProfile = /* GraphQL */ `
  query GetUserProfile($id: String!) {
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
      createdAt
      updatedAt
      owner
      expoPushToken
    }
  }
`;

export const getUserQuizzes =  /* GraphQL */ `
query GetUserQuizzes($id: String!) {
  getUser(id: $id) {
    quizzes {
      items {
        responses {
          a
          q
        }
        user {
          id
        }
        id
      }
    }
  }
}
`;

export const getCourseGroupConnectionIdOnly = /* GraphQL */ `
  query CourseGroupByUserIdOnly(
    $userID: String
    $groupID: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCourseGroupConnectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    CourseGroupByUser(
      userID: $userID
      groupID: $groupID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
      }
    }
  }
`;
