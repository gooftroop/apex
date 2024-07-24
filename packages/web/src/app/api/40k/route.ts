import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { ApolloServer, ApolloServerPlugin, GraphQLRequestContext } from '@apollo/server';
import { InMemoryLRUCache } from '@apollo/utils.keyvaluecache';
import { ApolloServerPluginCacheControl } from '@apollo/server/plugin/cacheControl';
import { allowCorsApolloPlugin } from '@/lib/allowCors';
import { resolvers } from '@/app/api/40k/resolvers';
import responseCachePlugin from '@apollo/server-plugin-response-cache';
import typeDefs from '@/app/api/40k/typeDefs.graphql';
import { GithubDataSource } from '@/lib/graphql/datasource/github';
import { Context } from '@/lib/graphql/types';

const loggingPlugin: ApolloServerPlugin<Context> = {
    requestDidStart: (
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        requestContext: GraphQLRequestContext<Context>,
    ) => {
        // console.log(requestContext.request.query);
        return Promise.resolve();
    },
    // TODO(AS4): Document all these.
    unexpectedErrorProcessingRequest: ({
        requestContext,
        error,
    }: {
        requestContext: GraphQLRequestContext<Context>;
        error: Error;
    }) => {
        console.log(requestContext.request.query);
        console.log(error);
        return Promise.resolve();
    },
    contextCreationDidFail: ({ error }: { error: Error }) => {
        console.error(error);
        return Promise.resolve();
    },
    invalidRequestWasReceived: ({ error }: { error: Error }) => {
        console.error(error);
        return Promise.resolve();
    },
    startupDidFail: ({ error }: { error: Error }) => {
        console.error(error);
        return Promise.resolve();
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
    allowBatchedHttpRequests: true,
    introspection: true,
    cache: new InMemoryLRUCache({
        ttl: 604800000, // 1 week
    }),
    persistedQueries: {
        ttl: 43200, // 12 hours
    },
    logger: console,
    plugins: [
        ApolloServerPluginCacheControl({ defaultMaxAge: 86400 }), // 1 Day
        responseCachePlugin(),
        allowCorsApolloPlugin(),
        loggingPlugin,
    ],
});

const githubDataSource = new GithubDataSource('BSData', 'wh40k-10e');

const handler = startServerAndCreateNextHandler(server, {
    context: (req, res) =>
        Promise.resolve({
            req,
            res,
            dataSources: {
                github: githubDataSource,
            },
        }),
});

export { handler as GET, handler as POST };
