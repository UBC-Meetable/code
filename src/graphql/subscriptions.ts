/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUserProfile = /* GraphQL */ `
  subscription OnCreateUserProfile($owner: String!) {
    onCreateUserProfile(owner: $owner) {
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
export const onUpdateUserProfile = /* GraphQL */ `
  subscription OnUpdateUserProfile($owner: String!) {
    onUpdateUserProfile(owner: $owner) {
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
export const onDeleteUserProfile = /* GraphQL */ `
  subscription OnDeleteUserProfile($owner: String!) {
    onDeleteUserProfile(owner: $owner) {
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
