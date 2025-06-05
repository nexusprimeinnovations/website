const EXTERNAL_DATA_URL = 'https://www.nexusprime.com'; // Replace with your domain

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
          const path = page.replace('.js', ''); // Assuming page routes match file names
          const route = path === '/index' ? '' : path; // Handle index page
          return `
            <url>
              <loc>{\`${EXTERNAL_DATA_URL}\${route}\`}</loc>
              <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>0.7</priority>
            </url>
          `;
        })
        .join('')}
    </urlset>
  `;
}

export async function getServerSideProps({ res }) {
  // We generate the sitemap on demand
  const sitemap = generateSiteMap(staticPages);

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

// Default export to prevent Next.js errors, though it's not used for rendering
export default function SitemapXML() {}
