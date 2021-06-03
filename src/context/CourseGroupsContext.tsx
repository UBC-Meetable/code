import { API } from "aws-amplify";
import React, {
  ReactNode, useEffect, useRef, useState,
} from "react";
import Observable from "zen-observable-ts";
import { GroupType, OnCreateChatMessageSubscription, OnCreateCourseGroupConnectionModelSubscription } from "../API";
import fetchCourseGroup from "../calls/fetchCourseGroup";
import fetchUserCourses from "../calls/fetchUserCourses";
import { onCreateChatMessage, onCreateCourseGroupConnectionModel } from "../graphql/subscriptions";
import useAuthenticatedUser from "../hooks/useAuthenticatedUser";
import { ChatMessage, CourseGroup } from "../types";

const CourseGroupsContext = React.createContext([] as CourseGroup[]);
export const CourseGroupsProvider = (props: { children?: ReactNode }) => {
  const [groups, setGroups] = useState([] as CourseGroup[]);
  const user = useAuthenticatedUser();
  const groupRef = useRef<CourseGroup[]>([]);
  groupRef.current = groups;

  useEffect(() => {
    const getCourseGroups = async () => {
      const courses = await fetchUserCourses(user);
      setGroups(courses);
    };
    getCourseGroups();
  }, []);

  /** Handle Messages Being Sent */
  useEffect(() => {
    const observableObj = API.graphql({
      query: onCreateChatMessage,
    }) as Observable<Object>;

    const subscription = observableObj.subscribe({
      next: ({ value: { data } }: {value: {data: OnCreateChatMessageSubscription}}) => {
        // console.log("data received from create subscription:", data.onCreateChatMessage);
        if (!data.onCreateChatMessage) return;
        if (data.onCreateChatMessage.groupType !== GroupType.COURSE) return;

        const newGroups:CourseGroup[] = [];
        console.log("*****", groupRef.current.map((g) => g.groupID));
        // console.log("**msg**", data.onCreateChatMessage.groupChatID);
        console.log("**msg**", groupRef.current.find((g) => g.groupID === data.onCreateChatMessage?.groupChatID));

        const matchedGroup = groupRef.current
          ?.find((group) => group.groupID === data.onCreateChatMessage?.groupChatID) as CourseGroup;
        console.log("MATCHEDGROUP", matchedGroup);

        if (!matchedGroup) throw new Error(`Unable to find matching group with GroupID ${data.onCreateChatMessage.groupChatID}`);
        const newMessages = matchedGroup.messages?.items as ChatMessage[];
        matchedGroup.messages!.items = newMessages;
        newMessages.push(data.onCreateChatMessage as ChatMessage);
        groupRef.current.forEach((group) => {
          if (group.groupID === data.onCreateChatMessage?.groupChatID) {
            newGroups.push(matchedGroup);
          } else {
            newGroups.push(group);
          }
        });

        setGroups(() => newGroups);
        // console.log("NewGroups", newGroups);
      },
      error: (error:any) => console.warn(error),
    });

    return () => subscription.unsubscribe();
  });

  useEffect(() => {
    const observableObj = API.graphql({
      query: onCreateCourseGroupConnectionModel,
    }) as Observable<Object>;

    const subscription = observableObj.subscribe({
      next: ({ value: { data } }:
        {value: {data: OnCreateCourseGroupConnectionModelSubscription}}) => {
        if (!data.onCreateCourseGroupConnectionModel) return;

        const newGroups:CourseGroup[] = [];
        const findGroup = {
          ...data.onCreateCourseGroupConnectionModel.courseGroup,
          messages: [] as any,
        } as CourseGroup;

        if (!findGroup) throw new Error(`Unable to find matching group with GroupID ${data.onCreateCourseGroupConnectionModel.groupID}`);
        groupRef.current.forEach((group) => {
          newGroups.push(group);
        });
        console.log(data.onCreateCourseGroupConnectionModel.courseGroup.messages);

        newGroups.push(data.onCreateCourseGroupConnectionModel.courseGroup as CourseGroup);
        setGroups(() => newGroups);
      },
      error: (error:any) => console.warn(error),
    });

    return () => subscription.unsubscribe();
  });

  const { children } = props;
  return (
    <CourseGroupsContext.Provider value={groups}>
      {children}
    </CourseGroupsContext.Provider>
  );
};

export default CourseGroupsContext;
