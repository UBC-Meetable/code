import React, { useContext, useEffect, useState } from "react";
import { Button, Layout, Text } from "@ui-kitten/components";
import useUserProfile from "../../../hooks/useUserProfile";
import updateUserProfile from "../../../calls/updateUserCourses";

const SuggestedFriendsScreen = () => {
  const [findFriendsOption, setFindFriendsOption] = useState<boolean>(false);
  const { info: userProfile } = useUserProfile();
  return (
    <div>
      <h1>Would you like for us to help you find some new friends?</h1>
      <Button>Yes </Button>
      <Button>No </Button>
      <Button
        onPress={async () => {
          await updateUserProfile({
            id: userProfile!.id,
            findFriendsOptionSelected: findFriendsOption,
          });
        }}
      >
        Done
      </Button>
    </div>
  );
};

export default SuggestedFriendsScreen;
