import type { Context, CodexArgs } from '@/lib/graphql/types';
import type { Blob, Tree } from '@octokit/graphql-schema';

export const resolvers = {
    Query: {
        catalogue: async (_: unknown, __: unknown, { dataSources }: Context) => {
            const result = await dataSources.github.files();

            return ((result?.repository?.object as Tree)?.entries ?? [])
                .filter((entry) => entry.name.endsWith('.cat'))
                .map((entry) => entry.name.replace('.cat', ''));
        },
        codex: async (_: unknown, args: CodexArgs, { dataSources }: Context) => {
            const result = await dataSources.github.file(`${args.faction}.cat`);

            return (result?.repository?.object as Blob)?.text;
        },
        gameSystem: async (_: unknown, __: unknown, { dataSources }: Context) => {
            const result = await dataSources.github.file('Warhammer 40,000.gst');

            return (result?.repository?.object as Blob)?.text;
        },
    },
};
