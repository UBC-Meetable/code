import { GraphQLResult } from "@aws-amplify/api";
import { API } from "aws-amplify";
import {
  CourseGroup,
  CreateCourseGroupConnectionModelInput,
  CreateCourseGroupConnectionModelMutation,
  CreateCourseGroupInput,
  CreateCourseGroupMutation,
} from "../API";
import {
  createCourseGroupConnectionModel,
} from "../graphql/mutations";
import createCourseGroup from "./createCourseGroup";
import fetchCourseGroup from "./fetchCourseGroup";

const joinCourseGroup = async (
  userID: String,
  group: CreateCourseGroupInput,
) => {
  let foundGroup: CourseGroup;
  console.log("group", group);

  try {
    foundGroup = (await fetchCourseGroup({ groupID: group.groupID }));
    console.log(foundGroup);
  } catch (e) {
    console.log(e);

    try {
      foundGroup = await createCourseGroup({ input: group });
      console.log("foundGroup", foundGroup);
    } catch (err) {
      console.error("Failed to create course group");
      throw new Error(err);
    }
  }

  console.log("Found existing group: ", foundGroup);

  if (foundGroup!.users!.items!.find((user) => user?.userID === userID)) return foundGroup;

  try {
    await API.graphql({
      query: createCourseGroupConnectionModel,
      variables: {
        input: {
          groupID: group.groupID,
          userID,
        },
      },
    });
    return foundGroup;
  } catch (e) {
    console.error("Failed to join course group, ", e);
    throw new Error(e);
  }
};

export default joinCourseGroup;
