import { BREADCRUMBS, buildMetadata, PAGE_SEO } from '@/lib/seo';
import ResumePage from './Resume'; 

export const metadata = buildMetadata(PAGE_SEO.resume);

export default function Resume() {
  return  <>
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMBS.resume) }} />
<ResumePage />
  </>;
}