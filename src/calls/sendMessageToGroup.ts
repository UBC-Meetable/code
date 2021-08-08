import { API } from "aws-amplify";
import { Expo } from "expo-server-sdk";
import { CreateChatMessageInput, GroupType } from "../API";
import { createChatMessage } from "../graphql/mutations";
import fetchFriendGroup from "./fetchFriendGroup";

type SendMessageToCourseGroupInput = {
  groupID?: string;
  body?: string;
  userID?: string;
  groupType: GroupType;
};

const sendMessageToGroup = async ({
  groupID,
  body,
  userID,
  groupType,
}: SendMessageToCourseGroupInput) => {
  // const expo = new Expo();
  if (!groupID || !body || !userID || !groupType) {
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
};

export default sendMessageToGroup;
