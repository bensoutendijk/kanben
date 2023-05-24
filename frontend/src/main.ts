import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { auth0 } from "./auth0";

import { Inkline, components } from "@inkline/inkline";
import "./css/variables/index.scss";
import "@inkline/inkline/css/index.scss";
import "@inkline/inkline/css/utilities.scss";

const app = createApp(App).use(Inkline, { components });

app.use(router);
app.use(auth0);

app.mount("#app");
