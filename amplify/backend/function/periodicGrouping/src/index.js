/* Amplify Params - DO NOT EDIT
	API_MEETABLE_GRAPHQLAPIENDPOINTOUTPUT
	API_MEETABLE_GRAPHQLAPIIDOUTPUT
	API_MEETABLE_USERTABLE_ARN
	API_MEETABLE_USERTABLE_NAME
	ENV
	FUNCTION_JOINFRIENDGROUP_NAME
	REGION
Amplify Params - DO NOT EDIT */

const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();

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
            scanParams[ExclusiveStartKey] = page.LastEvaluatedKey;
        }
        page = await docClient.scan(scanParams)
        .promise()
        .then(
          (data) => data,
          (error) => console.error("An error occurred:", error),
        );
        Array.prototype.push.apply(users, page.Items);
    } while (page.LastEvaluatedKey !== undefined)

    // iterate over opted-in users and group them










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
