import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import AnimatedSection from "@/components/AnimatedSection";
import TopCategories from "@/components/TopCategories";
import { getSortedPostsData, PostData } from "@/lib/posts";

export default function Home() {
  const allPostsData: PostData[] = getSortedPostsData();

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden px-4">
        <div className="z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to My Portfolio
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Developer. Designer. Creator.
          </p>
          <Link
            href="/projects"
            className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 transition duration-300"
          >
            Explore My Work
          </Link>
        </div>
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-background.png"
            alt="Background"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      </section>

      {/* Feature Sections */}
      <AnimatedSection
        animationType="fadeInUp"
        className="py-12 md:py-20 bg-gray-100"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">
            Latest Projects
          </h2>
          <p className="text-lg md:text-xl mb-8 md:mb-12 max-w-2xl mx-auto">
            Discover my most recent work, showcasing innovation and creativity
            in web development.
          </p>
          <Image
            src="/project-preview.png"
            alt="Project Preview"
            width={800}
            height={450}
            className="rounded-lg shadow-xl mx-auto max-w-full h-auto"
          />
        </div>
      </AnimatedSection>

      <AnimatedSection
        animationType="fadeInLeft"
        className="py-12 md:py-20 bg-white"
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
      </AnimatedSection>

      <AnimatedSection
        animationType="fadeInRight"
        className="py-12 md:py-20 bg-gray-100"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">
            Skills & Expertise
          </h2>
          <p className="text-lg md:text-xl mb-8 md:mb-12 max-w-2xl mx-auto">
            A snapshot of my technical skills and areas of expertise.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <SkillIcon name="React" icon="react.png" />
            <SkillIcon name="Node.js" icon="node.png" />
            <SkillIcon name="TypeScript" icon="ts.png" />
            <SkillIcon name="AWS" icon="aws.png" />
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
            Let's create something amazing together.
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

function BlogPostCard({ title, excerpt, link }: { title: string; excerpt: string, link: string }) {
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
