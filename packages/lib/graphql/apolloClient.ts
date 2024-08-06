import { ApolloClient, ApolloClientOptions, InMemoryCache } from '@apollo/client';

export type CreateApolloClientOptions = Pick<ApolloClientOptions<unknown>, 'uri' | 'link'>;

export const create = (options: CreateApolloClientOptions) => {
    return new ApolloClient({
        ...options,
        cache: new InMemoryCache(),
    });
};
