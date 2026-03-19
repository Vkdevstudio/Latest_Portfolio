import { projects } from '@/lib/projects';
import { buildProjectBreadcrumb, buildProjectJsonLd, buildProjectMetadata } from '@/lib/seo';
import { notFound } from 'next/navigation';

import dynamic from 'next/dynamic';
const CaseStudyPage = dynamic(() => import('./SingleWork'));


export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: 'Project Not Found' };
  return buildProjectMetadata({
    name: project.name,
    description: project.description,
    slug: project.slug,
    tags: project.grid.tags,
  });
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();
  return <>
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildProjectBreadcrumb(project.name, project.slug)) }} />
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildProjectJsonLd(project)) }} />
<CaseStudyPage project={project} />
  </> ;
}