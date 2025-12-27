import fs from 'fs';
import path from 'path';

const DOMAIN = 'https://sheikhnabeel.com';

const extractSlugs = (filePath) => {
    try {
        const content = fs.readFileSync(filePath, 'utf-8');
        const regex = /slug:\s*['"](.*?)['"]/g;
        const slugs = [];
        let match;
        while ((match = regex.exec(content)) !== null) {
            slugs.push(match[1]);
        }
        return slugs;
    } catch (error) {
        console.error(`Error reading ${filePath}:`, error);
        return [];
    }
};

const generateSitemap = () => {
    const staticRoutes = [
        '',
        '/about',
        '/services',
        '/blog',
        '/contact',
        '/appointment',
        '/newsletter-preview'
    ];

    const serviceSlugs = extractSlugs('./src/data/services.js');
    const blogSlugs = extractSlugs('./src/data/blogs.js');

    const serviceRoutes = serviceSlugs.map(slug => `/services/${slug}`);
    const blogRoutes = blogSlugs.map(slug => `/blog/${slug}`);

    // Add manual checks for the custom page links if they were hardcoded in services.js with different paths (e.g. /c-suite)
    // For now, we assume /services/:slug is valid for all, or redirects handle it.
    // Ideally we would also extract the 'link' property if it exists.

    // Improved Regex for 'link' property to catch custom links
    const contentServices = fs.readFileSync('./src/data/services.js', 'utf-8');
    const linkRegex = /link:\s*['"](.*?)['"]/g;
    let linkMatch;
    while ((linkMatch = linkRegex.exec(contentServices)) !== null) {
        if (linkMatch[1].startsWith('/')) {
            serviceRoutes.push(linkMatch[1]);
        }
    }

    const allRoutes = [...new Set([...staticRoutes, ...serviceRoutes, ...blogRoutes])];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes.map(route => `
    <url>
        <loc>${DOMAIN}${route}</loc>
        <changefreq>weekly</changefreq>
        <priority>${route === '' ? '1.0' : '0.8'}</priority>
    </url>
`).join('')}
</urlset>`;

    fs.writeFileSync('./public/sitemap.xml', sitemap.trim());
    console.log(`Sitemap generated with ${allRoutes.length} URLs at ./public/sitemap.xml`);
};

generateSitemap();
