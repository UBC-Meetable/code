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



const groupedUserWithQuiz = {
  "Item": {
    "friendGroupConnection": [
      "1"
    ],
    "id": "1",
    "quizzes": [
      "1"
    ],
    "university": "UBC",
    "year": 1
  },
  "TableName": process.env.API_MEETABLE_USERTABLE_NAME
};
const ungroupedUserWithQuiz = {
  "Item": {
    "id": "2",
    "quizzes": [
      "2"
    ],
    "university": "UBC",
    "year": 1
  },
  "TableName": process.env.API_MEETABLE_USERTABLE_NAME
};
const connection = {
  "Item": {
    "groupID": "1",
    "id": "1",
    "userID": "1"
  },
  "TableName": process.env.API_MEETABLE_FRIENDGROUPCONNECTIONTABLE_NAME
}
const group = {
  "Item": {
    "groupID": "1",
    "size": 1,
    "users": [
      "1"
    ]
  },
  "TableName": process.env.API_MEETABLE_FRIENDGROUPTABLE_NAME
}
const genericQuiz = {
  "Item": {
    "id": "1",
    "responses": [
      {
        "a": "a",
        "q": "q1"
      },
      {
        "a": "b",
        "q": "q3"
      },
      {
        "a": "c",
        "q": "q2"
      },
      {
        "a": "c",
        "q": "q5"
      }
    ],
    "userID": "1"
  },
  "TableName": process.env.API_MEETABLE_QUIZTABLE_NAME
};

exports.handler = async (event) => {
  const tests = 
  [
    testFirstGroupRequestSomeExistingUsers, 
    testJoinExistingGroup, 
  
  ];
  let results = [];
  for (const test of tests) {
    const res = await test();
    //console.log(res);
    results.push(res);
  }
  // console.log(`${user}`); // prints [object Object];
  // JSON.stringify puts quotes around property names which is invalid for the graphql query    

  // // TODO implement
  // const response = {
  //     statusCode: 200,
  // //  Uncomment below to enable CORS requests
  // //  headers: {
  // //      "Access-Control-Allow-Origin": "*",
  // //      "Access-Control-Allow-Headers": "*"
  // //  }, 
  //     body: graphqlData.data
  // };
  return results;
}

async function callLambda(query) {
  try {
    const graphqlData = await axios({
      url: process.env.API_MEETABLE_GRAPHQLAPIENDPOINTOUTPUT,
      method: 'post',
      headers: {
          'x-api-key': process.env.API_MEETABLE_GRAPHQLAPIKEYOUTPUT
      },
      data: {
          query: query,
      }
    });
    return graphqlData.data;
  } catch (err) {
    return err 
  }
}
// No existing grouped users yet (but some existing users). 
// attempt to group a user
// expect null as the group returned
async function testFirstGroupRequestSomeExistingUsers() {
  let ungroupedUserWithQuiz2 = JSON.parse(JSON.stringify(ungroupedUserWithQuiz));
  ungroupedUserWithQuiz2["Item"]["id"] = "1";
  let quiz2 = JSON.parse(JSON.stringify(genericQuiz));
  quiz2["Item"]["id"] = "2";
  await setup([ungroupedUserWithQuiz, ungroupedUserWithQuiz2, quiz2]);
  const res = await callLambda(`
  query JoinFriendGroup {
    joinFriendGroup(user: {id:"2",university:"UBC",year:1}) {
      status
      group
      error
    }
  }
  `);
  await tearDown([ungroupedUserWithQuiz, ungroupedUserWithQuiz2, quiz2]);
  res["expectedGroup"] = null;
  res["passed"] = res["expectedGroup"] === res["data"]["joinFriendGroup"]["group"];
  return res;  
}

// non-full group with compatible user exists
// expect groupID == 1
async function testJoinExistingGroup() {
  const user2quiz = JSON.parse(JSON.stringify(genericQuiz)); // deep copy
  user2quiz["Item"]["userID"] = "2";
  user2quiz["Item"]["id"] = "2";

  await setup([groupedUserWithQuiz, group, connection,
    ungroupedUserWithQuiz, genericQuiz, user2quiz]);
  const res = await callLambda(`
  query JoinFriendGroup {
    joinFriendGroup(user: {id:"2",university:"UBC",year:1}) {
      status
      group
      error
    }
  }
  `);
  await tearDown([groupedUserWithQuiz, group, connection,
    ungroupedUserWithQuiz, genericQuiz, user2quiz]);

  res["expectedGroup"] = '1';
  res["passed"] = res["data"]["joinFriendGroup"]["status"] === 200 
    && res["expectedGroup"] === res["data"]["joinFriendGroup"]["group"];
  return res;
}

// write all items to the db
// return the array of resolved or rejected promises
async function setup(items) {
  // 1 line arrow fn implicit return
 const res = await Promise.all(items.map(item => dbPut(item)));
 return res;
}

// delete all records in the db corresponding to items
// return the array of resolved or rejected promises
async function tearDown(items) {
  const res = await Promise.all(items.map(item => {
    // friend group PK is groupID rather than id for some reason
    return dbDelete(item["TableName"], 
    item["Item"]["id"] ? {id: item["Item"]["id"]} : {groupID: item["Item"]["groupID"]});
  }));
  return res;
}


function dbPut(params) {
  return docClient.put(params).promise().catch(err => console.log(err))
}

function dbDelete(TableName, Key) {
  console.log("called");
  return docClient.delete({
    TableName: TableName,
    Key: Key,
  }).promise().catch(err => console.log(err));
}

