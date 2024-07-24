import { GithubDataSource } from '@/lib/graphql/datasource/github';

export interface DataSources {
    github: GithubDataSource;
}

export interface Context {
    dataSources: DataSources;
}

export type CodexArgs = {
    faction: string;
};
