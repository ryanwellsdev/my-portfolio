"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface ProjectProps {
  id: string;
  title: string;
  details: string;
  isOpen: boolean;
  onClick: () => void;
}

const ProjectOne: React.FC<ProjectProps> = ({
  title,
  details,
  isOpen,
  onClick,
}) => {
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (isOpen) {
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
        className={`relative flex items-center justify-center transition-transform duration-500 toggle-button-hover bg-[#f8f8f8] z-30 cursor-pointer border-r-2 border-black ${
          isOpen ? "border-l-0" : "border-l-2"
        }`}
        style={{
          width: isOpen ? "6rem" : "calc(6rem - 2px)",
          height: "100%",
          paddingTop: "8rem", // Add padding at the top
          paddingBottom: "8rem", // Add padding at the bottom
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
        className={`h-full bg-[#f8f8f8] z-20 transition-all duration-500 ease-in-out about-content-hover ${
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
            <div className="flex flex-col py-8 items-center">
              {/* Image Container with Zoom Effect */}
              <div
                className="relative overflow-hidden mb-5"
                style={{ width: "700px", height: "350px" }}
              >
                <div className="absolute inset-0 rounded-lg overflow-hidden">
                  <Image
                    src="/photos/ryanwellswebsite.png"
                    alt={title}
                    layout="fill"
                    objectFit="cover"
                    className="transform transition-transform duration-500 ease-in-out hover:scale-110 rounded-lg"
                  />
                </div>
              </div>
              <div
                className="relative overflow-hidden"
                style={{ width: "700px", height: "350px" }}
              >
                <div className="absolute inset-0 rounded-lg overflow-hidden">
                  <Image
                    src="/photos/ryanwellswebsite2.png"
                    alt={title}
                    layout="fill"
                    objectFit="cover"
                    className="transform transition-transform duration-500 ease-in-out hover:scale-110 rounded-lg"
                  />
                </div>
              </div>
              <div className="flex justify-between items-center px-8 w-full">
                <h2 className="text-sm text-black font-bold">{title}</h2>
                <p className="text-xs">{details}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectOne;
