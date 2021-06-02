import { GraphQLResult } from "@aws-amplify/api";
import { API } from "aws-amplify";
import { getUserCourses } from "../graphql/customQueries";
import { CognitoUser, CourseGroup } from "../types";

/**
 * @returns CourseGroup[]
 */
const fetchUserCourses = async (user: CognitoUser) => {
  console.log("failed");

  try {
    const res = await API.graphql({
      query: getUserCourses,
      variables: {
        id: user.attributes.sub,
      },
    }) as GraphQLResult<any>;
    console.log(res);
    const fetchedGroups = res.data?.getUser?.courseGroups?.items
      .map((group:any) => group.courseGroup);

    return fetchedGroups as CourseGroup[];
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
};

export default fetchUserCourses;
