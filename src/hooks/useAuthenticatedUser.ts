import Auth from "@aws-amplify/auth";
import { useContext, useEffect, useState } from "react";
import UserContext from "../context/UserContext";
import { CognitoUser } from "../types";

const useAuthenticatedUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("useAuthenticatedUser must be used within a UserProvider");
  return context.user as CognitoUser;
};

export default useAuthenticatedUser;
