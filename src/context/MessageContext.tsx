import { API, graphqlOperation } from "aws-amplify";
import { isNull } from "lodash";
import React, {
  ReactNode, useEffect, useRef, useState,
} from "react";
import Observable from "zen-observable-ts";
import { OnCreateChatMessageSubscription, SubscribeToMessagesFromParentSubscription } from "../API";
import fetchCourseGroupMessages from "../calls/fetchCourseGroupMessages";
import { onCreateChatMessage, subscribeToMessagesFromParent } from "../graphql/subscriptions";
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
  const messagesRef = useRef<ChatMessage[]>([]);
  messagesRef.current = messages;

  const { children, groupID } = props;

  const getMessages = async () => {
    if (reachedEnd) return;
    const { messages: fetchedMessages, token } = await fetchCourseGroupMessages({
      parentId: groupID,
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
    const observableObj = API.graphql(
      graphqlOperation(subscribeToMessagesFromParent,
        { parentId: groupID }),
    ) as Observable<Object>;

    const subscription = observableObj.subscribe({
      next: ({ provider, value }: any) => {
        console.log("got message!", value);
        const { data } = value as {data: SubscribeToMessagesFromParentSubscription};

        if (!data.subscribeToMessagesFromParent) return;

        setMessages(() => [...messagesRef.current,
           data.subscribeToMessagesFromParent as ChatMessage]);
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
