import { API } from "aws-amplify";
import { GraphQLResult } from "@aws-amplify/api";
import {
  CreateChatMessageInput, pushNotificationInput, pushNotificationOutput,
} from "../API";
import { createChatMessage, pushNotification } from "../graphql/mutations";

type SendMessageToUserInput = {
    userID: string;
    userID2: string;
    directChatID: string;
    userName: string;
    hasFile: boolean;
    body: string;
  }

const sendMessageToUser = async ({
  userID,
  directChatID,
  userName,
  hasFile,
  body,
}: SendMessageToUserInput) => {
  if (!userID || !body || !userName || !directChatID) {
    console.error("Null Inputs");
    throw new Error("An input to sendMessageToUser was undefined");
  }
  await API.graphql({
    query: createChatMessage,
    variables: {
      input: {
        directChatID,
        userID,
        body,
      } as CreateChatMessageInput,
    },
  });
  console.log("Res done");

  try {
    API.graphql({
      query: pushNotification,
      variables: {
        input: {
          directChatID,
          userID,
          userName,
          hasFile,
          text: body,
        } as pushNotificationInput,
      },
    }) as Promise<GraphQLResult<pushNotificationOutput>>;
    console.log("LambdaRes done");
  } catch (err) {
    console.error("failed to send push notifications");
    throw err;
  }
};

export default sendMessageToUser;
