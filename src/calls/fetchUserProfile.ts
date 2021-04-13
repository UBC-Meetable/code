import { API } from "aws-amplify";
import { GraphQLResult } from "@aws-amplify/api";
import { getUserProfile } from "../graphql/queries";
import { GetUserProfileQuery, UserProfile } from "../API";

const fetchUserProfile = (email:string):Promise<GraphQLResult<GetUserProfileQuery>> => API.graphql({
  query: getUserProfile,
  variables: {
    email,
  },
}) as Promise<GraphQLResult<GetUserProfileQuery>>;

export default fetchUserProfile;
