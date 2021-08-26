/* Amplify Params - DO NOT EDIT
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
	REGION
Amplify Params - DO NOT EDIT */

const AWS = require('aws-sdk');
const PriorityQueue = require("priorityqueue");
//import { updateConstructorTypeNode } from "typescript";
const docClient = new AWS.DynamoDB.DocumentClient();

const tables = {
    user: process.env.API_MEETABLE_USERTABLE_NAME,
    friendGroupConnectionModel: process.env.API_MEETABLE_FRIENDGROUPCONNECTIONTABLE_NAME,
    friendGroup: process.env.API_MEETABLE_FRIENDGROUPTABLE_NAME,
    quiz: process.env.API_MEETABLE_QUIZTABLE_NAME,
};

exports.handler = async (event) => {
  const incomingUser = event.arguments.user;
  console.log({incomingUser});
  const MIN_SCORE = 2; // consider passing with the lambda input
  const MAX_GROUP_SIZE = 5;
  const SCORE_IF_GROUPED_BEFORE = 0; // could consider a score reduction instead
  let pq = new PriorityQueue.BinaryHeap({ function(a, b) {a[1] == b[1] ? 0 : (a[1] > b[1] ? -1 : 1)} }); // maxPQ containing type [user, score]
  let groupToPut = null; // string groupID of group to join or null if none found
  const relevantUsers = [];

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
    // map user id to quiz. Possible optimization is to cache this outside the main fn so it gets reused (not sure how to extend to mulitple quizzes per user)
    let quizzes = {};
    // set of user id of users already grouped with incoming user in some group
    let groupedBefore = new Set();

    await Promise.all(bucket.Items.map(function(user, index, array) {
      const res = docClient.query({
        TableName: tables.quiz,
        IndexName: "byUser",
        KeyConditionExpression: "userID = :userID",
        ExpressionAttributeValues: {
          ":userID": user.id // note: assumption is one quiz per user for now
        }
      }).promise()
      .then(
        function(data) {
          console.log(data);
          let [answers] = data.Items.map((item) => item.responses);
          if (answers)
            quizzes[user.id] = answers;
          console.log(`Answers for user id ${user.id}: ${answers}`);
        },
        function(error) {
          console.log(error);
        }
      );
      return res;
    }));
    let incomingUserGroups = new Set()
    await fillGroupSet(incomingUser.id, incomingUserGroups);
    console.log(incomingUserGroups);
    await Promise.all(Array.from(incomingUserGroups).map((groupID) => {
      console.log({groupID});
      const res = docClient.query({
        TableName: tables.friendGroupConnectionModel,
        IndexName: "byFriendGroup",
        KeyConditionExpression: "groupID = :groupID",
        ExpressionAttributeValues: {
          ":groupID": groupID
        }
      }).promise().then(
        function(data) {
          console.log("Retrieved data from FriendGroupConnectionsTable", {data});
          data.Items.forEach(fgcm => groupedBefore.add(fgcm.userID));
        },
        function(error) {
          console.error("An error occurred:",error);
        }
      );
      return res;
    }));

    console.log(quizzes);
    console.log(quizzes[incomingUser.id]);


    // initializing arr of pairs then buildHeap is O(n) + O(n). This way is O(nlogn)
    bucket.Items.forEach(function(user, index, array) {
      if (quizzes[user.id] !== undefined &&quizzes[user.id] !== null && user.id !== incomingUser.id && !groupedBefore.has(user.id)) {
        pq.push([user, compatibilityScore(quizzes[user.id], quizzes[incomingUser.id])]);
      } else if (groupedBefore.has(user.id)) {
        pq.push([user, SCORE_IF_GROUPED_BEFORE]);
      }
    });

    console.log(`${pq.length} users in PQ`);
    while (!pq.isEmpty()) {
      let [user, score] = pq.pop();
      console.log({user, score});
      if (score < MIN_SCORE) break;
      relevantUsers.push(user.id);
      SmallestNonEmpty = {size: Infinity, id: ""};
      let userGroups = new Set() // doesn't really have to be a set
      await fillGroupSet(user.id, userGroups);
      console.log(userGroups);
      for (const groupID of userGroups) { // small number of queries in sequence
        try {
          const membersInGroup = await docClient.query({
            TableName: tables.friendGroupConnectionModel,
            IndexName: "byFriendGroup",
            KeyConditionExpression: "groupID = :groupID",
            ExpressionAttributeValues: {
              ":groupID": groupID
            }
          }).promise();

          console.log({membersInGroup});
          
          const groupSize = membersInGroup.Count;
          if (groupSize <= MAX_GROUP_SIZE && groupSize < SmallestNonEmpty.size) {
            SmallestNonEmpty = {size: groupSize, id: groupID};
          }
        } catch (error) {
          console.error(error);
        }
      }
      if (SmallestNonEmpty.size < Infinity) {
        groupToPut = SmallestNonEmpty.id;
        break;
      }
    }
    console.log(relevantUsers);
  } catch(error) {
      console.error(error);
      return {statusCode: 500, body: JSON.stringify(error)};
  }
  
  const response = {
      statusCode: 200,
      groupID: groupToPut,
      relevantUsers,
      // body: JSON.stringify(groupToPut),
  };
  return response;
};

async function fillGroupSet(userid, set) {
  console.log("FillGroupSet");
  return docClient.query({
    TableName: tables.friendGroupConnectionModel,
    IndexName: "byUser",
    KeyConditionExpression: "userID = :userid",
    ExpressionAttributeValues: {
      ":userid": userid
    }
  }).promise().then(
    function(data) {
      console.log(data);
      data.Items.forEach((fgcm) => set.add(fgcm.groupID));
    },
    function(error) {
      console.error(error);
    }
  );
}

const LIKED = "liked";
const LOVED = "loved";
// [QAPair], [QAPair] -> int
function compatibilityScore(q1, q2) {
  console.log("Compatability Score");
  console.log("q1", q1);
  console.log("q2", q2);
  const user1Responses = new Map(q1.map(i => [i.q,i.a]));
  const user2Responses = new Map(q2.map(i => [i.q,i.a]));
  let score = 0;
  for (const [q, a] of user1Responses) {
    if ((a === LIKED || a === LOVED) && (user2Responses.get(q) === LIKED || user2Responses.get(q) === LOVED)) {
      score += 1;
    }
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
