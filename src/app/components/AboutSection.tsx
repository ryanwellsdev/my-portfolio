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
        className={`h-full bg-white z-20 transition-[width] duration-500 ease-in-out ${
          isOpen ? "w-[calc(40vw-3rem)]" : "w-0"
        } overflow-hidden`}
      >
        <div
          className={`h-full flex flex-col p-6 py-32 transition-opacity duration-500 ease-in-out ${
            contentVisible ? "opacity-100" : "opacity-0"
          } about-content-hover relative`}
          style={{
            display: contentVisible ? "block" : "none",
            width: "calc(40vw - 3rem)",
            maxHeight: "100%",
            overflowY: "auto",
          }}
        >
          <h2 className="text-lg text-black font-bold">About Section</h2>
          {/* About Section Content */}
          <p className="text-xs mb-4">
            Ryan Wells is a dynamic professional whose career seamlessly bridges
            the worlds of software development, film production, and electronic
            music. His unique combination of skills and experiences reflects a
            deep commitment to creating innovative, user-focused solutions in
            technology, mastering complex technical challenges in the film
            industry, and pushing the boundaries of electronic music.
          </p>
          <p className="text-xs mb-4">
            Transitioning into software development, Ryan brings a fresh and
            insightful perspective, underpinned by a solid foundation in
            technology. A graduate of InceptionU's Full-Stack Developer program,
            Ryan has developed proficiency in key technologies such as
            JavaScript, React, Next.js, HTML, CSS, Node.js, ExpressJS, and
            MongoDB. His passion for building meaningful digital experiences is
            evident in the applications he has created: QuickQuestion: A
            Next.js-based survey tool designed to empower HR professionals with
            the ability to gather authentic feedback, fostering a culture of
            transparency and continuous improvement within organizations.
            Playground Pal: A family-oriented, map-based application built with
            the MERN stack, simplifying outdoor planning and making it easier
            for families to find and enjoy recreational spaces.
            ryanwellsmusic.com: A fully functional website that serves as a hub
            for his electronic music, connecting his creative output with a
            global audience.
          </p>
          <p className="text-xs mb-4">
            Before his foray into the tech world, Ryan spent nearly a decade in
            the film industry, where he honed his skills as a Lighting
            Technician and Console Operator. His work on major productions like
            The Last of Us, Yellowjackets, The Flash, and Billy the Kid
            underscores his technical expertise and ability to operate under
            pressure in high-stakes environments. Ryan's proficiency with ETC
            lighting consoles, DMX protocol networks, and heavy machinery
            enabled him to execute complex lighting setups that were crucial to
            the visual storytelling of these projects. Beyond technical skills,
            Ryan demonstrated leadership by managing teams, mentoring junior
            crew members, and coordinating the logistics of large-scale film
            productions.
          </p>
          <p className="text-xs mb-4">
            Ryan's creative journey extends into the realm of electronic music,
            where he has established himself as a key figure in Western Canada’s
            house and techno underground. His live performances, characterized
            by the use of analog synthesizers and drum machines, deliver warm,
            dancefloor-driven sounds interwoven with gripping acid lines. His
            music has captivated audiences across multiple countries, earning
            him a respected place in the electronic music community. Mentorships
            with influential figures such as Richie Hawtin and Mathew Jonson
            have further shaped his artistic direction and solidified his
            standing as a dedicated musician.
          </p>
          <p className="text-xs">
            Throughout his multifaceted career, Ryan Wells exemplifies the
            intersection of creativity, technical skill, and innovation. Whether
            developing responsive digital applications, orchestrating complex
            lighting setups for major film productions, or performing
            electrifying live music sets, Ryan’s work is driven by a relentless
            pursuit of excellence and a deep passion for his craft. His ability
            to seamlessly integrate these diverse disciplines sets him apart as
            a versatile innovator, continually pushing the boundaries of what’s
            possible in technology, film, and music.
          </p>
          {/* Additional content */}
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
        <span className="text-black rotate-90">About</span>
        <span className="text-black rotate-90 mb-6">© Ryan Wells</span>
      </div>
    </div>
  );
};

export default AboutSection;
