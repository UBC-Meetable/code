/* tslint:disable */
/* eslint-disable */

export const getUserCourses = /* GraphQL */ `
  query GetUserCourses($id: String!) {
    getUser(id: $id) {
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