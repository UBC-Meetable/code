import { Auth } from "aws-amplify";
import React, {
  ReactNode, useEffect, useState,
} from "react";
import { CognitoUser } from "../types";

type UserContextType = {
    user: CognitoUser | undefined
    rerender: () => void;
}

const UserContext = React.createContext({
} as UserContextType);

export const UserProvider = (props: {children?: ReactNode }) => {
  const { children } = props;
  const [user, setUser] = useState<CognitoUser | undefined>();
  const [r, setR] = useState(false);
  const rerender = () => {
    setR(!r);
  };
  useEffect(() => {
    const f = async () => {
      try {
        const u = await Auth.currentAuthenticatedUser();
        setUser(u);
      } catch (e) {
        setUser(undefined);
      }
    };
    if (!user) { f(); }
  }, [user]);
  return (
    <UserContext.Provider value={{
      user,
      rerender,
    }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
