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
        title="www.ryanwellsmusic.com - a website for all things music"
        details="Details about Project One"
        isOpen={openProject === "project1"}
        onClick={() => handleToggle("project1")}
      />
      <ProjectTwo
        id="project2"
        title="Playground Pal - Find playgrounds and equipment in Calgary Canada"
        details="Details about Project Two"
        isOpen={openProject === "project2"}
        onClick={() => handleToggle("project2")}
      />
      <ProjectThree
        id="project3"
        title="QuickQuestion - A Survey app done right. Measure your companies morale"
        details="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nulla facilisi. Sed consectetur, ligula id tempus dignissim, magna
            augue tristique risus, non varius ligula lectus sed nisl. Curabitur
            in lectus non elit tincidunt interdum. Duis scelerisque purus eget
            nisi venenatis, a efficitur neque elementum. Pellentesque habitant
            morbi tristique senectus et netus et malesuada fames ac turpis
            egestas. Ut eget nisl in augue convallis scelerisque. Vestibulum ac
            tincidunt sem. Duis ultrices lacus non velit aliquam, non fermentum
            risus viverra. Nulla facilisi. Cras aliquam diam et est suscipit
            fermentum. Sed ac interdum turpis, ac molestie justo. Proin
            tincidunt, nulla sit amet laoreet consequat, erat orci commodo
            ligula, vel volutpat odio magna et justo. Vivamus bibendum nisl vel
            tellus condimentum, id efficitur ex pellentesque. Praesent vulputate
            sapien at urna laoreet dapibus. Aliquam erat volutpat. Phasellus
            ultricies vel risus ut ullamcorper. Nulla ut odio non nulla accumsan
            cursus. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas. Nam aliquet justo nec nibh
            ultricies, nec venenatis nulla tristique. Curabitur bibendum arcu
            nec nisi gravida, non pellentesque nunc cursus. Suspendisse potenti.
            Mauris finibus orci et enim suscipit, non accumsan dolor aliquam.
            Phasellus a vehicula libero. Sed quis sapien nec quam dignissim
            congue. Nullam ultrices fermentum nulla, vel sollicitudin turpis.
            Donec gravida est nec ligula interdum, vel iaculis lectus ultrices.
            Maecenas scelerisque semper risus nec interdum. Vivamus congue felis
            nec arcu fermentum, et tincidunt nunc sagittis. Nam vel dolor at
            elit scelerisque ullamcorper. Vestibulum vel diam nisi. Nam
            consequat odio sed eros vulputate tempor. Quisque ac ultricies sem.
            Suspendisse viverra sapien sed risus interdum tincidunt. Curabitur
            tincidunt, augue in luctus facilisis, erat ante dapibus augue, sit
            amet vehicula ligula magna id risus. Integer interdum urna sit amet
            felis consectetur, at tristique turpis feugiat. Cras at sapien a
            risus accumsan sollicitudin. Quisque rhoncus lorem sed ligula
            venenatis, ut malesuada metus mattis. Proin malesuada sapien non
            ligula scelerisque, at tempor libero feugiat. Duis finibus ligula
            risus, a ultricies dolor consequat et. Phasellus sagittis purus sed
            ornare ornare. In ac elit lacus. Etiam vitae libero a velit
            venenatis fringilla in at quam. Etiam non lacus vel velit suscipit
            fermentum. Ut luctus libero nec dui faucibus, nec facilisis lorem
            tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nulla facilisi. Sed consectetur, ligula id tempus dignissim, magna
            augue tristique risus, non varius ligula lectus sed nisl. Curabitur
            in lectus non elit tincidunt interdum. Duis scelerisque purus eget
            nisi venenatis, a efficitur neque elementum. Pellentesque habitant
            morbi tristique senectus et netus et malesuada fames ac turpis
            egestas. Ut eget nisl in augue convallis scelerisque. Vestibulum ac
            tincidunt sem. Duis ultrices lacus non velit aliquam, non fermentum
            risus viverra. Nulla facilisi. Cras aliquam diam et est suscipit
            fermentum. Sed ac interdum turpis, ac molestie justo. Proin
            tincidunt, nulla sit amet laoreet consequat, erat orci commodo
            ligula, vel volutpat odio magna et justo. Vivamus bibendum nisl vel
            tellus condimentum, id efficitur ex pellentesque. Praesent vulputate
            sapien at urna laoreet dapibus. Aliquam erat volutpat. Phasellus
            ultricies vel risus ut ullamcorper. Nulla ut odio non nulla accumsan
            cursus. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas. Nam aliquet justo nec nibh
            ultricies, nec venenatis nulla tristique. Curabitur bibendum arcu
            nec nisi gravida, non pellentesque nunc cursus. Suspendisse potenti.
            Mauris finibus orci et enim suscipit, non accumsan dolor aliquam.
            Phasellus a vehicula libero. Sed quis sapien nec quam dignissim
            congue. Nullam ultrices fermentum nulla, vel sollicitudin turpis.
            Donec gravida est nec ligula interdum, vel iaculis lectus ultrices.
            Maecenas scelerisque semper risus nec interdum. Vivamus congue felis
            nec arcu fermentum, et tincidunt nunc sagittis. Nam vel dolor at
            elit scelerisque ullamcorper. Vestibulum vel diam nisi. Nam
            consequat odio sed eros vulputate tempor. Quisque ac ultricies sem.
            Suspendisse viverra sapien sed risus interdum tincidunt. Curabitur
            tincidunt, augue in luctus facilisis, erat ante dapibus augue, sit
            amet vehicula ligula magna id risus. Integer interdum urna sit amet
            felis consectetur, at tristique turpis feugiat. Cras at sapien a
            risus accumsan sollicitudin. Quisque rhoncus lorem sed ligula
            venenatis, ut malesuada metus mattis. Proin malesuada sapien non
            ligula scelerisque, at tempor libero feugiat. Duis finibus ligula
            risus, a ultricies dolor consequat et. Phasellus sagittis purus sed
            ornare ornare. In ac elit lacus. Etiam vitae libero a velit
            venenatis fringilla in at quam. Etiam non lacus vel velit suscipit
            fermentum. Ut luctus libero nec dui faucibus, nec facilisis lorem
            tincidunt."
        isOpen={openProject === "project3"}
        onClick={() => handleToggle("project3")}
      />
    </div>
  );
};

export default ProjectsSection;
