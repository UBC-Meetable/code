/* Amplify Params - DO NOT EDIT
	API_MEETABLE_GRAPHQLAPIENDPOINTOUTPUT
	API_MEETABLE_GRAPHQLAPIIDOUTPUT
	API_MEETABLE_USERTABLE_ARN
	API_MEETABLE_USERTABLE_NAME
	ENV
	FUNCTION_JOINFRIENDGROUP_NAME
	REGION
Amplify Params - DO NOT EDIT */

const axios = require('axios');
const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();

// const { LambdaClient } = require("@aws-sdk/client-lambda");

// const lambda = new LambdaClient({ region: "us-east-1" });

const lambda = new AWS.Lambda({ region: "us-east-1" });

const tables = {
    user: process.env.API_MEETABLE_USERTABLE_NAME,
  };

exports.handler = async (event) => {

    const scanParams = {
        TableName: tables.user,
        ProjectionExpression: "id, university, year",
        FilterExpression: " attribute_exists(multipleGroupsOptIn) AND multipleGroupsOptIn = :bool",
        ExpressionAttributeValues: {
            ":bool": true,
        }
    }

    // get opted-in users through paginated scan
    const users = [];
    let page;
    do {
        if (page.LastEvaluatedKey !== undefined) {
            scanParams.ExclusiveStartKey = page.LastEvaluatedKey;
        }
        page = await docClient.scan(scanParams)
        .promise()
        .then(
          (data) => data,
          (error) => console.error("An error occurred:", error),
        );
        Array.prototype.push.apply(users, page.Items);
    } while (page.LastEvaluatedKey !== undefined)

    // iterate over opted-in users and find their group id to be grouped into
    const groups = await Promise.all(users.map((user) => {
      const lambdaParams = {
        FunctionName: "joinFriendGroup",
        Payload: JSON.stringify({
          user: {
            id: user.id,
            university: user.university,
            year: user.year
          }
        })
      }
      return lambda.invoke(lambdaParams)
      .promise()
      .then(
        (data) => [user, JSON.parse(data.Payload).groupID],
        (err) => console.error(err)
      );
    }));

    

    // group the users
    let foundGroup;
    try {
        foundGroup = (await fetchFriendGroup());
        console.log("Found Friend Group:", foundGroup.groupID);
      } catch (e) {
        console.log("GroupID was not provided");
        try {
          foundGroup = await createFriendGroup({ input: { groupID: trueGroupID } });
          console.log("Created Friend Group:", foundGroup);
        } catch (err) {
          console.error("Failed to create friend group");
          throw new Error(err);
        }
      }
    
      if (foundGroup!.users!.items!.find((user) => user?.userID === userID)) return foundGroup;











    // TODO implement
    const response = {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
    //  headers: {
    //      "Access-Control-Allow-Origin": "*",
    //      "Access-Control-Allow-Headers": "*"
    //  }, 
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
};

// async function callLambda(query) {
//     try {
//       const graphqlData = await axios({
//         url: process.env.API_MEETABLE_GRAPHQLAPIENDPOINTOUTPUT,
//         method: 'post',
//         headers: {
//             //'x-api-key': process.env.API_MEETABLE_GRAPHQLAPIKEYOUTPUT // figure out how to do this with cognito user instead of api key??
//         },
//         data: {
//             query: query,
//         }
//       });
//       return graphqlData.data;
//     } catch (err) {
//       return err 
//     }
//   }
