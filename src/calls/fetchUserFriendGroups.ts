import { GraphQLResult } from "@aws-amplify/api";
import { API } from "aws-amplify";
import { FriendGroup, GetUserFriendGroupsQuery } from "../API";
import { getUserFriendGroups } from "../graphql/customQueries";
import { CognitoUser } from "../types";

/**
 * @returns FriendGroup[]
 */
const fetchUserFriendGroups = async (user: CognitoUser) => {
  const res = await API.graphql({
    query: getUserFriendGroups,
    variables: {
      id: user.attributes.sub,
    },
  }) as GraphQLResult<GetUserFriendGroupsQuery>;

  const fetchedGroups = res.data?.getUser
    ?.friendGroups?.items!.map((group:any) => group.friendGroup);

  return fetchedGroups as FriendGroup[];
};

export default fetchUserFriendGroups;
