import { API } from "aws-amplify";
import {
  CreateChatMessageInput,
} from "../API";
import { createChatMessage } from "../graphql/mutations";

type SendMessageToCourseGroupInput = {groupID?: string, body?: string, userID?: string}

const sendMessageToCourseGroup = async ({
  groupID,
  body,
  userID,
}: SendMessageToCourseGroupInput) => {
  if (!groupID || !body || !userID) {
    console.error("Null Inputs");
    throw new Error("An input to sendMessageToCourseGroup was undefined");
  }
  const res = await API.graphql({
    query: createChatMessage,
    variables: {
      input: {
        groupChatID: groupID,
        userID,
        body,
      } as CreateChatMessageInput,
    },
  });
};

export default sendMessageToCourseGroup;
