/* Amplify Params - DO NOT EDIT
	API_MEETABLE_GRAPHQLAPIENDPOINTOUTPUT
	API_MEETABLE_GRAPHQLAPIIDOUTPUT
	API_MEETABLE_USERTABLE_ARN
	API_MEETABLE_USERTABLE_NAME
	ENV
	REGION
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

 const AWS = require("aws-sdk");
 const docClient = new AWS.DynamoDB.DocumentClient();
 
 const userIdsParams = {
   TableName: process.env.API_MEETABLE_USERTABLE_NAME,
 };
 
 const numberOfSuggestions = 5;
 const maxNumberOfInterests = 5;
 
 function getUserByIdParams(id) {
   let params = {
     TableName: process.env.API_MEETABLE_USERTABLE_NAME,
     Key: {
       id: id,
     },
   };
 
   return params;
 }
 
 function shuffleArray(array) {
   for (let i = array.length - 1; i > 0; i--) {
     const j = Math.floor(Math.random() * (i + 1));
     const temp = array[i];
     array[i] = array[j];
     array[j] = temp;
   }
 }
 
 async function getUserIds() {
   try {
     const userObjs = await docClient.scan(userIdsParams).promise();
     let userIds = new Array(userObjs.length);
 
     for (let i = 0; i < userObjs.Items.length; i++) {
       userIds[i] = userObjs.Items[i].id;
     }
 
     return userIds;
   } catch (err) {
     return err;
   }
 }
 
 async function getFriendSuggestion(userId) {
   const friendSuggestions = [];
   const interestMatches = new Array(maxNumberOfInterests + 1);
 
   for (let i = 0; i < maxNumberOfInterests + 1; i++) {
     interestMatches[i] = [];
   }
 
   const userIds = await getUserIds();
 
   const loggedInUser = await docClient.get(getUserByIdParams(userId)).promise();
   const interestsOfLoggedInUser = loggedInUser.Item.interests;
 
   for (const id of userIds) {
     if (id == userId) {
       continue;
     }
     const user = await docClient.get(getUserByIdParams(id)).promise();
     const interestsOfUser = user.Item.interests;
     const numberOfSameInterests = interestsOfLoggedInUser.filter((interest) =>
       interestsOfUser.includes(interest)
     ).length;
 
     interestMatches[numberOfSameInterests].push(user);
   }
 
   for (let arr of interestMatches) {
     shuffleArray(arr);
   }
 
   for (let i = maxNumberOfInterests; i >= 0; i--) {
     for (let j = 0; j < interestMatches[i].length; j++) {
       if (friendSuggestions.length < numberOfSuggestions) {
         friendSuggestions.push(interestMatches[i][j]);
       } else {
         i = -1;
         break;
       }
     }
   }
   
   console.log(friendSuggestions);
   return friendSuggestions;
 }
 
 exports.handler = async (event, context) => {
     let arguments = event.arguments;
     let userId = arguments.id;
   try {
     const friends = await getFriendSuggestion(userId);
     return { body: JSON.stringify(friends) };
   } catch (err) {
     return { error: err };
   }
 };
