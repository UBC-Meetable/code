import { GraphQLResult } from "@aws-amplify/api";
import { API } from "aws-amplify";
import { joinFriendGroupInput, JoinFriendGroupQuery } from "../API";
import { joinFriendGroup } from "../graphql/queries";

const getBestFriendGroup = (input: joinFriendGroupInput):
Promise<GraphQLResult<JoinFriendGroupQuery>> => API.graphql({
  query: joinFriendGroup,
  variables: {
    input,
  },
}) as Promise<GraphQLResult<JoinFriendGroupQuery>>;

export default getBestFriendGroup;
