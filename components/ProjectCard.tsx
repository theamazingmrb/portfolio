import Image from "next/image";
import Link from "next/link";

export type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  link: string;
  tags?: string[];
  featured?: boolean;
  metrics?: string[];
};

export function ProjectCard({
  title,
  description,
  image,
  link,
  tags = [],
  featured = false,
  metrics = [],
}: ProjectCardProps) {
  return (
    <div className={`group rounded-xl overflow-hidden transition-all duration-300 border border-gray-700 ${featured ? 'shadow-xl hover:shadow-2xl shadow-blue-500/20 hover:shadow-blue-500/30' : 'shadow-lg hover:shadow-xl'}`}>
      {/* Top image section */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={600}
          height={300}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Featured badge */}
        {featured && (
          <div className="absolute top-3 right-3 z-30 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-bold px-4 py-1.5 rounded-full shadow-lg">
            Featured
          </div>
        )}
      </div>
      {/* All text content sits on a solid background for maximum readability */}
      <div className="bg-gray-900 p-6 border-t border-gray-800">
        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
          {title}
        </h3>
        <p className="text-gray-200 text-base mb-4 line-clamp-2 min-h-[3rem]">
          {description}
        </p>
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span 
                key={index} 
                className="text-sm bg-gray-800 text-blue-200 px-3 py-1.5 rounded-md font-medium">
                {tag}
              </span>
            ))}
          </div>
        )}
        {metrics.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Metrics:</h4>
            <div className="grid grid-cols-2 gap-1 text-xs">
              {metrics.slice(0, 4).map((metric, index) => (
                <div key={index} className="text-green-400 flex items-center">
                  <span className="mr-1">✓</span>
                  <span>{metric}</span>
                </div>
              ))}
            </div>
          </div>
        )}
        <Link
          href={link}
          className="inline-flex items-center justify-center w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md transition-colors mt-2"
        >
          <span>View Project</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
