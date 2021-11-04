import { GraphQLResult } from "@aws-amplify/api";
import { API } from "aws-amplify";
import { CourseGroupConnection, GetCourseGroupConnectionQuery } from "../API";
import { getCourseGroupConnectionByUserAndGroup } from "../graphql/customQueries";

const fetchCourseGroupConnection = async (userID: string, groupID: string) => {
  const res = await API.graphql({
    query: getCourseGroupConnectionByUserAndGroup,
    variables: {
      userID,
      groupID,
    },
  }) as GraphQLResult<GetCourseGroupConnectionQuery>;
  if (res.data?.getCourseGroupConnection) {
    return res.data.getCourseGroupConnection as CourseGroupConnection;
  }
  throw new Error(`Failed to get CourseGroupConnection between user: ${userID} and group: ${groupID}`);
};

export default fetchCourseGroupConnection;
