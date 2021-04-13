import { API } from "aws-amplify";
import { GraphQLResult } from "@aws-amplify/api";
import { CreateUserProfileMutation, UserState } from "../API";
import { createUserProfile as query } from "../graphql/mutations";

const createUserProfile = (email:string):
Promise<GraphQLResult<CreateUserProfileMutation>> => API.graphql({
  query,
  variables: {
    input: {
      email,
      userState: UserState.SIGNED_UP,
    },
  },
}) as Promise<GraphQLResult<CreateUserProfileMutation>>;

export default createUserProfile;
