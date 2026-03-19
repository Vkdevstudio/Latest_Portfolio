import { BREADCRUMBS, buildMetadata, PAGE_SEO } from '@/lib/seo';
import dynamic from 'next/dynamic';
const SuccessPage = dynamic(() => import('./Success'));

export const metadata = buildMetadata(PAGE_SEO.success);

export default function Resume() {
  return <>
   <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMBS.success) }}
      />
      <SuccessPage />
  </> ;
}