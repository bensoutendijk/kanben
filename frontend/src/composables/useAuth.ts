import { useAuth0 } from "@auth0/auth0-vue";

export function useAuth() {
  const { user, loginWithRedirect, logout, idTokenClaims } = useAuth0();

  return {
    user,
    idTokenClaims,
    loginWithRedirect,
    logout
  };
}
