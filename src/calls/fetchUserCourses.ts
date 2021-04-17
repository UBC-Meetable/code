import { GraphQLResult } from "@aws-amplify/api";
import { API } from "aws-amplify";
import { GetUserQuery, GetUserQueryVariables } from "../API";
import { getUser } from "../graphql/queries";
import { CourseGroup } from "../types";

const fetchUserCourses = async ({ id }: GetUserQueryVariables) => {
  const res = await API.graphql({
    query: getUser,
    variables: {
      id,
    },
  }) as GraphQLResult<GetUserQuery>;

  const fetchedGroups = res.data?.getUser?.courseGroups?.items
    ?.map((group: any) => group.courseGroup) as CourseGroup[];

  return fetchedGroups;
};

export default fetchUserCourses;
