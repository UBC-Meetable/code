import { useEffect, useState } from "react";
import fetchUserProfile from "../calls/fetchUserProfile";
import { User } from "../API";
import useAuthenticatedUser from "./useAuthenticatedUser";

const useUserProfile = () => {
  const [profile, setProfile] = useState<User | undefined>();
  const user = useAuthenticatedUser();
  useEffect(() => {
    const f = async () => {
      try {
        const u = await fetchUserProfile({ id: user.attributes.sub });
        setProfile(u.data?.getUser as User);
      } catch (e) {
        setProfile(undefined);
      }
    };
    if (!profile) { f(); }
  }, [user]);
  return profile as User;
};

export default useUserProfile;
