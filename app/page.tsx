import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import AnimatedSection from "@/components/AnimatedSection";
import TopCategories from "@/components/TopCategories";
import { getSortedPostsData, PostData } from "@/lib/posts";
import { ProjectCard } from "@/components/ProjectCard";
import { SkillGroup } from "@/components/SkillGroup";

export default async function Home() {
  const allPostsData: PostData[] = getSortedPostsData();

  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden px-4">
        <div className="z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Billie P Heidelberg
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Full Stack Developer | Educator | Technical Co-Founder
          </p>
          <Link
            href="/projects"
            className="bg-blue-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 transition duration-300"
          >
            Explore My Work
          </Link>
        </div>
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-background.jpg"
            alt="Background"
            fill
            style={{ objectFit: "cover" }}
            priority
            className="opacity-50"
          />
        </div>
      </section>

      {/* Feature Sections */}
      <AnimatedSection
        animationType="fadeInUp"
        className="py-12 md:py-20 bg-gray-100 text-black"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">
            Latest Projects
          </h2>
          <p className="text-lg md:text-xl mb-8 md:mb-12 max-w-2xl mx-auto">
            Explore my recent work, showcasing innovation in web development and
            startup technology.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard
              title="TOLO"
              description="A virality engine helping content creators get discovered fast. Features innovative algorithms for fair content promotion."
              image="/projects/tolo-preview.png"
              link="/projects/tolo"
            />
            <ProjectCard
              title="Candid"
              description="An ENM network app for the non-monogamous community. Includes features like verification, discovery, events, and vouching system."
              image="/projects/candid-preview.png"
              link="/projects/candid-preview.png"
            />
            <ProjectCard
              title="Airbnb Ambassador Site"
              description="Redesigned key components of the affiliate management platform for improved navigation and aesthetics."
              image="/projects/airbnb.png"
              link="/projects/airbnb"
            />
            {/* <ProjectCard
              title="Drink Drank LA"
              description="A Mongo/Express/EJS application using Yelp API to track and display bars in your area."
              image="/projects/drink-drank-la.png"
              link="/projects/drink-drank-la"
            /> */}
          </div>
        </div>
      </AnimatedSection>

      {/* <AnimatedSection
        animationType="fadeInLeft"
        className="py-12 md:py-20 bg-white text-black"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">Blog</h2>
          <p className="text-lg md:text-xl mb-8 md:mb-12 max-w-2xl mx-auto">
            Dive into my thoughts on the latest trends in technology and design.
          </p>
          <TopCategories />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {allPostsData.map(({ id, title, date }) => (
              <BlogPostCard
                key={id}
                title={title}
                excerpt="Exploring upcoming trends in web design and user experience."
                link={`/blog/${id}`}
              />
            ))}
          </div>
        </div>
      </AnimatedSection> */}

      <AnimatedSection
        animationType="fadeInRight"
        className="py-12 md:py-20 bg-white text-black"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">
            Skills & Expertise
          </h2>
          <p className="text-lg md:text-xl mb-8 md:mb-12 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and areas of
            expertise.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <SkillGroup
              title="Front-end"
              skills={["React", "Next.js", "Tailwind CSS", "HTML5/CSS3"]}
            />
            <SkillGroup
              title="Back-end"
              skills={["Node.js", "Express", "Django", "GraphQL"]}
            />
            <SkillGroup
              title="Databases"
              skills={["MongoDB", "PostgreSQL", "Supabase", "Hasura"]}
            />
            <SkillGroup
              title="Other"
              skills={["Docker", "Git", "ETL Processes", "Responsive Design"]}
            />
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
            Ready to start a project?
          </h2>
          <p className="text-lg md:text-xl mb-8">
            Let&apos;s create something amazing together.
          </p>
          <Link
            href="/contact"
            className="bg-white text-gray-900 px-6 md:px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </AnimatedSection>
    </main>
  );
}

function BlogPostCard({
  title,
  excerpt,
  link,
}: {
  title: string;
  excerpt: string;
  link: string;
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{excerpt}</p>
      <Link href={link} className="text-blue-500 font-semibold">
        Read More &rarr;
      </Link>
    </div>
  );
}

function SkillIcon({ name, icon }: { name: string; icon: string }) {
  return (
    <div className="text-center">
      <Image
        src={`/${icon}`}
        alt={name}
        width={64}
        height={64}
        className="mb-2 mx-auto"
      />
      <p className="font-semibold">{name}</p>
    </div>
  );
}
