import { GraphQLResult } from "@aws-amplify/api";
import { API } from "aws-amplify";
import {
  GetUserQuizzesQuery, GetUserQuizzesQueryVariables,
} from "../API";
import { getUserQuizzes as query } from "../graphql/customQueries";

const getUserQuizzes = (input: GetUserQuizzesQueryVariables):
Promise<GraphQLResult<GetUserQuizzesQuery>> => API.graphql({
  query,
  variables: input,
}) as Promise<GraphQLResult<GetUserQuizzesQuery>>;

export default getUserQuizzes;
