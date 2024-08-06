import type { Repository } from '@octokit/graphql-schema';
import type { GraphQlResponse } from '@octokit/graphql/types';

export interface IGithubDataSource {
    file(fileName: string): GraphQlResponse<{
        repository: Repository;
    }>;

    files(): GraphQlResponse<{
        repository: Repository;
    }>;
}

export interface DataSources {
    github: IGithubDataSource;
}

export interface Context {
    dataSources: DataSources;
}

export type CodexArgs = {
    faction: string;
};
