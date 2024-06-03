// For details on the default semantic-release configuration for create-ds-project packages,
// see https://cimpress-support.atlassian.net/wiki/spaces/DDT/pages/14831452170/Package+Release+Configuration+for+create-ds-project+Packages.

module.exports = {
    branches: [
        { name: 'main' },
        { name: 'alpha', channel: 'alpha', prerelease: true },
        { name: 'beta', channel: 'beta', prerelease: true },
        // { name: 'DCI-+([0-9])/*', prerelease: true },
    ],
    plugins: [
        [
            '@semantic-release/commit-analyzer',
            {
                preset: 'conventionalcommits',
                parserOpts: {
                    noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES'],
                },
            },
        ],
        [
            '@semantic-release/release-notes-generator',
            {
                preset: 'conventionalcommits',
                parserOpts: {
                    noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES'],
                },
                writerOpts: {
                    commitsSort: ['subject', 'scope'],
                },
            },
        ],
        ['@semantic-release/npm'],
        [
            '@semantic-release/changelog',
            {
                changelogFile: 'CHANGELOG.md',
            },
        ],
        [
            '@semantic-release/git',
            {
                assets: ['package.json', 'package-lock.json', 'CHANGELOG.md'],
                message:
                    'chore(<%= branch.prerelease ? "prerelease" : "release" %>): ${nextRelease.version} [ci skip]\n\n${nextRelease.notes}',
            },
        ],
        [
            '@semantic-release/exec',
            {
                publishCmd: 'npm run format && echo "VERSION=${nextRelease.version}" > version.env',
            },
        ],
        [
            '@codedependant/semantic-release-docker',
            {
                dockerTags: ['{{version}}'],
                dockerImage: process.env.APP_NAME,
                dockerRegistry: '190925848936.dkr.ecr.eu-west-1.amazonaws.com',
                dockerLogin: 'false',
                dockerBuildFlags: {
                    '--output': 'type=docker',
                },
                dockerArgs: {
                    DOCKER_BUILDKIT: 1,
                    COAM_CLIENT_ID: process.env.COAM_CLIENT_ID,
                    COAM_CLIENT_SECRET: process.env.COAM_CLIENT_SECRET,
                    CT_ARTIFACTORY_TOKEN: process.env.CT_ARTIFACTORY_TOKEN,
                    NEW_RELIC_APP_NAME: process.env.NEW_RELIC_APP_NAME,
                    NEW_RELIC_LICENSE_KEY: process.env.NEW_RELIC_LICENSE_KEY,
                    NEXT_PUBLIC_NEW_RELIC_LICENSE_KEY: process.env.NEXT_PUBLIC_NEW_RELIC_LICENSE_KEY,
                    NEXT_PUBLIC_NEW_RELIC_ACCOUNT_ID: process.env.NEXT_PUBLIC_NEW_RELIC_ACCOUNT_ID,
                    NEXT_PUBLIC_NEW_RELIC_TRUST_KEY: process.env.NEXT_PUBLIC_NEW_RELIC_TRUST_KEY,
                    NEXT_PUBLIC_NEW_RELIC_AGENT_ID: process.env.NEXT_PUBLIC_NEW_RELIC_AGENT_ID,
                    NEXT_PUBLIC_NEW_RELIC_APPLICATION_ID: process.env.NEXT_PUBLIC_NEW_RELIC_APPLICATION_ID,
                    NEXT_PUBLIC_NODE_ENV: process.env.NODE_ENV,
                    NEXT_PUBLIC_URL: process.env.NEXT_PUBLIC_URL,
                    NODE_ENV: process.env.NODE_ENV,
                    SENTRY_AUTH_TOKEN: process.env.SENTRY_AUTH_TOKEN,
                    SENTRY_ORG: process.env.SENTRY_ORG,
                    SENTRY_PROJECT: process.env.SENTRY_PROJECT,
                    SENTRY_RELEASE: '{{next.version}}',
                    VP_ARTIFACTORY_TOKEN: process.env.VP_ARTIFACTORY_TOKEN,
                },
            },
        ],
    ],
};
