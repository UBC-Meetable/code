import React, { ReactNode, useEffect, useState } from "react";
import { joinFriendGroupInput } from "../API";
import fetchUserProfile from "../calls/fetchUserProfile";
import useAuthenticatedUser from "../hooks/useAuthenticatedUser";

export type UserInfoType = joinFriendGroupInput & {
  user: {
    id: string | undefined;
    email: string | undefined;
    firstName: string | null | undefined;
    lastName: string | null | undefined;
    expoPushToken: string | null | undefined,
    multipleGroupsOptIn: boolean | null | undefined,
  };
};
export type UserSchoolInfoContextType = {
    info: UserInfoType | undefined;
    loading: boolean;
}

const UserSchoolInfoContext = React.createContext({
} as UserSchoolInfoContextType);

export const UserProfileProvider = ({ children }: {children?: ReactNode}) => {
  const user = useAuthenticatedUser();
  const [info, setInfo] = useState<UserInfoType>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetchUserProfile({ id: user.attributes.sub }).then((userProfile) => {
        if (!userProfile.data?.getUser) throw new Error("Failed to get User profile");
        else {
          const userInfo = userProfile.data.getUser;
          setInfo(
            {
              user: {
                id: userInfo.id,
                email: userInfo.email,
                firstName: userInfo.firstName,
                lastName: userInfo.lastName,
                expoPushToken: userInfo.expoPushToken,
                multipleGroupsOptIn: userInfo.multipleGroupsOptIn,
              },
              id: userInfo.id,
              university: userInfo.university || "",
              year: userInfo.year,
            },
          );

          setLoading(() => false);
        }
      });
    }
  }, [user]);

  return (
    <UserSchoolInfoContext.Provider value={{
      info,
      loading,
    }}
    >
      {children}
    </UserSchoolInfoContext.Provider>
  );
};

export default UserSchoolInfoContext;
