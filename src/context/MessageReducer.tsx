/* eslint-disable no-shadow */
import { ChatMessage } from "../types";

// eslint-disable-next-line no-unused-vars
enum MessageReducerAction {
    SET_MESSAGE = "SET_MESSAGE"
}

export type MessageState = {
    messages: ChatMessage[]
    error: null
}

type MessageReducerPayload = {
    type: MessageReducerAction
    payload: ChatMessage
}

const MessageReducer = (state:MessageState, action:MessageReducerPayload) => {
  switch (action.type) {
  case MessageReducerAction.SET_MESSAGE:
    return {
      ...state,
      messages: [...state.messages, action.payload],
    };
  default:
    return state;
  }
};

export default MessageReducer;
