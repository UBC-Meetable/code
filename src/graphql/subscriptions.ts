/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUserProfile = /* GraphQL */ `
  subscription OnCreateUserProfile {
    onCreateUserProfile {
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
export const onUpdateUserProfile = /* GraphQL */ `
  subscription OnUpdateUserProfile {
    onUpdateUserProfile {
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
export const onDeleteUserProfile = /* GraphQL */ `
  subscription OnDeleteUserProfile {
    onDeleteUserProfile {
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
export const onCreateCourseGroup = /* GraphQL */ `
  subscription OnCreateCourseGroup {
    onCreateCourseGroup {
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
export const onUpdateCourseGroup = /* GraphQL */ `
  subscription OnUpdateCourseGroup {
    onUpdateCourseGroup {
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
export const onDeleteCourseGroup = /* GraphQL */ `
  subscription OnDeleteCourseGroup {
    onDeleteCourseGroup {
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
export const onCreateCourseGroupMember = /* GraphQL */ `
  subscription OnCreateCourseGroupMember {
    onCreateCourseGroupMember {
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
export const onUpdateCourseGroupMember = /* GraphQL */ `
  subscription OnUpdateCourseGroupMember {
    onUpdateCourseGroupMember {
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
export const onDeleteCourseGroupMember = /* GraphQL */ `
  subscription OnDeleteCourseGroupMember {
    onDeleteCourseGroupMember {
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
