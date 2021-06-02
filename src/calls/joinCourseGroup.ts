import { GraphQLResult } from "@aws-amplify/api";
import { API } from "aws-amplify";
import {
  CourseGroup,
  CourseGroupConnectionModel,
  CreateCourseGroupConnectionModelInput,
  CreateCourseGroupConnectionModelMutation,
  CreateCourseGroupInput,
  CreateCourseGroupMutation,
  ModelCourseGroupConnection,
  User,
} from "../API";
import {
  createCourseGroup,
  createCourseGroupConnectionModel,
} from "../graphql/mutations";
import { CognitoUser } from "../types";
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
      foundGroup = (await API.graphql({
        query: createCourseGroup,
        variables: group,
      }) as GraphQLResult<CreateCourseGroupMutation>).data?.createCourseGroup as CourseGroup;
    } catch (err) {
      console.error("Failed to create course group");
      throw new Error(err);
    }
  }

  console.log("Found existing group: ", foundGroup);

  if (foundGroup!.users!.items!.find((user) => user?.userID === userID)) return foundGroup;
  console.log("User not in existing group");

  try {
    return await API.graphql({
      query: createCourseGroupConnectionModel,
      variables: {
        input: {
          groupID: group.groupID,
          userID,
        } as CreateCourseGroupConnectionModelInput,
      },
    }) as Promise<GraphQLResult<CreateCourseGroupConnectionModelMutation>>;
  } catch (e) {
    console.error("Failed to join course group, ", e);
    throw new Error(e);
  }
};

export default joinCourseGroup;
