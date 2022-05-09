/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const subscribeToEventsFromCourseGroup = /* GraphQL */ `
  subscription SubscribeToEventsFromCourseGroup($courseGroupEventsId: String!) {
    subscribeToEventsFromCourseGroup(
      courseGroupEventsId: $courseGroupEventsId
    ) {
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
export const subscribeToMessagesFromParent = /* GraphQL */ `
  subscription SubscribeToMessagesFromParent($parentId: String!) {
    subscribeToMessagesFromParent(parentId: $parentId) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($owner: String) {
    onCreateUser(owner: $owner) {
      id
      email
      firstName
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($owner: String) {
    onUpdateUser(owner: $owner) {
      id
      email
      firstName
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($owner: String) {
    onDeleteUser(owner: $owner) {
      id
      email
      firstName
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
export const onCreateCourseGroup = /* GraphQL */ `
  subscription OnCreateCourseGroup($owner: String) {
    onCreateCourseGroup(owner: $owner) {
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
export const onUpdateCourseGroup = /* GraphQL */ `
  subscription OnUpdateCourseGroup($owner: String) {
    onUpdateCourseGroup(owner: $owner) {
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
export const onDeleteCourseGroup = /* GraphQL */ `
  subscription OnDeleteCourseGroup($owner: String) {
    onDeleteCourseGroup(owner: $owner) {
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
export const onCreateEvent = /* GraphQL */ `
  subscription OnCreateEvent($owner: String) {
    onCreateEvent(owner: $owner) {
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
export const onUpdateEvent = /* GraphQL */ `
  subscription OnUpdateEvent($owner: String) {
    onUpdateEvent(owner: $owner) {
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
export const onDeleteEvent = /* GraphQL */ `
  subscription OnDeleteEvent($owner: String) {
    onDeleteEvent(owner: $owner) {
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
export const onCreateFriendGroup = /* GraphQL */ `
  subscription OnCreateFriendGroup($owner: String) {
    onCreateFriendGroup(owner: $owner) {
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
export const onUpdateFriendGroup = /* GraphQL */ `
  subscription OnUpdateFriendGroup($owner: String) {
    onUpdateFriendGroup(owner: $owner) {
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
export const onDeleteFriendGroup = /* GraphQL */ `
  subscription OnDeleteFriendGroup($owner: String) {
    onDeleteFriendGroup(owner: $owner) {
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
export const onCreateDirectChat = /* GraphQL */ `
  subscription OnCreateDirectChat($owner: String) {
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
export const onUpdateDirectChat = /* GraphQL */ `
  subscription OnUpdateDirectChat($owner: String) {
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
export const onDeleteDirectChat = /* GraphQL */ `
  subscription OnDeleteDirectChat($owner: String) {
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
export const onCreateChatMessage = /* GraphQL */ `
  subscription OnCreateChatMessage {
    onCreateChatMessage {
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
export const onUpdateChatMessage = /* GraphQL */ `
  subscription OnUpdateChatMessage {
    onUpdateChatMessage {
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
export const onDeleteChatMessage = /* GraphQL */ `
  subscription OnDeleteChatMessage {
    onDeleteChatMessage {
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
export const onCreateCourseGroupUsers = /* GraphQL */ `
  subscription OnCreateCourseGroupUsers($owner: String) {
    onCreateCourseGroupUsers(owner: $owner) {
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
export const onUpdateCourseGroupUsers = /* GraphQL */ `
  subscription OnUpdateCourseGroupUsers($owner: String) {
    onUpdateCourseGroupUsers(owner: $owner) {
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
export const onDeleteCourseGroupUsers = /* GraphQL */ `
  subscription OnDeleteCourseGroupUsers($owner: String) {
    onDeleteCourseGroupUsers(owner: $owner) {
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
export const onCreateFriendGroupUsers = /* GraphQL */ `
  subscription OnCreateFriendGroupUsers($owner: String) {
    onCreateFriendGroupUsers(owner: $owner) {
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
export const onUpdateFriendGroupUsers = /* GraphQL */ `
  subscription OnUpdateFriendGroupUsers($owner: String) {
    onUpdateFriendGroupUsers(owner: $owner) {
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
export const onDeleteFriendGroupUsers = /* GraphQL */ `
  subscription OnDeleteFriendGroupUsers($owner: String) {
    onDeleteFriendGroupUsers(owner: $owner) {
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
export const onCreateEventAttendees = /* GraphQL */ `
  subscription OnCreateEventAttendees($owner: String) {
    onCreateEventAttendees(owner: $owner) {
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
export const onUpdateEventAttendees = /* GraphQL */ `
  subscription OnUpdateEventAttendees($owner: String) {
    onUpdateEventAttendees(owner: $owner) {
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
export const onDeleteEventAttendees = /* GraphQL */ `
  subscription OnDeleteEventAttendees($owner: String) {
    onDeleteEventAttendees(owner: $owner) {
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
