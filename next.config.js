
/** @type {import('next').NextConfig} */

const nextConfig = {
  pageExtensions: ["ts", "tsx", "mdx"],
  output: "standalone",
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/dstimijog/**",
      },
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
        port: "",
        pathname: "/yc55p4rioxpm/**",
      },
      {
        protocol: "https",
        hostname: "videos.ctfassets.net",
        port: "",
        pathname: "/yc55p4rioxpm/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "8080",
        pathname: "/media/**",
      },
    ],
  },
  experimental: {
    typedRoutes: true,
  },
  async rewrites() {
    return [
      {
        source: '/o-domku',
        destination: '/about',
      },
      {
        source: '/cennik',
        destination: '/pricing',
      },
      {
        source: '/kontakt',
        destination: '/contact',
      },
      {
        source: '/okolica',
        destination: '/neighborhood',
      },
      {
        source: '/galeria/:path*',
        destination: '/gallery/:path*',
      }
    ]
  },
};

module.exports = nextConfig;
