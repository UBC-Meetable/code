import { GraphQLResult } from "@aws-amplify/api";
import { API } from "aws-amplify";
import {
  GetCourseGroupQuery, GetCourseGroupQueryVariables, GetUserQuery, GetUserQueryVariables,
} from "../API";
import { getCourseGroup } from "../graphql/queries";
import { CourseGroup } from "../types";

const fetchCourseGroup = async ({ groupID }: GetCourseGroupQueryVariables) => {
  const res = await API.graphql({
    query: getCourseGroup,
    variables: {
      groupID,
    },
  }) as GraphQLResult<GetCourseGroupQuery>;
  if (res.data?.getCourseGroup) {
    return res.data.getCourseGroup as CourseGroup;
  }

  throw new Error(`Failed to get course group with groupID ${groupID}`);
};

export default fetchCourseGroup;
