module.exports = {
    branches: [
        { name: 'main' },
        { name: 'alpha', channel: 'alpha', prerelease: true },
        { name: 'beta', channel: 'beta', prerelease: true },
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
                dockerBuildQuiet: false,
                dockerTags: ['{{version}}'],
                dockerImage: process.env.APP_NAME,
                dockerRegistry: '',
                dockerLogin: 'false',
                dockerBuildFlags: {
                    '--output': 'type=docker',
                },
                dockerArgs: {
                    DOCKER_BUILDKIT: 1,
                    NODE_ENV: process.env.NODE_ENV,
                    SENTRY_AUTH_TOKEN: process.env.SENTRY_AUTH_TOKEN,
                    SENTRY_ORG: process.env.SENTRY_ORG,
                    SENTRY_PROJECT: process.env.SENTRY_PROJECT,
                    SENTRY_RELEASE: '{{next.version}}',
                },
            },
        ],
    ],
};
