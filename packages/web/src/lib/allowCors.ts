import { GraphQLRequestContextWillSendResponse } from '@apollo/server';

export const allowCorsApolloPlugin = () => ({
    // eslint-disable-next-line @typescript-eslint/require-await
    async requestDidStart() {
        return {
            // eslint-disable-next-line @typescript-eslint/require-await
            async willSendResponse(requestContext: GraphQLRequestContextWillSendResponse<object>) {
                const { request, response } = requestContext;

                response.http?.headers.set('Access-Control-Allow-Credentials', 'true');
                response.http?.headers.set('Access-Control-Allow-Origin', '*');
                response.http?.headers.set('Access-Control-Allow-Origin', request.http?.headers.get('origin') || '');
                response.http?.headers.set('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
                response.http?.headers.set('apollo-require-preflight', 'true');
                response.http?.headers.set(
                    'Access-Control-Allow-Headers',
                    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
                );
            },
        };
    },
});
