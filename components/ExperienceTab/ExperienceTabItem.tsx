
interface Experience {
  company: string;
  location: string;
  roles: {
    title: string;
    startDate: string;
    endDate?: string;
    description?: string[];
  }[];
}

const ExperienceTabItem = ({ experience }: { experience: Experience }) => {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-gray-800">
        {experience.company}
      </h3>
      <p className="text-sm text-gray-600">{experience.location}</p>
      <div className="space-y-4">
        {experience.roles.map((role, idx) => (
          <div key={idx} className="rounded-md border-l-4 border-blue-500 bg-white p-4 shadow-sm">
            <h4 className="text-md font-semibold text-gray-700">{role.title}</h4>
            <p className="text-sm text-gray-500">
              {role.startDate} - {role.endDate || "Present"}
            </p>

            {role.description && (
              <ul className="mt-2 list-disc list-inside text-sm text-gray-600 space-y-1">
                {role.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTabItem;
