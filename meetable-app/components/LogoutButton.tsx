import React from "react";
import Auth from "../utils/Auth";
import { UserContext } from "../utils/UserContext";
import Button from "./Button";

const LogoutButton = () => {
  const { setUser } = React.useContext(UserContext);
  return (
    <Button
      onPress={() => {
        Auth.logout();
        setUser(false);
      }}
    >
      Log Out
    </Button>
  );
};

export default LogoutButton;
