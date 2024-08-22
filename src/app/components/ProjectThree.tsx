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
      className="relative h-full flex items-center project-container"
      style={{ marginLeft: isOpen ? "0" : "-2px" }}
    >
      {/* Toggle Button */}
      <div
        className={`relative flex items-center justify-center transition-transform duration-500 toggle-button-hover z-30 cursor-pointer border-r-2 border-l-2 border-black ${
          isOpen ? "border-l-0" : "border-l-2"
        }`}
        style={{
          width: isOpen ? "6rem" : "calc(6rem - 2px)",
          height: "100%",
          paddingTop: "8rem", // Added padding at the top
          paddingBottom: "8rem", // Added padding at the bottom
          boxSizing: "border-box", // Ensure padding does not affect size
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
        <div className="relative overflow-hidden w-full h-full flex items-center justify-center">
          <span
            className="text-black text-base relative z-10 animate-vertical-marquee whitespace-nowrap"
            style={{ whiteSpace: "nowrap" }}
          >
            {title}
          </span>
          {/* Gradient Overlay */}
          <div
            className="absolute inset-0 z-0 transition-all duration-500 gradient-overlay"
            style={{
              background:
                "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)",
            }}
          />
        </div>
      </div>

      {/* Project Content Container */}
      <div
        className={`h-full bg-white z-20 transition-all duration-500 ease-in-out about-content-hover ${
          isOpen ? "w-[calc(50vw-6rem)] border-black" : "w-0"
        }`}
        style={{
          overflow: "hidden",
          boxSizing: "border-box",
          whiteSpace: isOpen ? "normal" : "nowrap",
        }}
      >
        {/* Inner Container with Increased Padding */}
        <div className="h-full flex flex-col justify-center py-24">
          {/* Scrollable Content Container */}
          <div
            className={`h-full w-full overflow-y-auto transition-opacity duration-500 ease-in-out ${
              contentVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="flex flex-col items-start p-6">
              <h2 className="text-lg text-black font-bold mb-4">{title}</h2>
              <p className="text-xs mb-4">
                {details} This project showcases advanced skills in full-stack
                development, integrating modern technologies to create
                efficient, user-friendly applications. The focus is on
                responsive design, optimized performance, and seamless user
                experience.
              </p>
              <p className="text-xs mb-4">
                The development process included extensive planning, iterative
                testing, and user feedback loops to ensure that the final
                product meets the needs of its intended audience. Emphasis was
                placed on clean, maintainable code, and scalable architecture.
              </p>
              <p className="text-xs mb-4">
                Throughout the project, key technologies were employed, such as
                React for the frontend, Node.js for the backend, and MongoDB for
                the database. The project also leveraged Next.js for server-side
                rendering and enhanced performance.
              </p>
              <p className="text-xs">
                The outcome is a highly functional application that demonstrates
                proficiency in software development, project management, and
                user-centered design. This project is a testament to the
                dedication to quality and the continuous pursuit of excellence
                in the field of software engineering.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectTwo;
