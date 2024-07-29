import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import AnimatedSection from "@/components/AnimatedSection";
import Footer from "@/components/Footer";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  details: string;
}

const projects: Project[] = [
  {
    id: "tolo",
    title: "TOLO",
    description:
      "A virality engine helping content creators get discovered fast.",
    image: "/projects/tolo-preview.png",
    details:
      "TOLO (tap on, lift off) helps content be heard and seen quickly and organically. The app comprises a community of creators that dictate what trends and goes viral based on how people engage with content (audio/video/images). We are a virality engine that helps people and content get discovered fast.",
  },
  {
    id: "candid",
    title: "Candid",
    description: "An ENM network app for the non-monogamous community.",
    image: "/projects/candid-preview.png",
    details:
      "Candid is the ultimate app designed for the non-monogamous, kink, and polyamorous community. It offers a diverse community open to all genders and sexual identities, allowing users to discover who they really are. Features include verification, discovery, events, and a unique vouching system.",
  },
  {
    id: "airbnb",
    title: "Airbnb Ambassador Site",
    description:
      "Redesigned key components of the affiliate management platform.",
    image: "/projects/airbnb.png",
    details:
      "As a contractor for Airbnb, I led the redesign of crucial elements within their affiliate management platform. This project focused on enhancing navigation and improving aesthetic coherence across the site. By leveraging my expertise in front-end development and UX design, I created a more intuitive and visually appealing interface that streamlined the affiliate management process. This redesign not only improved user experience for Airbnb's ambassadors but also contributed to more efficient management of the affiliate program.",
  },
  {
    id: "drink-drank-la",
    title: "Drink Drank LA",
    description:
      "A Mongo/Express/EJS application using Yelp API to track local bars.",
    image: "/projects/drink-drank-la.png",
    details:
      "Drink Drank LA is a web application built using MongoDB, Express.js, and EJS templating engine. It leverages the Yelp API to help users discover and keep track of bars in the Los Angeles area. The app allows users to search for bars, view detailed information about each venue, and save their favorite spots. Key features include real-time updates on bar information, user reviews and ratings, and personalized lists of visited and wishlist bars. This project showcases my ability to integrate third-party APIs, work with NoSQL databases, and create dynamic web applications using the MVC architecture.",
  },
  {
    id: "artsy",
    title: "Artsy",
    description: "A community for artists to share, view, and sell their work.",
    image: "/projects/artsy-preview.png",
    details:
      "Artsy is a community for artists. With Artsy, artists have the ability to share their work, view other people's work, and post best practices and tips on their profiles. Users can also share their opinions on other users' art through comments. Users will also have the ability to post prices for their art so that they can sell it on Artsy as well (in the post title).",
  },
];

export default function ProjectPage({
  params,
}: {
  params: { projectId: string };
}) {
  const project = projects.find((p) => p.id === params.projectId);

  if (!project) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-64 md:h-96 flex items-center justify-center overflow-hidden px-4 bg-gray-900 text-white">
          <div className="z-10 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {project.title}
            </h1>
            <p className="text-lg md:text-xl">{project.description}</p>
          </div>
        </section>

        {/* Project Details Section */}
        <AnimatedSection
          animationType="fadeInUp"
          className="py-12 md:py-20 bg-gray-100"
        >
          <div className="container mx-auto px-4">
            <Image
              src={project.image}
              alt={project.title}
              width={1200}
              height={600}
              className="w-full rounded-lg shadow-md mb-8"
            />
            <div className="prose max-w-none">
              <h2 className="text-2xl font-semibold mb-4">Project Details</h2>
              <p>{project.details}</p>
            </div>
          </div>
        </AnimatedSection>
      </main>

      {/* Call to Action */}
      <AnimatedSection
        animationType="fadeInLeft"
        className="bg-gray-900 text-white py-12 md:py-20"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Want to see more projects?
          </h2>
          <p className="text-lg md:text-xl mb-8">
            Check out my other work and innovations.
          </p>
          <Link
            href="/projects"
            className="bg-white text-gray-900 px-6 md:px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition duration-300"
          >
            View All Projects
          </Link>
        </div>
      </AnimatedSection>

      <Footer />
    </div>
  );
}

export function generateStaticParams() {
  return projects.map((project) => ({
    projectId: project.id,
  }));
}
