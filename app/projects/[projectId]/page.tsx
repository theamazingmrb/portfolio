import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import dynamic from 'next/dynamic';

const ClientProjectPage = dynamic(() => import('./client-page'), { ssr: true });
import { Project } from "@/data/projects";

export const dynamicParams = true; // Enable static site generation for all dynamic routes

export async function generateStaticParams() {
  return projects.map((project) => ({
    projectId: project.id,
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: { projectId: string };
}) {
  const project = projects.find((p) => p.id === params.projectId);

  if (!project) {
    notFound();
  }
  
  return <ClientProjectPage project={project} />;
}


