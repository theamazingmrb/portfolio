import { notFound } from "next/navigation";
import { getProjectsForProjectsPage, getProjectById, Project } from "@/lib/projects";
import dynamic from 'next/dynamic';

const ClientProjectPage = dynamic(() => import('./client-page'), { ssr: true });

export const dynamicParams = true; // Enable static site generation for all dynamic routes

export async function generateStaticParams() {
  const projects = getProjectsForProjectsPage();
  return projects.map((project: Project) => ({
    projectId: project.id,
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: { projectId: string };
}) {
  const project = getProjectById(params.projectId);

  if (!project) {
    notFound();
  }
  
  return <ClientProjectPage project={project} />;
}


