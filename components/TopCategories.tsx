import React from 'react';

const TopCategories: React.FC = () => {
  const categories: string[] = [
    'React',
    'Animation',
    'CSS',
    'Career',
    'JavaScript',
    'Next.js',
    'Performance',
  ];

  return (
    <div className="top-categories">
      <h2 className="text-2xl font-bold mb-4">Top Categories</h2>
      <div className="categories-container flex flex-wrap justify-center">
        {categories.map((category, index) => (
          <div
            key={index}
            className="category-item bg-gray-800 text-white px-4 py-2 rounded-full mx-2 my-1 text-sm font-medium"
          >
            {category}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCategories;