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
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
