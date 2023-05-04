import type { CodegenConfig } from "@graphql-codegen/cli";

const {
  GRAPHQL_ENGINE_URL = "https://localhost:8080/v1/graphql",
  HASURA_GRAPHQL_ADMIN_SECRET = "foo"
} = process.env;

const config: CodegenConfig = {
  schema: {
    [GRAPHQL_ENGINE_URL]: {
      headers: {
        "x-hasura-admin-secret": HASURA_GRAPHQL_ADMIN_SECRET
      }
    }
  },
  errorsOnly: true,
  documents: ["src/**/*.vue"],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    "./src/gql/": {
      preset: "client",
      config: {
        useTypeImports: true
      }
    },
    "./src/schema.json": {
      plugins: ["introspection"],
      config: {
        minify: true
      }
    }
  }
};

export default config;
