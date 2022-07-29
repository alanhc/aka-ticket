
/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa');
// https://aka-ticket.herokuapp.com https://140.112.30.39:5000
const env_obj = {
  SERVER_URL: "https://140.112.30.39:5000"
}
const isProd = process.env.NODE_ENV === 'production';
const prefix_url = "/aka-ticket/"
console.log(isProd)
const nextConfig = isProd?withPWA({
  images: {
    domains: ["assets.akaswap.com"],
    loader: 'akamai',
    path: '',
  },
  basePath:  '/aka-ticket',
  assertPrefix: "/aka-ticket/",
  reactStrictMode: true,
  env: env_obj,
  pwa: {
    dest: 'public',
    //disable: process.env.NODE_ENV === 'development',
    fallbacks: {
      image: prefix_url+'static/images/fallback.png',
      document: prefix_url+'_offline',
    }
  }
}):{
  images: {
    domains: ["assets.akaswap.com"],
    loader: 'akamai',
    path: '',
  },
  basePath: isProd? '/aka-ticket':"",
  assertPrefix: isProd? "/aka-ticket/":"",
  reactStrictMode: true,
  env: env_obj,
}


module.exports = nextConfig
