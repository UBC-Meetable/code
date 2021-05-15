import { GraphQLResult } from "@aws-amplify/api";
import { API } from "aws-amplify";
import { MessagesByCourseGroupChatIdQuery, MessagesByCourseGroupChatIdQueryVariables } from "../API";
import { messagesByCourseGroupChatId } from "../graphql/queries";
import { ChatMessage } from "../types";

const fetchCourseGroupMessages = async ({ groupChatID }:
    MessagesByCourseGroupChatIdQueryVariables) => {
  const res = await API.graphql({
    query: messagesByCourseGroupChatId,
    variables: {
      groupChatID,
    },
  }) as GraphQLResult<MessagesByCourseGroupChatIdQuery>;
  if (res.data?.messagesByCourseGroupChatID) {
    return res.data.messagesByCourseGroupChatID.items as ChatMessage[];
  }

  throw new Error(`Failed to get course group with groupID ${groupChatID}`);
};

export default fetchCourseGroupMessages;
