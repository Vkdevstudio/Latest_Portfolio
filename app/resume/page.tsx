import { BREADCRUMBS, buildMetadata, PAGE_SEO } from '@/lib/seo';
import dynamic from 'next/dynamic';
const ResumePage = dynamic(() => import('./Resume'));

export const metadata = buildMetadata(PAGE_SEO.resume);

export default function Resume() {
  return  <>
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMBS.resume) }} />
<ResumePage />
  </>;
}