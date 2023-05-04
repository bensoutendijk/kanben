import { auth0 } from "@/auth0";
import { authExchange as urqlAuthExchange } from "@urql/exchange-auth";

export const authExchange = urqlAuthExchange(async (utils) => {
  const { idTokenClaims, checkSession, logout } = auth0;

  return {
    addAuthToOperation(operation) {
      if (!idTokenClaims.value) return operation;
      return utils.appendHeaders(operation, {
        Authorization: `Bearer ${idTokenClaims.value.__raw}`
      });
    },
    didAuthError(error) {
      return error.graphQLErrors.some((e) => e.extensions?.code === "FORBIDDEN");
    },
    async refreshAuth() {
      await checkSession();
      if (!idTokenClaims.value) {
        logout();
      }
    },
    willAuthError() {
      if (idTokenClaims.value?.exp) {
        return Date.now() > idTokenClaims.value.exp;
      }
      return true;
    }
  };
});
