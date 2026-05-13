import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  hooks: { afterAllFileWrite: ['prettier --write'] },
  emitLegacyCommonJSImports: false,
  generates: {
    './dev-test/githunt/types.apolloAngular.ts': {
      schema: './dev-test/githunt/schema.json',
      documents: './dev-test/githunt/**/*.graphql',
      plugins: ['typescript', 'typescript-operations', 'typescript-apollo-angular'],
    },
    './dev-test/githunt/types.apolloAngular.sdk.ts': {
      schema: './dev-test/githunt/schema.json',
      documents: './dev-test/githunt/**/*.graphql',
      config: { sdkClass: true },
      plugins: ['typescript', 'typescript-operations', 'typescript-apollo-angular'],
    },
  },
};

export default config;
