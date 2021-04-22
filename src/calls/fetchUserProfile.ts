import { GraphQLResult } from "@aws-amplify/api";
import { API } from "aws-amplify";
import { GetUserQuery, GetUserQueryVariables } from "../API";
import { getUser } from "../graphql/queries";

const fetchUserProfile = ({ id }: GetUserQueryVariables):
Promise<GraphQLResult<GetUserQuery>> => API.graphql({
  query: getUser,
  variables: {
    id,
  },
}) as Promise<GraphQLResult<GetUserQuery>>;

export default fetchUserProfile;
