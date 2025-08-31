import { getProjectsForProjectsPage } from "@/lib/projects";
import ProjectsClient from "./projects-client";

export const metadata = {
  title: "Projects and Related Experience",
  description: "Explore my portfolio of projects and professional work experience across various roles and organizations."
};

export default function ProjectsPage() {
  const projects = getProjectsForProjectsPage();
  return <ProjectsClient projects={projects} />;
}
