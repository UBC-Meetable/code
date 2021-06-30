import { GraphQLResult } from "@aws-amplify/api";
import { API } from "aws-amplify";
import { FriendGroup, GetFriendGroupQuery, GetFriendGroupQueryVariables } from "../API";
import { getFriendGroup } from "../graphql/queries";

const fetchFriendGroup = async ({ groupID }: GetFriendGroupQueryVariables) => {
  const res = await API.graphql({
    query: getFriendGroup,
    variables: {
      groupID,
    },
  }) as GraphQLResult<GetFriendGroupQuery>;
  if (res.data?.getFriendGroup) {
    return res.data.getFriendGroup as FriendGroup;
  }

  throw new Error(`Failed to get friend group with groupID ${groupID}`);
};

export default fetchFriendGroup;
