import React, { ReactNode, useState } from "react";

export type UserContextType = {
  user: any;
  setUser: React.Dispatch<React.SetStateAction<any>>;
};

export const GroupSubscriptionContext = React.createContext({ user: {} } as UserContextType);

export const GroupSubscriptionProvider = (props: { children?: ReactNode }) => {
  const [user, setUser] = useState();
  const { children } = props;

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default GroupSubscriptionContext;
