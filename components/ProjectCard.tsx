import Image from "next/image";
import Link from "next/link";

export type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  link: string;
  tags?: string[];
  featured?: boolean;
};

export function ProjectCard({
  title,
  description,
  image,
  link,
  tags = [],
  featured = false,
}: ProjectCardProps) {
  return (
    <div className={`group relative overflow-hidden rounded-xl transition-all duration-300 ${featured ? 'shadow-xl hover:shadow-2xl shadow-blue-500/10 hover:shadow-blue-500/20' : 'shadow-lg hover:shadow-xl'}`}>
      {/* Featured badge */}
      {featured && (
        <div className="absolute top-4 right-4 z-20 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
          Featured
        </div>
      )}
      
      {/* Image container with overlay */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent opacity-60 z-10"></div>
        <Image
          src={image}
          alt={title}
          width={600}
          height={300}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Content overlay */}
        <div className="absolute inset-0 p-6 flex flex-col justify-end z-20">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
            {title}
          </h3>
          <p className="text-gray-300 text-sm md:text-base mb-4 line-clamp-2">
            {description}
          </p>
          
          {/* Tags */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="text-xs bg-gray-800/80 text-gray-300 px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
          )}
          
          <Link
            href={link}
            className="inline-flex items-center text-blue-400 font-medium hover:text-blue-300 transition-colors"
          >
            <span>View Project</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
