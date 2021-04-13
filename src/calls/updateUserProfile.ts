import { GraphQLResult } from "@aws-amplify/api";
import { API } from "aws-amplify";
import { UpdateUserProfileInput, UpdateUserProfileMutation, UserState } from "../API";
import { updateUserProfile as query } from "../graphql/mutations";

const updateUserProfile = (input: UpdateUserProfileInput):
Promise<GraphQLResult<UpdateUserProfileMutation>> => API.graphql({
  query,
  variables: {
    input: {
      ...input,
    },
  },
}) as Promise<GraphQLResult<UpdateUserProfileMutation>>;

export default updateUserProfile;
