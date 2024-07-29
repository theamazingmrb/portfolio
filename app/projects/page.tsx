import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import AnimatedSection from "@/components/AnimatedSection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Projects",
};

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
}

const projects: Project[] = [
  {
    id: "tolo",
    title: "TOLO",
    description:
      "A virality engine helping content creators get discovered fast.",
    image: "/projects/tolo-preview.png",
  },
  {
    id: "candid",
    title: "Candid",
    description: "An ENM network app for the non-monogamous community.",
    image: "/projects/candid-preview.png",
  },
  {
    id: "investcloud",
    title: "InvestCloud Projects",
    description:
      "Front-end development for major financial institutions and internal tools.",
    image: "/projects/IC-Logo.svg",
  },
  {
    id: "airbnb-ambassador",
    title: "Airbnb Ambassador Site",
    description:
      "A site and portal for ambassadors to refer others and earn money.",
    image: "/projects/airbnb.png",
  },
  {
    id: "drink-drank-la",
    title: "Drink Drank LA",
    description:
      "A Mongo/Express/EJS application using Yelp API to track local bars.",
    image: "/projects/drink-drank-la.png",
  },
  {
    id: "artsy",
    title: "Artsy",
    description: "A community for artists to share, view, and sell their work.",
    image: "/projects/artsy-preview.jpg",
  },
];

const personalProjects: Project[] = [
  {
    id: "drink-drank-la",
    title: "Drink Drank LA",
    description:
      "A Mongo/Express/EJS application using Yelp API to track local bars.",
    image: "/projects/drink-drank-la.png",
  },
  {
    id: "artsy",
    title: "Artsy",
    description: "A community for artists to share, view, and sell their work.",
    image: "/projects/artsy-preview.jpg",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-64 md:h-96 flex items-center justify-center overflow-hidden px-4 bg-gray-900 text-white">
        <div className="z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">My Work</h1>
          <p className="text-lg md:text-xl">
            Professional experiences and personal projects
          </p>
        </div>
      </section>

      <AnimatedSection
        animationType="fadeInUp"
        className="py-12 md:py-20 bg-gray-100"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Professional Experience
          </h2>
          <ProfessionalExperience />
        </div>
      </AnimatedSection>

      <AnimatedSection
        animationType="fadeInUp"
        className="py-12 md:py-20 bg-white"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Personal Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {personalProjects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Call to Action */}
      <AnimatedSection
        animationType="fadeInLeft"
        className="bg-gray-900 text-white py-12 md:py-20"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Interested in collaboration?
          </h2>
          <p className="text-lg md:text-xl mb-8">
            Let&apos;s discuss how we can work together on your next project.
          </p>
          <Link
            href="/contact"
            className="bg-white text-gray-900 px-6 md:px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </AnimatedSection>

      <Footer />
    </main>
  );
}

function ProjectCard({ id, title, description, image }: Project) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
      <Link href={`/projects/${id}`}>
        <Image
          src={image}
          alt={title}
          width={400}
          height={200}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
        <h3 className="text-xl font-semibold mb-2 text-blue-500 hover:text-blue-600">
          {title}
        </h3>
      </Link>
      <p className="text-gray-800 mb-4">{description}</p>
      <Link
        href={`/projects/${id}`}
        className="text-blue-500 font-semibold hover:underline"
      >
        Learn More &rarr;
      </Link>
    </div>
  );
}

function ProfessionalExperience() {
  const experiences = [
    {
      company: "InvestCloud",
      role: "Front-end Developer",
      period: "2020 - Present",
      description:
        "Developed front-end solutions for major financial institutions and internal tools.",
      achievements: [
        "Created responsive user interfaces for Raymond James and Neuberger Berman",
        "Redesigned the Integration Developer Training Program",
        "Implemented complex financial dashboards and data visualization tools",
      ],
      image: "/projects/IC-Logo.svg",
    },
    {
      company: "TOLO",
      role: "Lead Developer",
      period: "2019 - 2020",
      description:
        "Developed a virality engine helping content creators get discovered fast.",
      achievements: [
        "Built scalable backend infrastructure to handle high traffic loads",
        "Implemented machine learning algorithms for content recommendation",
      ],
      image: "/projects/tolo-preview.png",
    },
    {
      company: "Candid",
      role: "Full-stack Developer",
      period: "2018 - 2019",
      description:
        "Created an ENM network app for the non-monogamous community.",
      achievements: [
        "Designed and implemented secure user authentication and privacy features",
        "Developed real-time messaging and matching algorithms",
      ],
      image: "/projects/candid-preview.png",
    },
    {
      company: "Airbnb",
      role: "Contract Developer",
      period: "2017 - 2018",
      description:
        "Developed a site and portal for ambassadors to refer others and earn money.",
      achievements: [
        "Integrated with Airbnb's API for seamless user experience",
        "Implemented a robust referral tracking and reward system",
      ],
      image: "/projects/airbnb.png",
    },
    {
      company: "BBDO",
      role: "Frontend Developer",
      period: "2016 - 2017",
      description:
        "Created interactive banner ads for various advertising campaigns.",
      achievements: [
        "Utilized Greensock for smooth and engaging animations",
        "Optimized ad performance across different platforms and devices",
        "Collaborated with creative teams to bring designs to life",
      ],
      image: "/projects/bbdo.jpeg", // Use a placeholder image for BBDO
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {experiences.map((exp, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl"
        >
          <div className="flex items-center mb-4">
            <Image
              src={exp.image}
              alt={exp.company}
              width={64}
              height={64}
              className="w-16 h-16 object-contain mr-4"
            />
            <div>
              <h3 className="text-xl font-semibold text-blue-500">
                {exp.company}
              </h3>
              <p className="text-gray-600">{exp.role}</p>
              <p className="text-sm text-gray-500">{exp.period}</p>
            </div>
          </div>
          <p className="text-gray-800 mb-4">{exp.description}</p>
          <h4 className="font-semibold mb-2 text-gray-800">
            Key Achievements:
          </h4>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {exp.achievements.map((achievement, i) => (
              <li key={i}>{achievement}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
