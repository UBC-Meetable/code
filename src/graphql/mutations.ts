/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const pushNotification = /* GraphQL */ `
  mutation PushNotification($input: pushNotificationInput) {
    pushNotification(input: $input) {
      statusCode
      body
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
      interests
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
            events {
              items {
                id
                title
                description
                startTime
                endTime
                location
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            messages {
              items {
                id
                eventID
                groupChatID
                directChatID
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
            interests
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
            events {
              items {
                id
                userID
                eventID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            expoPushToken
            multipleGroupsOptIn
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
                eventID
                groupChatID
                directChatID
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
            interests
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
            events {
              items {
                id
                userID
                eventID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            expoPushToken
            multipleGroupsOptIn
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
            interests
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
            events {
              items {
                id
                userID
                eventID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            expoPushToken
            multipleGroupsOptIn
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
      events {
        items {
          id
          userID
          eventID
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
            interests
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
            events {
              items {
                id
                userID
                eventID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            expoPushToken
            multipleGroupsOptIn
            createdAt
            updatedAt
            owner
          }
          event {
            id
            title
            description
            startTime
            endTime
            location
            courseGroup {
              users {
                nextToken
              }
              title
              groupID
              code
              section
              events {
                nextToken
              }
              messages {
                nextToken
              }
              createdAt
              updatedAt
              owner
            }
            attendees {
              items {
                id
                userID
                eventID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            messages {
              items {
                id
                eventID
                groupChatID
                directChatID
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
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      expoPushToken
      multipleGroupsOptIn
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
      interests
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
            events {
              items {
                id
                title
                description
                startTime
                endTime
                location
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            messages {
              items {
                id
                eventID
                groupChatID
                directChatID
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
            interests
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
            events {
              items {
                id
                userID
                eventID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            expoPushToken
            multipleGroupsOptIn
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
                eventID
                groupChatID
                directChatID
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
            interests
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
            events {
              items {
                id
                userID
                eventID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            expoPushToken
            multipleGroupsOptIn
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
            interests
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
            events {
              items {
                id
                userID
                eventID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            expoPushToken
            multipleGroupsOptIn
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
      events {
        items {
          id
          userID
          eventID
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
            interests
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
            events {
              items {
                id
                userID
                eventID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            expoPushToken
            multipleGroupsOptIn
            createdAt
            updatedAt
            owner
          }
          event {
            id
            title
            description
            startTime
            endTime
            location
            courseGroup {
              users {
                nextToken
              }
              title
              groupID
              code
              section
              events {
                nextToken
              }
              messages {
                nextToken
              }
              createdAt
              updatedAt
              owner
            }
            attendees {
              items {
                id
                userID
                eventID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            messages {
              items {
                id
                eventID
                groupChatID
                directChatID
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
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      expoPushToken
      multipleGroupsOptIn
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
      interests
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
            events {
              items {
                id
                title
                description
                startTime
                endTime
                location
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            messages {
              items {
                id
                eventID
                groupChatID
                directChatID
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
            interests
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
            events {
              items {
                id
                userID
                eventID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            expoPushToken
            multipleGroupsOptIn
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
                eventID
                groupChatID
                directChatID
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
            interests
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
            events {
              items {
                id
                userID
                eventID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            expoPushToken
            multipleGroupsOptIn
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
            interests
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
            events {
              items {
                id
                userID
                eventID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            expoPushToken
            multipleGroupsOptIn
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
      events {
        items {
          id
          userID
          eventID
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
            interests
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
            events {
              items {
                id
                userID
                eventID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            expoPushToken
            multipleGroupsOptIn
            createdAt
            updatedAt
            owner
          }
          event {
            id
            title
            description
            startTime
            endTime
            location
            courseGroup {
              users {
                nextToken
              }
              title
              groupID
              code
              section
              events {
                nextToken
              }
              messages {
                nextToken
              }
              createdAt
              updatedAt
              owner
            }
            attendees {
              items {
                id
                userID
                eventID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            messages {
              items {
                id
                eventID
                groupChatID
                directChatID
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
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      expoPushToken
      multipleGroupsOptIn
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
            events {
              items {
                id
                title
                description
                startTime
                endTime
                location
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            messages {
              items {
                id
                eventID
                groupChatID
                directChatID
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
            interests
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
            events {
              items {
                id
                userID
                eventID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            expoPushToken
            multipleGroupsOptIn
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
      events {
        items {
          id
          title
          description
          startTime
          endTime
          location
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
            events {
              items {
                id
                title
                description
                startTime
                endTime
                location
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            messages {
              items {
                id
                eventID
                groupChatID
                directChatID
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
          attendees {
            items {
              id
              userID
              eventID
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
                interests
                expoPushToken
                multipleGroupsOptIn
                createdAt
                updatedAt
                owner
              }
              event {
                id
                title
                description
                startTime
                endTime
                location
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
          messages {
            items {
              id
              eventID
              groupChatID
              directChatID
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
                interests
                expoPushToken
                multipleGroupsOptIn
                createdAt
                updatedAt
                owner
              }
              body
              files {
                fileURI
                width
                height
                type
              }
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
      messages {
        items {
          id
          eventID
          groupChatID
          directChatID
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
            interests
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
            events {
              items {
                id
                userID
                eventID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            expoPushToken
            multipleGroupsOptIn
            createdAt
            updatedAt
            owner
          }
          body
          files {
            fileURI
            width
            height
            type
          }
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
            events {
              items {
                id
                title
                description
                startTime
                endTime
                location
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            messages {
              items {
                id
                eventID
                groupChatID
                directChatID
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
            interests
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
            events {
              items {
                id
                userID
                eventID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            expoPushToken
            multipleGroupsOptIn
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
      events {
        items {
          id
          title
          description
          startTime
          endTime
          location
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
            events {
              items {
                id
                title
                description
                startTime
                endTime
                location
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            messages {
              items {
                id
                eventID
                groupChatID
                directChatID
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
          attendees {
            items {
              id
              userID
              eventID
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
                interests
                expoPushToken
                multipleGroupsOptIn
                createdAt
                updatedAt
                owner
              }
              event {
                id
                title
                description
                startTime
                endTime
                location
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
          messages {
            items {
              id
              eventID
              groupChatID
              directChatID
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
                interests
                expoPushToken
                multipleGroupsOptIn
                createdAt
                updatedAt
                owner
              }
              body
              files {
                fileURI
                width
                height
                type
              }
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
      messages {
        items {
          id
          eventID
          groupChatID
          directChatID
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
            interests
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
            events {
              items {
                id
                userID
                eventID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            expoPushToken
            multipleGroupsOptIn
            createdAt
            updatedAt
            owner
          }
          body
          files {
            fileURI
            width
            height
            type
          }
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
            events {
              items {
                id
                title
                description
                startTime
                endTime
                location
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            messages {
              items {
                id
                eventID
                groupChatID
                directChatID
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
            interests
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
            events {
              items {
                id
                userID
                eventID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            expoPushToken
            multipleGroupsOptIn
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
      events {
        items {
          id
          title
          description
          startTime
          endTime
          location
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
            events {
              items {
                id
                title
                description
                startTime
                endTime
                location
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            messages {
              items {
                id
                eventID
                groupChatID
                directChatID
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
          attendees {
            items {
              id
              userID
              eventID
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
                interests
                expoPushToken
                multipleGroupsOptIn
                createdAt
                updatedAt
                owner
              }
              event {
                id
                title
                description
                startTime
                endTime
                location
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
          messages {
            items {
              id
              eventID
              groupChatID
              directChatID
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
                interests
                expoPushToken
                multipleGroupsOptIn
                createdAt
                updatedAt
                owner
              }
              body
              files {
                fileURI
                width
                height
                type
              }
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
      messages {
        items {
          id
          eventID
          groupChatID
          directChatID
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
            interests
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
            events {
              items {
                id
                userID
                eventID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            expoPushToken
            multipleGroupsOptIn
            createdAt
            updatedAt
            owner
          }
          body
          files {
            fileURI
            width
            height
            type
          }
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
export const createEventAttendee = /* GraphQL */ `
  mutation CreateEventAttendee(
    $input: CreateEventAttendeeInput!
    $condition: ModelEventAttendeeConditionInput
  ) {
    createEventAttendee(input: $input, condition: $condition) {
      id
      userID
      eventID
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
        interests
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
              events {
                nextToken
              }
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
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
        events {
          items {
            id
            userID
            eventID
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
              createdAt
              updatedAt
              owner
            }
            event {
              id
              title
              description
              startTime
              endTime
              location
              courseGroup {
                title
                groupID
                code
                section
                createdAt
                updatedAt
                owner
              }
              attendees {
                nextToken
              }
              messages {
                nextToken
              }
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
        expoPushToken
        multipleGroupsOptIn
        createdAt
        updatedAt
        owner
      }
      event {
        id
        title
        description
        startTime
        endTime
        location
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
                interests
                expoPushToken
                multipleGroupsOptIn
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
          events {
            items {
              id
              title
              description
              startTime
              endTime
              location
              courseGroup {
                title
                groupID
                code
                section
                createdAt
                updatedAt
                owner
              }
              attendees {
                nextToken
              }
              messages {
                nextToken
              }
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          messages {
            items {
              id
              eventID
              groupChatID
              directChatID
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
                interests
                expoPushToken
                multipleGroupsOptIn
                createdAt
                updatedAt
                owner
              }
              body
              files {
                fileURI
                width
                height
                type
              }
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
        attendees {
          items {
            id
            userID
            eventID
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
              createdAt
              updatedAt
              owner
            }
            event {
              id
              title
              description
              startTime
              endTime
              location
              courseGroup {
                title
                groupID
                code
                section
                createdAt
                updatedAt
                owner
              }
              attendees {
                nextToken
              }
              messages {
                nextToken
              }
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
        messages {
          items {
            id
            eventID
            groupChatID
            directChatID
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
              createdAt
              updatedAt
              owner
            }
            body
            files {
              fileURI
              width
              height
              type
            }
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
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateEventAttendee = /* GraphQL */ `
  mutation UpdateEventAttendee(
    $input: UpdateEventAttendeeInput!
    $condition: ModelEventAttendeeConditionInput
  ) {
    updateEventAttendee(input: $input, condition: $condition) {
      id
      userID
      eventID
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
        interests
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
              events {
                nextToken
              }
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
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
        events {
          items {
            id
            userID
            eventID
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
              createdAt
              updatedAt
              owner
            }
            event {
              id
              title
              description
              startTime
              endTime
              location
              courseGroup {
                title
                groupID
                code
                section
                createdAt
                updatedAt
                owner
              }
              attendees {
                nextToken
              }
              messages {
                nextToken
              }
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
        expoPushToken
        multipleGroupsOptIn
        createdAt
        updatedAt
        owner
      }
      event {
        id
        title
        description
        startTime
        endTime
        location
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
                interests
                expoPushToken
                multipleGroupsOptIn
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
          events {
            items {
              id
              title
              description
              startTime
              endTime
              location
              courseGroup {
                title
                groupID
                code
                section
                createdAt
                updatedAt
                owner
              }
              attendees {
                nextToken
              }
              messages {
                nextToken
              }
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          messages {
            items {
              id
              eventID
              groupChatID
              directChatID
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
                interests
                expoPushToken
                multipleGroupsOptIn
                createdAt
                updatedAt
                owner
              }
              body
              files {
                fileURI
                width
                height
                type
              }
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
        attendees {
          items {
            id
            userID
            eventID
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
              createdAt
              updatedAt
              owner
            }
            event {
              id
              title
              description
              startTime
              endTime
              location
              courseGroup {
                title
                groupID
                code
                section
                createdAt
                updatedAt
                owner
              }
              attendees {
                nextToken
              }
              messages {
                nextToken
              }
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
        messages {
          items {
            id
            eventID
            groupChatID
            directChatID
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
              createdAt
              updatedAt
              owner
            }
            body
            files {
              fileURI
              width
              height
              type
            }
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
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteEventAttendee = /* GraphQL */ `
  mutation DeleteEventAttendee(
    $input: DeleteEventAttendeeInput!
    $condition: ModelEventAttendeeConditionInput
  ) {
    deleteEventAttendee(input: $input, condition: $condition) {
      id
      userID
      eventID
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
        interests
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
              events {
                nextToken
              }
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
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
        events {
          items {
            id
            userID
            eventID
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
              createdAt
              updatedAt
              owner
            }
            event {
              id
              title
              description
              startTime
              endTime
              location
              courseGroup {
                title
                groupID
                code
                section
                createdAt
                updatedAt
                owner
              }
              attendees {
                nextToken
              }
              messages {
                nextToken
              }
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
        expoPushToken
        multipleGroupsOptIn
        createdAt
        updatedAt
        owner
      }
      event {
        id
        title
        description
        startTime
        endTime
        location
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
                interests
                expoPushToken
                multipleGroupsOptIn
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
          events {
            items {
              id
              title
              description
              startTime
              endTime
              location
              courseGroup {
                title
                groupID
                code
                section
                createdAt
                updatedAt
                owner
              }
              attendees {
                nextToken
              }
              messages {
                nextToken
              }
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          messages {
            items {
              id
              eventID
              groupChatID
              directChatID
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
                interests
                expoPushToken
                multipleGroupsOptIn
                createdAt
                updatedAt
                owner
              }
              body
              files {
                fileURI
                width
                height
                type
              }
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
        attendees {
          items {
            id
            userID
            eventID
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
              createdAt
              updatedAt
              owner
            }
            event {
              id
              title
              description
              startTime
              endTime
              location
              courseGroup {
                title
                groupID
                code
                section
                createdAt
                updatedAt
                owner
              }
              attendees {
                nextToken
              }
              messages {
                nextToken
              }
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
        messages {
          items {
            id
            eventID
            groupChatID
            directChatID
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
              createdAt
              updatedAt
              owner
            }
            body
            files {
              fileURI
              width
              height
              type
            }
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
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createEvent = /* GraphQL */ `
  mutation CreateEvent(
    $input: CreateEventInput!
    $condition: ModelEventConditionInput
  ) {
    createEvent(input: $input, condition: $condition) {
      id
      title
      description
      startTime
      endTime
      location
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
              events {
                nextToken
              }
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
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
        events {
          items {
            id
            title
            description
            startTime
            endTime
            location
            courseGroup {
              users {
                nextToken
              }
              title
              groupID
              code
              section
              events {
                nextToken
              }
              messages {
                nextToken
              }
              createdAt
              updatedAt
              owner
            }
            attendees {
              items {
                id
                userID
                eventID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            messages {
              items {
                id
                eventID
                groupChatID
                directChatID
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
          nextToken
        }
        messages {
          items {
            id
            eventID
            groupChatID
            directChatID
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
              createdAt
              updatedAt
              owner
            }
            body
            files {
              fileURI
              width
              height
              type
            }
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
      attendees {
        items {
          id
          userID
          eventID
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
            interests
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
            events {
              items {
                id
                userID
                eventID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            expoPushToken
            multipleGroupsOptIn
            createdAt
            updatedAt
            owner
          }
          event {
            id
            title
            description
            startTime
            endTime
            location
            courseGroup {
              users {
                nextToken
              }
              title
              groupID
              code
              section
              events {
                nextToken
              }
              messages {
                nextToken
              }
              createdAt
              updatedAt
              owner
            }
            attendees {
              items {
                id
                userID
                eventID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            messages {
              items {
                id
                eventID
                groupChatID
                directChatID
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
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      messages {
        items {
          id
          eventID
          groupChatID
          directChatID
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
            interests
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
            events {
              items {
                id
                userID
                eventID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            expoPushToken
            multipleGroupsOptIn
            createdAt
            updatedAt
            owner
          }
          body
          files {
            fileURI
            width
            height
            type
          }
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
export const updateEvent = /* GraphQL */ `
  mutation UpdateEvent(
    $input: UpdateEventInput!
    $condition: ModelEventConditionInput
  ) {
    updateEvent(input: $input, condition: $condition) {
      id
      title
      description
      startTime
      endTime
      location
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
              events {
                nextToken
              }
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
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
        events {
          items {
            id
            title
            description
            startTime
            endTime
            location
            courseGroup {
              users {
                nextToken
              }
              title
              groupID
              code
              section
              events {
                nextToken
              }
              messages {
                nextToken
              }
              createdAt
              updatedAt
              owner
            }
            attendees {
              items {
                id
                userID
                eventID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            messages {
              items {
                id
                eventID
                groupChatID
                directChatID
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
          nextToken
        }
        messages {
          items {
            id
            eventID
            groupChatID
            directChatID
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
              createdAt
              updatedAt
              owner
            }
            body
            files {
              fileURI
              width
              height
              type
            }
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
      attendees {
        items {
          id
          userID
          eventID
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
            interests
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
            events {
              items {
                id
                userID
                eventID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            expoPushToken
            multipleGroupsOptIn
            createdAt
            updatedAt
            owner
          }
          event {
            id
            title
            description
            startTime
            endTime
            location
            courseGroup {
              users {
                nextToken
              }
              title
              groupID
              code
              section
              events {
                nextToken
              }
              messages {
                nextToken
              }
              createdAt
              updatedAt
              owner
            }
            attendees {
              items {
                id
                userID
                eventID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            messages {
              items {
                id
                eventID
                groupChatID
                directChatID
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
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      messages {
        items {
          id
          eventID
          groupChatID
          directChatID
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
            interests
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
            events {
              items {
                id
                userID
                eventID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            expoPushToken
            multipleGroupsOptIn
            createdAt
            updatedAt
            owner
          }
          body
          files {
            fileURI
            width
            height
            type
          }
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
export const deleteEvent = /* GraphQL */ `
  mutation DeleteEvent(
    $input: DeleteEventInput!
    $condition: ModelEventConditionInput
  ) {
    deleteEvent(input: $input, condition: $condition) {
      id
      title
      description
      startTime
      endTime
      location
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
              events {
                nextToken
              }
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
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
        events {
          items {
            id
            title
            description
            startTime
            endTime
            location
            courseGroup {
              users {
                nextToken
              }
              title
              groupID
              code
              section
              events {
                nextToken
              }
              messages {
                nextToken
              }
              createdAt
              updatedAt
              owner
            }
            attendees {
              items {
                id
                userID
                eventID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            messages {
              items {
                id
                eventID
                groupChatID
                directChatID
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
          nextToken
        }
        messages {
          items {
            id
            eventID
            groupChatID
            directChatID
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
              createdAt
              updatedAt
              owner
            }
            body
            files {
              fileURI
              width
              height
              type
            }
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
      attendees {
        items {
          id
          userID
          eventID
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
            interests
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
            events {
              items {
                id
                userID
                eventID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            expoPushToken
            multipleGroupsOptIn
            createdAt
            updatedAt
            owner
          }
          event {
            id
            title
            description
            startTime
            endTime
            location
            courseGroup {
              users {
                nextToken
              }
              title
              groupID
              code
              section
              events {
                nextToken
              }
              messages {
                nextToken
              }
              createdAt
              updatedAt
              owner
            }
            attendees {
              items {
                id
                userID
                eventID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            messages {
              items {
                id
                eventID
                groupChatID
                directChatID
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
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      messages {
        items {
          id
          eventID
          groupChatID
          directChatID
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
            interests
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
            events {
              items {
                id
                userID
                eventID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            expoPushToken
            multipleGroupsOptIn
            createdAt
            updatedAt
            owner
          }
          body
          files {
            fileURI
            width
            height
            type
          }
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
export const createFriendGroup = /* GraphQL */ `
  mutation CreateFriendGroup(
    $input: CreateFriendGroupInput!
    $condition: ModelFriendGroupConditionInput
  ) {
    createFriendGroup(input: $input, condition: $condition) {
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
                eventID
                groupChatID
                directChatID
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
            interests
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
            events {
              items {
                id
                userID
                eventID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            expoPushToken
            multipleGroupsOptIn
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
          eventID
          groupChatID
          directChatID
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
            interests
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
            events {
              items {
                id
                userID
                eventID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            expoPushToken
            multipleGroupsOptIn
            createdAt
            updatedAt
            owner
          }
          body
          files {
            fileURI
            width
            height
            type
          }
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
export const updateFriendGroup = /* GraphQL */ `
  mutation UpdateFriendGroup(
    $input: UpdateFriendGroupInput!
    $condition: ModelFriendGroupConditionInput
  ) {
    updateFriendGroup(input: $input, condition: $condition) {
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
                eventID
                groupChatID
                directChatID
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
            interests
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
            events {
              items {
                id
                userID
                eventID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            expoPushToken
            multipleGroupsOptIn
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
          eventID
          groupChatID
          directChatID
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
            interests
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
            events {
              items {
                id
                userID
                eventID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            expoPushToken
            multipleGroupsOptIn
            createdAt
            updatedAt
            owner
          }
          body
          files {
            fileURI
            width
            height
            type
          }
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
export const deleteFriendGroup = /* GraphQL */ `
  mutation DeleteFriendGroup(
    $input: DeleteFriendGroupInput!
    $condition: ModelFriendGroupConditionInput
  ) {
    deleteFriendGroup(input: $input, condition: $condition) {
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
                eventID
                groupChatID
                directChatID
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
            interests
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
            events {
              items {
                id
                userID
                eventID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            expoPushToken
            multipleGroupsOptIn
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
          eventID
          groupChatID
          directChatID
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
            interests
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
            events {
              items {
                id
                userID
                eventID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            expoPushToken
            multipleGroupsOptIn
            createdAt
            updatedAt
            owner
          }
          body
          files {
            fileURI
            width
            height
            type
          }
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
export const createReport = /* GraphQL */ `
  mutation CreateReport(
    $input: CreateReportInput!
    $condition: ModelReportConditionInput
  ) {
    createReport(input: $input, condition: $condition) {
      id
      message {
        id
        eventID
        groupChatID
        directChatID
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
          interests
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
                interests
                expoPushToken
                multipleGroupsOptIn
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
                interests
                expoPushToken
                multipleGroupsOptIn
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
                interests
                expoPushToken
                multipleGroupsOptIn
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
          events {
            items {
              id
              userID
              eventID
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
                interests
                expoPushToken
                multipleGroupsOptIn
                createdAt
                updatedAt
                owner
              }
              event {
                id
                title
                description
                startTime
                endTime
                location
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
          expoPushToken
          multipleGroupsOptIn
          createdAt
          updatedAt
          owner
        }
        body
        files {
          fileURI
          width
          height
          type
        }
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
        interests
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
              events {
                nextToken
              }
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
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
        events {
          items {
            id
            userID
            eventID
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
              createdAt
              updatedAt
              owner
            }
            event {
              id
              title
              description
              startTime
              endTime
              location
              courseGroup {
                title
                groupID
                code
                section
                createdAt
                updatedAt
                owner
              }
              attendees {
                nextToken
              }
              messages {
                nextToken
              }
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
        expoPushToken
        multipleGroupsOptIn
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
        interests
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
              events {
                nextToken
              }
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
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
        events {
          items {
            id
            userID
            eventID
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
              createdAt
              updatedAt
              owner
            }
            event {
              id
              title
              description
              startTime
              endTime
              location
              courseGroup {
                title
                groupID
                code
                section
                createdAt
                updatedAt
                owner
              }
              attendees {
                nextToken
              }
              messages {
                nextToken
              }
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
        expoPushToken
        multipleGroupsOptIn
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
export const updateReport = /* GraphQL */ `
  mutation UpdateReport(
    $input: UpdateReportInput!
    $condition: ModelReportConditionInput
  ) {
    updateReport(input: $input, condition: $condition) {
      id
      message {
        id
        eventID
        groupChatID
        directChatID
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
          interests
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
                interests
                expoPushToken
                multipleGroupsOptIn
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
                interests
                expoPushToken
                multipleGroupsOptIn
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
                interests
                expoPushToken
                multipleGroupsOptIn
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
          events {
            items {
              id
              userID
              eventID
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
                interests
                expoPushToken
                multipleGroupsOptIn
                createdAt
                updatedAt
                owner
              }
              event {
                id
                title
                description
                startTime
                endTime
                location
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
          expoPushToken
          multipleGroupsOptIn
          createdAt
          updatedAt
          owner
        }
        body
        files {
          fileURI
          width
          height
          type
        }
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
        interests
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
              events {
                nextToken
              }
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
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
        events {
          items {
            id
            userID
            eventID
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
              createdAt
              updatedAt
              owner
            }
            event {
              id
              title
              description
              startTime
              endTime
              location
              courseGroup {
                title
                groupID
                code
                section
                createdAt
                updatedAt
                owner
              }
              attendees {
                nextToken
              }
              messages {
                nextToken
              }
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
        expoPushToken
        multipleGroupsOptIn
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
        interests
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
              events {
                nextToken
              }
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
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
        events {
          items {
            id
            userID
            eventID
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
              createdAt
              updatedAt
              owner
            }
            event {
              id
              title
              description
              startTime
              endTime
              location
              courseGroup {
                title
                groupID
                code
                section
                createdAt
                updatedAt
                owner
              }
              attendees {
                nextToken
              }
              messages {
                nextToken
              }
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
        expoPushToken
        multipleGroupsOptIn
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
export const deleteReport = /* GraphQL */ `
  mutation DeleteReport(
    $input: DeleteReportInput!
    $condition: ModelReportConditionInput
  ) {
    deleteReport(input: $input, condition: $condition) {
      id
      message {
        id
        eventID
        groupChatID
        directChatID
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
          interests
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
                interests
                expoPushToken
                multipleGroupsOptIn
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
                interests
                expoPushToken
                multipleGroupsOptIn
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
                interests
                expoPushToken
                multipleGroupsOptIn
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
          events {
            items {
              id
              userID
              eventID
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
                interests
                expoPushToken
                multipleGroupsOptIn
                createdAt
                updatedAt
                owner
              }
              event {
                id
                title
                description
                startTime
                endTime
                location
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
          expoPushToken
          multipleGroupsOptIn
          createdAt
          updatedAt
          owner
        }
        body
        files {
          fileURI
          width
          height
          type
        }
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
        interests
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
              events {
                nextToken
              }
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
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
        events {
          items {
            id
            userID
            eventID
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
              createdAt
              updatedAt
              owner
            }
            event {
              id
              title
              description
              startTime
              endTime
              location
              courseGroup {
                title
                groupID
                code
                section
                createdAt
                updatedAt
                owner
              }
              attendees {
                nextToken
              }
              messages {
                nextToken
              }
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
        expoPushToken
        multipleGroupsOptIn
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
        interests
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
              events {
                nextToken
              }
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
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
        events {
          items {
            id
            userID
            eventID
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
              createdAt
              updatedAt
              owner
            }
            event {
              id
              title
              description
              startTime
              endTime
              location
              courseGroup {
                title
                groupID
                code
                section
                createdAt
                updatedAt
                owner
              }
              attendees {
                nextToken
              }
              messages {
                nextToken
              }
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
        expoPushToken
        multipleGroupsOptIn
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
export const createDirectChat = /* GraphQL */ `
  mutation CreateDirectChat(
    $input: CreateDirectChatInput!
    $condition: ModelDirectChatConditionInput
  ) {
    createDirectChat(input: $input, condition: $condition) {
      id
      userID1
      userID2
      user1 {
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
        interests
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
              events {
                nextToken
              }
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
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
        events {
          items {
            id
            userID
            eventID
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
              createdAt
              updatedAt
              owner
            }
            event {
              id
              title
              description
              startTime
              endTime
              location
              courseGroup {
                title
                groupID
                code
                section
                createdAt
                updatedAt
                owner
              }
              attendees {
                nextToken
              }
              messages {
                nextToken
              }
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
        expoPushToken
        multipleGroupsOptIn
        createdAt
        updatedAt
        owner
      }
      user2 {
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
        interests
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
              events {
                nextToken
              }
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
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
        events {
          items {
            id
            userID
            eventID
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
              createdAt
              updatedAt
              owner
            }
            event {
              id
              title
              description
              startTime
              endTime
              location
              courseGroup {
                title
                groupID
                code
                section
                createdAt
                updatedAt
                owner
              }
              attendees {
                nextToken
              }
              messages {
                nextToken
              }
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
        expoPushToken
        multipleGroupsOptIn
        createdAt
        updatedAt
        owner
      }
      messages {
        items {
          id
          eventID
          groupChatID
          directChatID
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
            interests
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
            events {
              items {
                id
                userID
                eventID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            expoPushToken
            multipleGroupsOptIn
            createdAt
            updatedAt
            owner
          }
          body
          files {
            fileURI
            width
            height
            type
          }
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
export const updateDirectChat = /* GraphQL */ `
  mutation UpdateDirectChat(
    $input: UpdateDirectChatInput!
    $condition: ModelDirectChatConditionInput
  ) {
    updateDirectChat(input: $input, condition: $condition) {
      id
      userID1
      userID2
      user1 {
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
        interests
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
              events {
                nextToken
              }
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
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
        events {
          items {
            id
            userID
            eventID
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
              createdAt
              updatedAt
              owner
            }
            event {
              id
              title
              description
              startTime
              endTime
              location
              courseGroup {
                title
                groupID
                code
                section
                createdAt
                updatedAt
                owner
              }
              attendees {
                nextToken
              }
              messages {
                nextToken
              }
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
        expoPushToken
        multipleGroupsOptIn
        createdAt
        updatedAt
        owner
      }
      user2 {
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
        interests
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
              events {
                nextToken
              }
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
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
        events {
          items {
            id
            userID
            eventID
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
              createdAt
              updatedAt
              owner
            }
            event {
              id
              title
              description
              startTime
              endTime
              location
              courseGroup {
                title
                groupID
                code
                section
                createdAt
                updatedAt
                owner
              }
              attendees {
                nextToken
              }
              messages {
                nextToken
              }
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
        expoPushToken
        multipleGroupsOptIn
        createdAt
        updatedAt
        owner
      }
      messages {
        items {
          id
          eventID
          groupChatID
          directChatID
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
            interests
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
            events {
              items {
                id
                userID
                eventID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            expoPushToken
            multipleGroupsOptIn
            createdAt
            updatedAt
            owner
          }
          body
          files {
            fileURI
            width
            height
            type
          }
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
export const deleteDirectChat = /* GraphQL */ `
  mutation DeleteDirectChat(
    $input: DeleteDirectChatInput!
    $condition: ModelDirectChatConditionInput
  ) {
    deleteDirectChat(input: $input, condition: $condition) {
      id
      userID1
      userID2
      user1 {
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
        interests
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
              events {
                nextToken
              }
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
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
        events {
          items {
            id
            userID
            eventID
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
              createdAt
              updatedAt
              owner
            }
            event {
              id
              title
              description
              startTime
              endTime
              location
              courseGroup {
                title
                groupID
                code
                section
                createdAt
                updatedAt
                owner
              }
              attendees {
                nextToken
              }
              messages {
                nextToken
              }
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
        expoPushToken
        multipleGroupsOptIn
        createdAt
        updatedAt
        owner
      }
      user2 {
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
        interests
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
              events {
                nextToken
              }
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
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
        events {
          items {
            id
            userID
            eventID
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
              createdAt
              updatedAt
              owner
            }
            event {
              id
              title
              description
              startTime
              endTime
              location
              courseGroup {
                title
                groupID
                code
                section
                createdAt
                updatedAt
                owner
              }
              attendees {
                nextToken
              }
              messages {
                nextToken
              }
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
        expoPushToken
        multipleGroupsOptIn
        createdAt
        updatedAt
        owner
      }
      messages {
        items {
          id
          eventID
          groupChatID
          directChatID
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
            interests
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
            events {
              items {
                id
                userID
                eventID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            expoPushToken
            multipleGroupsOptIn
            createdAt
            updatedAt
            owner
          }
          body
          files {
            fileURI
            width
            height
            type
          }
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
export const createChatMessage = /* GraphQL */ `
  mutation CreateChatMessage(
    $input: CreateChatMessageInput!
    $condition: ModelChatMessageConditionInput
  ) {
    createChatMessage(input: $input, condition: $condition) {
      id
      eventID
      groupChatID
      directChatID
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
        interests
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
              events {
                nextToken
              }
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
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
        events {
          items {
            id
            userID
            eventID
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
              createdAt
              updatedAt
              owner
            }
            event {
              id
              title
              description
              startTime
              endTime
              location
              courseGroup {
                title
                groupID
                code
                section
                createdAt
                updatedAt
                owner
              }
              attendees {
                nextToken
              }
              messages {
                nextToken
              }
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
        expoPushToken
        multipleGroupsOptIn
        createdAt
        updatedAt
        owner
      }
      body
      files {
        fileURI
        width
        height
        type
      }
      createdAt
      updatedAt
      groupType
      owner
    }
  }
`;
export const updateChatMessage = /* GraphQL */ `
  mutation UpdateChatMessage(
    $input: UpdateChatMessageInput!
    $condition: ModelChatMessageConditionInput
  ) {
    updateChatMessage(input: $input, condition: $condition) {
      id
      eventID
      groupChatID
      directChatID
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
        interests
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
              events {
                nextToken
              }
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
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
        events {
          items {
            id
            userID
            eventID
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
              createdAt
              updatedAt
              owner
            }
            event {
              id
              title
              description
              startTime
              endTime
              location
              courseGroup {
                title
                groupID
                code
                section
                createdAt
                updatedAt
                owner
              }
              attendees {
                nextToken
              }
              messages {
                nextToken
              }
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
        expoPushToken
        multipleGroupsOptIn
        createdAt
        updatedAt
        owner
      }
      body
      files {
        fileURI
        width
        height
        type
      }
      createdAt
      updatedAt
      groupType
      owner
    }
  }
`;
export const deleteChatMessage = /* GraphQL */ `
  mutation DeleteChatMessage(
    $input: DeleteChatMessageInput!
    $condition: ModelChatMessageConditionInput
  ) {
    deleteChatMessage(input: $input, condition: $condition) {
      id
      eventID
      groupChatID
      directChatID
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
        interests
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
              events {
                nextToken
              }
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
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
        events {
          items {
            id
            userID
            eventID
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
              createdAt
              updatedAt
              owner
            }
            event {
              id
              title
              description
              startTime
              endTime
              location
              courseGroup {
                title
                groupID
                code
                section
                createdAt
                updatedAt
                owner
              }
              attendees {
                nextToken
              }
              messages {
                nextToken
              }
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
        expoPushToken
        multipleGroupsOptIn
        createdAt
        updatedAt
        owner
      }
      body
      files {
        fileURI
        width
        height
        type
      }
      createdAt
      updatedAt
      groupType
      owner
    }
  }
`;
export const createCourseGroupConnection = /* GraphQL */ `
  mutation CreateCourseGroupConnection(
    $input: CreateCourseGroupConnectionInput!
    $condition: ModelCourseGroupConnectionConditionInput
  ) {
    createCourseGroupConnection(input: $input, condition: $condition) {
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
              events {
                nextToken
              }
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
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
        events {
          items {
            id
            title
            description
            startTime
            endTime
            location
            courseGroup {
              users {
                nextToken
              }
              title
              groupID
              code
              section
              events {
                nextToken
              }
              messages {
                nextToken
              }
              createdAt
              updatedAt
              owner
            }
            attendees {
              items {
                id
                userID
                eventID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            messages {
              items {
                id
                eventID
                groupChatID
                directChatID
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
          nextToken
        }
        messages {
          items {
            id
            eventID
            groupChatID
            directChatID
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
              createdAt
              updatedAt
              owner
            }
            body
            files {
              fileURI
              width
              height
              type
            }
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
        interests
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
              events {
                nextToken
              }
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
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
        events {
          items {
            id
            userID
            eventID
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
              createdAt
              updatedAt
              owner
            }
            event {
              id
              title
              description
              startTime
              endTime
              location
              courseGroup {
                title
                groupID
                code
                section
                createdAt
                updatedAt
                owner
              }
              attendees {
                nextToken
              }
              messages {
                nextToken
              }
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
        expoPushToken
        multipleGroupsOptIn
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
export const updateCourseGroupConnection = /* GraphQL */ `
  mutation UpdateCourseGroupConnection(
    $input: UpdateCourseGroupConnectionInput!
    $condition: ModelCourseGroupConnectionConditionInput
  ) {
    updateCourseGroupConnection(input: $input, condition: $condition) {
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
              events {
                nextToken
              }
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
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
        events {
          items {
            id
            title
            description
            startTime
            endTime
            location
            courseGroup {
              users {
                nextToken
              }
              title
              groupID
              code
              section
              events {
                nextToken
              }
              messages {
                nextToken
              }
              createdAt
              updatedAt
              owner
            }
            attendees {
              items {
                id
                userID
                eventID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            messages {
              items {
                id
                eventID
                groupChatID
                directChatID
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
          nextToken
        }
        messages {
          items {
            id
            eventID
            groupChatID
            directChatID
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
              createdAt
              updatedAt
              owner
            }
            body
            files {
              fileURI
              width
              height
              type
            }
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
        interests
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
              events {
                nextToken
              }
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
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
        events {
          items {
            id
            userID
            eventID
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
              createdAt
              updatedAt
              owner
            }
            event {
              id
              title
              description
              startTime
              endTime
              location
              courseGroup {
                title
                groupID
                code
                section
                createdAt
                updatedAt
                owner
              }
              attendees {
                nextToken
              }
              messages {
                nextToken
              }
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
        expoPushToken
        multipleGroupsOptIn
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
export const deleteCourseGroupConnection = /* GraphQL */ `
  mutation DeleteCourseGroupConnection(
    $input: DeleteCourseGroupConnectionInput!
    $condition: ModelCourseGroupConnectionConditionInput
  ) {
    deleteCourseGroupConnection(input: $input, condition: $condition) {
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
              events {
                nextToken
              }
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
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
        events {
          items {
            id
            title
            description
            startTime
            endTime
            location
            courseGroup {
              users {
                nextToken
              }
              title
              groupID
              code
              section
              events {
                nextToken
              }
              messages {
                nextToken
              }
              createdAt
              updatedAt
              owner
            }
            attendees {
              items {
                id
                userID
                eventID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            messages {
              items {
                id
                eventID
                groupChatID
                directChatID
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
          nextToken
        }
        messages {
          items {
            id
            eventID
            groupChatID
            directChatID
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
              createdAt
              updatedAt
              owner
            }
            body
            files {
              fileURI
              width
              height
              type
            }
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
        interests
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
              events {
                nextToken
              }
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
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
        events {
          items {
            id
            userID
            eventID
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
              createdAt
              updatedAt
              owner
            }
            event {
              id
              title
              description
              startTime
              endTime
              location
              courseGroup {
                title
                groupID
                code
                section
                createdAt
                updatedAt
                owner
              }
              attendees {
                nextToken
              }
              messages {
                nextToken
              }
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
        expoPushToken
        multipleGroupsOptIn
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
export const createFriendGroupConnection = /* GraphQL */ `
  mutation CreateFriendGroupConnection(
    $input: CreateFriendGroupConnectionInput!
    $condition: ModelFriendGroupConnectionConditionInput
  ) {
    createFriendGroupConnection(input: $input, condition: $condition) {
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
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
            eventID
            groupChatID
            directChatID
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
              createdAt
              updatedAt
              owner
            }
            body
            files {
              fileURI
              width
              height
              type
            }
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
        interests
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
              events {
                nextToken
              }
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
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
        events {
          items {
            id
            userID
            eventID
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
              createdAt
              updatedAt
              owner
            }
            event {
              id
              title
              description
              startTime
              endTime
              location
              courseGroup {
                title
                groupID
                code
                section
                createdAt
                updatedAt
                owner
              }
              attendees {
                nextToken
              }
              messages {
                nextToken
              }
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
        expoPushToken
        multipleGroupsOptIn
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
export const updateFriendGroupConnection = /* GraphQL */ `
  mutation UpdateFriendGroupConnection(
    $input: UpdateFriendGroupConnectionInput!
    $condition: ModelFriendGroupConnectionConditionInput
  ) {
    updateFriendGroupConnection(input: $input, condition: $condition) {
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
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
            eventID
            groupChatID
            directChatID
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
              createdAt
              updatedAt
              owner
            }
            body
            files {
              fileURI
              width
              height
              type
            }
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
        interests
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
              events {
                nextToken
              }
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
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
        events {
          items {
            id
            userID
            eventID
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
              createdAt
              updatedAt
              owner
            }
            event {
              id
              title
              description
              startTime
              endTime
              location
              courseGroup {
                title
                groupID
                code
                section
                createdAt
                updatedAt
                owner
              }
              attendees {
                nextToken
              }
              messages {
                nextToken
              }
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
        expoPushToken
        multipleGroupsOptIn
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
export const deleteFriendGroupConnection = /* GraphQL */ `
  mutation DeleteFriendGroupConnection(
    $input: DeleteFriendGroupConnectionInput!
    $condition: ModelFriendGroupConnectionConditionInput
  ) {
    deleteFriendGroupConnection(input: $input, condition: $condition) {
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
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
            eventID
            groupChatID
            directChatID
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
              createdAt
              updatedAt
              owner
            }
            body
            files {
              fileURI
              width
              height
              type
            }
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
        interests
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
              events {
                nextToken
              }
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
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
        events {
          items {
            id
            userID
            eventID
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
              createdAt
              updatedAt
              owner
            }
            event {
              id
              title
              description
              startTime
              endTime
              location
              courseGroup {
                title
                groupID
                code
                section
                createdAt
                updatedAt
                owner
              }
              attendees {
                nextToken
              }
              messages {
                nextToken
              }
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
        expoPushToken
        multipleGroupsOptIn
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
export const createQuiz = /* GraphQL */ `
  mutation CreateQuiz(
    $input: CreateQuizInput!
    $condition: ModelQuizConditionInput
  ) {
    createQuiz(input: $input, condition: $condition) {
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
        interests
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
              events {
                nextToken
              }
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
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
        events {
          items {
            id
            userID
            eventID
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
              createdAt
              updatedAt
              owner
            }
            event {
              id
              title
              description
              startTime
              endTime
              location
              courseGroup {
                title
                groupID
                code
                section
                createdAt
                updatedAt
                owner
              }
              attendees {
                nextToken
              }
              messages {
                nextToken
              }
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
        expoPushToken
        multipleGroupsOptIn
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
export const updateQuiz = /* GraphQL */ `
  mutation UpdateQuiz(
    $input: UpdateQuizInput!
    $condition: ModelQuizConditionInput
  ) {
    updateQuiz(input: $input, condition: $condition) {
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
        interests
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
              events {
                nextToken
              }
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
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
        events {
          items {
            id
            userID
            eventID
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
              createdAt
              updatedAt
              owner
            }
            event {
              id
              title
              description
              startTime
              endTime
              location
              courseGroup {
                title
                groupID
                code
                section
                createdAt
                updatedAt
                owner
              }
              attendees {
                nextToken
              }
              messages {
                nextToken
              }
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
        expoPushToken
        multipleGroupsOptIn
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
export const deleteQuiz = /* GraphQL */ `
  mutation DeleteQuiz(
    $input: DeleteQuizInput!
    $condition: ModelQuizConditionInput
  ) {
    deleteQuiz(input: $input, condition: $condition) {
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
        interests
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
              events {
                nextToken
              }
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
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
        events {
          items {
            id
            userID
            eventID
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
              interests
              courseGroups {
                nextToken
              }
              friendGroups {
                nextToken
              }
              quizzes {
                nextToken
              }
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
              createdAt
              updatedAt
              owner
            }
            event {
              id
              title
              description
              startTime
              endTime
              location
              courseGroup {
                title
                groupID
                code
                section
                createdAt
                updatedAt
                owner
              }
              attendees {
                nextToken
              }
              messages {
                nextToken
              }
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
        expoPushToken
        multipleGroupsOptIn
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
