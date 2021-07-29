import { Auth } from "aws-amplify";
import React, {
  ReactNode, useEffect, useState,
} from "react";
import { CognitoUser } from "../types";

type UserContextType = {
    user: CognitoUser | undefined;
    setUser: React.Dispatch<React.SetStateAction<CognitoUser | undefined>>;
}

const UserContext = React.createContext({
} as UserContextType);

export const UserProvider = (props: {children?: ReactNode }) => {
  const { children } = props;
  const [user, setUser] = useState<CognitoUser | undefined>();

  useEffect(() => {
    const f = async () => {
      try {
        const u = await Auth.currentAuthenticatedUser();
        setUser(u);
      } catch (e) {
        console.log(e);

        setUser(undefined);
      } finally {
        console.log("USER");
      }
    };
    if (!user) { f(); }
  }, [user]);
  return (
    <UserContext.Provider value={{
      user,
      setUser,
    }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
