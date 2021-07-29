import { GraphQLResult } from "@aws-amplify/api";
import { API } from "aws-amplify";
import {
  CreateReportInput,
  CreateReportMutation,
} from "../API";
import { createReport } from "../graphql/mutations";

const reportUser = async ({
  body, reportedUserID, reportingUserID, title,
}: CreateReportInput) => {
  const res = await API.graphql({
    query: createReport,
    variables: {
      input: {
        body,
        reportedUserID,
        reportingUserID,
        title,
      },
    },
  }) as GraphQLResult<CreateReportMutation>;
  if (res.data?.createReport) {
    return true;
  }
  return false;
};

export default reportUser;
