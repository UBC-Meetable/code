import { API } from "aws-amplify";
import React, {
  ReactNode, useEffect, useRef, useState,
} from "react";
import Observable from "zen-observable-ts";
import { FriendGroup, GroupType, OnCreateChatMessageSubscription } from "../API";
import fetchUserFriendGroups from "../calls/fetchUserFriendGroups";
import { onCreateChatMessage } from "../graphql/subscriptions";
import useAuthenticatedUser from "../hooks/useAuthenticatedUser";
import { ChatMessage } from "../types";

const FriendGroupsContext = React.createContext([] as FriendGroup[]);
export const FriendGroupsProvider = (props: { children?: ReactNode }) => {
  const [groups, setGroups] = useState([] as FriendGroup[]);
  const user = useAuthenticatedUser();
  const groupRef = useRef<FriendGroup[]>([]);
  groupRef.current = groups;

  useEffect(() => {
    const getFriendGroups = async () => {
      const friends = await fetchUserFriendGroups(user);

      setGroups(friends || null);
    };
    getFriendGroups();
  }, []);

  useEffect(() => {
    const observableObj = API.graphql({
      query: onCreateChatMessage,
    }) as Observable<Object>;

    const subscription = observableObj.subscribe({
      next: ({ value: { data } }: {value: {data: OnCreateChatMessageSubscription}}) => {
        if (!data.onCreateChatMessage) return;
        if (data.onCreateChatMessage.groupType !== GroupType.FRIEND) return;
        const newGroups:FriendGroup[] = [];
        const matchedGroup = groupRef.current
          ?.find((group) => group.groupID === data.onCreateChatMessage?.groupChatID) as FriendGroup;
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

  const { children } = props;
  return (
    <FriendGroupsContext.Provider value={groups}>
      {children}
    </FriendGroupsContext.Provider>
  );
};

export default FriendGroupsContext;
