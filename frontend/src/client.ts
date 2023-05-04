import { Client, cacheExchange, fetchExchange } from "@urql/vue";
import { authExchange } from "./exchanges/authExchange";
const { GRAPHQL_ENGINE_URL = "http://localhost:8080/v1/graphql" } = import.meta.env;

export const client = new Client({
  url: GRAPHQL_ENGINE_URL,
  exchanges: [authExchange, cacheExchange, fetchExchange]
});
