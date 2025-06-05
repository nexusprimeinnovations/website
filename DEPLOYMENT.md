# Cloudflare Pages Deployment Guide

## Cloudflare Pages Configuration

When setting up your project in Cloudflare Pages, use these exact settings:

### Build Configuration
```
Build command: npm run build
Build output directory: out
Root directory: (leave empty or use "/")
Node.js version: 18.x
```

### Environment Variables (if needed)
```
NODE_VERSION=18
```

## Files Created for Deployment

1. **`wrangler.toml`** - Cloudflare configuration file
2. **`next.config.js`** - Updated with static export settings
3. **`out/`** directory - Contains the static build output

## Build Process

The build process will:
1. Run `npm install` to install dependencies
2. Run `npm run build` which executes `next build`
3. Generate static files in the `out/` directory
4. Deploy the contents of `out/` to Cloudflare Pages

## Key Configuration Changes

### next.config.js
- Added `output: 'export'` for static export
- Added `trailingSlash: true` for better routing
- Added `images: { unoptimized: true }` for static images

### Features Supported
✅ Static Site Generation (SSG)
✅ Client-side routing
✅ Optimized bundles
✅ Image optimization (unoptimized for static)
✅ CSS and JavaScript minification

### Features NOT Supported (Cloudflare Pages Limitations)
❌ Server-side rendering (SSR)
❌ API routes
❌ Image optimization (Next.js Image component)
❌ Incremental Static Regeneration (ISR)

## Deployment Steps

1. **Connect Repository**: Connect your GitHub/GitLab repository to Cloudflare Pages
2. **Configure Build**: Use the build settings above
3. **Deploy**: Cloudflare will automatically build and deploy
4. **Custom Domain**: Add your custom domain in Cloudflare Pages settings

## Local Testing

To test the static export locally:
```bash
npm run build
npx serve out
```

## Troubleshooting

- If build fails, check that all dependencies are in `package.json`
- Ensure no server-side features are used (API routes, SSR)
- Verify all images use the `unoptimized` Next.js Image component
- Check that all routes are statically exportable 