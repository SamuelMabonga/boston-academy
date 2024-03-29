/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["files.stripe.com", "source.unsplash.com", "images.unsplash.com", "d33wubrfki0l68.cloudfront.net", "v5.airtableusercontent.com", "asset.cloudinary.com", "res.cloudinary.com", "picsum.photos", "fastly.picsum.photos"],
  },
  env: {
    HOST: process.env.HOST,
  }
}

module.exports = nextConfig
