/* Amplify Params - DO NOT EDIT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const AWS = require('aws-sdk');
import PriorityQueue from "priorityqueue";
import { updateConstructorTypeNode } from "typescript";
const docClient = new AWS.DynamoDB.DocumentClient();

const tables = {
    user: '',
    friendGroupConnectionModel: '',
    friendGroup: '',
    quiz: '',
};

exports.handler = async (event) => {
  const incomingUser = event.arguments.user;
  const MIN_SCORE = 2; // consider passing with the lambda input
  const SCORE_IF_GROUPED_BEOFRE = 0; // could consider a score reduction instead
  //const pq = new PriorityQueue({ function(a, b) {a[1] == b[1] ? 0 : (a[1] > b[1] ? -1 : 1)} }); // maxPQ containing type [user, score]

  // note: year is a reserved word in AWS DynamoDB, must use name substitution via ExpressionAttributeNames
  const bucketQueryParams = {
    TableName: tables[user],
    KeyConditionExpression: "university = :uni",
    ExpressionAttributeNames: {
    },
    ExpressionAttributeValues: {
      ":uni": incomingUser.university,
    }
  };

  // const quizzesQueryParams = {
  //   TableName: tables[quiz],
  //   KeyConditionExpression: "quizID = :qid",
  //   ExpressionAttributeValues: {
  //     ":qid": user.quizzes[0] // note: assumption is one quiz
  //   }
  // };

  try {
    const bucket = await docClient.query(bucketQueryParams).promise(); // retrieve potential groupmates. If this fails, OK to catch and skip everything. note: incoming user should be part of bucket.
    // set of user id of users already grouped with incoming user in some group
    let groupedBefore = new Set();
    // map user id to quiz
    let quizzes = {};
    
    bucket.Items.forEach(function(user, index, array) {
      // retrieve user quizzes. 
      docClient.query({
        TableName: tables[quiz],
        KeyConditionExpression: "quizID = :qid",
        ExpressionAttributeValues: {
          ":qid": user.quizzes[0] // note: assumption is one quiz
        }
      }).promise().then(
        function(data) {
          quizzes[user.id] = data;
        },
        function(error) {
          console.log(error);
        }
      );
      if (user.id !== incomingUser.id) {
        let incomingUserGroups = new Set()
        let userGroups = new Set()
        friendGroupConnectionModelQuery(incomingUser.id, incomingUserGroups);
        friendGroupConnectionModelQuery(user.id, userGroups);
        const intersection = new Set([...userGroups].filter(x => incomingUserGroups.has(x)));
        if (intersection.size > 0) groupedBefore.add(user.id);
      }
    });

    // TODO query friendGroupConnectionModel to find if pair already grouped
    // init arr of [user, score]
    userScorePairs = [];
    bucket.Items.forEach(function(user, index, array) {
      if (quizzes[user.id] !== null && user.id !== incomingUser.id && !groupedBefore.has(user.id)) {
        userScorePairs.push([user, compatibilityScore(quizzes[user.id], quizzes[incomingUser.id])]);
      } else if (groupedBefore.has(user.id)) {
        userScorePairs.push([user, SCORE_IF_GROUPED_BEOFRE]);
      }
    });
    // init maxPQ
    let pq = PriorityQueue.from(userScorePairs, { comparator: function(a, b) {a[1] == b[1] ? 0 : (a[1] > b[1] ? -1 : 1)} }); 

    if (pq.isEmpty()) 
    while (!pq.isEmpty()) {
      let [user, score] = pq.pop();
      if (score < MIN_SCORE) break;
      
    }

  } catch(error) {
      console.log(error);
  } 
  


  











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


function friendGroupConnectionModelQuery(userid, set) {
  docClient.query({
    TableName: tables[friendGroupConnectionModel],
    KeyConditionExpression: "userID = :userid",
    ExpressionAttributeValues: {
      ":userid": userid
    }
  }).promise.then(
    function(data) {
      data.forEach((fgcm) => set.add(fgcm.groupID));
    },
    function(error) {
      console.log(error);
    }
  );
}

async function joinOwnGroup() {
  

}

// [QAPair], [QAPair] -> int
function compatibilityScore(q1, q2) {

  const arrToMap = (map, obj) => { map[obj.q] = obj.a; return map};
  const user1Responses = q1.reduce(arrToMap, {});
  const user2Responses = q2.reduce(arrToMap, {});
  let score = 0;
  for (const [q, a] of user1Responses) {
    if (a === user2Responses.get(q)) score += 1;
  }
  return score;
}

// qi, qi1, qi2 are array of QApairs
// function moreCompatible(qi, qi1, qi2) {
//     const MIN_SCORE = 2;
//     if (qi2 == null) {
//       return true;
//     }
//     const arrToMap = (map, obj) => { map[obj.q] = obj.a; return map}
//     const userResponses = qi.reduce(arrToMap, {});
//     const user1Responses = qi1.reduce(arrToMap, {});
//     const user2Responses = qi2.reduce(arrToMap, {});
//     let user1Score = 0;
//     let user2Score = 0;
//     for (const [q, a] of userResponses) {
//       if (a === user1Responses.get(q)) user1Score += 1;
//       if (a === user2Responses.get(q)) user2Score += 1;
//     }
//     if (user1Score > user2Score && user1Score >= MIN_SCORE) return true;
//     return false;
//   }


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