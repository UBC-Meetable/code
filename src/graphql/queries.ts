/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const joinFriendGroup = /* GraphQL */ `
  query JoinFriendGroup($user: joinFriendGroupInput) {
    joinFriendGroup(user: $user) {
      statusCode
      groupID
      relevantUsers
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: String!) {
    getUser(id: $id) {
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
              items {
                id
                groupID
                userID
                createdAt
                updatedAt
                owner
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
                body
                createdAt
                updatedAt
                groupType
                owner
              }
              nextToken
            }
            createdAt
            updatedAt
            owner
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
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            friendGroups {
              items {
                id
                groupID
                userID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            quizzes {
              items {
                id
                userID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            expoPushToken
            createdAt
            updatedAt
            owner
          }
          createdAt
          updatedAt
          owner
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
              items {
                id
                groupID
                userID
                createdAt
                updatedAt
                owner
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
                body
                createdAt
                updatedAt
                groupType
                owner
              }
              nextToken
            }
            owner
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
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            friendGroups {
              items {
                id
                groupID
                userID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            quizzes {
              items {
                id
                userID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            expoPushToken
            createdAt
            updatedAt
            owner
          }
          createdAt
          updatedAt
          owner
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
              items {
                id
                groupID
                userID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            friendGroups {
              items {
                id
                groupID
                userID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            quizzes {
              items {
                id
                userID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            expoPushToken
            createdAt
            updatedAt
            owner
          }
          responses {
            q
            a
          }
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      expoPushToken
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $id: String
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUsers(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
              owner
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
              expoPushToken
              createdAt
              updatedAt
              owner
            }
            createdAt
            updatedAt
            owner
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
              expoPushToken
              createdAt
              updatedAt
              owner
            }
            createdAt
            updatedAt
            owner
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
              expoPushToken
              createdAt
              updatedAt
              owner
            }
            responses {
              q
              a
            }
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        expoPushToken
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getCourseGroup = /* GraphQL */ `
  query GetCourseGroup($groupID: String!) {
    getCourseGroup(groupID: $groupID) {
      users {
        items {
          id
          groupID
          userID
          courseGroup {
            users {
              items {
                id
                groupID
                userID
                createdAt
                updatedAt
                owner
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
                body
                createdAt
                updatedAt
                groupType
                owner
              }
              nextToken
            }
            createdAt
            updatedAt
            owner
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
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            friendGroups {
              items {
                id
                groupID
                userID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            quizzes {
              items {
                id
                userID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            expoPushToken
            createdAt
            updatedAt
            owner
          }
          createdAt
          updatedAt
          owner
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
              items {
                id
                groupID
                userID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            friendGroups {
              items {
                id
                groupID
                userID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            quizzes {
              items {
                id
                userID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            expoPushToken
            createdAt
            updatedAt
            owner
          }
          body
          createdAt
          updatedAt
          groupType
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listCourseGroups = /* GraphQL */ `
  query ListCourseGroups(
    $groupID: String
    $filter: ModelCourseGroupFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listCourseGroups(
      groupID: $groupID
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
              owner
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
              expoPushToken
              createdAt
              updatedAt
              owner
            }
            createdAt
            updatedAt
            owner
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
              expoPushToken
              createdAt
              updatedAt
              owner
            }
            body
            createdAt
            updatedAt
            groupType
            owner
          }
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
export const getFriendGroup = /* GraphQL */ `
  query GetFriendGroup($groupID: String!) {
    getFriendGroup(groupID: $groupID) {
      users {
        items {
          id
          groupID
          userID
          friendGroup {
            users {
              items {
                id
                groupID
                userID
                createdAt
                updatedAt
                owner
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
                body
                createdAt
                updatedAt
                groupType
                owner
              }
              nextToken
            }
            owner
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
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            friendGroups {
              items {
                id
                groupID
                userID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            quizzes {
              items {
                id
                userID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            expoPushToken
            createdAt
            updatedAt
            owner
          }
          createdAt
          updatedAt
          owner
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
              items {
                id
                groupID
                userID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            friendGroups {
              items {
                id
                groupID
                userID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            quizzes {
              items {
                id
                userID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            expoPushToken
            createdAt
            updatedAt
            owner
          }
          body
          createdAt
          updatedAt
          groupType
          owner
        }
        nextToken
      }
      owner
      createdAt
      updatedAt
    }
  }
`;
export const listFriendGroups = /* GraphQL */ `
  query ListFriendGroups(
    $groupID: String
    $filter: ModelFriendGroupFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listFriendGroups(
      groupID: $groupID
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
              expoPushToken
              createdAt
              updatedAt
              owner
            }
            createdAt
            updatedAt
            owner
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
              expoPushToken
              createdAt
              updatedAt
              owner
            }
            body
            createdAt
            updatedAt
            groupType
            owner
          }
          nextToken
        }
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getReport = /* GraphQL */ `
  query GetReport($id: ID!) {
    getReport(id: $id) {
      id
      message {
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
                owner
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
                expoPushToken
                createdAt
                updatedAt
                owner
              }
              createdAt
              updatedAt
              owner
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
                expoPushToken
                createdAt
                updatedAt
                owner
              }
              createdAt
              updatedAt
              owner
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
                expoPushToken
                createdAt
                updatedAt
                owner
              }
              responses {
                q
                a
              }
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          expoPushToken
          createdAt
          updatedAt
          owner
        }
        body
        createdAt
        updatedAt
        groupType
        owner
      }
      title
      body
      reportingUserID
      reportedUserID
      reportingUser {
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
              owner
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
              expoPushToken
              createdAt
              updatedAt
              owner
            }
            createdAt
            updatedAt
            owner
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
              expoPushToken
              createdAt
              updatedAt
              owner
            }
            createdAt
            updatedAt
            owner
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
              expoPushToken
              createdAt
              updatedAt
              owner
            }
            responses {
              q
              a
            }
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        expoPushToken
        createdAt
        updatedAt
        owner
      }
      reportedUser {
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
              owner
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
              expoPushToken
              createdAt
              updatedAt
              owner
            }
            createdAt
            updatedAt
            owner
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
              expoPushToken
              createdAt
              updatedAt
              owner
            }
            createdAt
            updatedAt
            owner
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
              expoPushToken
              createdAt
              updatedAt
              owner
            }
            responses {
              q
              a
            }
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        expoPushToken
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listReports = /* GraphQL */ `
  query ListReports(
    $filter: ModelReportFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReports(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        message {
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
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            friendGroups {
              items {
                id
                groupID
                userID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            quizzes {
              items {
                id
                userID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            expoPushToken
            createdAt
            updatedAt
            owner
          }
          body
          createdAt
          updatedAt
          groupType
          owner
        }
        title
        body
        reportingUserID
        reportedUserID
        reportingUser {
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
                owner
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
                expoPushToken
                createdAt
                updatedAt
                owner
              }
              createdAt
              updatedAt
              owner
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
                expoPushToken
                createdAt
                updatedAt
                owner
              }
              createdAt
              updatedAt
              owner
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
                expoPushToken
                createdAt
                updatedAt
                owner
              }
              responses {
                q
                a
              }
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          expoPushToken
          createdAt
          updatedAt
          owner
        }
        reportedUser {
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
                owner
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
                expoPushToken
                createdAt
                updatedAt
                owner
              }
              createdAt
              updatedAt
              owner
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
                expoPushToken
                createdAt
                updatedAt
                owner
              }
              createdAt
              updatedAt
              owner
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
                expoPushToken
                createdAt
                updatedAt
                owner
              }
              responses {
                q
                a
              }
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          expoPushToken
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getChatMessage = /* GraphQL */ `
  query GetChatMessage($id: ID!) {
    getChatMessage(id: $id) {
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
              owner
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
              expoPushToken
              createdAt
              updatedAt
              owner
            }
            createdAt
            updatedAt
            owner
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
              expoPushToken
              createdAt
              updatedAt
              owner
            }
            createdAt
            updatedAt
            owner
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
              expoPushToken
              createdAt
              updatedAt
              owner
            }
            responses {
              q
              a
            }
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        expoPushToken
        createdAt
        updatedAt
        owner
      }
      body
      createdAt
      updatedAt
      groupType
      owner
    }
  }
`;
export const listChatMessages = /* GraphQL */ `
  query ListChatMessages(
    $filter: ModelChatMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChatMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
                owner
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
                expoPushToken
                createdAt
                updatedAt
                owner
              }
              createdAt
              updatedAt
              owner
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
                expoPushToken
                createdAt
                updatedAt
                owner
              }
              createdAt
              updatedAt
              owner
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
                expoPushToken
                createdAt
                updatedAt
                owner
              }
              responses {
                q
                a
              }
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          expoPushToken
          createdAt
          updatedAt
          owner
        }
        body
        createdAt
        updatedAt
        groupType
        owner
      }
      nextToken
    }
  }
`;
export const getCourseGroupConnection = /* GraphQL */ `
  query GetCourseGroupConnection($id: ID!) {
    getCourseGroupConnection(id: $id) {
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
              owner
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
              expoPushToken
              createdAt
              updatedAt
              owner
            }
            createdAt
            updatedAt
            owner
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
              expoPushToken
              createdAt
              updatedAt
              owner
            }
            body
            createdAt
            updatedAt
            groupType
            owner
          }
          nextToken
        }
        createdAt
        updatedAt
        owner
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
              owner
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
              expoPushToken
              createdAt
              updatedAt
              owner
            }
            createdAt
            updatedAt
            owner
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
              expoPushToken
              createdAt
              updatedAt
              owner
            }
            createdAt
            updatedAt
            owner
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
              expoPushToken
              createdAt
              updatedAt
              owner
            }
            responses {
              q
              a
            }
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        expoPushToken
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listCourseGroupConnections = /* GraphQL */ `
  query ListCourseGroupConnections(
    $filter: ModelCourseGroupConnectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCourseGroupConnections(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
                owner
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
                expoPushToken
                createdAt
                updatedAt
                owner
              }
              createdAt
              updatedAt
              owner
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
                expoPushToken
                createdAt
                updatedAt
                owner
              }
              body
              createdAt
              updatedAt
              groupType
              owner
            }
            nextToken
          }
          createdAt
          updatedAt
          owner
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
                owner
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
                expoPushToken
                createdAt
                updatedAt
                owner
              }
              createdAt
              updatedAt
              owner
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
                expoPushToken
                createdAt
                updatedAt
                owner
              }
              createdAt
              updatedAt
              owner
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
                expoPushToken
                createdAt
                updatedAt
                owner
              }
              responses {
                q
                a
              }
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          expoPushToken
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getFriendGroupConnection = /* GraphQL */ `
  query GetFriendGroupConnection($id: ID!) {
    getFriendGroupConnection(id: $id) {
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
              users {
                nextToken
              }
              groupID
              title
              messages {
                nextToken
              }
              owner
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
              expoPushToken
              createdAt
              updatedAt
              owner
            }
            createdAt
            updatedAt
            owner
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
              expoPushToken
              createdAt
              updatedAt
              owner
            }
            body
            createdAt
            updatedAt
            groupType
            owner
          }
          nextToken
        }
        owner
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
              owner
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
              expoPushToken
              createdAt
              updatedAt
              owner
            }
            createdAt
            updatedAt
            owner
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
              expoPushToken
              createdAt
              updatedAt
              owner
            }
            createdAt
            updatedAt
            owner
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
              expoPushToken
              createdAt
              updatedAt
              owner
            }
            responses {
              q
              a
            }
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        expoPushToken
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listFriendGroupConnections = /* GraphQL */ `
  query ListFriendGroupConnections(
    $filter: ModelFriendGroupConnectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFriendGroupConnections(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
                expoPushToken
                createdAt
                updatedAt
                owner
              }
              createdAt
              updatedAt
              owner
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
                expoPushToken
                createdAt
                updatedAt
                owner
              }
              body
              createdAt
              updatedAt
              groupType
              owner
            }
            nextToken
          }
          owner
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
                owner
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
                expoPushToken
                createdAt
                updatedAt
                owner
              }
              createdAt
              updatedAt
              owner
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
                expoPushToken
                createdAt
                updatedAt
                owner
              }
              createdAt
              updatedAt
              owner
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
                expoPushToken
                createdAt
                updatedAt
                owner
              }
              responses {
                q
                a
              }
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          expoPushToken
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getQuiz = /* GraphQL */ `
  query GetQuiz($id: ID!) {
    getQuiz(id: $id) {
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
              owner
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
              expoPushToken
              createdAt
              updatedAt
              owner
            }
            createdAt
            updatedAt
            owner
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
              expoPushToken
              createdAt
              updatedAt
              owner
            }
            createdAt
            updatedAt
            owner
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
              expoPushToken
              createdAt
              updatedAt
              owner
            }
            responses {
              q
              a
            }
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        expoPushToken
        createdAt
        updatedAt
        owner
      }
      responses {
        q
        a
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listQuizs = /* GraphQL */ `
  query ListQuizs(
    $filter: ModelQuizFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuizs(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
                owner
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
                expoPushToken
                createdAt
                updatedAt
                owner
              }
              createdAt
              updatedAt
              owner
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
                expoPushToken
                createdAt
                updatedAt
                owner
              }
              createdAt
              updatedAt
              owner
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
                expoPushToken
                createdAt
                updatedAt
                owner
              }
              responses {
                q
                a
              }
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          expoPushToken
          createdAt
          updatedAt
          owner
        }
        responses {
          q
          a
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const userByUniYear = /* GraphQL */ `
  query UserByUniYear(
    $university: String
    $year: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    UserByUniYear(
      university: $university
      year: $year
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
              owner
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
              expoPushToken
              createdAt
              updatedAt
              owner
            }
            createdAt
            updatedAt
            owner
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
              expoPushToken
              createdAt
              updatedAt
              owner
            }
            createdAt
            updatedAt
            owner
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
              expoPushToken
              createdAt
              updatedAt
              owner
            }
            responses {
              q
              a
            }
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        expoPushToken
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const messagesByCourseGroupChatId = /* GraphQL */ `
  query MessagesByCourseGroupChatId(
    $groupChatID: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelChatMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    messagesByCourseGroupChatID(
      groupChatID: $groupChatID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
                owner
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
                expoPushToken
                createdAt
                updatedAt
                owner
              }
              createdAt
              updatedAt
              owner
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
                expoPushToken
                createdAt
                updatedAt
                owner
              }
              createdAt
              updatedAt
              owner
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
                expoPushToken
                createdAt
                updatedAt
                owner
              }
              responses {
                q
                a
              }
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          expoPushToken
          createdAt
          updatedAt
          owner
        }
        body
        createdAt
        updatedAt
        groupType
        owner
      }
      nextToken
    }
  }
`;
export const courseGroupByUser = /* GraphQL */ `
  query CourseGroupByUser(
    $userID: String
    $groupID: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCourseGroupConnectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    CourseGroupByUser(
      userID: $userID
      groupID: $groupID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
                owner
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
                expoPushToken
                createdAt
                updatedAt
                owner
              }
              createdAt
              updatedAt
              owner
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
                expoPushToken
                createdAt
                updatedAt
                owner
              }
              body
              createdAt
              updatedAt
              groupType
              owner
            }
            nextToken
          }
          createdAt
          updatedAt
          owner
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
                owner
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
                expoPushToken
                createdAt
                updatedAt
                owner
              }
              createdAt
              updatedAt
              owner
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
                expoPushToken
                createdAt
                updatedAt
                owner
              }
              createdAt
              updatedAt
              owner
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
                expoPushToken
                createdAt
                updatedAt
                owner
              }
              responses {
                q
                a
              }
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          expoPushToken
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const friendGroupByUser = /* GraphQL */ `
  query FriendGroupByUser(
    $userID: String
    $groupID: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelFriendGroupConnectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    FriendGroupByUser(
      userID: $userID
      groupID: $groupID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
                expoPushToken
                createdAt
                updatedAt
                owner
              }
              createdAt
              updatedAt
              owner
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
                expoPushToken
                createdAt
                updatedAt
                owner
              }
              body
              createdAt
              updatedAt
              groupType
              owner
            }
            nextToken
          }
          owner
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
                owner
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
                expoPushToken
                createdAt
                updatedAt
                owner
              }
              createdAt
              updatedAt
              owner
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
                expoPushToken
                createdAt
                updatedAt
                owner
              }
              createdAt
              updatedAt
              owner
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
                expoPushToken
                createdAt
                updatedAt
                owner
              }
              responses {
                q
                a
              }
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          expoPushToken
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
