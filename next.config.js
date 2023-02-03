/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env:{
    NEXT_API: 'http://localhost:8000/',
    
  },
};

module.exports = nextConfig;

