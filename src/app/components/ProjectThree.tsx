"use client";

import React, { useState, useEffect } from "react";

interface ProjectProps {
  id: string;
  title: string;
  details: string;
  isOpen: boolean;
  onClick: () => void;
}

const ProjectOne: React.FC<ProjectProps> = ({
  title,
  details,
  isOpen,
  onClick,
}) => {
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (isOpen) {
      // Delay content appearance until after expansion animation is complete
      timeoutId = setTimeout(() => setContentVisible(true), 500);
    } else {
      setContentVisible(false);
    }
    return () => clearTimeout(timeoutId);
  }, [isOpen]);

  return (
    <div
      className="relative h-full flex items-center"
      style={{ marginLeft: isOpen ? "0" : "-2px" }} // Adjust margin to slide under
    >
      {/* Toggle Button */}
      <div
        className={`h-full flex items-center justify-center transition-transform duration-500 bg-gray-200 z-30 cursor-pointer border-r-2 border-black ${
          isOpen ? "border-l-2" : "border-l-2"
        }`}
        style={{
          width: isOpen ? "6rem" : "calc(6rem - 2px)",
        }}
        onClick={onClick}
        role="button"
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            onClick();
          }
        }}
      >
        <span className="text-black rotate-90">{title}</span>
      </div>

      {/* Project Content Container */}
      <div
        className={`h-full bg-white z-20 transition-all duration-500 ease-in-out ${
          isOpen ? "w-[calc(50vw-6rem)] border-black" : "w-0"
        }`}
        style={{
          overflow: isOpen ? "auto" : "hidden", // Allow scrolling when open
          boxSizing: "border-box", // Include padding and border in width calculations
          whiteSpace: isOpen ? "normal" : "nowrap", // Prevent text wrap when collapsed
        }}
      >
        {/* Content Div */}
        <div
          className={`flex flex-col justify-center p-12 transition-opacity duration-500 ease-in-out ${
            contentVisible ? "opacity-100" : "opacity-0"
          } box-border`} // Added box-border to ensure padding and border are included in width calculation
          style={{
            display: contentVisible ? "block" : "none",
          }}
        >
          <h2 className="text-xl text-black font-bold">{title}</h2>
          <p>
            {details} Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
            tincidunt.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectOne;
