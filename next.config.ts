import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Static export for GitHub Pages: every route becomes out/<route>/index.html.
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
}

export default nextConfig
