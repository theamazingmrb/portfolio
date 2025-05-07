import React from 'react';

interface SkillItemProps {
  name: string;
  level: number;
}

export default function SkillItem({ name, level }: SkillItemProps) {
  return (
    <div className="flex items-center">
      <div className="w-1/3 text-sm font-medium text-gray-700">{name}</div>
      <div className="w-2/3 flex items-center">
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500"
            style={{ width: `${(level / 5) * 100}%` }}
          />
        </div>
        <span className="ml-2 text-xs text-gray-500">{level}/5</span>
      </div>
    </div>
  );
}
