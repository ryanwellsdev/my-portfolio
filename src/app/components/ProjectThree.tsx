"use client";

import React from "react";

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
    <div className="relative h-full flex items-center">
      {/* Project Content Container */}
      <div
        className={`h-full bg-white z-20 transition-all duration-500 ease-in-out ${
          isOpen
            ? "w-[calc(50vw-4rem)] pl-[4rem] border-l-2 border-black"
            : "w-0"
        }`}
        style={{
          overflow: "hidden", // Hide any overflowed content
          boxSizing: "border-box", // Include padding and border in width calculations
          whiteSpace: isOpen ? "normal" : "nowrap", // Prevent text wrap when collapsed
        }}
      >
        {/* Content Div */}
        <div
          className={`h-full pl-28 flex flex-col justify-center items-center text-center p-4 transition-opacity duration-500 ease-in-out ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          style={{ boxSizing: "border-box" }} // Ensure padding and border are included in width calculation
        >
          <h2 className="text-xl text-black font-bold">{title}</h2>
          <p>{details}</p>
        </div>
      </div>

      {/* Toggle Button */}
      <div
        className="h-full w-[6rem] flex items-center justify-center transition-transform duration-500 bg-gray-200 z-30 cursor-pointer border-l-2 border-r-2 border-black"
        onClick={onClick}
        role="button"
        tabIndex={0}
        style={{
          transform: isOpen
            ? "translateX(calc(-50vw + 4rem))"
            : "translateX(0)",
          marginRight: isOpen ? "0" : "-2px", // Hide right border slightly behind ProjectOne when collapsed
        }}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            onClick();
          }
        }}
      >
        <span className="text-black whitespace-nowrap rotate-90">{title}</span>
      </div>
    </div>
  );
};

export default ProjectThree;
