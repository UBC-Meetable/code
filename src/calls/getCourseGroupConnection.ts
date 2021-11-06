import { GraphQLResult } from "@aws-amplify/api";
import { API } from "aws-amplify";
import { CourseGroupConnection, CourseGroupByUserQuery } from "../API";
import { courseGroupByUser } from "../graphql/queries";

const fetchCourseGroupConnection = async (userID: string, groupID: string) => {
  const res = await API.graphql({
    query: courseGroupByUser,
    variables: {
      userID,
      groupID,
    },
  }) as GraphQLResult<CourseGroupByUserQuery>;
  if (res.data?.CourseGroupByUser?.items?.at(0)) {
    return res.data.CourseGroupByUser.items.at(0) as CourseGroupConnection;
  }
  throw new Error(`Failed to get CourseGroupConnection between user: ${userID} and group: ${groupID}`);
};

export default fetchCourseGroupConnection;
