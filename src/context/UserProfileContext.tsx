import React, { ReactNode, useEffect, useState } from "react";
import { UpdateUserInput, UserState } from "../API";
import fetchUserProfile from "../calls/fetchUserProfile";
import createUserProfile from "../calls/createUserProfile";
import updateUserProfile from "../calls/updateUserProfile";
import useAuth from "../hooks/useAuth";

export type UserProfileType = {
  id?: string,
  email?: string | null | undefined,
  firstName?: string | null,
  lastName?: string | null,
  profilePicture?: string | null,
  bio?: string | null,
  userState?: UserState | null,
  university?: string | null | undefined,
  year?: number | null | undefined,
  major?: string | null | undefined,
  expoPushToken?: string | null,
  multipleGroupsOptIn?: boolean | null,
};
export type UserProfileContextType = UserProfileType & {
  loading: boolean;
  set: any;
}

const UserProfileContext = React.createContext({
} as UserProfileContextType);

export const UserProfileProvider = ({ children }: { children?: ReactNode }) => {
  const { user } = useAuth();
  const [profile, setProfile] = useState<UserProfileType>();
  const [loading, setLoading] = useState(true);

  const set = async (input: UpdateUserInput) => {
    await updateUserProfile(input);
    setProfile({ ...profile, ...input });
  };

  useEffect(() => {
    if (user) {
      setLoading(true);
      fetchUserProfile({ id: user.attributes.sub }).then(async (userProfile) => {
        const userInfo = userProfile.data?.getUser ?? (
          await createUserProfile({
            id: user.attributes.sub,
            email: user.attributes.email,
            university: "None",
            year: -1,
          })
        ).data?.createUser;
        if (userInfo) {
          setProfile({
            id: userInfo.id,
            email: userInfo.email,
            firstName: userInfo.firstName,
            lastName: userInfo.lastName,
            profilePicture: userInfo.profilePicture,
            bio: userInfo.bio,
            userState: userInfo.userState,
            university: userInfo.university,
            year: userInfo.year,
            major: userInfo.major,
            expoPushToken: userInfo.expoPushToken,
            multipleGroupsOptIn: userInfo.multipleGroupsOptIn,
          });
        }
        setLoading(() => false);
      });
    }
  }, [user]);

  return (
    <UserProfileContext.Provider
      value={{
        ...profile,
        loading,
        set,
      }}
    >
      {children}
    </UserProfileContext.Provider>
  );
};

export default UserProfileContext;
