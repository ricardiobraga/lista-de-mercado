/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  reactStrictMode: true,
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config
  },
  env: {
    SUPABASE_KEY : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndhaHF0c2xvZXZvbmZwcm9icm9xIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTQ1NDU1NzEsImV4cCI6MTk3MDEyMTU3MX0.T9zZ3DQyRYbq9cGwjSgl-cLbWK8VrG9_yMFCD8Hr5K0"
  },
  
  
};
