import { GraphQLResult } from "@aws-amplify/api";
import { API } from "aws-amplify";
import { EventByCourseGroupIdQuery, EventByCourseGroupIdQueryVariables } from "../API";
import { eventByCourseGroupId } from "../graphql/queries";

const fetchEventsByCourse = async (queryVariables:
  EventByCourseGroupIdQueryVariables) => {
  console.log("Events for group", queryVariables.courseGroupEventsId);

  const res = await API.graphql({
    query: eventByCourseGroupId,
    variables: queryVariables,
  }) as GraphQLResult<EventByCourseGroupIdQuery>;

  if (res.data?.EventByCourseGroupId) {
    return res.data.EventByCourseGroupId.items;
  }

  throw new Error(`Failed to get events for group with groupID ${queryVariables.courseGroupEventsId}`);
};

export default fetchEventsByCourse;
