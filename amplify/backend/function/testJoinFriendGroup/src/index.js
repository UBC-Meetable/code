/* Amplify Params - DO NOT EDIT
	API_MEETABLE_CHATMESSAGETABLE_ARN
	API_MEETABLE_CHATMESSAGETABLE_NAME
	API_MEETABLE_COURSEGROUPCONNECTIONTABLE_ARN
	API_MEETABLE_COURSEGROUPCONNECTIONTABLE_NAME
	API_MEETABLE_COURSEGROUPTABLE_ARN
	API_MEETABLE_COURSEGROUPTABLE_NAME
	API_MEETABLE_FRIENDGROUPCONNECTIONTABLE_ARN
	API_MEETABLE_FRIENDGROUPCONNECTIONTABLE_NAME
	API_MEETABLE_FRIENDGROUPTABLE_ARN
	API_MEETABLE_FRIENDGROUPTABLE_NAME
	API_MEETABLE_GRAPHQLAPIENDPOINTOUTPUT
	API_MEETABLE_GRAPHQLAPIIDOUTPUT
	API_MEETABLE_GRAPHQLAPIKEYOUTPUT
	API_MEETABLE_QUIZTABLE_ARN
	API_MEETABLE_QUIZTABLE_NAME
	API_MEETABLE_USERTABLE_ARN
	API_MEETABLE_USERTABLE_NAME
	ENV
	REGION
Amplify Params - DO NOT EDIT */


// const AWSAppSyncClient = require('aws-appsync').AWSAppSyncClient;
// const AUTH_TYPE = require('aws-appsync').AUTH_TYPE;

// const awsconfig = require('./aws-exports');


// const client = new AWSAppSyncClient({
//   url: awsconfig.aws_appsync_graphqlEndpoint,
//   region: awsconfig.aws_appsync_region,
//   auth: {
//     type: AUTH_TYPE.API_KEY,
//     apiKey: awsconfig.aws_appsync_apiKey,
//   },
// });




const axios = require('axios');
const gql = require('graphql-tag');
const print = require('graphql').print;

const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();

const joinFriendGroup =  gql`
  query JoinFriendGroup($user: joinFriendGroupInput) {
    joinFriendGroup(user: $user) {
      statusCode
      body
    }
  }
`;

const listUsers = /* GraphQL */ gql`
  query ListUsers {
    listUsers {
      items {
        id
      }
    }
  }
  #       profilePicture
  #       bio
  #       userState
  #       university
  #       year
  #       major
  #       quizzes {
  #         items {
  #           id
  #           userID
  #           responses {
  #             q
  #             a
  #           }
  #           createdAt
  #           updatedAt
  #           owner
  #         }
  #         nextToken
  #       }
  #       createdAt
  #       updatedAt
  #       owner
  #     }
  #     nextToken
  #   }
  # }
`;

exports.handler = async (event) => {
  try {
    const user = {
      id: "2",
      university: "UBC",
      year: 1
    };
    const graphqlData = await axios({
        url: process.env.API_MEETABLE_GRAPHQLAPIENDPOINTOUTPUT,
        method: 'post',
        headers: {
            'x-api-key': process.env.API_MEETABLE_GRAPHQLAPIKEYOUTPUT
        },
        data: {
            query: `
            query JoinFriendGroup {
              joinFriendGroup(user: ${user}) {
                statusCode
                body
              }
            }
          `,
        }
    });
    //console.log(graphqlData);



    // TODO implement
    const response = {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
    //  headers: {
    //      "Access-Control-Allow-Origin": "*",
    //      "Access-Control-Allow-Headers": "*"
    //  }, 
        body: JSON.stringify(graphqlData.data.data),
    };
    return response;
  } catch (err) {
  console.log(err)
  }

}
