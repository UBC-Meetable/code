/* eslint-disable max-len */
import { API } from "aws-amplify";
import React, {
  ReactNode, useEffect, useRef, useState,
} from "react";
import Observable from "zen-observable-ts";
import {
  ChatMessage,
  CourseGroup,
  GroupType, OnCreateChatMessageSubscription, OnCreateCourseGroupUsersSubscription, OnDeleteCourseGroupUsersSubscription,
} from "../API";
import fetchUserCourses from "../calls/fetchUserCourses";
import { onCreateChatMessage, onCreateCourseGroupUsers, onDeleteCourseGroupUsers } from "../graphql/subscriptions";
import useUserProfile from "../hooks/useUserProfile";

const CourseGroupsContext = React.createContext([] as CourseGroup[]);
export const CourseGroupsProvider = (props: { children?: ReactNode }) => {
  const [groups, setGroups] = useState<CourseGroup[]>([] as CourseGroup[]);
  const { id = "" } = useUserProfile();
  const groupRef = useRef<CourseGroup[]>([]);
  groupRef.current = groups;

  useEffect(() => {
    fetchUserCourses(id).then((groupList) => setGroups(groupList));
  }, [id]);

  /** Handle Messages Being Sent */
  useEffect(() => {
    const observableObj = API.graphql({
      query: onCreateChatMessage,
    }) as Observable<Object>;

    const subscription = observableObj.subscribe({
      next: ({ value: { data } }: { value: { data: OnCreateChatMessageSubscription } }) => {
        //
        if (!data.onCreateChatMessage) return;

        const newGroups: CourseGroup[] = [];

        //

        const matchedGroup = groupRef.current
          ?.find((group) => group.groupID === data.onCreateChatMessage?.courseGroupMessagesId) as CourseGroup;

        if (!matchedGroup) throw new Error(`Unable to find matching group with GroupID ${data.onCreateChatMessage.courseGroupMessagesId}`);
        const newMessages = matchedGroup.messages!.items as ChatMessage[];
        matchedGroup.messages!.items = newMessages;
        newMessages.push(data.onCreateChatMessage as ChatMessage);
        groupRef.current.forEach((group) => {
          if (group.groupID === data.onCreateChatMessage?.courseGroupMessagesId) {
            newGroups.push(matchedGroup);
          } else {
            newGroups.push(group);
          }
        });

        setGroups(() => newGroups);
        //
      },
      error: (error: any) => console.warn(error),
    });

    return () => subscription.unsubscribe();
  });

  useEffect(() => {
    const observableObj = API.graphql({
      query: onCreateCourseGroupUsers,
    }) as Observable<Object>;

    const subscription = observableObj.subscribe({
      next: ({ value: { data } }:
        { value: { data: OnCreateCourseGroupUsersSubscription } }) => {
        if (!data.onCreateCourseGroupUsers) return;

        const newGroups: CourseGroup[] = [];
        const findGroup = {
          ...data.onCreateCourseGroupUsers.courseGroup,
          messages: [] as any,
        } as CourseGroup;

        if (!findGroup) throw new Error(`Unable to find matching group with GroupID ${data.onCreateCourseGroupUsers.courseGroupID}`);
        groupRef.current.forEach((group) => {
          if (data.onCreateCourseGroupUsers?.courseGroup.groupID !== group.groupID) {
            newGroups.push(group);
          }
        });

        newGroups.push(data.onCreateCourseGroupUsers.courseGroup as CourseGroup);
        setGroups(() => newGroups);
      },
      error: (error: any) => console.warn(error),
    });

    return () => subscription.unsubscribe();
  });

  // update state when CourseGroupConnection deleted
  useEffect(() => {
    const observableObj = API.graphql({
      query: onDeleteCourseGroupUsers,
    }) as Observable<Object>;
    const subscription = observableObj.subscribe({
      next: ({ value: { data } }: { value: { data: OnDeleteCourseGroupUsersSubscription } }) => {
        if (!data.onDeleteCourseGroupUsers) return;
        setGroups(groups.filter((group) => group.groupID !== data.onDeleteCourseGroupUsers?.courseGroupID));
      },
      error: (error: any) => console.warn(error),
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
