import React, { ReactNode, useEffect, useState } from "react";
import * as FileSystem from "expo-file-system";
import { ImageInfo } from "expo-image-picker/build/ImagePicker.types";
import { Storage } from "aws-amplify";
import { joinFriendGroupInput, User } from "../API";
import fetchUserProfile from "../calls/fetchUserProfile";
import updateUserProfile from "../calls/updateUserProfile";
import useAuthenticatedUser from "../hooks/useAuthenticatedUser";

export type UserSchoolInfoContextType = {
    info: joinFriendGroupInput | undefined;
    loading: boolean;
}

const UserSchoolInfoContext = React.createContext({
} as UserSchoolInfoContextType);

export const UserProfileProvider = ({ children }: {children?: ReactNode}) => {
  const user = useAuthenticatedUser();
  const [info, setInfo] = useState<joinFriendGroupInput>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetchUserProfile({ id: user.attributes.sub }).then((userProfile) => {
        if (!userProfile.data?.getUser) throw new Error("Failed to get User profile");
        else {
          const userInfo = userProfile.data.getUser;
          setInfo(
            {
              id: userInfo.id,
              university: userInfo.university,
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
