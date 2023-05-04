import { createAuth0 } from "@auth0/auth0-vue";

const {
  AUTH0_DOMAIN = "kanben-dev.us.auth0.com",
  AUTH0_KANBEN_CLIENT_ID = "ATrCtFDjOvLxN7YN6nl3zSt61RUanHdy"
} = import.meta.env;

export const auth0 = createAuth0({
  domain: AUTH0_DOMAIN,
  clientId: AUTH0_KANBEN_CLIENT_ID,
  authorizationParams: {
    redirect_uri: window.location.origin
  }
});
