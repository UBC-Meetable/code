import { API } from "aws-amplify";
import { isNull } from "lodash";
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
  loading: boolean;
  getMessages: () => void;
  reachedEnd: boolean;
}

const MessagesContext = React.createContext({
  messages: [], groupID: "", loading: true, getMessages: () => {}, reachedEnd: false,
} as MessageContextType);
export const MessageProvider = (props: { groupID: string, children?: ReactNode }) => {
  const [messages, setMessages] = useState([] as ChatMessage[]);
  const [loading, setLoading] = useState(true);
  const [nextToken, setNextToken] = useState<string | null | undefined>();
  const [reachedEnd, setReachedEnd] = useState(false);
  const user = useAuthenticatedUser();
  const messagesRef = useRef<ChatMessage[]>([]);
  messagesRef.current = messages;

  const { children, groupID } = props;

  const getMessages = async () => {
    if (reachedEnd) return;
    const { messages: fetchedMessages, token } = await fetchCourseGroupMessages({
      groupChatID: groupID,
      limit: 20,
      nextToken,
    });
    if (isNull(token)) {
      setReachedEnd(true);
    }
    setNextToken(token);
    setMessages([...fetchedMessages.reverse() as ChatMessage[], ...messages]);
    setLoading(false);
  };

  useEffect(() => {
    getMessages();
  }, []);

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
    <MessagesContext.Provider value={{
      messages, groupID, loading, getMessages, reachedEnd,
    }}
    >
      {children}
    </MessagesContext.Provider>
  );
};

export default MessagesContext;
