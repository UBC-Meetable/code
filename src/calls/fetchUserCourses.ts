import { GraphQLResult } from "@aws-amplify/api";
import { API } from "aws-amplify";
import { getUserCourses } from "../graphql/customQueries";
import { CognitoUser, CourseGroup } from "../types";

/**
 * @returns CourseGroup[]
 */
async function fetchUserCourses(user: CognitoUser) {
  const res = await API.graphql({
    query: getUserCourses,
    variables: {
      id: user.attributes.sub,
    },
  }) as GraphQLResult<any>;
  const fetchedGroups = res.data?.getUser?.courseGroups?.items
    .map((group:any) => group.courseGroup);

  return fetchedGroups as CourseGroup[];
}

async function fetchUserCoursesById(userId: string) {
  const res = await API.graphql({
    query: getUserCourses,
    variables: {
      id: userId,
    },
  }) as GraphQLResult<any>;
  const fetchedGroups = res.data?.getUser?.courseGroups?.items
    .map((group:any) => group.courseGroup);

  return fetchedGroups as CourseGroup[];
}

export default fetchUserCourses;

export { fetchUserCoursesById };
