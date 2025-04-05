import type { NextConfig } from "next"

const nextConfig: NextConfig = {
	eslint: {
		ignoreDuringBuilds: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "rematazo.pe",
				pathname: "/**",
			},
		],
	},
}

export default nextConfig
