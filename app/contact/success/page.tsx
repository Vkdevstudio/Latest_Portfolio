import { buildMetadata, PAGE_SEO } from '@/lib/seo';
import SuccessPage from './Success'; 

export const metadata = buildMetadata(PAGE_SEO.contact);

export default function Resume() {
  return <SuccessPage />;
}