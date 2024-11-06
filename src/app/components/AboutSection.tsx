"use client";

import Image from "next/image";
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
        className={`h-full bg-white z-20 transition-[width] duration-500 ease-in-out ${
          isOpen ? "w-[calc(40vw-3rem)]" : "w-0"
        } overflow-hidden`}
      >
        <div
          className={`h-full py-24 flex flex-col justify-center transition-opacity duration-500 ease-in-out ${
            contentVisible ? "opacity-100" : "opacity-0"
          } about-content-hover relative`}
        >
          <div className="h-full w-full overflow-y-auto justify-center">
            {/* About Section Content */}
            <div className="flex pr-4 pl-2 flex-col py-3 items-center">
              <div className="relative overflow-hidden mb-2 w-[39rem] h-[24rem]">
                <Image
                  src="/photos/ryanwells.jpeg"
                  alt="ryanwellsphoto"
                  fill
                  style={{ objectFit: "cover" }}
                  className="transform transition-transform duration-500 ease-in-out hover:scale-110"
                />
              </div>
              <div className="">
                <p className="text-xs mb-2 text-justify">
                  Ryan Wells is a versatile full-stack developer whose career
                  spans software development and film production. Skilled in
                  JavaScript, React, Next.js, Node.js, and MongoDB, he is
                  committed to delivering intuitive, user-focused applications.
                  His projects include QuickQuestion, a survey tool empowering
                  HR professionals with actionable insights, and Playground Pal,
                  a family-friendly mapping app that simplifies recreational
                  planning.
                </p>
                <p className="text-xs mb-2 text-justify">
                  With nearly a decade in the film industry, Ryan has served as
                  a lighting technician on major productions like The Last of Us
                  and The Flash, showcasing his technical mastery with ETC
                  lighting consoles, DMX networks, and advanced lighting setups
                  essential for high-stakes visual storytelling. His background
                  reflects a unique blend of technical skill and creativity,
                  driving impactful solutions across technology and film.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Toggle Button */}
      <div
        className="relative toggle-button-hover h-full w-[6rem] py-32 bg-white text-nowrap text-sm flex flex-col justify-between items-center border-l-2 border-r-2 border-black z-10 hover:bg-accent3 transition-colors duration-250"
        onClick={onClick}
        role="button"
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            onClick();
          }
        }}
      >
        <span className="text-black  rotate-90">About</span>
        <span className="text-black rotate-90 mb-6">© Ryan Wells</span>
      </div>
    </div>
  );
};

export default AboutSection;
