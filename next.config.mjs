/** @type {import('next').NextConfig} */

const nextConfig = {
  /*
  devIndicators allows you to configure the on-screen indicator that gives context about the current route you're viewing during development.
  https://nextjs.org/docs/app/api-reference/config/next-config-js/devIndicators
   */
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'directus.devmed.cz',
        pathname: '/*',
      }
    ],
  },
  env: {
    photosURL: 'https://jsonplaceholder.typicode.com/photos'
  }
};

export default nextConfig;
