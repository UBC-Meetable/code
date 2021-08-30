import { API } from "aws-amplify";
import { GraphQLResult } from "@aws-amplify/api";
import {
  CreateChatMessageInput, GroupType, pushNotificationInput, pushNotificationOutput,
} from "../API";
import { createChatMessage, pushNotification } from "../graphql/mutations";

type SendMessageToCourseGroupInput = {
  groupID?: string;
  body?: string;
  userID?: string;
  groupType: GroupType;
  userName: string;
  hasFile: boolean;
};

const sendMessageToGroup = async ({
  groupID,
  body,
  userID,
  groupType,
  userName,
  hasFile,
}: SendMessageToCourseGroupInput) => {
  if (!groupID || !body || !userID || !groupType || !userName) {
    console.error("Null Inputs");
    throw new Error("An input to sendMessageToCourseGroup was undefined");
  }
  const res = await API.graphql({
    query: createChatMessage,
    variables: {
      input: {
        groupChatID: groupID,
        groupType,
        userID,
        body,
      } as CreateChatMessageInput,
    },
  });
  console.log("Res done");

  try {
    const lambdaRes = API.graphql({
      query: pushNotification,
      variables: {
        input: {
          groupID,
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

export default sendMessageToGroup;
