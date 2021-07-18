/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      email
      firstName
      lastName
      profilePicture
      bio
      userState
      university
      year
      major
      courseGroups {
        items {
          id
          groupID
          userID
          courseGroup {
            users {
              nextToken
            }
            title
            groupID
            code
            section
            messages {
              nextToken
            }
            createdAt
            updatedAt
          }
          user {
            id
            email
            firstName
            lastName
            profilePicture
            bio
            userState
            university
            year
            major
            courseGroups {
              nextToken
            }
            friendGroups {
              nextToken
            }
            quizzes {
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      friendGroups {
        items {
          id
          groupID
          userID
          friendGroup {
            users {
              nextToken
            }
            groupID
            title
            messages {
              nextToken
            }
            owner
            size
            createdAt
            updatedAt
          }
          user {
            id
            email
            firstName
            lastName
            profilePicture
            bio
            userState
            university
            year
            major
            courseGroups {
              nextToken
            }
            friendGroups {
              nextToken
            }
            quizzes {
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      quizzes {
        items {
          id
          userID
          user {
            id
            email
            firstName
            lastName
            profilePicture
            bio
            userState
            university
            year
            major
            courseGroups {
              nextToken
            }
            friendGroups {
              nextToken
            }
            quizzes {
              nextToken
            }
            createdAt
            updatedAt
          }
          responses {
            q
            a
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      email
      firstName
      lastName
      profilePicture
      bio
      userState
      university
      year
      major
      courseGroups {
        items {
          id
          groupID
          userID
          courseGroup {
            users {
              nextToken
            }
            title
            groupID
            code
            section
            messages {
              nextToken
            }
            createdAt
            updatedAt
          }
          user {
            id
            email
            firstName
            lastName
            profilePicture
            bio
            userState
            university
            year
            major
            courseGroups {
              nextToken
            }
            friendGroups {
              nextToken
            }
            quizzes {
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      friendGroups {
        items {
          id
          groupID
          userID
          friendGroup {
            users {
              nextToken
            }
            groupID
            title
            messages {
              nextToken
            }
            owner
            size
            createdAt
            updatedAt
          }
          user {
            id
            email
            firstName
            lastName
            profilePicture
            bio
            userState
            university
            year
            major
            courseGroups {
              nextToken
            }
            friendGroups {
              nextToken
            }
            quizzes {
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      quizzes {
        items {
          id
          userID
          user {
            id
            email
            firstName
            lastName
            profilePicture
            bio
            userState
            university
            year
            major
            courseGroups {
              nextToken
            }
            friendGroups {
              nextToken
            }
            quizzes {
              nextToken
            }
            createdAt
            updatedAt
          }
          responses {
            q
            a
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      email
      firstName
      lastName
      profilePicture
      bio
      userState
      university
      year
      major
      courseGroups {
        items {
          id
          groupID
          userID
          courseGroup {
            users {
              nextToken
            }
            title
            groupID
            code
            section
            messages {
              nextToken
            }
            createdAt
            updatedAt
          }
          user {
            id
            email
            firstName
            lastName
            profilePicture
            bio
            userState
            university
            year
            major
            courseGroups {
              nextToken
            }
            friendGroups {
              nextToken
            }
            quizzes {
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      friendGroups {
        items {
          id
          groupID
          userID
          friendGroup {
            users {
              nextToken
            }
            groupID
            title
            messages {
              nextToken
            }
            owner
            size
            createdAt
            updatedAt
          }
          user {
            id
            email
            firstName
            lastName
            profilePicture
            bio
            userState
            university
            year
            major
            courseGroups {
              nextToken
            }
            friendGroups {
              nextToken
            }
            quizzes {
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      quizzes {
        items {
          id
          userID
          user {
            id
            email
            firstName
            lastName
            profilePicture
            bio
            userState
            university
            year
            major
            courseGroups {
              nextToken
            }
            friendGroups {
              nextToken
            }
            quizzes {
              nextToken
            }
            createdAt
            updatedAt
          }
          responses {
            q
            a
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
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
          userID
          courseGroup {
            users {
              nextToken
            }
            title
            groupID
            code
            section
            messages {
              nextToken
            }
            createdAt
            updatedAt
          }
          user {
            id
            email
            firstName
            lastName
            profilePicture
            bio
            userState
            university
            year
            major
            courseGroups {
              nextToken
            }
            friendGroups {
              nextToken
            }
            quizzes {
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      title
      groupID
      code
      section
      messages {
        items {
          id
          groupChatID
          userID
          author {
            id
            email
            firstName
            lastName
            profilePicture
            bio
            userState
            university
            year
            major
            courseGroups {
              nextToken
            }
            friendGroups {
              nextToken
            }
            quizzes {
              nextToken
            }
            createdAt
            updatedAt
          }
          body
          createdAt
          updatedAt
          groupType
        }
        nextToken
      }
      createdAt
      updatedAt
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
          userID
          courseGroup {
            users {
              nextToken
            }
            title
            groupID
            code
            section
            messages {
              nextToken
            }
            createdAt
            updatedAt
          }
          user {
            id
            email
            firstName
            lastName
            profilePicture
            bio
            userState
            university
            year
            major
            courseGroups {
              nextToken
            }
            friendGroups {
              nextToken
            }
            quizzes {
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      title
      groupID
      code
      section
      messages {
        items {
          id
          groupChatID
          userID
          author {
            id
            email
            firstName
            lastName
            profilePicture
            bio
            userState
            university
            year
            major
            courseGroups {
              nextToken
            }
            friendGroups {
              nextToken
            }
            quizzes {
              nextToken
            }
            createdAt
            updatedAt
          }
          body
          createdAt
          updatedAt
          groupType
        }
        nextToken
      }
      createdAt
      updatedAt
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
          userID
          courseGroup {
            users {
              nextToken
            }
            title
            groupID
            code
            section
            messages {
              nextToken
            }
            createdAt
            updatedAt
          }
          user {
            id
            email
            firstName
            lastName
            profilePicture
            bio
            userState
            university
            year
            major
            courseGroups {
              nextToken
            }
            friendGroups {
              nextToken
            }
            quizzes {
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      title
      groupID
      code
      section
      messages {
        items {
          id
          groupChatID
          userID
          author {
            id
            email
            firstName
            lastName
            profilePicture
            bio
            userState
            university
            year
            major
            courseGroups {
              nextToken
            }
            friendGroups {
              nextToken
            }
            quizzes {
              nextToken
            }
            createdAt
            updatedAt
          }
          body
          createdAt
          updatedAt
          groupType
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateFriendGroup = /* GraphQL */ `
  subscription OnCreateFriendGroup {
    onCreateFriendGroup {
      users {
        items {
          id
          groupID
          userID
          friendGroup {
            users {
              nextToken
            }
            groupID
            title
            messages {
              nextToken
            }
            owner
            size
            createdAt
            updatedAt
          }
          user {
            id
            email
            firstName
            lastName
            profilePicture
            bio
            userState
            university
            year
            major
            courseGroups {
              nextToken
            }
            friendGroups {
              nextToken
            }
            quizzes {
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      groupID
      title
      messages {
        items {
          id
          groupChatID
          userID
          author {
            id
            email
            firstName
            lastName
            profilePicture
            bio
            userState
            university
            year
            major
            courseGroups {
              nextToken
            }
            friendGroups {
              nextToken
            }
            quizzes {
              nextToken
            }
            createdAt
            updatedAt
          }
          body
          createdAt
          updatedAt
          groupType
        }
        nextToken
      }
      owner
      size
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateFriendGroup = /* GraphQL */ `
  subscription OnUpdateFriendGroup {
    onUpdateFriendGroup {
      users {
        items {
          id
          groupID
          userID
          friendGroup {
            users {
              nextToken
            }
            groupID
            title
            messages {
              nextToken
            }
            owner
            size
            createdAt
            updatedAt
          }
          user {
            id
            email
            firstName
            lastName
            profilePicture
            bio
            userState
            university
            year
            major
            courseGroups {
              nextToken
            }
            friendGroups {
              nextToken
            }
            quizzes {
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      groupID
      title
      messages {
        items {
          id
          groupChatID
          userID
          author {
            id
            email
            firstName
            lastName
            profilePicture
            bio
            userState
            university
            year
            major
            courseGroups {
              nextToken
            }
            friendGroups {
              nextToken
            }
            quizzes {
              nextToken
            }
            createdAt
            updatedAt
          }
          body
          createdAt
          updatedAt
          groupType
        }
        nextToken
      }
      owner
      size
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteFriendGroup = /* GraphQL */ `
  subscription OnDeleteFriendGroup {
    onDeleteFriendGroup {
      users {
        items {
          id
          groupID
          userID
          friendGroup {
            users {
              nextToken
            }
            groupID
            title
            messages {
              nextToken
            }
            owner
            size
            createdAt
            updatedAt
          }
          user {
            id
            email
            firstName
            lastName
            profilePicture
            bio
            userState
            university
            year
            major
            courseGroups {
              nextToken
            }
            friendGroups {
              nextToken
            }
            quizzes {
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      groupID
      title
      messages {
        items {
          id
          groupChatID
          userID
          author {
            id
            email
            firstName
            lastName
            profilePicture
            bio
            userState
            university
            year
            major
            courseGroups {
              nextToken
            }
            friendGroups {
              nextToken
            }
            quizzes {
              nextToken
            }
            createdAt
            updatedAt
          }
          body
          createdAt
          updatedAt
          groupType
        }
        nextToken
      }
      owner
      size
      createdAt
      updatedAt
    }
  }
`;
export const onCreateChatMessage = /* GraphQL */ `
  subscription OnCreateChatMessage {
    onCreateChatMessage {
      id
      groupChatID
      userID
      author {
        id
        email
        firstName
        lastName
        profilePicture
        bio
        userState
        university
        year
        major
        courseGroups {
          items {
            id
            groupID
            userID
            courseGroup {
              title
              groupID
              code
              section
              createdAt
              updatedAt
            }
            user {
              id
              email
              firstName
              lastName
              profilePicture
              bio
              userState
              university
              year
              major
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        friendGroups {
          items {
            id
            groupID
            userID
            friendGroup {
              groupID
              title
              owner
              size
              createdAt
              updatedAt
            }
            user {
              id
              email
              firstName
              lastName
              profilePicture
              bio
              userState
              university
              year
              major
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        quizzes {
          items {
            id
            userID
            user {
              id
              email
              firstName
              lastName
              profilePicture
              bio
              userState
              university
              year
              major
              createdAt
              updatedAt
            }
            responses {
              q
              a
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      body
      createdAt
      updatedAt
      groupType
    }
  }
`;
export const onUpdateChatMessage = /* GraphQL */ `
  subscription OnUpdateChatMessage {
    onUpdateChatMessage {
      id
      groupChatID
      userID
      author {
        id
        email
        firstName
        lastName
        profilePicture
        bio
        userState
        university
        year
        major
        courseGroups {
          items {
            id
            groupID
            userID
            courseGroup {
              title
              groupID
              code
              section
              createdAt
              updatedAt
            }
            user {
              id
              email
              firstName
              lastName
              profilePicture
              bio
              userState
              university
              year
              major
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        friendGroups {
          items {
            id
            groupID
            userID
            friendGroup {
              groupID
              title
              owner
              size
              createdAt
              updatedAt
            }
            user {
              id
              email
              firstName
              lastName
              profilePicture
              bio
              userState
              university
              year
              major
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        quizzes {
          items {
            id
            userID
            user {
              id
              email
              firstName
              lastName
              profilePicture
              bio
              userState
              university
              year
              major
              createdAt
              updatedAt
            }
            responses {
              q
              a
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      body
      createdAt
      updatedAt
      groupType
    }
  }
`;
export const onDeleteChatMessage = /* GraphQL */ `
  subscription OnDeleteChatMessage {
    onDeleteChatMessage {
      id
      groupChatID
      userID
      author {
        id
        email
        firstName
        lastName
        profilePicture
        bio
        userState
        university
        year
        major
        courseGroups {
          items {
            id
            groupID
            userID
            courseGroup {
              title
              groupID
              code
              section
              createdAt
              updatedAt
            }
            user {
              id
              email
              firstName
              lastName
              profilePicture
              bio
              userState
              university
              year
              major
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        friendGroups {
          items {
            id
            groupID
            userID
            friendGroup {
              groupID
              title
              owner
              size
              createdAt
              updatedAt
            }
            user {
              id
              email
              firstName
              lastName
              profilePicture
              bio
              userState
              university
              year
              major
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        quizzes {
          items {
            id
            userID
            user {
              id
              email
              firstName
              lastName
              profilePicture
              bio
              userState
              university
              year
              major
              createdAt
              updatedAt
            }
            responses {
              q
              a
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      body
      createdAt
      updatedAt
      groupType
    }
  }
`;
export const onCreateCourseGroupConnection = /* GraphQL */ `
  subscription OnCreateCourseGroupConnection {
    onCreateCourseGroupConnection {
      id
      groupID
      userID
      courseGroup {
        users {
          items {
            id
            groupID
            userID
            courseGroup {
              title
              groupID
              code
              section
              createdAt
              updatedAt
            }
            user {
              id
              email
              firstName
              lastName
              profilePicture
              bio
              userState
              university
              year
              major
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        title
        groupID
        code
        section
        messages {
          items {
            id
            groupChatID
            userID
            author {
              id
              email
              firstName
              lastName
              profilePicture
              bio
              userState
              university
              year
              major
              createdAt
              updatedAt
            }
            body
            createdAt
            updatedAt
            groupType
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      user {
        id
        email
        firstName
        lastName
        profilePicture
        bio
        userState
        university
        year
        major
        courseGroups {
          items {
            id
            groupID
            userID
            courseGroup {
              title
              groupID
              code
              section
              createdAt
              updatedAt
            }
            user {
              id
              email
              firstName
              lastName
              profilePicture
              bio
              userState
              university
              year
              major
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        friendGroups {
          items {
            id
            groupID
            userID
            friendGroup {
              groupID
              title
              owner
              size
              createdAt
              updatedAt
            }
            user {
              id
              email
              firstName
              lastName
              profilePicture
              bio
              userState
              university
              year
              major
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        quizzes {
          items {
            id
            userID
            user {
              id
              email
              firstName
              lastName
              profilePicture
              bio
              userState
              university
              year
              major
              createdAt
              updatedAt
            }
            responses {
              q
              a
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCourseGroupConnection = /* GraphQL */ `
  subscription OnUpdateCourseGroupConnection {
    onUpdateCourseGroupConnection {
      id
      groupID
      userID
      courseGroup {
        users {
          items {
            id
            groupID
            userID
            courseGroup {
              title
              groupID
              code
              section
              createdAt
              updatedAt
            }
            user {
              id
              email
              firstName
              lastName
              profilePicture
              bio
              userState
              university
              year
              major
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        title
        groupID
        code
        section
        messages {
          items {
            id
            groupChatID
            userID
            author {
              id
              email
              firstName
              lastName
              profilePicture
              bio
              userState
              university
              year
              major
              createdAt
              updatedAt
            }
            body
            createdAt
            updatedAt
            groupType
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      user {
        id
        email
        firstName
        lastName
        profilePicture
        bio
        userState
        university
        year
        major
        courseGroups {
          items {
            id
            groupID
            userID
            courseGroup {
              title
              groupID
              code
              section
              createdAt
              updatedAt
            }
            user {
              id
              email
              firstName
              lastName
              profilePicture
              bio
              userState
              university
              year
              major
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        friendGroups {
          items {
            id
            groupID
            userID
            friendGroup {
              groupID
              title
              owner
              size
              createdAt
              updatedAt
            }
            user {
              id
              email
              firstName
              lastName
              profilePicture
              bio
              userState
              university
              year
              major
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        quizzes {
          items {
            id
            userID
            user {
              id
              email
              firstName
              lastName
              profilePicture
              bio
              userState
              university
              year
              major
              createdAt
              updatedAt
            }
            responses {
              q
              a
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCourseGroupConnection = /* GraphQL */ `
  subscription OnDeleteCourseGroupConnection {
    onDeleteCourseGroupConnection {
      id
      groupID
      userID
      courseGroup {
        users {
          items {
            id
            groupID
            userID
            courseGroup {
              title
              groupID
              code
              section
              createdAt
              updatedAt
            }
            user {
              id
              email
              firstName
              lastName
              profilePicture
              bio
              userState
              university
              year
              major
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        title
        groupID
        code
        section
        messages {
          items {
            id
            groupChatID
            userID
            author {
              id
              email
              firstName
              lastName
              profilePicture
              bio
              userState
              university
              year
              major
              createdAt
              updatedAt
            }
            body
            createdAt
            updatedAt
            groupType
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      user {
        id
        email
        firstName
        lastName
        profilePicture
        bio
        userState
        university
        year
        major
        courseGroups {
          items {
            id
            groupID
            userID
            courseGroup {
              title
              groupID
              code
              section
              createdAt
              updatedAt
            }
            user {
              id
              email
              firstName
              lastName
              profilePicture
              bio
              userState
              university
              year
              major
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        friendGroups {
          items {
            id
            groupID
            userID
            friendGroup {
              groupID
              title
              owner
              size
              createdAt
              updatedAt
            }
            user {
              id
              email
              firstName
              lastName
              profilePicture
              bio
              userState
              university
              year
              major
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        quizzes {
          items {
            id
            userID
            user {
              id
              email
              firstName
              lastName
              profilePicture
              bio
              userState
              university
              year
              major
              createdAt
              updatedAt
            }
            responses {
              q
              a
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateFriendGroupConnection = /* GraphQL */ `
  subscription OnCreateFriendGroupConnection {
    onCreateFriendGroupConnection {
      id
      groupID
      userID
      friendGroup {
        users {
          items {
            id
            groupID
            userID
            friendGroup {
              groupID
              title
              owner
              size
              createdAt
              updatedAt
            }
            user {
              id
              email
              firstName
              lastName
              profilePicture
              bio
              userState
              university
              year
              major
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        groupID
        title
        messages {
          items {
            id
            groupChatID
            userID
            author {
              id
              email
              firstName
              lastName
              profilePicture
              bio
              userState
              university
              year
              major
              createdAt
              updatedAt
            }
            body
            createdAt
            updatedAt
            groupType
          }
          nextToken
        }
        owner
        size
        createdAt
        updatedAt
      }
      user {
        id
        email
        firstName
        lastName
        profilePicture
        bio
        userState
        university
        year
        major
        courseGroups {
          items {
            id
            groupID
            userID
            courseGroup {
              title
              groupID
              code
              section
              createdAt
              updatedAt
            }
            user {
              id
              email
              firstName
              lastName
              profilePicture
              bio
              userState
              university
              year
              major
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        friendGroups {
          items {
            id
            groupID
            userID
            friendGroup {
              groupID
              title
              owner
              size
              createdAt
              updatedAt
            }
            user {
              id
              email
              firstName
              lastName
              profilePicture
              bio
              userState
              university
              year
              major
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        quizzes {
          items {
            id
            userID
            user {
              id
              email
              firstName
              lastName
              profilePicture
              bio
              userState
              university
              year
              major
              createdAt
              updatedAt
            }
            responses {
              q
              a
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateFriendGroupConnection = /* GraphQL */ `
  subscription OnUpdateFriendGroupConnection {
    onUpdateFriendGroupConnection {
      id
      groupID
      userID
      friendGroup {
        users {
          items {
            id
            groupID
            userID
            friendGroup {
              groupID
              title
              owner
              size
              createdAt
              updatedAt
            }
            user {
              id
              email
              firstName
              lastName
              profilePicture
              bio
              userState
              university
              year
              major
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        groupID
        title
        messages {
          items {
            id
            groupChatID
            userID
            author {
              id
              email
              firstName
              lastName
              profilePicture
              bio
              userState
              university
              year
              major
              createdAt
              updatedAt
            }
            body
            createdAt
            updatedAt
            groupType
          }
          nextToken
        }
        owner
        size
        createdAt
        updatedAt
      }
      user {
        id
        email
        firstName
        lastName
        profilePicture
        bio
        userState
        university
        year
        major
        courseGroups {
          items {
            id
            groupID
            userID
            courseGroup {
              title
              groupID
              code
              section
              createdAt
              updatedAt
            }
            user {
              id
              email
              firstName
              lastName
              profilePicture
              bio
              userState
              university
              year
              major
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        friendGroups {
          items {
            id
            groupID
            userID
            friendGroup {
              groupID
              title
              owner
              size
              createdAt
              updatedAt
            }
            user {
              id
              email
              firstName
              lastName
              profilePicture
              bio
              userState
              university
              year
              major
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        quizzes {
          items {
            id
            userID
            user {
              id
              email
              firstName
              lastName
              profilePicture
              bio
              userState
              university
              year
              major
              createdAt
              updatedAt
            }
            responses {
              q
              a
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteFriendGroupConnection = /* GraphQL */ `
  subscription OnDeleteFriendGroupConnection {
    onDeleteFriendGroupConnection {
      id
      groupID
      userID
      friendGroup {
        users {
          items {
            id
            groupID
            userID
            friendGroup {
              groupID
              title
              owner
              size
              createdAt
              updatedAt
            }
            user {
              id
              email
              firstName
              lastName
              profilePicture
              bio
              userState
              university
              year
              major
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        groupID
        title
        messages {
          items {
            id
            groupChatID
            userID
            author {
              id
              email
              firstName
              lastName
              profilePicture
              bio
              userState
              university
              year
              major
              createdAt
              updatedAt
            }
            body
            createdAt
            updatedAt
            groupType
          }
          nextToken
        }
        owner
        size
        createdAt
        updatedAt
      }
      user {
        id
        email
        firstName
        lastName
        profilePicture
        bio
        userState
        university
        year
        major
        courseGroups {
          items {
            id
            groupID
            userID
            courseGroup {
              title
              groupID
              code
              section
              createdAt
              updatedAt
            }
            user {
              id
              email
              firstName
              lastName
              profilePicture
              bio
              userState
              university
              year
              major
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        friendGroups {
          items {
            id
            groupID
            userID
            friendGroup {
              groupID
              title
              owner
              size
              createdAt
              updatedAt
            }
            user {
              id
              email
              firstName
              lastName
              profilePicture
              bio
              userState
              university
              year
              major
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        quizzes {
          items {
            id
            userID
            user {
              id
              email
              firstName
              lastName
              profilePicture
              bio
              userState
              university
              year
              major
              createdAt
              updatedAt
            }
            responses {
              q
              a
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateQuiz = /* GraphQL */ `
  subscription OnCreateQuiz {
    onCreateQuiz {
      id
      userID
      user {
        id
        email
        firstName
        lastName
        profilePicture
        bio
        userState
        university
        year
        major
        courseGroups {
          items {
            id
            groupID
            userID
            courseGroup {
              title
              groupID
              code
              section
              createdAt
              updatedAt
            }
            user {
              id
              email
              firstName
              lastName
              profilePicture
              bio
              userState
              university
              year
              major
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        friendGroups {
          items {
            id
            groupID
            userID
            friendGroup {
              groupID
              title
              owner
              size
              createdAt
              updatedAt
            }
            user {
              id
              email
              firstName
              lastName
              profilePicture
              bio
              userState
              university
              year
              major
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        quizzes {
          items {
            id
            userID
            user {
              id
              email
              firstName
              lastName
              profilePicture
              bio
              userState
              university
              year
              major
              createdAt
              updatedAt
            }
            responses {
              q
              a
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      responses {
        q
        a
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateQuiz = /* GraphQL */ `
  subscription OnUpdateQuiz {
    onUpdateQuiz {
      id
      userID
      user {
        id
        email
        firstName
        lastName
        profilePicture
        bio
        userState
        university
        year
        major
        courseGroups {
          items {
            id
            groupID
            userID
            courseGroup {
              title
              groupID
              code
              section
              createdAt
              updatedAt
            }
            user {
              id
              email
              firstName
              lastName
              profilePicture
              bio
              userState
              university
              year
              major
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        friendGroups {
          items {
            id
            groupID
            userID
            friendGroup {
              groupID
              title
              owner
              size
              createdAt
              updatedAt
            }
            user {
              id
              email
              firstName
              lastName
              profilePicture
              bio
              userState
              university
              year
              major
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        quizzes {
          items {
            id
            userID
            user {
              id
              email
              firstName
              lastName
              profilePicture
              bio
              userState
              university
              year
              major
              createdAt
              updatedAt
            }
            responses {
              q
              a
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      responses {
        q
        a
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteQuiz = /* GraphQL */ `
  subscription OnDeleteQuiz {
    onDeleteQuiz {
      id
      userID
      user {
        id
        email
        firstName
        lastName
        profilePicture
        bio
        userState
        university
        year
        major
        courseGroups {
          items {
            id
            groupID
            userID
            courseGroup {
              title
              groupID
              code
              section
              createdAt
              updatedAt
            }
            user {
              id
              email
              firstName
              lastName
              profilePicture
              bio
              userState
              university
              year
              major
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        friendGroups {
          items {
            id
            groupID
            userID
            friendGroup {
              groupID
              title
              owner
              size
              createdAt
              updatedAt
            }
            user {
              id
              email
              firstName
              lastName
              profilePicture
              bio
              userState
              university
              year
              major
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        quizzes {
          items {
            id
            userID
            user {
              id
              email
              firstName
              lastName
              profilePicture
              bio
              userState
              university
              year
              major
              createdAt
              updatedAt
            }
            responses {
              q
              a
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      responses {
        q
        a
      }
      createdAt
      updatedAt
    }
  }
`;
