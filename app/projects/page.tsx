import { projects } from "./projects-data";
import ProjectsClient from "./projects-client";

export const metadata = {
  title: "Projects",
  description: "Explore my portfolio of professional projects and experiences in web development and software engineering."
};

export default function ProjectsPage() {
  return <ProjectsClient projects={projects} />;
}
