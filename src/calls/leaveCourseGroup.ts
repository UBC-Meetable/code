import { API } from "aws-amplify";
import { GraphQLResult } from "@aws-amplify/api";
import {
  DeleteCourseGroupConnectionInput,
  DeleteCourseGroupConnectionMutation,
} from "../API";
import { deleteCourseGroupConnection } from "../graphql/mutations";

const callDeleteCourseGroupConnection = async (input: DeleteCourseGroupConnectionInput):
Promise<GraphQLResult<DeleteCourseGroupConnectionMutation>> => {
  console.log("called");
  return API.graphql({
    query: deleteCourseGroupConnection,
    variables: {
      input,
    },
  }) as Promise<GraphQLResult<DeleteCourseGroupConnectionMutation>>;
};

export default callDeleteCourseGroupConnection;
