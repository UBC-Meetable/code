import React from "react";
import { AuthState } from "../types";

export default React.createContext<AuthState>(AuthState.LANDING_SCREEN);
