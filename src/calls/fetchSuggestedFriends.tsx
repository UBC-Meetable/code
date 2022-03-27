import { GraphQLResult } from "@aws-amplify/api";
import { API } from "aws-amplify";
import { getFriendSuggestion } from "../graphql/queries";
import { GetFriendSuggestionQuery } from "../API";

// using the wrong graphQL query? Confirm that it's getFriendSuggestion
const fetchSuggestedFriends = async () => {
  const res: GraphQLResult<GetFriendSuggestionQuery> = await API.graphql({
    query: getFriendSuggestion,
  }) as GraphQLResult<GetFriendSuggestionQuery>;
  console.log("Fetching suggested friends");
  console.log(res);
  if (res.data?.getFriendSuggestion) {
    return res.data.getFriendSuggestion;
  }
  throw new Error("Failed to get suggested friends");
};

export default fetchSuggestedFriends;
