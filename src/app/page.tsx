"use client";

import { useState } from "react";
import AnimatedName from "./components/AnimatedName";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";

export default function HomePage() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const handleSectionToggle = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      <AboutSection
        isOpen={openSection === "about"}
        onClick={() => handleSectionToggle("about")}
      />
      <AnimatedName />
      <ProjectsSection
        isOpen={openSection === "projects"}
        onClick={() => handleSectionToggle("projects")}
      />
    </div>
  );
}
