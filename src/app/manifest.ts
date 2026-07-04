import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Vision Beyond Events',
    short_name: 'Vision Beyond',
    description: 'Premium Luxury Event Management',
    start_url: '/',
    display: 'standalone',
    background_color: '#131313',
    theme_color: '#f2ca50',
    icons: [
      {
        src: '/icon.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  }
}
