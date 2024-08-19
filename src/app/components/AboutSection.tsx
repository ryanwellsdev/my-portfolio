"use client";

import React, { useState, useEffect } from "react";

interface AboutSectionProps {
  isOpen: boolean;
  onClick: () => void;
}

const AboutSection: React.FC<AboutSectionProps> = ({ isOpen, onClick }) => {
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
    <div className="absolute left-0 top-0 h-full flex items-center">
      {/* About Content */}
      <div
        className={`h-full bg-white z-20 transition-[width] duration-500 ease-in-out ${
          isOpen ? "w-[calc(40vw-3rem)]" : "w-0"
        } overflow-hidden`}
      >
        <div
          className={`h-full flex flex-col p-12 transition-opacity duration-500 ease-in-out ${
            contentVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{
            display: contentVisible ? "block" : "none",
            width: "calc(40vw - 3rem)", // Reduced width to take up less horizontal space
            maxHeight: "100%", // Ensures the content can take up the full height of the container
            overflowY: "auto", // Enable vertical scrolling
          }}
        >
          <h2 className="text-xl text-black font-bold">About Section</h2>
          <p>
            This is the content of the about section. It is now designed to wrap
            and scroll vertically when necessary, using less horizontal space.
          </p>
          <p>
            Additional content can be added here. This setup allows for smooth
            transitions and consistent text rendering whether the section is
            expanded or collapsed.
          </p>
          <p>
            You can add as much content as needed, and it will be constrained
            within this fixed-width container while allowing vertical scrolling.
          </p>
        </div>
      </div>

      {/* Toggle Button */}
      <div
        className="h-full w-[6rem] flex items-center justify-center transition-transform duration-300 border-l-2 border-r-2 bg-gray-200 border-black z-10 cursor-pointer"
        onClick={onClick}
        role="button"
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            onClick();
          }
        }}
      >
        <span className="text-black rotate-90">About</span>
      </div>
    </div>
  );
};

export default AboutSection;
