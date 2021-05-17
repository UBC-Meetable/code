import { API } from "aws-amplify";
import React, {
  ReactNode, useEffect, useRef, useState,
} from "react";
import Observable from "zen-observable-ts";
import { OnCreateChatMessageSubscription } from "../API";
import fetchUserCourses from "../calls/fetchUserCourses";
import { onCreateChatMessage } from "../graphql/subscriptions";
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

  useEffect(() => {
    const observableObj = API.graphql({
      query: onCreateChatMessage,
    }) as Observable<Object>;

    const subscription = observableObj.subscribe({
      next: ({ value: { data } }: {value: {data: OnCreateChatMessageSubscription}}) => {
        // console.log("data received from create subscription:", data.onCreateChatMessage);
        if (!data.onCreateChatMessage) return;
        const newGroups:CourseGroup[] = [];
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
        // console.log("NewGroups", newGroups);
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
