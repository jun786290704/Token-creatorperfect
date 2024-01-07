/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "dist",
  output: 'export',
  webpack(config) {
    config.resolve.fallback = {
      net: false,
      tls: false,
      fs: false,
      path: false,
      constants: false,
      stream: require.resolve('stream-browserify'),
      http: require.resolve('stream-http'),
      https: require.resolve('https-browserify'),
      crypto: require.resolve('crypto-browserify'),
      querystring: require.resolve('querystring-es3'),
      zlib: require.resolve('browserify-zlib'),
    }
    return config;
  },
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig



