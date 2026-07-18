export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/reserve/confirmed"],
    },
    sitemap: "https://drilltours.com/sitemap.xml",
  };
}
