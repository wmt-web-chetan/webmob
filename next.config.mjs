// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.webmob.webmobtech.biz",
        pathname: "/wp-content/uploads/**", // WordPress uploads
      },
      {
        protocol: "https",
        hostname: "webmobtechcdn.nyc3.cdn.digitaloceanspaces.com",
        pathname: "/wmt_v4/**", // CDN assets
      },
      {
        protocol: "http",
        hostname: "192.168.1.60",
        pathname: "/wp-content/uploads/**", // Local development WordPress uploads
      },
    ],
  },
};

export default nextConfig;
