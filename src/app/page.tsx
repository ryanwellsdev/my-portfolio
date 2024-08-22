"use client";

import { useState, useRef, useEffect } from "react";
import AnimatedName from "./components/AnimatedName";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";

export default function HomePage() {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [openProject, setOpenProject] = useState<string | null>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const aboutRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const collapseTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Check if the device is touch-based
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  const handleSectionToggle = (section: string) => {
    if (section === "about") {
      setOpenProject(null);
      setOpenSection(openSection === "about" ? null : "about");
    } else if (section === "projects") {
      setOpenSection("projects");
    }
  };

  const handleProjectClick = (projectId: string) => {
    setOpenSection("projects");
    setOpenProject(openProject === projectId ? null : projectId);
  };

  const handleMouseLeave = (section: string) => {
    if (!isTouchDevice) {
      collapseTimeout.current = setTimeout(() => {
        if (section === "about" && openSection === "about") {
          setOpenSection(null);
        } else if (section === "projects" && openSection === "projects") {
          setOpenSection(null);
          setOpenProject(null);
        }
      }, 500); // 200ms delay before collapsing
    }
  };

  const handleMouseEnter = () => {
    // Clear the timeout if the user re-enters the section
    if (collapseTimeout.current) {
      clearTimeout(collapseTimeout.current);
      collapseTimeout.current = null;
    }
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      {/* Horizontal Top Border */}
      <div className="absolute top-24 left-0 right-0 h-[2px] bg-black z-50" />

      {/* Horizontal Bottom Border */}
      <div className="absolute bottom-24 left-0 right-0 h-[2px] bg-black z-50" />

      {/* About Section */}
      <div
        ref={aboutRef}
        onMouseLeave={() => handleMouseLeave("about")}
        onMouseEnter={handleMouseEnter}
      >
        <AboutSection
          isOpen={openSection === "about"}
          onClick={() => handleSectionToggle("about")}
        />
      </div>

      <AnimatedName />

      {/* Projects Section */}
      <div
        ref={projectsRef}
        onMouseEnter={() => {
          handleMouseEnter();
          if (!isTouchDevice) setOpenSection("projects");
        }}
        onMouseLeave={() => handleMouseLeave("projects")}
      >
        <ProjectsSection
          onProjectClick={handleProjectClick}
          openProject={openProject}
        />
      </div>
    </div>
  );
}
