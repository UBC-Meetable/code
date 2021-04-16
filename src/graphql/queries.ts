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
