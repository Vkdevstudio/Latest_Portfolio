import { BREADCRUMBS, buildMetadata, CONTACT_PAGE_JSON_LD, PAGE_SEO } from '@/lib/seo';
import ContactPage from './Contact'; 

export const metadata = buildMetadata(PAGE_SEO.contact);

export default function Contact() {
  return <>
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMBS.contact) }} />
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(CONTACT_PAGE_JSON_LD) }} />
<ContactPage />
  </> ;
}