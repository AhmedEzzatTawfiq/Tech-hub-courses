/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
                protocol: 'http',
                hostname: 'localhost',
                port: '1337',
                pathname: '/**',
            },
            // Add more patterns here if needed
        ],
    },
};

export default nextConfig;