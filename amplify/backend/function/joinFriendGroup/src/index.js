/* Amplify Params - DO NOT EDIT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const AWS = require('aws-sdk');
const PriorityQueue = require("priorityqueue");
//import { updateConstructorTypeNode } from "typescript";
const docClient = new AWS.DynamoDB.DocumentClient();

const tables = {
    user: 'User-mpv3yeuj2jga7n6hm2uupwpodm-dev',
    friendGroupConnectionModel: 'FriendGroupConnectionModel-mpv3yeuj2jga7n6hm2uupwpodm-dev',
    friendGroup: 'FriendGroup-mpv3yeuj2jga7n6hm2uupwpodm-dev',
    quiz: '',
};

exports.handler = async (event) => {
  const incomingUser = event.arguments.user;
  const MIN_SCORE = 2; // consider passing with the lambda input
  const MAX_GROUP_SIZE = 10;
  const SCORE_IF_GROUPED_BEOFRE = 0; // could consider a score reduction instead
  let pq = new PriorityQueue.BinaryHeap({ function(a, b) {a[1] == b[1] ? 0 : (a[1] > b[1] ? -1 : 1)} }); // maxPQ containing type [user, score]
  let groupToPut = null; // string groupID of group to join or null if none found

  // note: year is a reserved word in AWS DynamoDB, must use name substitution via ExpressionAttributeNames
  const bucketQueryParams = {
    TableName: tables.user,
    IndexName: "byUniYear",
    KeyConditionExpression: "university = :uni AND #year = :year",
    
    ExpressionAttributeNames: {
      "#year": "year"
    },
    ExpressionAttributeValues: {
      ":uni": incomingUser.university,
      ":year": incomingUser.year,
    }
  };

  try {
    // retrieve potential groupmates. If this fails, OK to catch and skip everything. note: incoming user should be part of bucket.
    const bucket = await docClient.query(bucketQueryParams).promise();
    console.log(bucket.Items);
    // map user id to quiz. Possible optimization is to cache this outside the main fn so it gets reused (not sure how to extend to mulitple quizzes per user)
    let quizzes = {};
    // set of user id of users already grouped with incoming user in some group
    let groupedBefore = new Set();

    await Promise.all(bucket.Items.map(async function(user, index, array) {
      const res =  await docClient.query({
        TableName: tables.quiz,
        KeyConditionExpression: "userID = :userID",
        ExpressionAttributeValues: {
          ":userID": user.id // note: assumption is one quiz per user for now
        }
      }).promise().then(
        function(data) {
          quizzes[user.id] = data;
        },
        function(error) {
          console.log(error);
        }
      );
      return res;
    }));
    console.log("quizzes\n" + quizzes);
    let incomingUserGroups = new Set()
    await fillGroupSet(incomingUser.id, incomingUserGroups);
    incomingUserGroups = new Array(incomingUserGroups);
    console.log("incomingUserGroups\n" + incomingUserGroups);
    await Promise.all(incomingUserGroups.map(async (groupID) => {
      console.log("iteration")
      const res = await docClient.query({
        TableName: tables.friendGroupConnectionModel,
        KeyConditionExpression: "groupID = :groupID",
        ExpressionAttributeValues: {
          ":groupID": groupID
        }
      }).promise().then(
        function(data) {
          data.Items.forEach(fgcm => groupedBefore.add(fgcm.userID));
        },
        function(error) {
          console.log(error);
        }
      );
      return res;
    }));

    // initializing arr of pairs then buildHeap is O(n) + O(n). This way is O(nlogn)
    bucket.Items.forEach(function(user, index, array) {
      if (quizzes[user.id] !== null && user.id !== incomingUser.id && !groupedBefore.has(user.id)) {
        pq.push([user, compatibilityScore(quizzes[user.id], quizzes[incomingUser.id])]);
      } else if (groupedBefore.has(user.id)) {
        pq.push([user, SCORE_IF_GROUPED_BEOFRE]);
      }
    });

    while (!pq.isEmpty()) {
      let [user, score] = pq.pop();
      if (score < MIN_SCORE) break;
      let userGroups = new Set() // doesn't really have to be a set
      await fillGroupSet(user.id, userGroups);
      userGroups = new Array(userGroups);
      // fetch sizes in parallel then take the min
      let sizes = {};
      await Promise.all(userGroups.map(async (groupID) => {
        try {
          const data = await docClient.get({
            TableName: tables.friendGroup,
            Key: {"groupID": groupID},
            ConsistentRead: true
          }).promise();
          sizes[data.Item.size] = groupID;
        } catch (err) {
            console.log(err);
        }
      }));
      if (sizes.keys().length > 0) {
        let minSize = Math.min(...sizes.keys());
        let idOfMin = sizes[minSize];
        if (minSize <= MAX_GROUP_SIZE) {
          groupToPut = idOfMin;
          break;
        }
      }
    }


  } catch(error) {
      console.log(error);
      return {statusCode: 500, body: JSON.stringify(error)};
  }
  
  const response = {
      statusCode: 200,
  //  Uncomment below to enable CORS requests
  //  headers: {
  //      "Access-Control-Allow-Origin": "*",
  //      "Access-Control-Allow-Headers": "*"
  //  }, 
      body: JSON.stringify(groupToPut),
  };
  return response;
};

async function fillGroupSet(userid, set) {
  docClient.query({
    TableName: tables.friendGroupConnectionModel,
    KeyConditionExpression: "userID = :userid",
    ExpressionAttributeValues: {
      ":userid": userid
    }
  }).promise().then(
    function(data) {
      data.Items.forEach((fgcm) => set.add(fgcm.groupID));
    },
    function(error) {
      console.log(error);
    }
  );
}

// [QAPair], [QAPair] -> int
function compatibilityScore(q1, q2) {
  const user1Responses = new Map(q1.map(i => [i.q, i.a]));
  const user2Responses = new Map(q2.map(i => [i.q, i.a]));
  let score = 0;
  for (const [q, a] of user1Responses) {
    if (a === user2Responses.get(q)) score += 1;
  }
  return score;
}

/*
Fetch a subset of users from db based on some key e.g. {school, year}, could be done with db indexing
Iterate over the subset of users and put them into a priority queue based on similarity score
As above, reduce score if pair are in an existing group
Pop top user from priority queue
If minimum score not met by top user, short circuit
join top user’s smallest non-full group if one exists
Otherwise, pop top user and repeat
If PQ is empty, create own group and join
Save everything in DB
*/
