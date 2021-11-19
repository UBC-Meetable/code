import React, { ReactNode, useEffect, useState } from "react";
import { joinFriendGroupInput } from "../API";
import fetchUserProfile from "../calls/fetchUserProfile";
import useAuthenticatedUser from "../hooks/useAuthenticatedUser";
import { Interest } from "../types";

export type UserInfoType = joinFriendGroupInput & {
  user: {
    id: string | undefined;
    email: string | undefined;
    firstName: string | null | undefined;
    lastName: string | null | undefined;
    interests: Interest[] | null | undefined;
    expoPushToken: string | null | undefined;
    multipleGroupsOptIn: boolean | null | undefined;
  };
};
export type UserSchoolInfoContextType = {
  info: UserInfoType | undefined;
  loading: boolean;
};

const UserSchoolInfoContext = React.createContext(
  {} as UserSchoolInfoContextType
);

export const UserProfileProvider = ({ children }: { children?: ReactNode }) => {
  const user = useAuthenticatedUser();
  const [info, setInfo] = useState<UserInfoType>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetchUserProfile({ id: user.attributes.sub }).then((userProfile) => {
        console.log(`userProfile: ${JSON.stringify(userProfile)}`); // getUserQuery in the API.ts file
        if (!userProfile.data?.getUser)
          throw new Error("Failed to get User profile");
        else {
          const userInfo = userProfile.data.getUser;
          console.log(`userInfo: ${JSON.stringify(userInfo)}`); // getUser which is a subset of the getUserQuery data above

          // we only want some of the information returned from above
          setInfo({
            user: {
              id: userInfo.id,
              email: userInfo.email,
              firstName: userInfo.firstName,
              lastName: userInfo.lastName,
              interests: userInfo.interests ?? [],
              expoPushToken: userInfo.expoPushToken,
              multipleGroupsOptIn: userInfo.multipleGroupsOptIn,
            },
            id: userInfo.id,
            university: userInfo.university || "",
            year: userInfo.year,
          });

          setLoading(() => false);
        }
      });
    }
  }, [user]);

  return (
    <UserSchoolInfoContext.Provider
      value={{
        info,
        loading,
      }}
    >
      {children}
    </UserSchoolInfoContext.Provider>
  );
};

export default UserSchoolInfoContext;
