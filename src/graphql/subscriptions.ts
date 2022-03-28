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
export const onCreateEventAttendee = /* GraphQL */ `
  subscription OnCreateEventAttendee {
    onCreateEventAttendee {
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
export const onUpdateEventAttendee = /* GraphQL */ `
  subscription OnUpdateEventAttendee {
    onUpdateEventAttendee {
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
export const onDeleteEventAttendee = /* GraphQL */ `
  subscription OnDeleteEventAttendee {
    onDeleteEventAttendee {
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
export const onCreateEvent = /* GraphQL */ `
  subscription OnCreateEvent {
    onCreateEvent {
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
export const onUpdateEvent = /* GraphQL */ `
  subscription OnUpdateEvent {
    onUpdateEvent {
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
export const onDeleteEvent = /* GraphQL */ `
  subscription OnDeleteEvent {
    onDeleteEvent {
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
export const onCreateReport = /* GraphQL */ `
  subscription OnCreateReport {
    onCreateReport {
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
export const onUpdateReport = /* GraphQL */ `
  subscription OnUpdateReport {
    onUpdateReport {
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
export const onDeleteReport = /* GraphQL */ `
  subscription OnDeleteReport {
    onDeleteReport {
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
export const onCreateDirectChat = /* GraphQL */ `
  subscription OnCreateDirectChat($owner: String!) {
    onCreateDirectChat(owner: $owner) {
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
export const onUpdateDirectChat = /* GraphQL */ `
  subscription OnUpdateDirectChat($owner: String!) {
    onUpdateDirectChat(owner: $owner) {
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
export const onDeleteDirectChat = /* GraphQL */ `
  subscription OnDeleteDirectChat($owner: String!) {
    onDeleteDirectChat(owner: $owner) {
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
export const onCreateChatMessage = /* GraphQL */ `
  subscription OnCreateChatMessage {
    onCreateChatMessage {
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
export const onUpdateChatMessage = /* GraphQL */ `
  subscription OnUpdateChatMessage {
    onUpdateChatMessage {
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
export const onDeleteChatMessage = /* GraphQL */ `
  subscription OnDeleteChatMessage {
    onDeleteChatMessage {
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
