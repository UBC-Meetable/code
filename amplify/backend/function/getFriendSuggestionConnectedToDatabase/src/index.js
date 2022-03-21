const AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient();

const userIdsParams = {
  TableName: "User-nt6r7l3svbe3xk5h5ar7pavmna-dev",
  ProjectedExpression: "id",
};

const numberOfSuggestions = 5;

function getUserByIdParams(id) {
  let params = {
    TableName: "User-nt6r7l3svbe3xk5h5ar7pavmna-dev",
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

async function getFriendSuggestionConnectedToDatabase() {
  const seen = new Set();
  const userIds = await getUserIds();
  const friends = [];

  for (let i = 0; i < numberOfSuggestions; i++) {
    let randomNum = Math.floor(Math.random() * userIds.Items.length);

    while (seen.has(randomNum)) {
      randomNum = Math.floor(Math.random() * userIds.Items.length);
    }

    seen.add(randomNum);

    let userParams = getUserByIdParams(userIds.Items[randomNum].id);
    let friend = await docClient.get(userParams).promise();
    friends.push(friend);
  }

  console.log(friends);
  return friends;
}

exports.handler = async (event, context) => {
  try {
    const friends = await getFriendSuggestionConnectedToDatabase();
    return { body: JSON.stringify(friends) };
  } catch (err) {
    return { error: err };
  }
};
