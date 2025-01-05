/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_EMAIL_USER: process.env.NEXT_PUBLIC_EMAIL_USER,
  },
};

export default nextConfig;
