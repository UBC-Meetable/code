import Auth from "@aws-amplify/auth";
import { useEffect, useState } from "react";
import { CognitoUser } from "../types";

const useAuthenticatedUser = () => {
  const [user, setUser] = useState<CognitoUser | undefined>();
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
  }, []);
  return user as CognitoUser;
};

export default useAuthenticatedUser;
