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

  const handleMouseLeave = (
    section: string,
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    if (!isTouchDevice) {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      let rect;

      if (section === "about") {
        rect = aboutRef.current?.getBoundingClientRect();
      } else if (section === "projects") {
        rect = projectsRef.current?.getBoundingClientRect();
      }

      if (rect) {
        const buffer = 20; // Add a 20px buffer around the section
        const isOutside =
          mouseX > rect.right + buffer ||
          mouseX < rect.left - buffer ||
          mouseY > rect.bottom + buffer ||
          mouseY < rect.top - buffer;

        if (isOutside) {
          if (section === "about" && openSection === "about") {
            setOpenSection(null);
          } else if (section === "projects" && openSection === "projects") {
            setOpenSection(null);
            setOpenProject(null);
          }
        }
      }
    }
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      {/* Horizontal Top Border */}
      <div className="absolute top-24 left-0 right-0 h-[2px] bg-black z-50" />

      {/* Horizontal Bottom Border */}
      <div className="absolute bottom-24 left-0 right-0 h-[2px] bg-black z-50" />

      {/* About Section */}
      <div ref={aboutRef} onMouseLeave={(e) => handleMouseLeave("about", e)}>
        <AboutSection
          isOpen={openSection === "about"}
          onClick={() => handleSectionToggle("about")}
        />
      </div>

      <AnimatedName />

      {/* Projects Section */}
      <div
        ref={projectsRef}
        onMouseEnter={() => !isTouchDevice && setOpenSection("projects")}
        onMouseLeave={(e) => handleMouseLeave("projects", e)}
      >
        <ProjectsSection
          onProjectClick={handleProjectClick}
          openProject={openProject}
        />
      </div>
    </div>
  );
}
