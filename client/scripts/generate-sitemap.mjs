import fs from "node:fs";
import path from "node:path";

const publicDir = path.resolve("public");
const configuredSiteUrl = process.env.VITE_SITE_URL?.trim();
const vercelProductionUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
const vercelUrl = process.env.VERCEL_URL?.trim();

const resolvedDomain = configuredSiteUrl || vercelProductionUrl || vercelUrl;
const siteUrl = resolvedDomain
  ? `https://${resolvedDomain.replace(/^https?:\/\//, "").replace(/\/+$/, "")}`
  : "";

const routes = ["/"];

const robotsPath = path.join(publicDir, "robots.txt");
const sitemapPath = path.join(publicDir, "sitemap.xml");

const robotsLines = ["User-agent: *", "Allow: /"];

if (siteUrl) {
  const now = new Date().toISOString();
  const urls = routes
    .map(
      (route) => `  <url>
    <loc>${siteUrl}${route}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>`
    )
    .join("\n");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  fs.writeFileSync(sitemapPath, sitemap, "utf8");
  robotsLines.push(`Sitemap: ${siteUrl}/sitemap.xml`);
} else if (fs.existsSync(sitemapPath)) {
  fs.rmSync(sitemapPath);
}

fs.writeFileSync(robotsPath, `${robotsLines.join("\n")}\n`, "utf8");
