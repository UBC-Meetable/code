/* eslint-disable no-undef */
import Constants from "expo-constants";
import { set } from "lodash";
import { Platform } from "react-native";

const localhost = Platform.OS === "ios" ? "localhost:19000" : "10.0.2.2:19000";

const ENV = require("./env").default;

const getSettings = (env = Constants.manifest.releaseChannel) => {
  // What is __DEV__ ?
  // This variable is set to true when react-native is running in Dev mode.
  // __DEV__ is true when run locally, but false when published.
  if (__DEV__) {
    set(ENV, "dev.apiUrl", localhost);
    return ENV.dev;
  } if (env === "default") {
    return ENV.dev;
  } if (env === "prod") {
    return ENV.prod;
  }
  return ENV.dev;
};

export default getSettings;
