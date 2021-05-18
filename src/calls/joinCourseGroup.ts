import { GraphQLResult } from "@aws-amplify/api";
import { API } from "aws-amplify";
import { CreateCourseGroupInput, CreateCourseGroupConnectionModelInput, CreateCourseGroupMutation, CreateCourseGroupConnectionModelMutation } from "../API";
import { createCourseGroup, createCourseGroupConnectionModel } from "../graphql/mutations";
import { catch } from "../metro.config";

import fetchCourseGroup from "./fetchCourseGroup";

const joinCourseGroup = (input: CreateCourseGroupConnectionModelInput, courseGroupInput: CreateCourseGroupInput):
[Promise<GraphQLResult<CreateCourseGroupMutation>> | undefined, Promise<GraphQLResult<CreateCourseGroupConnectionModelMutation>>] => {
  let createCourseGroupPromise;
  let createCourseGroupConnectionModelPromise;
  try {
    fetchCourseGroup({groupID: input.groupID});
  } catch(e: Error) {
    createCourseGroupPromise = API.graphql({
      query: createCourseGroup,
      variables: {
        ...courseGroupInput
      } as CreateCourseGroupInput
    }) as Promise<GraphQLResult<CreateCourseGroupMutation>>;
  }

  createCourseGroupConnectionModelPromise = API.graphql({
    query: createCourseGroupConnectionModel,
    variables: {
      groupID: input.groupID,
      userID: input.userID,
    } as CreateCourseGroupConnectionModelInput
  }) as Promise<GraphQLResult<CreateCourseGroupConnectionModelMutation>>;

  return [createCourseGroupPromise, createCourseGroupConnectionModelPromise];


};

/* could use like this
Promise.all(joinCourseGroup({ groupID: "", userID: "" }, {course: {code: "", section: ""}, groupID: ""}));
or could await the first promise and just have the fn return one promise
*/

export default joinCourseGroup;
