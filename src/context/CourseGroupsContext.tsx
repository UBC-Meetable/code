/* eslint-disable max-len */
import { API, graphqlOperation } from "aws-amplify";
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

type CourseGroupsContextType = {groups: CourseGroup[], loading: boolean}

const CourseGroupsContext = React.createContext({ groups: [], loading: true } as CourseGroupsContextType);
export const CourseGroupsProvider = (props: { children?: ReactNode }) => {
  const [groups, setGroups] = useState<CourseGroup[]>([] as CourseGroup[]);
  const [loading, setLoading] = useState(true);
  const { id = "" } = useUserProfile();
  const groupRef = useRef<CourseGroup[]>([]);
  groupRef.current = groups;

  useEffect(() => {
    setLoading(true);
    fetchUserCourses(id).then((groupList) => setGroups(groupList)).catch((error) => console.warn(error)).finally(() => setLoading(false));
  }, [id]);

  /** Handle Messages Being Sent */
  // useEffect(() => {
  //   const observableObj = API.graphql({
  //     query: onCreateChatMessage,
  //   }) as Observable<Object>;

  //   const subscription = observableObj.subscribe({
  //     next: ({ value: { data } }: { value: { data: OnCreateChatMessageSubscription } }) => {
  //       //
  //       if (!data.onCreateChatMessage) return;

  //       const newGroups: CourseGroup[] = [];

  //       //

  //       const matchedGroup = groupRef.current
  //         ?.find((group) => group.groupID === data.onCreateChatMessage?.courseGroupMessagesId) as CourseGroup;

  //       if (!matchedGroup) throw new Error(`Unable to find matching group with GroupID ${data.onCreateChatMessage.courseGroupMessagesId}`);
  //       const newMessages = matchedGroup.messages!.items as ChatMessage[];
  //       matchedGroup.messages!.items = newMessages;
  //       newMessages.push(data.onCreateChatMessage as ChatMessage);
  //       groupRef.current.forEach((group) => {
  //         if (group.groupID === data.onCreateChatMessage?.courseGroupMessagesId) {
  //           newGroups.push(matchedGroup);
  //         } else {
  //           newGroups.push(group);
  //         }
  //       });

  //       setGroups(() => newGroups);
  //       //
  //     },
  //     error: (error: any) => console.warn(error),
  //   });

  //   return () => subscription.unsubscribe();
  // });

  // Handle Users Being Added to Groups
  useEffect(() => {
    const observableObj = API.graphql(graphqlOperation(onCreateCourseGroupUsers, { owner: id })) as Observable<Object>;

    const subscription = observableObj.subscribe({
      next: ({ provider, value }: any) => {
        const { data } = value as {data: OnCreateCourseGroupUsersSubscription};
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

  // update state when a user is removed from a group (IE. A CourseGroupUser is deleted)
  useEffect(() => {
    const observableObj = API.graphql(graphqlOperation(onDeleteCourseGroupUsers, { owner: id })) as Observable<Object>;
    const subscription = observableObj.subscribe({
      next: ({ provider, value }: any) => {
        console.log("DELETE EVENT CAPTURED");
        const { data } = value as {data: OnDeleteCourseGroupUsersSubscription};
        console.log(value);

        if (!data.onDeleteCourseGroupUsers) return;
        setGroups(groups.filter((group) => group.groupID !== data.onDeleteCourseGroupUsers?.courseGroupID));
      },
      error: (error: any) => console.warn(error),
    });
    return () => subscription.unsubscribe();
  });

  const { children } = props;
  return (
    <CourseGroupsContext.Provider value={{ groups, loading }}>
      {children}
    </CourseGroupsContext.Provider>
  );
};

export default CourseGroupsContext;
