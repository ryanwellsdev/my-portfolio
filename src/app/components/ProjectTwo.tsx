"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import SlideshowModal from "./SlideshowModal"; // Assuming the modal is in the same directory

interface ProjectProps {
  id: string;
  title: string;
  details: string;
  isOpen: boolean;
  onClick: () => void;
}

const ProjectTwo: React.FC<ProjectProps> = ({
  title,
  details,
  isOpen,
  onClick,
}) => {
  const [contentVisible, setContentVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "/photos/playgroundpal1.png",
    "/photos/playgroundpal2.png",
    "/photos/playgroundpal3.png",
  ];

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (isOpen) {
      timeoutId = setTimeout(() => setContentVisible(true), 500);
    } else {
      setContentVisible(false);
    }
    return () => clearTimeout(timeoutId);
  }, [isOpen]);

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div
      className="relative h-full flex items-center project-container"
      style={{ marginLeft: isOpen ? "0" : "-2px" }}
    >
      {/* Toggle Button */}
      <div
        className={`flex items-center justify-center transition-transform duration-500 toggle-button-hover z-30 cursor-pointer border-r-2 bg-white border-black ${
          isOpen ? "border-l-0" : "border-l-2"
        }`}
        style={{
          width: isOpen ? "6rem" : "calc(6rem - 2px)",
          height: "100%",
          paddingTop: "8rem",
          paddingBottom: "8rem",
          boxSizing: "border-box",
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
        <div className="relative overflow-hidden w-full h-full flex items-center justify-center">
          <span
            className="text-black text-base relative z-10 animate-vertical-marquee whitespace-nowrap"
            style={{ whiteSpace: "nowrap" }}
          >
            {title}
          </span>
          <div
            className="absolute inset-0 z-0 transition-all duration-500 gradient-overlay"
            style={{
              background:
                "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)",
            }}
          />
        </div>
      </div>

      {/* Project Content Container */}
      <div
        className={`h-full bg-white z-20 transition-all duration-500 ease-in-out about-content-hover ${
          isOpen ? "w-[calc(50vw-6rem)] border-black" : "w-0"
        }`}
        style={{
          overflow: "hidden",
          boxSizing: "border-box",
          whiteSpace: isOpen ? "normal" : "nowrap",
        }}
      >
        {/* Inner Container with Increased Padding */}
        <div className="h-full flex flex-col justify-center px-2 py-24">
          {/* Scrollable Content Container */}
          <div
            className={`h-full w-full overflow-y-auto transition-opacity duration-500 ease-in-out ${
              contentVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="flex flex-col items-center">
              <div className="flex justify-between items-center px-1 pt-1 w-full">
                <p className="text-xs mb-1">{title}</p>
                <p className="text-xs mb-1">{details}</p>
              </div>

              {/* Updated Image Components */}
              <div
                className="relative overflow-hidden mb-2 w-[48rem] h-[24rem] cursor-pointer"
                onClick={() => openModal(0)}
              >
                <Image
                  src="/photos/playgroundpal1.png"
                  alt="playgroundpal1"
                  fill
                  style={{ objectFit: "cover" }}
                  className="transform transition-transform duration-500 ease-in-out hover:scale-110"
                />
              </div>
              <div
                className="relative overflow-hidden mb-2 w-[48rem] h-[24rem] cursor-pointer"
                onClick={() => openModal(1)}
              >
                <Image
                  src="/photos/playgroundpal2.png"
                  alt="playgroundpal2"
                  fill
                  style={{ objectFit: "cover" }}
                  className="transform transition-transform duration-500 ease-in-out hover:scale-110"
                />
              </div>
              <div
                className="relative overflow-hidden mb-1 w-[48rem] h-[24rem] cursor-pointer"
                onClick={() => openModal(2)}
              >
                <Image
                  src="/photos/playgroundpal3.png"
                  alt="playgroundpal3"
                  fill
                  style={{ objectFit: "cover" }}
                  className="transform transition-transform duration-500 ease-in-out hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Component */}
      <SlideshowModal
        images={images}
        currentIndex={currentIndex}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onNext={handleNext}
        onPrevious={handlePrevious}
      />
    </div>
  );
};

export default ProjectTwo;
