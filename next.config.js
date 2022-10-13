/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	eslint: {
		// Warning: This allows production builds to successfully complete even if
		// your project has ESLint errors.
		ignoreDuringBuilds: true,
	},
	env: {
		NEXT_PUBLIC_SANITY_TOKEN: process.env.NEXT_PUBLIC_SANITY_TOKEN,
		NEXT_PUBLIC_STRIPE_PUBLISHABLE: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE,
		STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
	},
};

module.exports = nextConfig;
