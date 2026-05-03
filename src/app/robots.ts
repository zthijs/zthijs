import type { MetadataRoute } from 'next';

export const revalidate = false;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: 'ia_archiver',
        disallow: '/',
      },
      {
        userAgent: [
          'GPTBot',
          'ChatGPT-User',
          'OAI-SearchBot',
          'Google-Extended',
          'GoogleOther',
          'CCBot',
          'anthropic-ai',
          'ClaudeBot',
          'Claude-Web',
          'cohere-ai',
          'PerplexityBot',
          'YouBot',
          'Bytespider',
          'PetalBot',
          'Amazonbot',
          'Applebot-Extended',
          'FacebookBot',
          'Diffbot',
          'ImagesiftBot',
          'Omgilibot',
          'facebookexternalhit',
        ],
        disallow: '/',
      },
    ],
    sitemap: `${process.env.NEXT_PUBLIC_PAGES_URL}/sitemap.xml`,
  };
}
