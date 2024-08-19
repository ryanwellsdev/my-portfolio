"use client";

import React, { useState, useEffect } from "react";

interface ProjectProps {
  id: string;
  title: string;
  details: string;
  isOpen: boolean;
  onClick: () => void;
}

const ProjectTwo: React.FC<ProjectProps> = ({
  title,
  details,
  isOpen,
  onClick,
}) => {
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (isOpen) {
      // Delay content appearance until after expansion animation is complete
      timeoutId = setTimeout(() => setContentVisible(true), 500);
    } else {
      setContentVisible(false);
    }
    return () => clearTimeout(timeoutId);
  }, [isOpen]);

  return (
    <div
      className="relative h-full flex items-center project-container" // Ensure this class is present for hover effects
      style={{ marginLeft: isOpen ? "0" : "-2px" }} // Adjust margin to slide under
    >
      {/* Toggle Button */}
      <div
        className={`h-full flex items-center justify-center transition-transform duration-500 bg-[#f8f8f8] z-30 cursor-pointer border-r-2 py-8 border-black ${
          isOpen ? "border-l-0" : "border-l-2"
        }`}
        style={{
          width: isOpen ? "6rem" : "calc(6rem - 2px)",
        }}
        onClick={onClick}
        role="button"
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            onClick();
          }
        }}
      >
        <div className="relative overflow-hidden w-full h-full flex items-center gradient-overlay justify-center">
          <span
            className="text-black text-base animate-vertical-marquee" // Ensure the animation class is here
            style={{ whiteSpace: "nowrap" }}
          >
            {title}
          </span>
        </div>
      </div>

      {/* Project Content Container */}
      <div
        className={`h-full bg-[#f8f8f8] z-20 transition-all duration-500 ease-in-out ${
          isOpen ? "w-[calc(50vw-6rem)] border-black" : "w-0"
        }`}
        style={{
          overflow: isOpen ? "auto" : "hidden", // Allow scrolling when open
          boxSizing: "border-box", // Include padding and border in width calculations
          whiteSpace: isOpen ? "normal" : "nowrap", // Prevent text wrap when collapsed
        }}
      >
        {/* Content Div */}
        <div
          className={`flex flex-col justify-center p-12 transition-opacity duration-500 ease-in-out ${
            contentVisible ? "opacity-100" : "opacity-0"
          } box-border`} // Added box-border to ensure padding and border are included in width calculation
          style={{
            display: contentVisible ? "block" : "none",
          }}
        >
          <h2 className="text-xl text-black font-bold">{title}</h2>
          <p>{details}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectTwo;
