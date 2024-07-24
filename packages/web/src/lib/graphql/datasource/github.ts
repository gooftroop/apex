import { graphql } from '@octokit/graphql';
import type { Repository } from '@octokit/graphql-schema';

export class GithubDataSource {
    private dbConnection;

    private repositoryOwner; // 'BSData'

    private repositoryName; // wh40k-10e

    constructor(repositoryOwner: string, repositoryName: string) {
        this.dbConnection = this.initializeDBConnection();
        this.repositoryOwner = repositoryOwner;
        this.repositoryName = repositoryName;
    }

    private initializeDBConnection() {
        return graphql.defaults({
            headers: {
                Authorization: `token ${process.env.GITHUB_TOKEN}`,
            },
        });
    }

    public async file(fileName: string) {
        return this.dbConnection<{ repository: Repository }>(
            `
            query file($owner: String!, $repo: String!, $expression: String!) {
                repository(owner: $owner, name: $repo) {
                    object(expression: $expression) {
                        ... on Blob {
                            text
                        }
                    }
                }
            }
        `,
            {
                expression: `HEAD:${fileName}`,
                owner: this.repositoryOwner,
                repo: this.repositoryName,
            },
        );
    }

    public async files() {
        return this.dbConnection<{ repository: Repository }>(
            `
            query files($owner: String!, $repo: String!, $expression: String!) {
                repository(owner: $owner, name: $repo) {
                    object(expression: $expression) {
                        ... on Tree {
                            entries {
                                name
                            }
                        }
                    }
                }
            }
        `,
            {
                expression: `HEAD:`,
                owner: this.repositoryOwner,
                repo: this.repositoryName,
            },
        );
    }
}
