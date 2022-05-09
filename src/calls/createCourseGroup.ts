import { GraphQLResult } from "@aws-amplify/api";
import { API } from "aws-amplify";
import {
  CourseGroup,
  CreateCourseGroupMutation,
  CreateCourseGroupMutationVariables,
} from "../API";
import { createCourseGroup as query } from "../graphql/mutations";

const createCourseGroup = async ({
  input,
}: CreateCourseGroupMutationVariables) => {
  const res = (await API.graphql({
    query,
    variables: { input },
  })) as GraphQLResult<CreateCourseGroupMutation>;
  if (res.data?.createCourseGroup) {
    return res.data.createCourseGroup as CourseGroup;
  }
  throw new Error("Failed to create course group");
};

export default createCourseGroup;
