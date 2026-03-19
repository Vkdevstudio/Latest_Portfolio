import { buildMetadata, PAGE_SEO } from '@/lib/seo';
import dynamic from 'next/dynamic';
const SuccessPage = dynamic(() => import('./Success'));

export const metadata = buildMetadata(PAGE_SEO.contact);

export default function Resume() {
  return <SuccessPage />;
}