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
          userID
          courseGroupID
          user {
            id
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
                userID
                courseGroupID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            friendGroups {
              items {
                id
                userID
                friendGroupID
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
          courseGroup {
            users {
              items {
                id
                userID
                courseGroupID
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
                courseGroupEventsId
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            messages {
              items {
                id
                parentId
                body
                createdAt
                updatedAt
                courseGroupMessagesId
                eventMessagesId
                friendGroupMessagesId
                directChatMessagesId
                chatMessageAuthorId
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
      friendGroups {
        items {
          id
          userID
          friendGroupID
          user {
            id
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
                userID
                courseGroupID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            friendGroups {
              items {
                id
                userID
                friendGroupID
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
          friendGroup {
            users {
              items {
                id
                userID
                friendGroupID
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
                parentId
                body
                createdAt
                updatedAt
                courseGroupMessagesId
                eventMessagesId
                friendGroupMessagesId
                directChatMessagesId
                chatMessageAuthorId
                owner
              }
              nextToken
            }
            owner
            createdAt
            updatedAt
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
                userID
                courseGroupID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            friendGroups {
              items {
                id
                userID
                friendGroupID
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
            courseGroupEventsId
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
                parentId
                body
                createdAt
                updatedAt
                courseGroupMessagesId
                eventMessagesId
                friendGroupMessagesId
                directChatMessagesId
                chatMessageAuthorId
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
          userID
          courseGroupID
          user {
            id
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
                userID
                courseGroupID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            friendGroups {
              items {
                id
                userID
                friendGroupID
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
          courseGroup {
            users {
              items {
                id
                userID
                courseGroupID
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
                courseGroupEventsId
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            messages {
              items {
                id
                parentId
                body
                createdAt
                updatedAt
                courseGroupMessagesId
                eventMessagesId
                friendGroupMessagesId
                directChatMessagesId
                chatMessageAuthorId
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
      friendGroups {
        items {
          id
          userID
          friendGroupID
          user {
            id
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
                userID
                courseGroupID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            friendGroups {
              items {
                id
                userID
                friendGroupID
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
          friendGroup {
            users {
              items {
                id
                userID
                friendGroupID
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
                parentId
                body
                createdAt
                updatedAt
                courseGroupMessagesId
                eventMessagesId
                friendGroupMessagesId
                directChatMessagesId
                chatMessageAuthorId
                owner
              }
              nextToken
            }
            owner
            createdAt
            updatedAt
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
                userID
                courseGroupID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            friendGroups {
              items {
                id
                userID
                friendGroupID
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
            courseGroupEventsId
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
                parentId
                body
                createdAt
                updatedAt
                courseGroupMessagesId
                eventMessagesId
                friendGroupMessagesId
                directChatMessagesId
                chatMessageAuthorId
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
          userID
          courseGroupID
          user {
            id
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
                userID
                courseGroupID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            friendGroups {
              items {
                id
                userID
                friendGroupID
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
          courseGroup {
            users {
              items {
                id
                userID
                courseGroupID
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
                courseGroupEventsId
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            messages {
              items {
                id
                parentId
                body
                createdAt
                updatedAt
                courseGroupMessagesId
                eventMessagesId
                friendGroupMessagesId
                directChatMessagesId
                chatMessageAuthorId
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
      friendGroups {
        items {
          id
          userID
          friendGroupID
          user {
            id
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
                userID
                courseGroupID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            friendGroups {
              items {
                id
                userID
                friendGroupID
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
          friendGroup {
            users {
              items {
                id
                userID
                friendGroupID
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
                parentId
                body
                createdAt
                updatedAt
                courseGroupMessagesId
                eventMessagesId
                friendGroupMessagesId
                directChatMessagesId
                chatMessageAuthorId
                owner
              }
              nextToken
            }
            owner
            createdAt
            updatedAt
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
                userID
                courseGroupID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            friendGroups {
              items {
                id
                userID
                friendGroupID
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
            courseGroupEventsId
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
                parentId
                body
                createdAt
                updatedAt
                courseGroupMessagesId
                eventMessagesId
                friendGroupMessagesId
                directChatMessagesId
                chatMessageAuthorId
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
          userID
          courseGroupID
          user {
            id
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
                userID
                courseGroupID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            friendGroups {
              items {
                id
                userID
                friendGroupID
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
          courseGroup {
            users {
              items {
                id
                userID
                courseGroupID
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
                courseGroupEventsId
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            messages {
              items {
                id
                parentId
                body
                createdAt
                updatedAt
                courseGroupMessagesId
                eventMessagesId
                friendGroupMessagesId
                directChatMessagesId
                chatMessageAuthorId
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
          courseGroupEventsId
          courseGroup {
            users {
              items {
                id
                userID
                courseGroupID
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
                courseGroupEventsId
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            messages {
              items {
                id
                parentId
                body
                createdAt
                updatedAt
                courseGroupMessagesId
                eventMessagesId
                friendGroupMessagesId
                directChatMessagesId
                chatMessageAuthorId
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
                courseGroupEventsId
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
              parentId
              event {
                id
                title
                description
                startTime
                endTime
                location
                courseGroupEventsId
                createdAt
                updatedAt
                owner
              }
              groupChat {
                title
                groupID
                code
                section
                createdAt
                updatedAt
                owner
              }
              directChat {
                id
                userID1
                userID2
                createdAt
                updatedAt
                owner
              }
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
              courseGroupMessagesId
              eventMessagesId
              friendGroupMessagesId
              directChatMessagesId
              chatMessageAuthorId
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
          parentId
          event {
            id
            title
            description
            startTime
            endTime
            location
            courseGroupEventsId
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
                parentId
                body
                createdAt
                updatedAt
                courseGroupMessagesId
                eventMessagesId
                friendGroupMessagesId
                directChatMessagesId
                chatMessageAuthorId
                owner
              }
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          groupChat {
            users {
              items {
                id
                userID
                courseGroupID
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
                courseGroupEventsId
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            messages {
              items {
                id
                parentId
                body
                createdAt
                updatedAt
                courseGroupMessagesId
                eventMessagesId
                friendGroupMessagesId
                directChatMessagesId
                chatMessageAuthorId
                owner
              }
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          directChat {
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
                nextToken
              }
              friendGroups {
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
                nextToken
              }
              friendGroups {
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
            messages {
              items {
                id
                parentId
                body
                createdAt
                updatedAt
                courseGroupMessagesId
                eventMessagesId
                friendGroupMessagesId
                directChatMessagesId
                chatMessageAuthorId
                owner
              }
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
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
                userID
                courseGroupID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            friendGroups {
              items {
                id
                userID
                friendGroupID
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
          courseGroupMessagesId
          eventMessagesId
          friendGroupMessagesId
          directChatMessagesId
          chatMessageAuthorId
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
          userID
          courseGroupID
          user {
            id
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
                userID
                courseGroupID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            friendGroups {
              items {
                id
                userID
                friendGroupID
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
          courseGroup {
            users {
              items {
                id
                userID
                courseGroupID
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
                courseGroupEventsId
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            messages {
              items {
                id
                parentId
                body
                createdAt
                updatedAt
                courseGroupMessagesId
                eventMessagesId
                friendGroupMessagesId
                directChatMessagesId
                chatMessageAuthorId
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
          courseGroupEventsId
          courseGroup {
            users {
              items {
                id
                userID
                courseGroupID
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
                courseGroupEventsId
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            messages {
              items {
                id
                parentId
                body
                createdAt
                updatedAt
                courseGroupMessagesId
                eventMessagesId
                friendGroupMessagesId
                directChatMessagesId
                chatMessageAuthorId
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
                courseGroupEventsId
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
              parentId
              event {
                id
                title
                description
                startTime
                endTime
                location
                courseGroupEventsId
                createdAt
                updatedAt
                owner
              }
              groupChat {
                title
                groupID
                code
                section
                createdAt
                updatedAt
                owner
              }
              directChat {
                id
                userID1
                userID2
                createdAt
                updatedAt
                owner
              }
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
              courseGroupMessagesId
              eventMessagesId
              friendGroupMessagesId
              directChatMessagesId
              chatMessageAuthorId
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
          parentId
          event {
            id
            title
            description
            startTime
            endTime
            location
            courseGroupEventsId
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
                parentId
                body
                createdAt
                updatedAt
                courseGroupMessagesId
                eventMessagesId
                friendGroupMessagesId
                directChatMessagesId
                chatMessageAuthorId
                owner
              }
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          groupChat {
            users {
              items {
                id
                userID
                courseGroupID
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
                courseGroupEventsId
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            messages {
              items {
                id
                parentId
                body
                createdAt
                updatedAt
                courseGroupMessagesId
                eventMessagesId
                friendGroupMessagesId
                directChatMessagesId
                chatMessageAuthorId
                owner
              }
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          directChat {
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
                nextToken
              }
              friendGroups {
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
                nextToken
              }
              friendGroups {
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
            messages {
              items {
                id
                parentId
                body
                createdAt
                updatedAt
                courseGroupMessagesId
                eventMessagesId
                friendGroupMessagesId
                directChatMessagesId
                chatMessageAuthorId
                owner
              }
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
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
                userID
                courseGroupID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            friendGroups {
              items {
                id
                userID
                friendGroupID
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
          courseGroupMessagesId
          eventMessagesId
          friendGroupMessagesId
          directChatMessagesId
          chatMessageAuthorId
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
          userID
          courseGroupID
          user {
            id
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
                userID
                courseGroupID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            friendGroups {
              items {
                id
                userID
                friendGroupID
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
          courseGroup {
            users {
              items {
                id
                userID
                courseGroupID
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
                courseGroupEventsId
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            messages {
              items {
                id
                parentId
                body
                createdAt
                updatedAt
                courseGroupMessagesId
                eventMessagesId
                friendGroupMessagesId
                directChatMessagesId
                chatMessageAuthorId
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
          courseGroupEventsId
          courseGroup {
            users {
              items {
                id
                userID
                courseGroupID
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
                courseGroupEventsId
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            messages {
              items {
                id
                parentId
                body
                createdAt
                updatedAt
                courseGroupMessagesId
                eventMessagesId
                friendGroupMessagesId
                directChatMessagesId
                chatMessageAuthorId
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
                courseGroupEventsId
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
              parentId
              event {
                id
                title
                description
                startTime
                endTime
                location
                courseGroupEventsId
                createdAt
                updatedAt
                owner
              }
              groupChat {
                title
                groupID
                code
                section
                createdAt
                updatedAt
                owner
              }
              directChat {
                id
                userID1
                userID2
                createdAt
                updatedAt
                owner
              }
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
              courseGroupMessagesId
              eventMessagesId
              friendGroupMessagesId
              directChatMessagesId
              chatMessageAuthorId
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
          parentId
          event {
            id
            title
            description
            startTime
            endTime
            location
            courseGroupEventsId
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
                parentId
                body
                createdAt
                updatedAt
                courseGroupMessagesId
                eventMessagesId
                friendGroupMessagesId
                directChatMessagesId
                chatMessageAuthorId
                owner
              }
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          groupChat {
            users {
              items {
                id
                userID
                courseGroupID
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
                courseGroupEventsId
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            messages {
              items {
                id
                parentId
                body
                createdAt
                updatedAt
                courseGroupMessagesId
                eventMessagesId
                friendGroupMessagesId
                directChatMessagesId
                chatMessageAuthorId
                owner
              }
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          directChat {
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
                nextToken
              }
              friendGroups {
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
                nextToken
              }
              friendGroups {
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
            messages {
              items {
                id
                parentId
                body
                createdAt
                updatedAt
                courseGroupMessagesId
                eventMessagesId
                friendGroupMessagesId
                directChatMessagesId
                chatMessageAuthorId
                owner
              }
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
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
                userID
                courseGroupID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            friendGroups {
              items {
                id
                userID
                friendGroupID
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
          courseGroupMessagesId
          eventMessagesId
          friendGroupMessagesId
          directChatMessagesId
          chatMessageAuthorId
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
      courseGroupEventsId
      courseGroup {
        users {
          items {
            id
            userID
            courseGroupID
            user {
              id
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
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
              createdAt
              updatedAt
              owner
            }
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
            courseGroupEventsId
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
                parentId
                body
                createdAt
                updatedAt
                courseGroupMessagesId
                eventMessagesId
                friendGroupMessagesId
                directChatMessagesId
                chatMessageAuthorId
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
            parentId
            event {
              id
              title
              description
              startTime
              endTime
              location
              courseGroupEventsId
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
            groupChat {
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
            directChat {
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
                expoPushToken
                multipleGroupsOptIn
                createdAt
                updatedAt
                owner
              }
              messages {
                nextToken
              }
              createdAt
              updatedAt
              owner
            }
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
            courseGroupMessagesId
            eventMessagesId
            friendGroupMessagesId
            directChatMessagesId
            chatMessageAuthorId
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
                userID
                courseGroupID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            friendGroups {
              items {
                id
                userID
                friendGroupID
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
            courseGroupEventsId
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
                parentId
                body
                createdAt
                updatedAt
                courseGroupMessagesId
                eventMessagesId
                friendGroupMessagesId
                directChatMessagesId
                chatMessageAuthorId
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
          parentId
          event {
            id
            title
            description
            startTime
            endTime
            location
            courseGroupEventsId
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
                parentId
                body
                createdAt
                updatedAt
                courseGroupMessagesId
                eventMessagesId
                friendGroupMessagesId
                directChatMessagesId
                chatMessageAuthorId
                owner
              }
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          groupChat {
            users {
              items {
                id
                userID
                courseGroupID
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
                courseGroupEventsId
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            messages {
              items {
                id
                parentId
                body
                createdAt
                updatedAt
                courseGroupMessagesId
                eventMessagesId
                friendGroupMessagesId
                directChatMessagesId
                chatMessageAuthorId
                owner
              }
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          directChat {
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
                nextToken
              }
              friendGroups {
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
                nextToken
              }
              friendGroups {
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
            messages {
              items {
                id
                parentId
                body
                createdAt
                updatedAt
                courseGroupMessagesId
                eventMessagesId
                friendGroupMessagesId
                directChatMessagesId
                chatMessageAuthorId
                owner
              }
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
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
                userID
                courseGroupID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            friendGroups {
              items {
                id
                userID
                friendGroupID
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
          courseGroupMessagesId
          eventMessagesId
          friendGroupMessagesId
          directChatMessagesId
          chatMessageAuthorId
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
      courseGroupEventsId
      courseGroup {
        users {
          items {
            id
            userID
            courseGroupID
            user {
              id
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
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
              createdAt
              updatedAt
              owner
            }
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
            courseGroupEventsId
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
                parentId
                body
                createdAt
                updatedAt
                courseGroupMessagesId
                eventMessagesId
                friendGroupMessagesId
                directChatMessagesId
                chatMessageAuthorId
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
            parentId
            event {
              id
              title
              description
              startTime
              endTime
              location
              courseGroupEventsId
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
            groupChat {
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
            directChat {
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
                expoPushToken
                multipleGroupsOptIn
                createdAt
                updatedAt
                owner
              }
              messages {
                nextToken
              }
              createdAt
              updatedAt
              owner
            }
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
            courseGroupMessagesId
            eventMessagesId
            friendGroupMessagesId
            directChatMessagesId
            chatMessageAuthorId
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
                userID
                courseGroupID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            friendGroups {
              items {
                id
                userID
                friendGroupID
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
            courseGroupEventsId
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
                parentId
                body
                createdAt
                updatedAt
                courseGroupMessagesId
                eventMessagesId
                friendGroupMessagesId
                directChatMessagesId
                chatMessageAuthorId
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
          parentId
          event {
            id
            title
            description
            startTime
            endTime
            location
            courseGroupEventsId
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
                parentId
                body
                createdAt
                updatedAt
                courseGroupMessagesId
                eventMessagesId
                friendGroupMessagesId
                directChatMessagesId
                chatMessageAuthorId
                owner
              }
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          groupChat {
            users {
              items {
                id
                userID
                courseGroupID
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
                courseGroupEventsId
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            messages {
              items {
                id
                parentId
                body
                createdAt
                updatedAt
                courseGroupMessagesId
                eventMessagesId
                friendGroupMessagesId
                directChatMessagesId
                chatMessageAuthorId
                owner
              }
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          directChat {
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
                nextToken
              }
              friendGroups {
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
                nextToken
              }
              friendGroups {
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
            messages {
              items {
                id
                parentId
                body
                createdAt
                updatedAt
                courseGroupMessagesId
                eventMessagesId
                friendGroupMessagesId
                directChatMessagesId
                chatMessageAuthorId
                owner
              }
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
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
                userID
                courseGroupID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            friendGroups {
              items {
                id
                userID
                friendGroupID
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
          courseGroupMessagesId
          eventMessagesId
          friendGroupMessagesId
          directChatMessagesId
          chatMessageAuthorId
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
      courseGroupEventsId
      courseGroup {
        users {
          items {
            id
            userID
            courseGroupID
            user {
              id
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
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
              createdAt
              updatedAt
              owner
            }
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
            courseGroupEventsId
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
                parentId
                body
                createdAt
                updatedAt
                courseGroupMessagesId
                eventMessagesId
                friendGroupMessagesId
                directChatMessagesId
                chatMessageAuthorId
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
            parentId
            event {
              id
              title
              description
              startTime
              endTime
              location
              courseGroupEventsId
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
            groupChat {
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
            directChat {
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
                expoPushToken
                multipleGroupsOptIn
                createdAt
                updatedAt
                owner
              }
              messages {
                nextToken
              }
              createdAt
              updatedAt
              owner
            }
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
            courseGroupMessagesId
            eventMessagesId
            friendGroupMessagesId
            directChatMessagesId
            chatMessageAuthorId
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
                userID
                courseGroupID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            friendGroups {
              items {
                id
                userID
                friendGroupID
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
            courseGroupEventsId
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
                parentId
                body
                createdAt
                updatedAt
                courseGroupMessagesId
                eventMessagesId
                friendGroupMessagesId
                directChatMessagesId
                chatMessageAuthorId
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
          parentId
          event {
            id
            title
            description
            startTime
            endTime
            location
            courseGroupEventsId
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
                parentId
                body
                createdAt
                updatedAt
                courseGroupMessagesId
                eventMessagesId
                friendGroupMessagesId
                directChatMessagesId
                chatMessageAuthorId
                owner
              }
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          groupChat {
            users {
              items {
                id
                userID
                courseGroupID
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
                courseGroupEventsId
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            messages {
              items {
                id
                parentId
                body
                createdAt
                updatedAt
                courseGroupMessagesId
                eventMessagesId
                friendGroupMessagesId
                directChatMessagesId
                chatMessageAuthorId
                owner
              }
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          directChat {
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
                nextToken
              }
              friendGroups {
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
                nextToken
              }
              friendGroups {
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
            messages {
              items {
                id
                parentId
                body
                createdAt
                updatedAt
                courseGroupMessagesId
                eventMessagesId
                friendGroupMessagesId
                directChatMessagesId
                chatMessageAuthorId
                owner
              }
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
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
                userID
                courseGroupID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            friendGroups {
              items {
                id
                userID
                friendGroupID
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
          courseGroupMessagesId
          eventMessagesId
          friendGroupMessagesId
          directChatMessagesId
          chatMessageAuthorId
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
          userID
          friendGroupID
          user {
            id
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
                userID
                courseGroupID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            friendGroups {
              items {
                id
                userID
                friendGroupID
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
          friendGroup {
            users {
              items {
                id
                userID
                friendGroupID
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
                parentId
                body
                createdAt
                updatedAt
                courseGroupMessagesId
                eventMessagesId
                friendGroupMessagesId
                directChatMessagesId
                chatMessageAuthorId
                owner
              }
              nextToken
            }
            owner
            createdAt
            updatedAt
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
          parentId
          event {
            id
            title
            description
            startTime
            endTime
            location
            courseGroupEventsId
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
                parentId
                body
                createdAt
                updatedAt
                courseGroupMessagesId
                eventMessagesId
                friendGroupMessagesId
                directChatMessagesId
                chatMessageAuthorId
                owner
              }
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          groupChat {
            users {
              items {
                id
                userID
                courseGroupID
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
                courseGroupEventsId
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            messages {
              items {
                id
                parentId
                body
                createdAt
                updatedAt
                courseGroupMessagesId
                eventMessagesId
                friendGroupMessagesId
                directChatMessagesId
                chatMessageAuthorId
                owner
              }
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          directChat {
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
                nextToken
              }
              friendGroups {
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
                nextToken
              }
              friendGroups {
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
            messages {
              items {
                id
                parentId
                body
                createdAt
                updatedAt
                courseGroupMessagesId
                eventMessagesId
                friendGroupMessagesId
                directChatMessagesId
                chatMessageAuthorId
                owner
              }
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
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
                userID
                courseGroupID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            friendGroups {
              items {
                id
                userID
                friendGroupID
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
          courseGroupMessagesId
          eventMessagesId
          friendGroupMessagesId
          directChatMessagesId
          chatMessageAuthorId
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
          userID
          friendGroupID
          user {
            id
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
                userID
                courseGroupID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            friendGroups {
              items {
                id
                userID
                friendGroupID
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
          friendGroup {
            users {
              items {
                id
                userID
                friendGroupID
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
                parentId
                body
                createdAt
                updatedAt
                courseGroupMessagesId
                eventMessagesId
                friendGroupMessagesId
                directChatMessagesId
                chatMessageAuthorId
                owner
              }
              nextToken
            }
            owner
            createdAt
            updatedAt
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
          parentId
          event {
            id
            title
            description
            startTime
            endTime
            location
            courseGroupEventsId
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
                parentId
                body
                createdAt
                updatedAt
                courseGroupMessagesId
                eventMessagesId
                friendGroupMessagesId
                directChatMessagesId
                chatMessageAuthorId
                owner
              }
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          groupChat {
            users {
              items {
                id
                userID
                courseGroupID
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
                courseGroupEventsId
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            messages {
              items {
                id
                parentId
                body
                createdAt
                updatedAt
                courseGroupMessagesId
                eventMessagesId
                friendGroupMessagesId
                directChatMessagesId
                chatMessageAuthorId
                owner
              }
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          directChat {
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
                nextToken
              }
              friendGroups {
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
                nextToken
              }
              friendGroups {
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
            messages {
              items {
                id
                parentId
                body
                createdAt
                updatedAt
                courseGroupMessagesId
                eventMessagesId
                friendGroupMessagesId
                directChatMessagesId
                chatMessageAuthorId
                owner
              }
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
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
                userID
                courseGroupID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            friendGroups {
              items {
                id
                userID
                friendGroupID
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
          courseGroupMessagesId
          eventMessagesId
          friendGroupMessagesId
          directChatMessagesId
          chatMessageAuthorId
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
          userID
          friendGroupID
          user {
            id
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
                userID
                courseGroupID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            friendGroups {
              items {
                id
                userID
                friendGroupID
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
          friendGroup {
            users {
              items {
                id
                userID
                friendGroupID
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
                parentId
                body
                createdAt
                updatedAt
                courseGroupMessagesId
                eventMessagesId
                friendGroupMessagesId
                directChatMessagesId
                chatMessageAuthorId
                owner
              }
              nextToken
            }
            owner
            createdAt
            updatedAt
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
          parentId
          event {
            id
            title
            description
            startTime
            endTime
            location
            courseGroupEventsId
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
                parentId
                body
                createdAt
                updatedAt
                courseGroupMessagesId
                eventMessagesId
                friendGroupMessagesId
                directChatMessagesId
                chatMessageAuthorId
                owner
              }
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          groupChat {
            users {
              items {
                id
                userID
                courseGroupID
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
                courseGroupEventsId
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            messages {
              items {
                id
                parentId
                body
                createdAt
                updatedAt
                courseGroupMessagesId
                eventMessagesId
                friendGroupMessagesId
                directChatMessagesId
                chatMessageAuthorId
                owner
              }
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          directChat {
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
                nextToken
              }
              friendGroups {
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
                nextToken
              }
              friendGroups {
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
            messages {
              items {
                id
                parentId
                body
                createdAt
                updatedAt
                courseGroupMessagesId
                eventMessagesId
                friendGroupMessagesId
                directChatMessagesId
                chatMessageAuthorId
                owner
              }
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
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
                userID
                courseGroupID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            friendGroups {
              items {
                id
                userID
                friendGroupID
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
          courseGroupMessagesId
          eventMessagesId
          friendGroupMessagesId
          directChatMessagesId
          chatMessageAuthorId
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
            userID
            courseGroupID
            user {
              id
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
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
              createdAt
              updatedAt
              owner
            }
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
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        friendGroups {
          items {
            id
            userID
            friendGroupID
            user {
              id
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
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
              createdAt
              updatedAt
              owner
            }
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
              courseGroupEventsId
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
            userID
            courseGroupID
            user {
              id
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
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
              createdAt
              updatedAt
              owner
            }
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
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        friendGroups {
          items {
            id
            userID
            friendGroupID
            user {
              id
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
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
              createdAt
              updatedAt
              owner
            }
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
              courseGroupEventsId
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
          parentId
          event {
            id
            title
            description
            startTime
            endTime
            location
            courseGroupEventsId
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
                parentId
                body
                createdAt
                updatedAt
                courseGroupMessagesId
                eventMessagesId
                friendGroupMessagesId
                directChatMessagesId
                chatMessageAuthorId
                owner
              }
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          groupChat {
            users {
              items {
                id
                userID
                courseGroupID
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
                courseGroupEventsId
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            messages {
              items {
                id
                parentId
                body
                createdAt
                updatedAt
                courseGroupMessagesId
                eventMessagesId
                friendGroupMessagesId
                directChatMessagesId
                chatMessageAuthorId
                owner
              }
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          directChat {
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
                nextToken
              }
              friendGroups {
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
                nextToken
              }
              friendGroups {
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
            messages {
              items {
                id
                parentId
                body
                createdAt
                updatedAt
                courseGroupMessagesId
                eventMessagesId
                friendGroupMessagesId
                directChatMessagesId
                chatMessageAuthorId
                owner
              }
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
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
                userID
                courseGroupID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            friendGroups {
              items {
                id
                userID
                friendGroupID
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
          courseGroupMessagesId
          eventMessagesId
          friendGroupMessagesId
          directChatMessagesId
          chatMessageAuthorId
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
            userID
            courseGroupID
            user {
              id
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
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
              createdAt
              updatedAt
              owner
            }
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
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        friendGroups {
          items {
            id
            userID
            friendGroupID
            user {
              id
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
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
              createdAt
              updatedAt
              owner
            }
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
              courseGroupEventsId
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
            userID
            courseGroupID
            user {
              id
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
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
              createdAt
              updatedAt
              owner
            }
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
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        friendGroups {
          items {
            id
            userID
            friendGroupID
            user {
              id
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
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
              createdAt
              updatedAt
              owner
            }
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
              courseGroupEventsId
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
          parentId
          event {
            id
            title
            description
            startTime
            endTime
            location
            courseGroupEventsId
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
                parentId
                body
                createdAt
                updatedAt
                courseGroupMessagesId
                eventMessagesId
                friendGroupMessagesId
                directChatMessagesId
                chatMessageAuthorId
                owner
              }
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          groupChat {
            users {
              items {
                id
                userID
                courseGroupID
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
                courseGroupEventsId
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            messages {
              items {
                id
                parentId
                body
                createdAt
                updatedAt
                courseGroupMessagesId
                eventMessagesId
                friendGroupMessagesId
                directChatMessagesId
                chatMessageAuthorId
                owner
              }
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          directChat {
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
                nextToken
              }
              friendGroups {
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
                nextToken
              }
              friendGroups {
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
            messages {
              items {
                id
                parentId
                body
                createdAt
                updatedAt
                courseGroupMessagesId
                eventMessagesId
                friendGroupMessagesId
                directChatMessagesId
                chatMessageAuthorId
                owner
              }
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
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
                userID
                courseGroupID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            friendGroups {
              items {
                id
                userID
                friendGroupID
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
          courseGroupMessagesId
          eventMessagesId
          friendGroupMessagesId
          directChatMessagesId
          chatMessageAuthorId
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
            userID
            courseGroupID
            user {
              id
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
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
              createdAt
              updatedAt
              owner
            }
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
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        friendGroups {
          items {
            id
            userID
            friendGroupID
            user {
              id
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
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
              createdAt
              updatedAt
              owner
            }
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
              courseGroupEventsId
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
            userID
            courseGroupID
            user {
              id
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
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
              createdAt
              updatedAt
              owner
            }
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
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        friendGroups {
          items {
            id
            userID
            friendGroupID
            user {
              id
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
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
              createdAt
              updatedAt
              owner
            }
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
              courseGroupEventsId
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
          parentId
          event {
            id
            title
            description
            startTime
            endTime
            location
            courseGroupEventsId
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
                parentId
                body
                createdAt
                updatedAt
                courseGroupMessagesId
                eventMessagesId
                friendGroupMessagesId
                directChatMessagesId
                chatMessageAuthorId
                owner
              }
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          groupChat {
            users {
              items {
                id
                userID
                courseGroupID
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
                courseGroupEventsId
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            messages {
              items {
                id
                parentId
                body
                createdAt
                updatedAt
                courseGroupMessagesId
                eventMessagesId
                friendGroupMessagesId
                directChatMessagesId
                chatMessageAuthorId
                owner
              }
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          directChat {
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
                nextToken
              }
              friendGroups {
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
                nextToken
              }
              friendGroups {
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
            messages {
              items {
                id
                parentId
                body
                createdAt
                updatedAt
                courseGroupMessagesId
                eventMessagesId
                friendGroupMessagesId
                directChatMessagesId
                chatMessageAuthorId
                owner
              }
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
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
                userID
                courseGroupID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            friendGroups {
              items {
                id
                userID
                friendGroupID
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
          courseGroupMessagesId
          eventMessagesId
          friendGroupMessagesId
          directChatMessagesId
          chatMessageAuthorId
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
      parentId
      event {
        id
        title
        description
        startTime
        endTime
        location
        courseGroupEventsId
        courseGroup {
          users {
            items {
              id
              userID
              courseGroupID
              user {
                id
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
              courseGroup {
                title
                groupID
                code
                section
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
              courseGroupEventsId
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
              parentId
              event {
                id
                title
                description
                startTime
                endTime
                location
                courseGroupEventsId
                createdAt
                updatedAt
                owner
              }
              groupChat {
                title
                groupID
                code
                section
                createdAt
                updatedAt
                owner
              }
              directChat {
                id
                userID1
                userID2
                createdAt
                updatedAt
                owner
              }
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
              courseGroupMessagesId
              eventMessagesId
              friendGroupMessagesId
              directChatMessagesId
              chatMessageAuthorId
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
              courseGroupEventsId
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
            parentId
            event {
              id
              title
              description
              startTime
              endTime
              location
              courseGroupEventsId
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
            groupChat {
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
            directChat {
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
                expoPushToken
                multipleGroupsOptIn
                createdAt
                updatedAt
                owner
              }
              messages {
                nextToken
              }
              createdAt
              updatedAt
              owner
            }
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
            courseGroupMessagesId
            eventMessagesId
            friendGroupMessagesId
            directChatMessagesId
            chatMessageAuthorId
            owner
          }
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      groupChat {
        users {
          items {
            id
            userID
            courseGroupID
            user {
              id
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
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
              createdAt
              updatedAt
              owner
            }
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
            courseGroupEventsId
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
                parentId
                body
                createdAt
                updatedAt
                courseGroupMessagesId
                eventMessagesId
                friendGroupMessagesId
                directChatMessagesId
                chatMessageAuthorId
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
            parentId
            event {
              id
              title
              description
              startTime
              endTime
              location
              courseGroupEventsId
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
            groupChat {
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
            directChat {
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
                expoPushToken
                multipleGroupsOptIn
                createdAt
                updatedAt
                owner
              }
              messages {
                nextToken
              }
              createdAt
              updatedAt
              owner
            }
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
            courseGroupMessagesId
            eventMessagesId
            friendGroupMessagesId
            directChatMessagesId
            chatMessageAuthorId
            owner
          }
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      directChat {
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
              userID
              courseGroupID
              user {
                id
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
              courseGroup {
                title
                groupID
                code
                section
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
              userID
              friendGroupID
              user {
                id
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
              friendGroup {
                groupID
                title
                owner
                createdAt
                updatedAt
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
                courseGroupEventsId
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
              userID
              courseGroupID
              user {
                id
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
              courseGroup {
                title
                groupID
                code
                section
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
              userID
              friendGroupID
              user {
                id
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
              friendGroup {
                groupID
                title
                owner
                createdAt
                updatedAt
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
                courseGroupEventsId
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
            parentId
            event {
              id
              title
              description
              startTime
              endTime
              location
              courseGroupEventsId
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
            groupChat {
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
            directChat {
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
                expoPushToken
                multipleGroupsOptIn
                createdAt
                updatedAt
                owner
              }
              messages {
                nextToken
              }
              createdAt
              updatedAt
              owner
            }
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
            courseGroupMessagesId
            eventMessagesId
            friendGroupMessagesId
            directChatMessagesId
            chatMessageAuthorId
            owner
          }
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
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
            userID
            courseGroupID
            user {
              id
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
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
              createdAt
              updatedAt
              owner
            }
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
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        friendGroups {
          items {
            id
            userID
            friendGroupID
            user {
              id
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
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
              createdAt
              updatedAt
              owner
            }
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
              courseGroupEventsId
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
      courseGroupMessagesId
      eventMessagesId
      friendGroupMessagesId
      directChatMessagesId
      chatMessageAuthorId
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
      parentId
      event {
        id
        title
        description
        startTime
        endTime
        location
        courseGroupEventsId
        courseGroup {
          users {
            items {
              id
              userID
              courseGroupID
              user {
                id
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
              courseGroup {
                title
                groupID
                code
                section
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
              courseGroupEventsId
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
              parentId
              event {
                id
                title
                description
                startTime
                endTime
                location
                courseGroupEventsId
                createdAt
                updatedAt
                owner
              }
              groupChat {
                title
                groupID
                code
                section
                createdAt
                updatedAt
                owner
              }
              directChat {
                id
                userID1
                userID2
                createdAt
                updatedAt
                owner
              }
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
              courseGroupMessagesId
              eventMessagesId
              friendGroupMessagesId
              directChatMessagesId
              chatMessageAuthorId
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
              courseGroupEventsId
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
            parentId
            event {
              id
              title
              description
              startTime
              endTime
              location
              courseGroupEventsId
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
            groupChat {
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
            directChat {
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
                expoPushToken
                multipleGroupsOptIn
                createdAt
                updatedAt
                owner
              }
              messages {
                nextToken
              }
              createdAt
              updatedAt
              owner
            }
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
            courseGroupMessagesId
            eventMessagesId
            friendGroupMessagesId
            directChatMessagesId
            chatMessageAuthorId
            owner
          }
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      groupChat {
        users {
          items {
            id
            userID
            courseGroupID
            user {
              id
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
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
              createdAt
              updatedAt
              owner
            }
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
            courseGroupEventsId
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
                parentId
                body
                createdAt
                updatedAt
                courseGroupMessagesId
                eventMessagesId
                friendGroupMessagesId
                directChatMessagesId
                chatMessageAuthorId
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
            parentId
            event {
              id
              title
              description
              startTime
              endTime
              location
              courseGroupEventsId
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
            groupChat {
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
            directChat {
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
                expoPushToken
                multipleGroupsOptIn
                createdAt
                updatedAt
                owner
              }
              messages {
                nextToken
              }
              createdAt
              updatedAt
              owner
            }
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
            courseGroupMessagesId
            eventMessagesId
            friendGroupMessagesId
            directChatMessagesId
            chatMessageAuthorId
            owner
          }
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      directChat {
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
              userID
              courseGroupID
              user {
                id
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
              courseGroup {
                title
                groupID
                code
                section
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
              userID
              friendGroupID
              user {
                id
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
              friendGroup {
                groupID
                title
                owner
                createdAt
                updatedAt
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
                courseGroupEventsId
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
              userID
              courseGroupID
              user {
                id
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
              courseGroup {
                title
                groupID
                code
                section
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
              userID
              friendGroupID
              user {
                id
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
              friendGroup {
                groupID
                title
                owner
                createdAt
                updatedAt
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
                courseGroupEventsId
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
            parentId
            event {
              id
              title
              description
              startTime
              endTime
              location
              courseGroupEventsId
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
            groupChat {
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
            directChat {
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
                expoPushToken
                multipleGroupsOptIn
                createdAt
                updatedAt
                owner
              }
              messages {
                nextToken
              }
              createdAt
              updatedAt
              owner
            }
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
            courseGroupMessagesId
            eventMessagesId
            friendGroupMessagesId
            directChatMessagesId
            chatMessageAuthorId
            owner
          }
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
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
            userID
            courseGroupID
            user {
              id
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
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
              createdAt
              updatedAt
              owner
            }
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
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        friendGroups {
          items {
            id
            userID
            friendGroupID
            user {
              id
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
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
              createdAt
              updatedAt
              owner
            }
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
              courseGroupEventsId
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
      courseGroupMessagesId
      eventMessagesId
      friendGroupMessagesId
      directChatMessagesId
      chatMessageAuthorId
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
      parentId
      event {
        id
        title
        description
        startTime
        endTime
        location
        courseGroupEventsId
        courseGroup {
          users {
            items {
              id
              userID
              courseGroupID
              user {
                id
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
              courseGroup {
                title
                groupID
                code
                section
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
              courseGroupEventsId
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
              parentId
              event {
                id
                title
                description
                startTime
                endTime
                location
                courseGroupEventsId
                createdAt
                updatedAt
                owner
              }
              groupChat {
                title
                groupID
                code
                section
                createdAt
                updatedAt
                owner
              }
              directChat {
                id
                userID1
                userID2
                createdAt
                updatedAt
                owner
              }
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
              courseGroupMessagesId
              eventMessagesId
              friendGroupMessagesId
              directChatMessagesId
              chatMessageAuthorId
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
              courseGroupEventsId
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
            parentId
            event {
              id
              title
              description
              startTime
              endTime
              location
              courseGroupEventsId
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
            groupChat {
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
            directChat {
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
                expoPushToken
                multipleGroupsOptIn
                createdAt
                updatedAt
                owner
              }
              messages {
                nextToken
              }
              createdAt
              updatedAt
              owner
            }
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
            courseGroupMessagesId
            eventMessagesId
            friendGroupMessagesId
            directChatMessagesId
            chatMessageAuthorId
            owner
          }
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      groupChat {
        users {
          items {
            id
            userID
            courseGroupID
            user {
              id
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
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
              createdAt
              updatedAt
              owner
            }
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
            courseGroupEventsId
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
                parentId
                body
                createdAt
                updatedAt
                courseGroupMessagesId
                eventMessagesId
                friendGroupMessagesId
                directChatMessagesId
                chatMessageAuthorId
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
            parentId
            event {
              id
              title
              description
              startTime
              endTime
              location
              courseGroupEventsId
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
            groupChat {
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
            directChat {
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
                expoPushToken
                multipleGroupsOptIn
                createdAt
                updatedAt
                owner
              }
              messages {
                nextToken
              }
              createdAt
              updatedAt
              owner
            }
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
            courseGroupMessagesId
            eventMessagesId
            friendGroupMessagesId
            directChatMessagesId
            chatMessageAuthorId
            owner
          }
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      directChat {
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
              userID
              courseGroupID
              user {
                id
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
              courseGroup {
                title
                groupID
                code
                section
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
              userID
              friendGroupID
              user {
                id
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
              friendGroup {
                groupID
                title
                owner
                createdAt
                updatedAt
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
                courseGroupEventsId
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
              userID
              courseGroupID
              user {
                id
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
              courseGroup {
                title
                groupID
                code
                section
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
              userID
              friendGroupID
              user {
                id
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
              friendGroup {
                groupID
                title
                owner
                createdAt
                updatedAt
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
                courseGroupEventsId
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
            parentId
            event {
              id
              title
              description
              startTime
              endTime
              location
              courseGroupEventsId
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
            groupChat {
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
            directChat {
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
                expoPushToken
                multipleGroupsOptIn
                createdAt
                updatedAt
                owner
              }
              messages {
                nextToken
              }
              createdAt
              updatedAt
              owner
            }
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
            courseGroupMessagesId
            eventMessagesId
            friendGroupMessagesId
            directChatMessagesId
            chatMessageAuthorId
            owner
          }
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
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
            userID
            courseGroupID
            user {
              id
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
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
              createdAt
              updatedAt
              owner
            }
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
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        friendGroups {
          items {
            id
            userID
            friendGroupID
            user {
              id
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
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
              createdAt
              updatedAt
              owner
            }
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
              courseGroupEventsId
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
      courseGroupMessagesId
      eventMessagesId
      friendGroupMessagesId
      directChatMessagesId
      chatMessageAuthorId
      owner
    }
  }
`;
export const createCourseGroupUsers = /* GraphQL */ `
  mutation CreateCourseGroupUsers(
    $input: CreateCourseGroupUsersInput!
    $condition: ModelCourseGroupUsersConditionInput
  ) {
    createCourseGroupUsers(input: $input, condition: $condition) {
      id
      userID
      courseGroupID
      user {
        id
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
            userID
            courseGroupID
            user {
              id
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
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
              createdAt
              updatedAt
              owner
            }
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
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        friendGroups {
          items {
            id
            userID
            friendGroupID
            user {
              id
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
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
              createdAt
              updatedAt
              owner
            }
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
              courseGroupEventsId
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
      courseGroup {
        users {
          items {
            id
            userID
            courseGroupID
            user {
              id
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
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
              createdAt
              updatedAt
              owner
            }
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
            courseGroupEventsId
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
                parentId
                body
                createdAt
                updatedAt
                courseGroupMessagesId
                eventMessagesId
                friendGroupMessagesId
                directChatMessagesId
                chatMessageAuthorId
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
            parentId
            event {
              id
              title
              description
              startTime
              endTime
              location
              courseGroupEventsId
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
            groupChat {
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
            directChat {
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
                expoPushToken
                multipleGroupsOptIn
                createdAt
                updatedAt
                owner
              }
              messages {
                nextToken
              }
              createdAt
              updatedAt
              owner
            }
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
            courseGroupMessagesId
            eventMessagesId
            friendGroupMessagesId
            directChatMessagesId
            chatMessageAuthorId
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
export const updateCourseGroupUsers = /* GraphQL */ `
  mutation UpdateCourseGroupUsers(
    $input: UpdateCourseGroupUsersInput!
    $condition: ModelCourseGroupUsersConditionInput
  ) {
    updateCourseGroupUsers(input: $input, condition: $condition) {
      id
      userID
      courseGroupID
      user {
        id
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
            userID
            courseGroupID
            user {
              id
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
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
              createdAt
              updatedAt
              owner
            }
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
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        friendGroups {
          items {
            id
            userID
            friendGroupID
            user {
              id
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
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
              createdAt
              updatedAt
              owner
            }
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
              courseGroupEventsId
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
      courseGroup {
        users {
          items {
            id
            userID
            courseGroupID
            user {
              id
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
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
              createdAt
              updatedAt
              owner
            }
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
            courseGroupEventsId
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
                parentId
                body
                createdAt
                updatedAt
                courseGroupMessagesId
                eventMessagesId
                friendGroupMessagesId
                directChatMessagesId
                chatMessageAuthorId
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
            parentId
            event {
              id
              title
              description
              startTime
              endTime
              location
              courseGroupEventsId
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
            groupChat {
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
            directChat {
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
                expoPushToken
                multipleGroupsOptIn
                createdAt
                updatedAt
                owner
              }
              messages {
                nextToken
              }
              createdAt
              updatedAt
              owner
            }
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
            courseGroupMessagesId
            eventMessagesId
            friendGroupMessagesId
            directChatMessagesId
            chatMessageAuthorId
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
export const deleteCourseGroupUsers = /* GraphQL */ `
  mutation DeleteCourseGroupUsers(
    $input: DeleteCourseGroupUsersInput!
    $condition: ModelCourseGroupUsersConditionInput
  ) {
    deleteCourseGroupUsers(input: $input, condition: $condition) {
      id
      userID
      courseGroupID
      user {
        id
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
            userID
            courseGroupID
            user {
              id
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
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
              createdAt
              updatedAt
              owner
            }
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
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        friendGroups {
          items {
            id
            userID
            friendGroupID
            user {
              id
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
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
              createdAt
              updatedAt
              owner
            }
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
              courseGroupEventsId
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
      courseGroup {
        users {
          items {
            id
            userID
            courseGroupID
            user {
              id
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
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
              createdAt
              updatedAt
              owner
            }
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
            courseGroupEventsId
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
                parentId
                body
                createdAt
                updatedAt
                courseGroupMessagesId
                eventMessagesId
                friendGroupMessagesId
                directChatMessagesId
                chatMessageAuthorId
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
            parentId
            event {
              id
              title
              description
              startTime
              endTime
              location
              courseGroupEventsId
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
            groupChat {
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
            directChat {
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
                expoPushToken
                multipleGroupsOptIn
                createdAt
                updatedAt
                owner
              }
              messages {
                nextToken
              }
              createdAt
              updatedAt
              owner
            }
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
            courseGroupMessagesId
            eventMessagesId
            friendGroupMessagesId
            directChatMessagesId
            chatMessageAuthorId
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
export const createFriendGroupUsers = /* GraphQL */ `
  mutation CreateFriendGroupUsers(
    $input: CreateFriendGroupUsersInput!
    $condition: ModelFriendGroupUsersConditionInput
  ) {
    createFriendGroupUsers(input: $input, condition: $condition) {
      id
      userID
      friendGroupID
      user {
        id
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
            userID
            courseGroupID
            user {
              id
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
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
              createdAt
              updatedAt
              owner
            }
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
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        friendGroups {
          items {
            id
            userID
            friendGroupID
            user {
              id
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
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
              createdAt
              updatedAt
              owner
            }
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
              courseGroupEventsId
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
      friendGroup {
        users {
          items {
            id
            userID
            friendGroupID
            user {
              id
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
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
              createdAt
              updatedAt
              owner
            }
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
            parentId
            event {
              id
              title
              description
              startTime
              endTime
              location
              courseGroupEventsId
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
            groupChat {
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
            directChat {
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
                expoPushToken
                multipleGroupsOptIn
                createdAt
                updatedAt
                owner
              }
              messages {
                nextToken
              }
              createdAt
              updatedAt
              owner
            }
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
            courseGroupMessagesId
            eventMessagesId
            friendGroupMessagesId
            directChatMessagesId
            chatMessageAuthorId
            owner
          }
          nextToken
        }
        owner
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateFriendGroupUsers = /* GraphQL */ `
  mutation UpdateFriendGroupUsers(
    $input: UpdateFriendGroupUsersInput!
    $condition: ModelFriendGroupUsersConditionInput
  ) {
    updateFriendGroupUsers(input: $input, condition: $condition) {
      id
      userID
      friendGroupID
      user {
        id
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
            userID
            courseGroupID
            user {
              id
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
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
              createdAt
              updatedAt
              owner
            }
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
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        friendGroups {
          items {
            id
            userID
            friendGroupID
            user {
              id
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
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
              createdAt
              updatedAt
              owner
            }
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
              courseGroupEventsId
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
      friendGroup {
        users {
          items {
            id
            userID
            friendGroupID
            user {
              id
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
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
              createdAt
              updatedAt
              owner
            }
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
            parentId
            event {
              id
              title
              description
              startTime
              endTime
              location
              courseGroupEventsId
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
            groupChat {
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
            directChat {
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
                expoPushToken
                multipleGroupsOptIn
                createdAt
                updatedAt
                owner
              }
              messages {
                nextToken
              }
              createdAt
              updatedAt
              owner
            }
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
            courseGroupMessagesId
            eventMessagesId
            friendGroupMessagesId
            directChatMessagesId
            chatMessageAuthorId
            owner
          }
          nextToken
        }
        owner
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteFriendGroupUsers = /* GraphQL */ `
  mutation DeleteFriendGroupUsers(
    $input: DeleteFriendGroupUsersInput!
    $condition: ModelFriendGroupUsersConditionInput
  ) {
    deleteFriendGroupUsers(input: $input, condition: $condition) {
      id
      userID
      friendGroupID
      user {
        id
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
            userID
            courseGroupID
            user {
              id
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
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
              createdAt
              updatedAt
              owner
            }
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
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        friendGroups {
          items {
            id
            userID
            friendGroupID
            user {
              id
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
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
              createdAt
              updatedAt
              owner
            }
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
              courseGroupEventsId
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
      friendGroup {
        users {
          items {
            id
            userID
            friendGroupID
            user {
              id
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
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
              createdAt
              updatedAt
              owner
            }
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
            parentId
            event {
              id
              title
              description
              startTime
              endTime
              location
              courseGroupEventsId
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
            groupChat {
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
            directChat {
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
                expoPushToken
                multipleGroupsOptIn
                createdAt
                updatedAt
                owner
              }
              messages {
                nextToken
              }
              createdAt
              updatedAt
              owner
            }
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
            courseGroupMessagesId
            eventMessagesId
            friendGroupMessagesId
            directChatMessagesId
            chatMessageAuthorId
            owner
          }
          nextToken
        }
        owner
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createEventAttendees = /* GraphQL */ `
  mutation CreateEventAttendees(
    $input: CreateEventAttendeesInput!
    $condition: ModelEventAttendeesConditionInput
  ) {
    createEventAttendees(input: $input, condition: $condition) {
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
            userID
            courseGroupID
            user {
              id
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
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
              createdAt
              updatedAt
              owner
            }
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
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        friendGroups {
          items {
            id
            userID
            friendGroupID
            user {
              id
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
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
              createdAt
              updatedAt
              owner
            }
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
              courseGroupEventsId
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
        courseGroupEventsId
        courseGroup {
          users {
            items {
              id
              userID
              courseGroupID
              user {
                id
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
              courseGroup {
                title
                groupID
                code
                section
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
              courseGroupEventsId
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
              parentId
              event {
                id
                title
                description
                startTime
                endTime
                location
                courseGroupEventsId
                createdAt
                updatedAt
                owner
              }
              groupChat {
                title
                groupID
                code
                section
                createdAt
                updatedAt
                owner
              }
              directChat {
                id
                userID1
                userID2
                createdAt
                updatedAt
                owner
              }
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
              courseGroupMessagesId
              eventMessagesId
              friendGroupMessagesId
              directChatMessagesId
              chatMessageAuthorId
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
              courseGroupEventsId
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
            parentId
            event {
              id
              title
              description
              startTime
              endTime
              location
              courseGroupEventsId
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
            groupChat {
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
            directChat {
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
                expoPushToken
                multipleGroupsOptIn
                createdAt
                updatedAt
                owner
              }
              messages {
                nextToken
              }
              createdAt
              updatedAt
              owner
            }
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
            courseGroupMessagesId
            eventMessagesId
            friendGroupMessagesId
            directChatMessagesId
            chatMessageAuthorId
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
export const updateEventAttendees = /* GraphQL */ `
  mutation UpdateEventAttendees(
    $input: UpdateEventAttendeesInput!
    $condition: ModelEventAttendeesConditionInput
  ) {
    updateEventAttendees(input: $input, condition: $condition) {
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
            userID
            courseGroupID
            user {
              id
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
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
              createdAt
              updatedAt
              owner
            }
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
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        friendGroups {
          items {
            id
            userID
            friendGroupID
            user {
              id
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
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
              createdAt
              updatedAt
              owner
            }
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
              courseGroupEventsId
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
        courseGroupEventsId
        courseGroup {
          users {
            items {
              id
              userID
              courseGroupID
              user {
                id
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
              courseGroup {
                title
                groupID
                code
                section
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
              courseGroupEventsId
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
              parentId
              event {
                id
                title
                description
                startTime
                endTime
                location
                courseGroupEventsId
                createdAt
                updatedAt
                owner
              }
              groupChat {
                title
                groupID
                code
                section
                createdAt
                updatedAt
                owner
              }
              directChat {
                id
                userID1
                userID2
                createdAt
                updatedAt
                owner
              }
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
              courseGroupMessagesId
              eventMessagesId
              friendGroupMessagesId
              directChatMessagesId
              chatMessageAuthorId
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
              courseGroupEventsId
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
            parentId
            event {
              id
              title
              description
              startTime
              endTime
              location
              courseGroupEventsId
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
            groupChat {
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
            directChat {
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
                expoPushToken
                multipleGroupsOptIn
                createdAt
                updatedAt
                owner
              }
              messages {
                nextToken
              }
              createdAt
              updatedAt
              owner
            }
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
            courseGroupMessagesId
            eventMessagesId
            friendGroupMessagesId
            directChatMessagesId
            chatMessageAuthorId
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
export const deleteEventAttendees = /* GraphQL */ `
  mutation DeleteEventAttendees(
    $input: DeleteEventAttendeesInput!
    $condition: ModelEventAttendeesConditionInput
  ) {
    deleteEventAttendees(input: $input, condition: $condition) {
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
            userID
            courseGroupID
            user {
              id
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
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
              createdAt
              updatedAt
              owner
            }
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
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        friendGroups {
          items {
            id
            userID
            friendGroupID
            user {
              id
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
              events {
                nextToken
              }
              expoPushToken
              multipleGroupsOptIn
              createdAt
              updatedAt
              owner
            }
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
              courseGroupEventsId
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
        courseGroupEventsId
        courseGroup {
          users {
            items {
              id
              userID
              courseGroupID
              user {
                id
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
              courseGroup {
                title
                groupID
                code
                section
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
              courseGroupEventsId
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
              parentId
              event {
                id
                title
                description
                startTime
                endTime
                location
                courseGroupEventsId
                createdAt
                updatedAt
                owner
              }
              groupChat {
                title
                groupID
                code
                section
                createdAt
                updatedAt
                owner
              }
              directChat {
                id
                userID1
                userID2
                createdAt
                updatedAt
                owner
              }
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
              courseGroupMessagesId
              eventMessagesId
              friendGroupMessagesId
              directChatMessagesId
              chatMessageAuthorId
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
              courseGroupEventsId
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
            parentId
            event {
              id
              title
              description
              startTime
              endTime
              location
              courseGroupEventsId
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
            groupChat {
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
            directChat {
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
                expoPushToken
                multipleGroupsOptIn
                createdAt
                updatedAt
                owner
              }
              messages {
                nextToken
              }
              createdAt
              updatedAt
              owner
            }
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
            courseGroupMessagesId
            eventMessagesId
            friendGroupMessagesId
            directChatMessagesId
            chatMessageAuthorId
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
