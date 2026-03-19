import WorkPage from './WorkClient'
import { BREADCRUMBS, buildMetadata, PAGE_SEO } from '@/lib/seo';

export const metadata = buildMetadata(PAGE_SEO.work);


export default function Work (){
  return  <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMBS.work) }} />
  <WorkPage/>
  </> 
}