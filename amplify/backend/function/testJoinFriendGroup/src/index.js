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
	API_MEETABLE_GRAPHQLAPIIDOUTPUT
	API_MEETABLE_QUIZTABLE_ARN
	API_MEETABLE_QUIZTABLE_NAME
	API_MEETABLE_USERTABLE_ARN
	API_MEETABLE_USERTABLE_NAME
	ENV
	FUNCTION_JOINFRIENDGROUP_NAME
	REGION
Amplify Params - DO NOT EDIT */
// const axios = require('axios');
// const gql = require('graphql-tag');
// const graphql = require('graphql');
const amplify = require('aws-amplify');
const AWS = require('aws-sdk');
const API = amplify.API;
//const docClient = new AWS.DynamoDB.DocumentClient();
//const lambda = new AWS.Lambda();
const API_URL = "https://xfljscizzjctdkz77uthysiecu.appsync-api.us-east-1.amazonaws.com/graphql";
const joinFriendGroup =  gql`
  query JoinFriendGroup($user: joinFriendGroupInput) {
    joinFriendGroup(user: $user) {
      statusCode
      body
    }
  }
`;

exports.handler = async (event) => {
try {
    // const graphqlData = await axios({
    //     url: "https://xfljscizzjctdkz77uthysiecu.appsync-api.us-east-1.amazonaws.com/graphql",
    //     method: 'post',
    //     headers: {
    //         //'x-api-key': process.env.API_<YOUR_API_NAME>_GRAPHQLAPIKEYOUTPUT
    //     },
    //     data: {
    //         query: joinFriendGroup,
    //     }
    // });
    const data = await axios.get(API_URL, {
        query: `query JoinFriendGroup($user: joinFriendGroupInput) {
                    joinFriendGroup(user: $user) {
                        statusCode
                        body
                    }
                }
      `,
        variables: {
          id: 2,
          city: 'Test'
        }
      }, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
      
    const body = {
        graphqlData: graphqlData.data.data.listTodos
    }
    return {
        statusCode: 200,
        body: JSON.stringify(body),
        headers: {
            "Access-Control-Allow-Origin": "*",
            }
        }
    } catch (err) {
        console.log('error posting to appsync: ', err);
    } 
    


    // // TODO implement
    // const response = {
    //     statusCode: 200,
    // //  Uncomment below to enable CORS requests
    // //  headers: {
    // //      "Access-Control-Allow-Origin": "*",
    // //      "Access-Control-Allow-Headers": "*"
    // //  }, 
    //     body: JSON.stringify('Hello from Lambda!'),
    // };
    // return response;
};
