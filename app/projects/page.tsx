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
    id: "smart-trader",
    title: "Smart Trader",
    description:
      "AI-powered trading journal with analytics and trade performance insights.",
    image: "/projects/smart-trader.png",
  },
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
    image: "/logos/IC-Logo.svg",
  },
  {
    id: "airbnb",
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

// Personal projects section removed

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-64 md:h-96 flex items-center justify-center overflow-hidden px-4 bg-gray-900 text-white">
        <div className="z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">My Work</h1>
          <p className="text-lg md:text-xl">
            Professional projects and experiences
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <AnimatedSection
        animationType="fadeInUp"
        className="py-12 md:py-20 bg-white"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
              />
            ))}
          </div>
        </div>
      </AnimatedSection>

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
    <div className="bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:bg-gray-50 overflow-hidden">
      <Link href={`/projects/${id}`} className="block">
        <div className="p-6">
          <div className="relative h-48 mb-4 overflow-hidden rounded-md">
            <Image
              src={image}
              alt={title}
              width={400}
              height={200}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-blue-500 hover:text-blue-600">
            {title}
          </h3>
          <p className="text-gray-800 mb-4">{description}</p>
          <div className="text-blue-500 font-semibold group flex items-center">
            <span>Learn More</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
        </div>
      </Link>
    </div>
  );
}

function ProfessionalExperience() {
  const experiences = [
    {
      company: "Smart Trader",
      role: "CTO & Founder",
      period: "2025 - Present",
      description:
        "Developed an AI-powered trading journal application for active traders and financial professionals, providing analytics and performance insights.",
      achievements: [
        "Built a comprehensive trading journal with customizable setup types and detailed performance analytics.",
        "Integrated OpenAI's GPT-4 for AI-powered trade analysis and personalized feedback.",
        "Implemented enterprise-level security with row-level security policies in Supabase.",
        "Created a responsive design that works seamlessly across desktop and mobile devices."
      ],
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "OpenAI API"],
      image: "/projects/smart-trader-preview.png",
    },
    {
      company: "Candid",
      role: "Lead Developer",
      period: "2024 - Present",
      description:
        "Took over as the main developer for this social networking app for the non-monogamous, kink, and polyamorous community after the previous developer left.",
      achievements: [
        "Maintained and enhanced the secure verification system to ensure user authenticity and community safety.",
        "Improved the matching algorithm that connects users based on relationship preferences and interests.",
        "Optimized the events discovery platform for community gatherings and meetups.",
        "Enhanced the unique vouching system to build trust within the community."
      ],
      technologies: ["Capacitor", "TypeScript", "React", "Hasura", "GraphQL", "AWS"],
      image: "/projects/candid-preview.png",
    },
    {
      company: "InvestCloud",
      role: "Technical Trainer for Integration Developers",
      period: "2021 - Present",
      description:
        "Lead technical training programs for integration developers, empowering them to deliver high-quality solutions for financial institutions.",
      achievements: [
        "Trained over 50 developers in system integration, API usage, and front-end development best practices.",
        "Redesigned the Integration Developer Training Program to improve efficiency and engagement.",
        "Built interactive dashboards and training tools for use in onboarding programs.",
      ],
      technologies: ["Java", "JPA", "GlassFish", "Groovy", "APIs", "ETL",],
      image: "/projects/IC-Logo.svg",
    },
    {
      company: "General Assembly",
      role: "Lead Instructor, Software Development",
      period: "2020 - Present",
      description:
        "Lead and mentor students through an immersive software development curriculum, preparing them for careers in tech.",
      achievements: [
        "Taught over 100 students in software development fundamentals, including full-stack development, JavaScript, and React.",
        "Developed and delivered course content covering front-end, backend, and cloud technologies.",
        "Mentored students on capstone projects, career guidance, and interview preparation.",
      ],
      technologies: ["JavaScript", "React", "Node.js", "SQL", "AWS", "DJango", "Python", "APIs"],
      image: "/projects/GA.webp",
    },
    {
      company: "InvestCloud",
      role: "Integration Developer",
      period: "2018 - 2020",
      description:
        "Developed and integrated custom front-end solutions for financial clients, ensuring smooth connectivity with backend services.",
      achievements: [
        "Collaborated with cross-functional teams to implement responsive web applications for Raymond James and Neuberger Berman.",
        "Enhanced data visualization tools by integrating APIs and delivering interactive dashboards.",
        "Optimized the onboarding program for integration developers by creating step-by-step documentation and reusable templates.",
      ],
      technologies: [
        "JavaScript",
        "HTML",
        "CSS",
        "GraphQL",
        "SQL",
        "API Integration",
      ],
      image: "/projects/IC-Logo.svg",
    },
    {
      company: "TOLO",
      role: "Technical Co-founder / Lead Developer",
      period: "2022 - Present",
      description:
        "Spearheaded the development of a virality engine to help content creators grow their audience and gain visibility.",
      achievements: [
        "Led the development of the mobile app using React Native and Supabase.",
        "Built backend infrastructure using AWS Lambda to support high-traffic environments.",
        "Managed the entire development lifecycle, from architecture to app store deployment.",
      ],
      technologies: ["React Native", "Supabase", "AWS Lambda", "Node.js"],
      image: "/projects/tolo-preview.png",
      appLinks: {
        ios: "https://apps.apple.com/link-to-tolo-ios",
        android: "https://play.google.com/store/apps/details?id=tolo",
      },
    },
    {
      company: "Airbnb",
      role: "Contract Developer",
      period: "2017",
      description:
        "Built a referral platform to enable Airbnb ambassadors to refer new users and earn rewards.",
      achievements: [
        "Integrated Airbnb’s API for seamless referral tracking and reward management.",
        "Developed real-time systems for reward calculation across multiple channels.",
        "Optimized the platform for mobile and web environments to ensure a smooth user experience.",
      ],
      technologies: ["JavaScript", "API Integration"],
      image: "/projects/airbnb.png",
    },
    {
      company: "BBDO",
      role: "Frontend Developer",
      period: "2017 - 2018",
      description:
        "Created interactive banner ads and animations for major advertising campaigns.",
      achievements: [
        "Designed animations using Greensock (GSAP) for smooth, engaging user experiences.",
        "Optimized ad performance across multiple platforms and devices.",
        "Collaborated closely with creative teams to bring campaign concepts to life.",
      ],
      technologies: ["JavaScript", "GSAP"],
      image: "/projects/bbdo.jpeg",
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
