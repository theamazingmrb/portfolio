type SkillGroupProps = {
  title: string;
  skills: string[];
};
export function SkillGroup({ title, skills }: SkillGroupProps) {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <ul className="space-y-1">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}
