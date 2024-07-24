/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack: (config) => {
        config.module.rules.push({
            test: /\.(graphql|gql)/,
            exclude: /node_modules/,
            loader: 'graphql-tag/loader',
        });

        return config;
    },
    rewrites: () => [
        {
            source: '/health',
            destination: '/api/health',
        },
    ],
};

export default nextConfig;
