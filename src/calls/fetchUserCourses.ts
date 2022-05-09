/* eslint-disable comma-dangle */
import { GraphQLResult } from "@aws-amplify/api";
import { API } from "aws-amplify";
import { CourseGroup } from "../API";
import { getUserCourses } from "../graphql/customQueries";

/**
 * @returns CourseGroup[]
 */
const fetchUserCourses = async (id: string) => {
  console.log("fetched");
  const res = (await API.graphql({
    query: getUserCourses,
    variables: {
      id,
    },
  })) as GraphQLResult<any>;
  const fetchedGroups = res.data?.getUser?.courseGroups?.items.map(
    (group: any) => {
      return group.courseGroup;
    }
  );

  return fetchedGroups as CourseGroup[];
};

export default fetchUserCourses;
