import type { CodegenConfig } from '@graphql-codegen/cli'

console.log('starting codegen')

const config: CodegenConfig = {
  schema: 'http://graphql-engine:8080/v1/graphql',
  documents: ['src/**/*.vue'],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    './src/gql/': {
      preset: 'client',
      config: {
        useTypeImports: true
      }
    },
    './src/schema.json': {
      plugins: ['introspection'],
      config: {
        minify: true
      }
    }
  }
}

export default config
