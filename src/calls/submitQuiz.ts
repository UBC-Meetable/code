import { GraphQLResult } from "@aws-amplify/api";
import { API } from "aws-amplify";
import {
  CreateQuizInput, CreateQuizMutation, CreateUserInput, CreateUserMutation, UserState,
} from "../API";
import { createQuiz } from "../graphql/mutations";

const submitQuiz = (input: CreateQuizInput):
Promise<GraphQLResult<CreateQuizMutation>> => API.graphql({
  query: createQuiz,
  variables: {
    input,
  },
}) as Promise<GraphQLResult<CreateQuizMutation>>;

export default submitQuiz;
