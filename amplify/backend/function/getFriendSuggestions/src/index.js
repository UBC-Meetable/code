/* Amplify Params - DO NOT EDIT
	API_MEETABLE_GRAPHQLAPIIDOUTPUT
	API_MEETABLE_USERTABLE_ARN
	API_MEETABLE_USERTABLE_NAME
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient();

const userIdsParams = {
  TableName: process.env.API_MEETABLE_USERTABLE_NAME,
  ProjectedExpression: "id",
};

const numberOfSuggestions = 5;

function getUserByIdParams(id) {
  let params = {
    TableName: process.env.API_MEETABLE_USERTABLE_NAME,
    Key: {
      id: id,
    },
  };

  return params;
}

async function getUserIds() {
  try {
    const userIds = await docClient.scan(userIdsParams).promise();
    return userIds;
  } catch (err) {
    return err;
  }
}

async function getFriendSuggestions() {
  const userIds = await getUserIds();

  let friends = [];

  for (let i = 0; i < numberOfSuggestions; i++) {
    let randomNum = Math.floor(Math.random() * userIds.length);

    let userParams = getUserByIdParams(userIds[randomNum]);

    let friend = await docClient.get(userParams).promise();

    friends.push(friend);
  }

  return friends;
}

exports.handler = async (event, context) => {
  try {
    const friends = await getFriendSuggestions();
    return { body: JSON.stringify(friends) };
  } catch (err) {
    return { error: err };
  }
};
