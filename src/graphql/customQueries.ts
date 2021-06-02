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
          messages {
            items {
              body
              groupChatID
              createdAt
              author {
                firstName
                lastName
                id
              }
            }
          }
          users {
            items {
              user {
                firstName
                lastName
              }
            }
          }
        }
      }
    }
    }
  }
`;