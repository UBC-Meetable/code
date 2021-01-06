import React, {
  createContext, useState,
} from "react";
import { User } from "../types";

<<<<<<< HEAD
export const UserContext = createContext({ user: false } as UserContextType);
=======
export const UserContext = createContext({ user: false } as unknown as UserContextType);
>>>>>>> 1dc95e5404d9b9e336c25b499a0f427193751d32
type UserContextType = {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
};
const UserContextProvider = (props: {children?: any}) => {
  const [user, setUser] = useState(false as User);
  const { children } = props;
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
