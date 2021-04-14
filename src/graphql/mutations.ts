/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUserProfile = /* GraphQL */ `
  mutation CreateUserProfile(
    $input: CreateUserProfileInput!
    $condition: ModelUserProfileConditionInput
  ) {
    createUserProfile(input: $input, condition: $condition) {
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
export const updateUserProfile = /* GraphQL */ `
  mutation UpdateUserProfile(
    $input: UpdateUserProfileInput!
    $condition: ModelUserProfileConditionInput
  ) {
    updateUserProfile(input: $input, condition: $condition) {
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
export const deleteUserProfile = /* GraphQL */ `
  mutation DeleteUserProfile(
    $input: DeleteUserProfileInput!
    $condition: ModelUserProfileConditionInput
  ) {
    deleteUserProfile(input: $input, condition: $condition) {
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
