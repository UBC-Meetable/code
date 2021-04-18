import { API, graphqlOperation } from "aws-amplify";
import { onCreateChatMessage } from "../graphql/subscriptions";
import { ChatMessage } from "../types";

const groupChatSubscription = async (handler: (message: ChatMessage) => void) => (await API.graphql(
  graphqlOperation(onCreateChatMessage),
) as any).subscribe({
  next: ({ value }: {value: any}) => {
    const message = value.data.onCreateChatMessage as ChatMessage;
    handler(message);
  },
  error: (error:any) => console.warn(error),
});

export default groupChatSubscription;
