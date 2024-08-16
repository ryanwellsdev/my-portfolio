"use client";

interface ProjectProps {
  id: string;
  title: string;
  details: string;
  isOpen: boolean;
  onClick: () => void;
}

const ProjectThree: React.FC<ProjectProps> = ({
  title,
  details,
  isOpen,
  onClick,
}) => {
  return (
    <div className="relative h-full flex-shrink-0 flex items-center justify-end">
      {/* Project Content */}
      <div
        className={`h-full bg-white z-20 transition-width duration-500 ease-in-out ${
          isOpen ? "w-[calc(50vw-4rem)]" : "w-0"
        }`}
        style={{
          overflow: "hidden",
        }}
      >
        <div
          className={`p-4 transition-opacity duration-500 ease-in-out ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          <h2 className="text-xl text-black font-bold">{title}</h2>
          <p>{details}</p>
        </div>
      </div>

      {/* Toggle Button */}
      <div
        className="h-full w-[4rem] flex items-center justify-center transition-transform duration-300 border-l-2 border-r-2 bg-gray-200 border-black z-10 cursor-pointer"
        onClick={onClick}
      >
        <span className="text-black rotate-90">{title}</span>
      </div>
    </div>
  );
};

export default ProjectThree;
