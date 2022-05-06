import { GraphQLResult } from "@aws-amplify/api";
import { API } from "aws-amplify";
import { getFriendSuggestion } from "../graphql/queries";
import { GetFriendSuggestionQuery, GetUserQueryVariables } from "../API";

const fetchSuggestedFriends = async ({ id }: GetUserQueryVariables) => {
  const res: GraphQLResult<GetFriendSuggestionQuery> = await API.graphql({
    query: getFriendSuggestion,
    variables: {
      id,
    },
  }) as GraphQLResult<GetFriendSuggestionQuery>;
  console.log("Fetching suggested friends");
  console.log(id, res);
  if (res.data?.getFriendSuggestion) {
    return res.data.getFriendSuggestion.user;
  }
  throw new Error("Failed to get suggested friends");
};

export default fetchSuggestedFriends;
