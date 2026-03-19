/** @type {import('next-sitemap').IConfig} */

const projectSlugs = [
  'clapos',
  'plusuae',
  'jignu',
  'wyka',
  'medtech-dashboards',
  'hospital-management-saas',
  'pg-accommodation-platform',
  'leads-management-dashboard',
  'hospital-websites-series',
];

module.exports = {
  siteUrl: 'https://vinod-dev.vercel.app',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: 'monthly',
  priority: 0.7,
  exclude: ['/404', '/500'],

  additionalPaths: async (config) => {
    return projectSlugs.map((slug) => ({
      loc: `/work/${slug}`,
      changefreq: 'monthly',
      priority: 0.8,
      lastmod: new Date().toISOString(),
    }));
  },

  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
    ],
    additionalSitemaps: [
      'https://vinod-dev.vercel.app/sitemap.xml',
    ],
  },

  transform: async (config, path) => {
    const priorities = {
      '/': 1.0,
      '/work': 0.9,
      '/about': 0.8,
      '/howiwork': 0.8,
      '/resume': 0.7,
      '/contact': 0.7,
      '/contact/success': 0.3,
    };

    return {
      loc: path,
      changefreq: config.changefreq,
      priority: priorities[path] ?? config.priority,
      lastmod: new Date().toISOString(),
    };
  },
};