import { GraphQLResult } from "@aws-amplify/api";
import { API } from "aws-amplify";
import { ChatMessageByParentIdQuery, ChatMessageByParentIdQueryVariables } from "../API";
import { chatMessageByParentId } from "../graphql/queries";
import { ChatMessage } from "../types";

const fetchCourseGroupMessages = async ({ parentId, limit, nextToken }:
    ChatMessageByParentIdQueryVariables) => {
  const res = await API.graphql({
    query: chatMessageByParentId,
    variables: {
      parentId,
      limit,
      nextToken,
      sortDirection: "DESC",
    },
  }) as GraphQLResult<ChatMessageByParentIdQuery>;

  if (res.data?.ChatMessageByParentId) {
    return {
      messages: res.data.ChatMessageByParentId.items as ChatMessage[],
      token: res.data.ChatMessageByParentId.nextToken,
    };
  }

  throw new Error(`Failed to get messages for group with ID ${parentId}`);
};

export default fetchCourseGroupMessages;
