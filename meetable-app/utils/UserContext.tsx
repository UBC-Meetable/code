import React, {
  createContext, useState,
} from "react";
import { User } from "../types";

export const UserContext = createContext({ user: false } as unknown as UserContextType);
type UserContextType = {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
};
const UserContextProvider = (props: {children?: any}) => {
  const [user, setUser] = useState({} as User);
  const { children } = props;
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
