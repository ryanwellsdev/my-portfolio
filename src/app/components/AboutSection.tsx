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
        className={`h-full bg-[#f8f8f8] z-20 transition-[width] duration-500 ease-in-out ${
          isOpen ? "w-[calc(40vw-3rem)]" : "w-0"
        } overflow-hidden`}
      >
        <div
          className={`h-full flex flex-col p-6 py-32 transition-opacity duration-500 ease-in-out ${
            contentVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{
            display: contentVisible ? "block" : "none",
            width: "calc(40vw - 3rem)",
            maxHeight: "100%",
            overflowY: "auto",
          }}
        >
          <h2 className="text-lg text-black font-bold">About Section</h2>
          <p className="text-xs mb-4">
            Ryan Wells is a dynamic professional whose career seamlessly bridges
            the worlds of software development, film production, and electronic
            music. His unique combination of skills and experiences reflects a
            deep commitment to creating innovative, user-focused solutions in
            technology, mastering complex technical challenges in the film
            industry, and pushing the boundaries of electronic music.
          </p>
          {/* Additional content here */}
        </div>
      </div>

      {/* Toggle Button */}
      <div
        className="h-full w-[6rem] py-32 text-nowrap text-sm flex flex-col justify-between items-center border-l-2 border-r-2 bg-[#f8f8f8] border-black z-10"
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
        <span className="text-black rotate-90 mb-6">© Ryan Wells</span>
      </div>
    </div>
  );
};

export default AboutSection;
