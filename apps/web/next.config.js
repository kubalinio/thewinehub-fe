module.exports = {
  reactStrictMode: true,
  transpilePackages: ["shared"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
      },
    ],
  },
};
