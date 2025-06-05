const fs = require('fs');
const path = require('path');

const EXTERNAL_DATA_URL = 'https://nexusprimeinnovations.com'; // Replace with your domain

const staticPages = [
  '/',
  '/about',
  '/contact',
  '/products/agent-builder',
  '/products/agent-platform',
  '/products/code-editor',
];

function generateSiteMap(pages) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map((page) => {
    const route = page === '/' ? '' : page;
    return `  <url>
    <loc>${EXTERNAL_DATA_URL}${route}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`;
  })
  .join('\n')}
</urlset>`;
}

function generateSitemap() {
  const sitemap = generateSiteMap(staticPages);
  const publicDir = path.join(process.cwd(), 'public');
  
  // Ensure public directory exists
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  
  // Write sitemap to public directory
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
  console.log('✅ Sitemap generated successfully at public/sitemap.xml');
}

// Run the function
generateSitemap(); 