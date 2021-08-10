/* Amplify Params - DO NOT EDIT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const { Expo } = require('expo-server-sdk');
const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();

const tables = {
  user: process.env.API_MEETABLE_USERTABLE_NAME,
  friendGroupConnectionModel: process.env.API_MEETABLE_FRIENDGROUPCONNECTIONTABLE_NAME,
  friendGroup: process.env.API_MEETABLE_FRIENDGROUPTABLE_NAME,
  quiz: process.env.API_MEETABLE_QUIZTABLE_NAME,
};

exports.handler = async (event) => {
  const groupID = event.arguments.groupID;
  const userID = event.arguments.userID;
  const userName = event.arguments.userName;
  const hasFile = event.arguments.hasFile;
  const text = event.arguments.text;
  // Create a new Expo SDK client
  // optionally providing an access token if you have enabled push security
  let expo = new Expo();

  try {
    // find push tokens
    let userIDs = await docClient.query({
      TableName: tables.friendGroupConnectionModel,
      IndexName: "byFriendGroup",
      KeyConditionExpression: "groupID = :groupID",
      ExpressionAttributeValues: {
        ":groupID": groupID
      }
    }).promise().then(
      function(data) {
        return data.Items.map(fgc => fgc.userID);
      },
      function(error) {
        console.error("An error occurred:",error);
      }
    );
    let pushTokens = await Promise.all(userIDs.map((ID) => {
      if (ID !== userID) { // not sure if this results in an undefined in the result array
        return docClient.get({
          TableName: tables.user,
          Key: {"id": ID}, // not sure if correct
          ConsistentRead: true
        }).promise()
        .then(
          (data) => data.Item.expoPushToken,
          (error) => console.error("An error occurred:",error),
        );
      }
    }));
    
    // Create the messages that you want to send to clients
    let messages = [];
    for (let pushToken of pushTokens) {
      // Each push token looks like ExponentPushToken[xxxxxxxxxxxxxxxxxxxxxx]
    
      // Check that all your push tokens appear to be valid Expo push tokens
      if (!Expo.isExpoPushToken(pushToken)) {
        console.error(`Push token ${pushToken} is not a valid Expo push token`);
        continue;
      }
    
      // Construct a message (see https://docs.expo.io/push-notifications/sending-notifications/)
      let body = "";
      if (hasFile) {
        body += `${userName} sent a file\n`;
      }
      if (text) {
        body += `${userName}: ${msg.text}`;
      }
      messages.push({
        to: pushToken,
        sound: 'default',
        body,
        //data: { withSome: 'data' },
      });
    }
    
    // The Expo push notification service accepts batches of notifications so
    // that you don't need to send 1000 requests to send 1000 notifications. We
    // recommend you batch your notifications to reduce the number of requests
    // and to compress them (notifications with similar content will get
    // compressed).
    let chunks = expo.chunkPushNotifications(messages);
    let tickets = [];


    // Send the chunks to the Expo push notification service. There are
    // different strategies you could use. A simple one is to send one chunk at a
    // time, which nicely spreads the load out over time:
    for (let chunk of chunks) {
      try {
        let ticketChunk = await expo.sendPushNotificationsAsync(chunk);
        console.log(ticketChunk);
        tickets.push(...ticketChunk);
        // NOTE: If a ticket contains an error code in ticket.details.error, you
        // must handle it appropriately. The error codes are listed in the Expo
        // documentation:
        // https://docs.expo.io/push-notifications/sending-notifications/#individual-errors
      } catch (error) {
        console.error(error);
      }
    }
  } catch(error) {
    console.error(error);
    return {statusCode: 500, body: JSON.stringify(error)};
}

    
    const response = {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
    //  headers: {
    //      "Access-Control-Allow-Origin": "*",
    //      "Access-Control-Allow-Headers": "*"
    //  }, 
        // body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
};
