import { API } from "aws-amplify";
import { GraphQLResult } from "@aws-amplify/api";
import {
  CourseGroup,
  CourseGroupConnection,
  DeleteCourseGroupConnectionInput,
  GetCourseGroupConnectionQueryVariables,
  DeleteCourseGroupConnectionMutation,
} from "../API";
import { deleteCourseGroupConnection } from "../graphql/mutations";

const leaveCourseGroup = async (input: DeleteCourseGroupConnectionInput):
Promise<GraphQLResult<DeleteCourseGroupConnectionMutation>> => {
  console.log("called");
  return API.graphql({
    query: deleteCourseGroupConnection,
    variables: {
      input,
    },
  }) as Promise<GraphQLResult<DeleteCourseGroupConnectionMutation>>;
};

export default leaveCourseGroup;
