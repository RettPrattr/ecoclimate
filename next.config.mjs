/** @type {import('next').NextConfig} */

const nextConfig = {
	output: 'export',
	reactStrictMode: false,
	images: {
	  unoptimized: true,
	  remotePatterns: []
	},
	webpack(config) {
	  config.module.rules.push({
		test: /\.svg$/,
		use: ['@svgr/webpack']
	  })
  
	  return config
	}
  }
  
  export default nextConfig
  