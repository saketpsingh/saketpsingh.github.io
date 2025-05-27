"use client";

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  duration: string;
  image?: string;
}

const SingleProject = ({
  review,
  setCardRef,
  maxHeight,
}: {
  review: Project;
  setCardRef: (el: HTMLDivElement | null) => void;
  maxHeight: number;
}) => {
  // Verify correct destructuring
  const { title, description, technologies, duration } = review;

  return (
    <div
      ref={setCardRef}
      className="flex flex-col items-start justify-between bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 dark:bg-zinc-900 dark:shadow-none dark:border dark:border-strokedark cursor-pointer"
      style={{ height: maxHeight || "auto" }}
    >
      <div className="w-full">
        {/* Project Title */}
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 text-left">
          {title}
        </h3>

        {/* Duration */}
        {duration && (
          <p className="text-base text-gray-700 dark:text-indigo-400 mb-4 text-left">
            Duration: {duration}
          </p>
        )}

        {/* Description */}
        {description && (
          <p className="text-base text-gray-700 dark:text-indigo-400 mb-4 text-left">
            {description}
          </p>
        )}

        {/* Technologies */}
        {technologies && technologies.length > 0 && (
          <div className="text-base text-gray-700 dark:text-indigo-400 text-left">
            <span className="font-medium">Technologies:</span>{" "}
            {technologies.join(", ")}
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleProject;