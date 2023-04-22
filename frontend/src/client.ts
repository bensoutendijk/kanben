import { Client, cacheExchange, fetchExchange } from '@urql/vue'

const { HASURA_GRAPHQL_ENGINE_URL = 'http://localhost:8080/v1/graphql' } = import.meta.env

export const client = new Client({
  url: HASURA_GRAPHQL_ENGINE_URL,
  exchanges: [cacheExchange, fetchExchange]
})
