import { GraphQLResult } from "@aws-amplify/api";
import { API } from "aws-amplify";
import { GetUserProfileQuery, GetUserProfileQueryVariables } from "../API";

export const getUserCourses = /* GraphQL */ `
  query GetUserProfile($email: String!) {
    getUserProfile(email: $email) {
      email
      courses {
        code
        section
      }
    }
  }
`;

const fetchUserCourses = ({ email }: GetUserProfileQueryVariables):
Promise<GraphQLResult<GetUserProfileQuery>> => API.graphql({
  query: getUserCourses,
  variables: {
    email,
  },
}) as Promise<GraphQLResult<GetUserProfileQuery>>;

export default fetchUserCourses;
