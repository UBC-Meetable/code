/* eslint-disable max-len */
import { API } from "aws-amplify";
import React, {
  ReactNode, useEffect, useRef, useState,
} from "react";
import Observable from "zen-observable-ts";
import {
  GroupType, OnCreateChatMessageSubscription, OnCreateCourseGroupConnectionSubscription, OnDeleteCourseGroupConnectionSubscription,
} from "../API";
import fetchUserCourses from "../calls/fetchUserCourses";
import { onCreateChatMessage, onCreateCourseGroupConnection, onDeleteCourseGroupConnection } from "../graphql/subscriptions";
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
        //
        if (!data.onCreateChatMessage) return;
        if (data.onCreateChatMessage.groupType !== GroupType.COURSE) return;

        const newGroups:CourseGroup[] = [];

        //

        const matchedGroup = groupRef.current
          ?.find((group) => group.groupID === data.onCreateChatMessage?.groupChatID) as CourseGroup;

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
        //
      },
      error: (error:any) => console.warn(error),
    });

    return () => subscription.unsubscribe();
  });

  useEffect(() => {
    const observableObj = API.graphql({
      query: onCreateCourseGroupConnection,
    }) as Observable<Object>;

    const subscription = observableObj.subscribe({
      next: ({ value: { data } }:
        {value: {data: OnCreateCourseGroupConnectionSubscription}}) => {
        if (!data.onCreateCourseGroupConnection) return;

        const newGroups: CourseGroup[] = [];
        const findGroup = {
          ...data.onCreateCourseGroupConnection.courseGroup,
          messages: [] as any,
        } as CourseGroup;

        if (!findGroup) throw new Error(`Unable to find matching group with GroupID ${data.onCreateCourseGroupConnection.groupID}`);
        groupRef.current.forEach((group) => {
          if (data.onCreateCourseGroupConnection?.courseGroup.groupID !== group.groupID) {
            newGroups.push(group);
          }
        });

        newGroups.push(data.onCreateCourseGroupConnection.courseGroup as CourseGroup);
        setGroups(() => newGroups);
      },
      error: (error:any) => console.warn(error),
    });

    return () => subscription.unsubscribe();
  });

  // update state when CourseGroupConnection deleted
  useEffect(() => {
    const observableObj = API.graphql({
      query: onDeleteCourseGroupConnection,
    }) as Observable<Object>;
    const subscription = observableObj.subscribe({
      next: ({ value: { data } }: {value: {data: OnDeleteCourseGroupConnectionSubscription }}) => {
        if (!data.onDeleteCourseGroupConnection) return;
        setGroups(groups.filter((group) => group.groupID !== data.onDeleteCourseGroupConnection?.groupID));
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
