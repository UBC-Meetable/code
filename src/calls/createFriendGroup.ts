import { GraphQLResult } from "@aws-amplify/api";
import { API } from "aws-amplify";
import {
  CreateFriendGroupMutation,
  CreateFriendGroupMutationVariables,
  FriendGroup,
} from "../API";
import { createFriendGroup as query } from "../graphql/mutations";

const createFriendGroup = async ({
  input,
}: CreateFriendGroupMutationVariables) => {
  try {
    const res = await API.graphql({
      query,
      variables: { input },
    }) as GraphQLResult<CreateFriendGroupMutation>;
    if (res.data?.createFriendGroup) {
      return res.data.createFriendGroup as FriendGroup;
    }
    console.error("err,", res.errors);
    throw new Error("Failed to create friend group");
  } catch (e) {
    console.log(e);
    throw new Error("Failed to create friend group");
  }
};

export default createFriendGroup;
