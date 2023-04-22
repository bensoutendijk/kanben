import { computed } from "vue";
import { useAuth0 } from "@auth0/auth0-vue";
import { useOnline } from "@vueuse/core";

export function useAuth() {
  const isOnline = useOnline();
  const { user: auth0User, loginWithRedirect, logout } = useAuth0();

  const user = computed(() => {
    if (isOnline.value) {
      return auth0User.value;
    } else {
      return localStorage.getItem("auth0-user");
    }
  });

  return {
    user,
    loginWithRedirect,
    logout
  };
}
