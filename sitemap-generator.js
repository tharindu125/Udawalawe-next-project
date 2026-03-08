import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";
import { resolve } from "path";

const links = [
  { url: "/", changefreq: "daily", priority: 1.0, lastmod: new Date().toISOString() },
  { url: "/about", changefreq: "weekly", priority: 0.9, lastmod: new Date().toISOString() },
  { url: "/contact", changefreq: "weekly", priority: 0.8, lastmod: new Date().toISOString() },
  { url: "/RoomDetails", changefreq: "weekly", priority: 0.9, lastmod: new Date().toISOString() },
  { url: "/Restaurant", changefreq: "weekly", priority: 0.9, lastmod: new Date().toISOString() },
  { url: "/SafariTours", changefreq: "weekly", priority: 0.9, lastmod: new Date().toISOString() },
  { url: "/Gallery", changefreq: "weekly", priority: 0.8, lastmod: new Date().toISOString() },
  { url: "/UdawalaweSafariTours", changefreq: "weekly", priority: 0.9, lastmod: new Date().toISOString() },
  { url: "/SeasonalTours", changefreq: "weekly", priority: 0.8, lastmod: new Date().toISOString() },
  // add all your pages here
];

const sitemap = new SitemapStream({ hostname: "https://udawalaweelegardenhotelandsafari.com" }); // 👈 update your domain
const writeStream = createWriteStream(resolve("public", "sitemap.xml"));

(async () => {
  links.forEach((link) => sitemap.write(link));
  sitemap.end();

  const data = await streamToPromise(sitemap);
  writeStream.write(data.toString());
  writeStream.end();

  console.log("✅ Sitemap generated: public/sitemap.xml");
})();
