"use client";

import Image from "next/image";
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
        className={`flex items-center justify-center transition-transform duration-500 toggle-button-hover z-30 cursor-pointer border-r-2 bg-white border-black ${
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
        <div className="h-full flex flex-col justify-center px-2 py-24">
          {/* Scrollable Content Container */}
          <div
            className={`h-full w-full overflow-y-auto transition-opacity duration-500 ease-in-out ${
              contentVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="flex flex-col py-3  items-center">
              <div className="relative overflow-hidden mb-2 w-[48rem] h-[24rem]">
                <div className="absolute inset-0 overflow-hidden">
                  <Image
                    src="/photos/playgroundpal1.png"
                    alt="playgroundpal1"
                    layout="fill"
                    objectFit="cover"
                    className="transform transition-transform duration-500 ease-in-out hover:scale-110"
                  />
                </div>
              </div>
              <div className="relative overflow-hidden mb-2 w-[48rem] h-[24rem]">
                <div className="absolute inset-0 overflow-hidden">
                  <Image
                    src="/photos/playgroundpal2.png"
                    alt="playgroundpal2"
                    layout="fill"
                    objectFit="cover"
                    className="transform transition-transform duration-500 ease-in-out hover:scale-110"
                  />
                </div>
              </div>
              <div className="relative overflow-hidden mb-1 w-[48rem] h-[24rem]">
                <div className="absolute inset-0 overflow-hidden">
                  <Image
                    src="/photos/playgroundpal3.png"
                    alt="playgroundpal3"
                    layout="fill"
                    objectFit="cover"
                    className="transform transition-transform duration-500 ease-in-out hover:scale-110"
                  />
                </div>
              </div>
              <div className="flex justify-between items-center px-1 w-full">
                <p className="text-xs mb-4">{title}</p>
                <p className="text-xs mb-4">{details}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectTwo;
