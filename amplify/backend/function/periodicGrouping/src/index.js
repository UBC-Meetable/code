/* Amplify Params - DO NOT EDIT
	API_MEETABLE_FRIENDGROUPCONNECTIONTABLE_ARN
	API_MEETABLE_FRIENDGROUPCONNECTIONTABLE_NAME
	API_MEETABLE_FRIENDGROUPTABLE_ARN
	API_MEETABLE_FRIENDGROUPTABLE_NAME
	API_MEETABLE_GRAPHQLAPIENDPOINTOUTPUT
	API_MEETABLE_GRAPHQLAPIIDOUTPUT
	API_MEETABLE_USERTABLE_ARN
	API_MEETABLE_USERTABLE_NAME
	ENV
	FUNCTION_JOINFRIENDGROUP_NAME
	REGION
Amplify Params - DO NOT EDIT */


//import { v4 as uuid } from "uuid";
const { v4 } = require("uuid");
const uuid = v4;
// const axios = require('axios');
const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();

// const { LambdaClient } = require("@aws-sdk/client-lambda");

// const lambda = new LambdaClient({ region: "us-east-1" });

const lambda = new AWS.Lambda({ region: "us-east-1" });

const tables = {
    user: process.env.API_MEETABLE_USERTABLE_NAME,
    friendGroup: process.env.API_MEETABLE_FRIENDGROUPTABLE_NAME,
    friendGroupConnection: process.env.API_MEETABLE_FRIENDGROUPCONNECTIONTABLE_NAME,
  };

const joinFriendGroupLambdaName = process.env.FUNCTION_JOINFRIENDGROUP_NAME;

exports.handler = async (event) => {

    const scanParams = {
        TableName: tables.user,
        ProjectionExpression: "id, university, #year",
        FilterExpression: " attribute_exists(multipleGroupsOptIn) AND multipleGroupsOptIn = :bool",
        ExpressionAttributeNames: {
          "#year": "year"
        },
        ExpressionAttributeValues: {
            ":bool": true,
        }
    }

    // get opted-in users through paginated scan
    // TODO: verify this logic
    const users = [];
    let page = {};
    do {
        console.log("iteration");
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

    console.log(users);

    // iterate over opted-in users and find their group id to be grouped into (in parallel (?))
    // groupWithExisting: array of [user, groupID]
    const groupWithExisting = [];
    const groupWithNew = [];
    await Promise.all(users.map((user) => { // resolved array itself is thrown away
      const lambdaParams = {
        FunctionName: joinFriendGroupLambdaName,
        Payload: JSON.stringify({
          user: {
            id: user.id,
            university: user.university,
            year: user.year
          }
        })
      }
      console.log("calling lambda");
      return lambda.invoke(lambdaParams)
      .promise()
      .then(
        (data) => { // note that lambda could be successfully called but return a 500 response with no groupID, in that case put the user into a new empty group also
          if (JSON.parse(data.Payload).groupID) {
            groupWithExisting.push([user, JSON.parse(data.Payload).groupID])
          } else {
            groupWithNew.push(user);
          }
        },
        (err) => { // lambda not successfully called, put user into a new empty group
          console.error(err)
          groupWithNew.push(user);
        }
      );
    }));

    console.log(groupWithNew);
    console.log(groupWithExisting);

    // group the users (sequentially, but could be done in parallel potentially)

    for (const pair of groupWithExisting) {
      let foundGroup;
      try {
        foundGroup = (await fetchFriendGroup(pair[1]));
        console.log("Found Friend Group:", foundGroup.groupID);
        await createFriendGroupConnection(foundGroup.groupID, pair[0]);
      } catch (e) {
        console.error(e);
      }
    }
    for (const user of groupWithNew) {
      try {
        let uniqueID = uuid();
        console.log(uniqueID);
        let foundGroup = await createFriendGroup(uniqueID);
        console.log("Created Friend Group:", foundGroup);
        await createFriendGroupConnection(uniqueID, user);
      } catch (e) {
        console.error(e);
      }
    }
    // for (const pair of groups) {
    //   let foundGroup;
    //   let uniqueID = uuid();
    //   console.log(uniqueID);

    //   try {
    //     foundGroup = (await fetchFriendGroup(pair[1]));
    //     console.log("Found Friend Group:", foundGroup.groupID);
    //   } catch (e) {
    //     console.log("GroupID was not provided");
    //     try {
    //       foundGroup = await createFriendGroup(uniqueID);
    //       console.log("Created Friend Group:", foundGroup);
    //     } catch (err) {
    //       console.error("Failed to create friend group for" + pair[0]);
    //       // throw new Error(err);
    //     }
    //   }
    
    //   //if (foundGroup!.users!.items!.find((user) => user?.userID === userID)) return foundGroup; // friend grouping lambda already has some prevention for users getting put into the same group twice, but this doesn't hurt
    //   // if (foundGroup && foundGroup.users && foundGroup.users.items && foundGroup.users.items.find((user) => user?.userID === userID)) {
    //   //   return foundGroup
    //   // }

    //   //let trueGroupID = foundGroup?.groupID ? foundGroup.groupID : uniqueID; // syntax error apparently
    //   let trueGroupID;
    //   if (foundGroup && foundGroup.groupID) {
    //     trueGroupID = foundGroup.groupID;
    //   } else {
    //     trueGroupID = uniqueID;
    //   }

    //   try {
    //     await createFriendGroupConnection(trueGroupID, pair[0]);
    //   } catch (e) {
    //     console.error("Failed to join friend group, ", e);
    //   }
    // }

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

async function createFriendGroupConnection(groupID, user) {
  console.log(groupID, "userID", user);
  const params = {
    TableName: tables.friendGroupConnection,
    Item: { // not sure if just these attributes is enough
       groupID,
       userID: user.id,
       id: uuid(),
    }
  };
  return docClient.put(params)
  .promise()
  .then(
    (data)=> data.Attributes,
    (err) => console.error(err)
  );
}

async function fetchFriendGroup(id) {
  return docClient.get({
    TableName: tables.friendGroup,
    Key: {"groupID": id},
    ConsistentRead: true
  }).promise()
  .then(
    (data) => data.Item, // results in undefined if group with id does not exist
    (error) => console.error("An error occurred:",error),
  );
}

// not sure if correct
async function createFriendGroup(id) {
  const dateTime = new Date().toISOString();
  const params = {
    TableName: tables.friendGroup,
    Item: {
       __typename: "FriendGroup",
       title: "",
       createdAt: dateTime,
       updatedAt: dateTime,
       groupID: id,
    }
  };
  return await (docClient.put(params)
  .promise()
  .then(
    (data) => data,
    (err) => console.error(err)
  ));

}


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
