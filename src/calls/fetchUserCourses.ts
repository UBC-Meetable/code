import { GraphQLResult } from "@aws-amplify/api";
import { API } from "aws-amplify";
import { GetUserProfileQuery, GetUserProfileQueryVariables, ListCourseGroupsQuery } from "../API";
import { getUserCourses } from "../graphql/customQueries";
import { CourseGroup } from "../types";

const fetchUserCourses = async ({ email }: GetUserProfileQueryVariables) => {
  const res = await API.graphql({
    query: getUserCourses,
    variables: {
      email,
    },
  }) as GraphQLResult<GetUserProfileQuery>;

  const fetchedGroups = res.data?.getUserProfile?.courseGroups?.items
    ?.map((group: any) => group.courseGroup) as CourseGroup[];

  return fetchedGroups;
};

export default fetchUserCourses;
