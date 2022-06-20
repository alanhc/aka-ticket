
/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa');
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = withPWA({
  images: {
    domains: ["assets.akaswap.com"],
    loader: 'akamai',
    path: '',
  },
  basePath: '/aka-ticket',
  assertPrefix: isProd? "/aka-ticket":"",
  reactStrictMode: true,
  env: {
    SERVER_URL: "https://aka-ticket.herokuapp.com",
  }  
})

module.exports = nextConfig
