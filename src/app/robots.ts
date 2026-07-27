import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
    ],
    sitemap: 'https://codeswipeitsolutions.com/sitemap.xml',
    host: 'https://codeswipeitsolutions.com',
  };
}
