/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disabling RSM allows <Particles /> events to work correctly.
  // https://github.com/tsparticles/react/discussions/108
  reactStrictMode: false,
};

module.exports = nextConfig;
