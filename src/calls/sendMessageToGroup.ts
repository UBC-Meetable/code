import { API } from "aws-amplify";
import { GraphQLResult } from "@aws-amplify/api";
import {
  CreateChatMessageInput, FileAttachment, GroupType, pushNotificationInput, pushNotificationOutput,
} from "../API";
import { createChatMessage, pushNotification } from "../graphql/mutations";

type SendMessageToCourseGroupInput = {
  groupID?: string;
  body?: string;
  userID?: string;
  groupType: GroupType;
  userName: string;
  hasFile: boolean;
  files?: FileAttachment[];
};

const sendMessageToGroup = async ({
  groupID,
  body,
  userID,
  groupType,
  userName,
  hasFile,
  files,
}: SendMessageToCourseGroupInput) => {
  if (!groupID || !body || !userID || !groupType || !userName) {
    console.error("Null Inputs");
    throw new Error("An input to sendMessageToCourseGroup was undefined");
  }

  // Removes __typename from the files
  const formattedFiles = files?.map((file) => ({
    fileURI: file.fileURI,
    height: file.height,
    width: file.width,
    type: file.type,
  }));

  await API.graphql({
    query: createChatMessage,
    variables: {
      input: {
        groupChatID: groupID,
        groupType,
        userID,
        body,
        files: formattedFiles,
      } as CreateChatMessageInput,
    },
  });

  try {
    API.graphql({
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
