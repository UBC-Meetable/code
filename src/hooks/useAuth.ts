import { Auth, Hub } from "aws-amplify";

import { useEffect, useState } from "react";

export default function useAuth() {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState();

  const handleAuth = ({ payload }) => {
    switch (payload.event) {
    case "signIn":
      return setUser(payload.data);
    case "signOut":
      return setUser();
    default:
      throw new Error("Unrecognized Auth event");
    }
  };

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then(setUser)
      .catch(console.error)
      .then(() => setIsLoading(false));

    Hub.listen("auth", handleAuth);

    return () => Hub.remove("auth", handleAuth);
  }, []);

  return {
    Auth,
    isLoading,
    owner: user ? user.username : null,
    user,
  };
}
