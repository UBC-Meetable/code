import React, { createContext, useReducer } from "react";
import { ChatMessage } from "../types";
import MessageReducer, { MessageState } from "./MessageReducer";

const initialState: MessageState = {
  messages: [],
  error: null,
};

const Store = ({ children }: {children:any}) => {
  const [state, dispatch] = useReducer(MessageReducer, initialState);
  return (
    <Context.Provider value={[state, dispatch]}>
      {children}
    </Context.Provider>
  );
};

export const Context = createContext(initialState);
export default Store;
