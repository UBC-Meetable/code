/* tslint:disable */
/* eslint-disable */

export const getUserCourses = /* GraphQL */ `
  query GetUserCourses($email: String!) {
    getUserProfile(email: $email) {
        courseGroups {
            items {
                courseGroup {
                course {
                    code
                    section
                }
                courseID
                title
                users {
                    items {
                    user {
                        firstName
                        lastName
                        profilePicture
                    }
                    }
                }
                }
            }
        }
    }
  }
`;