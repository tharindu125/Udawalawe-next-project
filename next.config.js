/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Handle trailing slashes for consistency
  trailingSlash: false,
  
  // Image optimization configuration
  images: {
    domains: ['udawalaweelegardenhotelandsafari.com'],
    formats: ['image/avif', 'image/webp'],
  },
  
  // Preserve the current routing behavior
  async rewrites() {
    return [
      // Preserve hash routing behavior for smooth scrolling
      {
        source: '/:path*',
        destination: '/:path*',
      },
    ];
  },
  
  // Webpack configuration to handle image imports
  webpack: (config, { isServer }) => {
    // Handle image imports
    config.module.rules.push({
      test: /\.(jpg|jpeg|png|gif|webp|svg)$/i,
      type: 'asset/resource',
    });
    
    return config;
  },
  
  // Environment variables (optional - can also use .env.local)
  env: {
    // Add any public env variables here
  },
  
  // Output configuration
  output: 'standalone',
  
  // Enable SWC minification for better performance
  swcMinify: true,
};

module.exports = nextConfig;
