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
`;

export const getUserProfile = /* GraphQL */ `
  query GetUserProfile($id: String!) {
    getUser(id: $id) {
      id
      email
      firstName
      lastName
      interests
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
