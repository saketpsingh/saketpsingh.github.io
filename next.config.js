/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig = {
  reactStrictMode: true,
  output: isGitHubPages ? 'export' : undefined,
  basePath: isGitHubPages ? '/saketpsingh.github.io' : '',
  assetPrefix: isGitHubPages ? '/saketpsingh.github.io/' : '',
  images: {
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
