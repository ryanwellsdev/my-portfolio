"use client";

import { useState } from "react";
import AnimatedName from "./components/AnimatedName";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";

export default function HomePage() {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [openProject, setOpenProject] = useState<string | null>(null);

  const handleSectionToggle = (section: string) => {
    if (section === "about") {
      // If "About" is clicked, close any open projects and open About
      setOpenProject(null); // Close all projects
      setOpenSection(openSection === "about" ? null : "about");
    } else if (section === "projects") {
      // If a project is clicked, close About and open Projects
      setOpenSection("projects");
    }
  };

  const handleProjectClick = (projectId: string) => {
    // Ensure the About section is closed when any project is opened
    setOpenSection("projects");
    setOpenProject(openProject === projectId ? null : projectId);
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      {/* Horizontal Top Border */}
      <div className="absolute top-24 left-0 right-0 h-[2px] bg-black z-50" />

      {/* Horizontal Bottom Border */}
      <div className="absolute bottom-24 left-0 right-0 h-[2px] bg-black z-50" />

      {/* Sections */}
      <AboutSection
        isOpen={openSection === "about"}
        onClick={() => handleSectionToggle("about")}
      />
      <AnimatedName />
      <ProjectsSection
        onProjectClick={handleProjectClick}
        openProject={openProject} // Control which project is open
      />
    </div>
  );
}
