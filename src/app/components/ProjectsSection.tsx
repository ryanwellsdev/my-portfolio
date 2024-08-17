"use client";

import { useState } from "react";
import ProjectOne from "./ProjectOne";
import ProjectTwo from "./ProjectTwo";
import ProjectThree from "./ProjectThree";

interface ProjectsSectionProps {
  isOpen: boolean;
  onClick: () => void;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  isOpen,
  onClick,
}) => {
  const [openProject, setOpenProject] = useState<string | null>(null);

  const handleToggle = (projectId: string) => {
    setOpenProject(openProject === projectId ? null : projectId);
  };

  return (
    <div className="absolute right-0 top-0 h-full flex flex-row-reverse">
      <ProjectOne
        id="project1"
        title="Project One"
        details="Details about Project One"
        isOpen={openProject === "project1"}
        onClick={() => handleToggle("project1")}
      />
      <ProjectTwo
        id="project2"
        title="Project Two"
        details="Details about Project Two"
        isOpen={openProject === "project2"}
        onClick={() => handleToggle("project2")}
      />
      <ProjectThree
        id="project3"
        title="Project Three"
        details="Details about Project Three"
        isOpen={openProject === "project3"}
        onClick={() => handleToggle("project3")}
      />
    </div>
  );
};

export default ProjectsSection;
