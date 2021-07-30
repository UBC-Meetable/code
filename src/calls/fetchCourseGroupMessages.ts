import { GraphQLResult } from "@aws-amplify/api";
import { API } from "aws-amplify";
import { MessagesByCourseGroupChatIdQuery, MessagesByCourseGroupChatIdQueryVariables } from "../API";
import { messagesByCourseGroupChatId } from "../graphql/queries";
import { ChatMessage } from "../types";

const fetchCourseGroupMessages = async ({ groupChatID, limit, nextToken }:
    MessagesByCourseGroupChatIdQueryVariables) => {
  console.log("Fetching Messages");

  const res = await API.graphql({
    query: messagesByCourseGroupChatId,
    variables: {
      groupChatID,
      limit,
      nextToken,
      sortDirection: "DESC",
    },
  }) as GraphQLResult<MessagesByCourseGroupChatIdQuery>;
  console.log("BIG RES***", { res });

  if (res.data?.messagesByCourseGroupChatID) {
    console.log("Success");

    return {
      messages: res.data.messagesByCourseGroupChatID.items as ChatMessage[],
      token: res.data.messagesByCourseGroupChatID.nextToken,
    };
  }

  throw new Error(`Failed to get course group with groupID ${groupChatID}`);
};

export default fetchCourseGroupMessages;
