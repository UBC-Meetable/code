import { API } from "aws-amplify";
import React, {
  ReactNode, useEffect, useRef, useState,
} from "react";
import Observable from "zen-observable-ts";
import { OnCreateChatMessageSubscription } from "../API";
import fetchCourseGroupMessages from "../calls/fetchCourseGroupMessages";
import { onCreateChatMessage } from "../graphql/subscriptions";
import useAuthenticatedUser from "../hooks/useAuthenticatedUser";
import { ChatMessage } from "../types";

type MessageContextType = {
  messages: ChatMessage[],
  groupID: string;
}

const MessagesContext = React.createContext({ messages: [], groupID: "" } as MessageContextType);
export const MessageProvider = (props: { groupID: string, children?: ReactNode }) => {
  const [messages, setMessages] = useState([] as ChatMessage[]);
  const user = useAuthenticatedUser();
  const messagesRef = useRef<ChatMessage[]>([]);
  messagesRef.current = messages;

  const { children, groupID } = props;

  useEffect(() => {
    const getMessages = async () => {
      const fetchedMessages = await fetchCourseGroupMessages({ groupChatID: groupID });
      setMessages(fetchedMessages as ChatMessage[]);
    };
    if (user) getMessages();
  }, [user]);

  useEffect(() => {
    const observableObj = API.graphql({
      query: onCreateChatMessage,
      variables: {
        groupChatID: groupID,
      },
    }) as Observable<Object>;

    const subscription = observableObj.subscribe({
      next: ({ value: { data } }: {value: {data: OnCreateChatMessageSubscription}}) => {
        if (!data.onCreateChatMessage) return;

        setMessages(() => [...messagesRef.current, data.onCreateChatMessage as ChatMessage]);
      },
      error: (error:any) => console.warn(error),
    });

    return () => subscription.unsubscribe();
  });

  return (
    <MessagesContext.Provider value={{ messages, groupID }}>
      {children}
    </MessagesContext.Provider>
  );
};

export default MessagesContext;
