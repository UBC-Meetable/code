import { GraphQLResult } from "@aws-amplify/api";
import { API } from "aws-amplify";
import { GetUserQuery, GetUserQueryVariables } from "../API";
import { getUserCourses } from "../graphql/customQueries";
import { CourseGroup } from "../types";

/**
 *
 * @param param0.id user id (user.attributes.sub)
 * @returns CourseGroup[] | []
 */
const fetchUserCourses = async ({ id }: GetUserQueryVariables) => {
  const res = await API.graphql({
    query: getUserCourses,
    variables: {
      id,
    },
  }) as GraphQLResult<any>;
  const fetchedGroups = res.data?.getUser?.courseGroups?.items
    .map((group:any) => group.courseGroup);

  return fetchedGroups as CourseGroup[];
};

export default fetchUserCourses;
