import { useContext } from "react";
import { joinFriendGroupInput } from "../API";
import UserProfileContext, { UserSchoolInfoContextType } from "../context/UserProfileContext";

const useUserProfile = () => {
  const context = useContext(UserProfileContext);
  if (!context) throw new Error("useAuthenticatedUser must be used within a UserProvider");
  const loading = context.loading as boolean;
  const { info } = context; // remove as joinFriendGroupInput since cast removes first/last name
  return { info, loading };
};

export default useUserProfile;
