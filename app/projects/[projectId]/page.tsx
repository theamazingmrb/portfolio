import { notFound } from "next/navigation";
import { getProjectsForProjectsPage, getProjectById, Project } from "@/lib/projects";
import ProjectPageWrapper from './page-wrapper';

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
  params: Promise<{ projectId: string }>;
}) {
  const { projectId } = await params;
  const project = getProjectById(projectId);

  if (!project) {
    notFound();
  }
  
  return <ProjectPageWrapper project={project} />;
}


