import { GraphQLResult } from "@aws-amplify/api";
import { API } from "aws-amplify";
import { UpdateUserInput, UpdateUserMutation } from "../API";
import { updateUser as query } from "../graphql/mutations";

const updateUserProfile = (input: UpdateUserInput):
Promise<GraphQLResult<UpdateUserMutation>> => API.graphql({
  query,
  variables: {
    input: {
      ...input,
    },
  },
}) as Promise<GraphQLResult<UpdateUserMutation>>;

export default updateUserProfile;
