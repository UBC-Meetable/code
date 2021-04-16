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
export const createCourseGroup = /* GraphQL */ `
  mutation CreateCourseGroup(
    $input: CreateCourseGroupInput!
    $condition: ModelCourseGroupConditionInput
  ) {
    createCourseGroup(input: $input, condition: $condition) {
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
export const updateCourseGroup = /* GraphQL */ `
  mutation UpdateCourseGroup(
    $input: UpdateCourseGroupInput!
    $condition: ModelCourseGroupConditionInput
  ) {
    updateCourseGroup(input: $input, condition: $condition) {
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
export const deleteCourseGroup = /* GraphQL */ `
  mutation DeleteCourseGroup(
    $input: DeleteCourseGroupInput!
    $condition: ModelCourseGroupConditionInput
  ) {
    deleteCourseGroup(input: $input, condition: $condition) {
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
export const createCourseGroupMember = /* GraphQL */ `
  mutation CreateCourseGroupMember(
    $input: CreateCourseGroupMemberInput!
    $condition: ModelCourseGroupMemberConditionInput
  ) {
    createCourseGroupMember(input: $input, condition: $condition) {
      id
      groupID
      email
      courseGroup {
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
      user {
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
      createdAt
      updatedAt
    }
  }
`;
export const updateCourseGroupMember = /* GraphQL */ `
  mutation UpdateCourseGroupMember(
    $input: UpdateCourseGroupMemberInput!
    $condition: ModelCourseGroupMemberConditionInput
  ) {
    updateCourseGroupMember(input: $input, condition: $condition) {
      id
      groupID
      email
      courseGroup {
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
      user {
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
      createdAt
      updatedAt
    }
  }
`;
export const deleteCourseGroupMember = /* GraphQL */ `
  mutation DeleteCourseGroupMember(
    $input: DeleteCourseGroupMemberInput!
    $condition: ModelCourseGroupMemberConditionInput
  ) {
    deleteCourseGroupMember(input: $input, condition: $condition) {
      id
      groupID
      email
      courseGroup {
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
      user {
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
      createdAt
      updatedAt
    }
  }
`;
