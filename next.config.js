/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env:{
    API_URL: 'http://127.0.0.1:8000/',
    GOOGLE_CLIENT: '692999485509-co0lqlgdf2vhpvd4jnc06vq6ji263tas.apps.googleusercontent.com',
  },
};

module.exports = nextConfig;

