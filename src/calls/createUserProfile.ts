import { GraphQLResult } from "@aws-amplify/api";
import { API } from "aws-amplify";
import { CreateUserInput, CreateUserMutation, UserState } from "../API";
import { createUser as query } from "../graphql/mutations";

const createUserProfile = (input: CreateUserInput):
Promise<GraphQLResult<CreateUserMutation>> => API.graphql({
  query,
  variables: {
    input: {
      email: input.email,
      id: input.id,
      userState: UserState.SIGNED_UP,
      university: input.university,
      year: input.year,
    },
  },
}) as Promise<GraphQLResult<CreateUserMutation>>;

export default createUserProfile;
