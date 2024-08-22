"use client";

import ProjectOne from "./ProjectOne";
import ProjectTwo from "./ProjectTwo";
import ProjectThree from "./ProjectThree";

interface ProjectsSectionProps {
  onProjectClick: (projectId: string) => void;
  openProject: string | null; // Now controlling which project is open
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onProjectClick,
  openProject,
}) => {
  return (
    <div className="absolute right-0 top-0 h-full flex flex-row-reverse">
      <ProjectOne
        id="project1"
        title="www.ryanwellsmusic.com - a website for my music"
        details="HTML CSS JAVASCRIPT"
        isOpen={openProject === "project1"}
        onClick={() => onProjectClick("project1")}
      />
      <ProjectTwo
        id="project2"
        title="Playground Pal - Find playgrounds and equipment in Calgary Canada"
        details="Details about Project Two"
        isOpen={openProject === "project2"}
        onClick={() => onProjectClick("project2")}
      />
      <ProjectThree
        id="project3"
        title="QuickQuestion - A Survey app done right. Measure your companies morale"
        details="Detailed description here..."
        isOpen={openProject === "project3"}
        onClick={() => onProjectClick("project3")}
      />
    </div>
  );
};

export default ProjectsSection;
