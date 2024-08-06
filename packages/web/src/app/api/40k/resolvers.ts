import { Catalogue } from '@apex/lib/schema/40k/codex/catalogue';
import { GameSystem } from '@apex/lib/schema/40k/game/gameSystem';
import { parse } from '@apex/lib/schema/40k/parser';
import type { Blob, Tree } from '@octokit/graphql-schema';
import type { CodexArgs, Context } from '@apex/lib/graphql/types';

export const resolvers = {
    Query: {
        catalogue: async (_: unknown, __: unknown, ctx: Context) => {
            const { dataSources } = ctx;
            const result = await dataSources.github.files();

            return ((result?.repository?.object as Tree)?.entries ?? [])
                .filter((entry) => entry.name.endsWith('.cat'))
                .map((entry) => entry.name.replace('.cat', ''));
        },
        codex: async (_: unknown, args: CodexArgs, ctx: Context) => {
            const { dataSources } = ctx;
            const result = await dataSources.github.file(`${args.faction}.cat`);

            const { text } = (result?.repository?.object as Blob) ?? {};

            if (!text) {
                return null;
            }

            return parse<Catalogue>(new Catalogue(), text);
        },
        gameSystem: async (_: unknown, __: unknown, ctx: Context) => {
            const { dataSources } = ctx;
            const result = await dataSources.github.file('Warhammer 40,000.gst');

            const { text } = (result?.repository?.object as Blob) ?? {};

            if (!text) {
                return null;
            }

            return parse<GameSystem>(new GameSystem(), text);
        },
    },
};
