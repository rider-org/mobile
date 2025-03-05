import * as SecureStore from "expo-secure-store";

/**
 * This function overrides the default fetch to specifically make API requests, pretending as if
 * they are actually on the same domain. Behind the scenes, it will automatically patch
 * the server URL in, as well as the session_token.
 */
export const apiFetch = async (
  input: string | URL | globalThis.Request,
  init?: RequestInit,
) => {
  if (!process.env.EXPO_PUBLIC_SERVER_URL) {
    throw new Error("Server URL has not been set.");
  }

  const baseUrl = process.env.EXPO_PUBLIC_SERVER_URL;

  const fullCookieString = await SecureStore.getItemAsync("session_token");

  return fetch(baseUrl + input, {
    ...init,
    headers: {
      ...(fullCookieString ?
        { Cookie: `auth_session=${fullCookieString}` }
      : undefined),
    },
    credentials: "include",
  });
};
