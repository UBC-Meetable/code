import Constants from "expo-constants";

const { manifest } = Constants;

const debuggerHost = manifest.debuggerHost as string;
const uri = `http://${debuggerHost.split(":").shift()}:4000`;

const ENV = {
  dev: {
    apiUrl: "localhost",
    auth0: {
      auth0Domain: "dev-a5klyah4.us.auth0.com",
      passwordlessClient: {
        client_id: "jPgbfFAdoZaF72145jxQlxsdge2N6UJw",
        scope:
          "openid profile read:current_user update:current_user_identities",
        audience: "https://dev-a5klyah4.us.auth0.com/api/v2/",
      },
    },
  },
  staging: {
    apiUrl: "[your.staging.api.here]",
  },
  prod: {
    apiUrl: "[your.production.api.here]",
  },
  SKIP_LOGIN: false,
  API_URL: uri,
  // CHAT_URL: `http://${HOST}:5000`,
};

export default ENV;
