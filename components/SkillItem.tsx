import React from 'react';

interface SkillItemProps {
  name: string;
  level: number;
}

export default function SkillItem({ name, level }: SkillItemProps) {
  return (
    <div className="flex flex-col space-y-1">
      <div className="flex justify-between items-center">
        <div className="text-sm font-medium text-gray-700 truncate mr-2">{name}</div>
        <span className="text-xs text-gray-500 flex-shrink-0">{level}/5</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500"
          style={{ width: `${(level / 5) * 100}%` }}
        />
      </div>
    </div>
  );
}
