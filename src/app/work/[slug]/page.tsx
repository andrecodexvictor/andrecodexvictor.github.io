import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ALL_PROJECTS, getProjectBySlug } from '@/content/projects';
import CaseStudyDetailClient from '@/components/CaseStudyDetailClient';

export function generateStaticParams() {
  return ALL_PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) {
    return {
      title: 'Case Study Not Found',
    };
  }
  return {
    title: `${project.title} — Case Study`,
    description: project.tagline.en,
    openGraph: {
      title: `${project.title} · André Victor Case Study`,
      description: project.tagline.en,
      url: `https://andrecodexvictor.github.io/work/${project.slug}`,
      images: project.previewImage
        ? [{ url: project.previewImage }]
        : [{ url: '/images/andre-portrait.webp' }],
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) {
    notFound();
  }
  return <CaseStudyDetailClient project={project} />;
}
