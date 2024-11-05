import { headers } from 'next/headers';

export async function getSiteConfig() {
  const headersList = await headers();
  const siteConfig = headersList.get('x-site-config');
  
  if (!siteConfig) {
    return {
      brandName: 'Default',
      brandColor: '#000000'
    };
  }

  return JSON.parse(siteConfig);
} 