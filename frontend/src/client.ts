import { Client, cacheExchange, fetchExchange } from "@urql/vue";

export const client = new Client({
  url: 'http://localhost:8080/v1/graphql',
  exchanges: [cacheExchange, fetchExchange]
});