import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://codeswipeitsolutions.com';
  const now = new Date();
  return [
    { url: base, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/services`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/portfolio`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: 'yearly', priority: 0.8 },
    { url: `${base}/careers`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/hire-developers`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/blogs`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
  ];
}
