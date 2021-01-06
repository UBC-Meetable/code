import * as AuthSessionNew from "expo-auth-session";
import jwtDecode from "jwt-decode";
import getSettings from "../config/GetSettings";

const {
  auth0: { auth0Domain },
} = getSettings();
interface StringMap {
  [key: string]: string;
}

const toQueryString = (params: StringMap) => `?${
  Object.entries(params)
    .map(
      ([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`,
    )
    .join("&")}`;

const logout = async () => {
  AuthSessionNew.dismiss();
};

const login = async (settings: any) => {
  // Retrieve the redirect URL, add this to the callback URL list
  // of your Auth0 application.
  const redirectUrl = AuthSessionNew.getRedirectUrl();
  // const redirectUrl = AuthSessionNew.makeRedirectUri({ path: "/", preferLocalhost: true });

  // Structure the auth parameters and URL

  console.log(settings.screenHint);

  const params = {
    client_id: settings.auth0ClientId,
    ...settings,
    screen_hint: settings.screenHint,
    redirect_uri: redirectUrl,
    // response_type:
    // id_token will return a JWT token with the profile as described on the scope
    // token will return access_token to use with further api calls
    response_type: "token id_token",
    nonce: "nonce", // ideally, this will be a random value
    rememberLastLogin: true,
  };

  const queryParams = toQueryString(params);

  const authUrl = `https://${auth0Domain}/authorize${queryParams}`;

  // const response = await WebBrowser.openBrowserAsync(authUrl, {showInRecents: true});
  // const response = await WebBrowser.openAuthSessionAsync(authUrl, {showInRecents: true});
  const response = await AuthSessionNew.startAsync({
    authUrl,
    showInRecents: true,
  });

  // const response = await startAuth(authUrl);
  return handleLoginResponse(response);
};

const handleLoginResponse = (response: any) => {
  if (response.error || response.type !== "success") {
    console.log(response);

    return "";
  }
  const decodedJwtIdToken = jwtDecode(response.params.id_token);
  return decodedJwtIdToken;
};

export default { login, logout };
