/* Amplify Params - DO NOT EDIT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();

const tables = {
    user: '',
    friendGroupConnectionModel: '',
    friendGroup: '',
    quiz: '',
};


exports.handler = async (event) => {


    //const data = await docClient.scan({TableName: 'User-mpv3yeuj2jga7n6hm2uupwpodm-dev'}).promise();
    //const data = await docClient.scan({TableName: tables[user]}).promise();
    console.log(event.arguments.user.id);

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

// qi, qi1, qi2 are array of QApairs
function moreCompatible(qi, qi1, qi2) {
    const MIN_SCORE = 2;
    if (qi2 == null) {
      return true;
    }
    const arrToMap = (map, obj) => { map[obj.q] = obj.a; return map}
    const userResponses = qi.reduce(arrToMap, {});
    const user1Responses = qi1.reduce(arrToMap, {});
    const user2Responses = qi2.reduce(arrToMap, {});
    let user1Score = 0;
    let user2Score = 0;
    for (const [q, a] of userResponses) {
      if (a === user1Responses.get(q)) user1Score += 1;
      if (a === user2Responses.get(q)) user2Score += 1;
    }
    if (user1Score > user2Score && user1Score >= MIN_SCORE) return true;
    return false;
  }

