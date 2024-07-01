import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support";

export const createRscClient = (client: ApolloClient<NormalizedCacheObject>) => registerApolloClient(() => client);
