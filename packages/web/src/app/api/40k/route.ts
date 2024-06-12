import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { ApolloServer } from '@apollo/server';
import { InMemoryLRUCache } from '@apollo/utils.keyvaluecache';
import { ApolloServerPluginCacheControl } from '@apollo/server/plugin/cacheControl';
import { allowCorsApolloPlugin } from '@/lib/allowCors';
import { resolvers } from '@/app/api/40k/resolvers';
import responseCachePlugin from '@apollo/server-plugin-response-cache';
import typeDefs from '@/app/api/40k/typeDefs.graphql';

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
    plugins: [
        ApolloServerPluginCacheControl({ defaultMaxAge: 86400 }), // 1 Day
        responseCachePlugin(),
        allowCorsApolloPlugin(),
    ],
});

const handler = startServerAndCreateNextHandler(server);

export { handler as GET, handler as POST };
