/* eslint-disable max-len */
import { GraphQLResult } from "@aws-amplify/api";
import { API } from "aws-amplify";
import { CourseGroupConnection, CourseGroupByUserQuery, ModelStringKeyConditionInput } from "../API";
import { courseGroupByUser } from "../graphql/queries";
import { getCourseGroupConnectionIdOnly } from "../graphql/customQueries";

const fetchCourseGroupConnection = async (userID: string, groupID: ModelStringKeyConditionInput) => {
  const res = await API.graphql({
    query: getCourseGroupConnectionIdOnly,
    variables: {
      userID,
      groupID,
    },
  }) as GraphQLResult<CourseGroupByUserQuery>;
  console.log(res);
  if (res.data?.CourseGroupByUser?.items?.length) {
    return res.data.CourseGroupByUser.items[0] as CourseGroupConnection;
  }
  throw new Error(`Failed to get CourseGroupConnection between user: ${userID} and group: ${groupID}`);
};

export default fetchCourseGroupConnection;
