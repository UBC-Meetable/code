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
  query GetUserFriendGroups {
    getUser(id: "707b7da5-4a59-4150-9bd0-b0a83ed9e34a") {
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