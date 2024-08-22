import React from "react";

const getRandomTransformation = () => {
  const transformations = [
    `scale(${2 + Math.random() * 2})`, // Scale between 2x and 4x
    `translateY(${Math.random() > 0.5 ? "-" : ""}${Math.random() * 50}vh)`, // Move vertically (up or down) by up to 50vh
    `translateX(${Math.random() * 50 - 25}vw)`, // Move horizontally by up to 25vw in either direction
    `rotate(${Math.random() * 360}deg)`, // Random rotation between 0 and 360 degrees
    `skew(${Math.random() * 20 - 10}deg, ${Math.random() * 20 - 10}deg)`, // Random skew
  ];

  // Combine a few random transformations
  return transformations
    .sort(() => 0.5 - Math.random())
    .slice(0, 2)
    .join(" ");
};

const AnimatedName: React.FC = () => {
  const name = "RYANWELLS.".split(""); // Separate the name and period
  const work = "WORK".split(""); // Separate WORK to apply different style

  return (
    <div className="flex items-center justify-center h-screen z-0">
      <h1 className="bg-accent3 px-6 py-4">
        {name.map((letter, index) => (
          <span
            key={index}
            className="inline-block text-[#FFFFFF] text-8xl transition-transform duration-500 ease-in-out"
            style={{
              transition: "transform 0.5s ease-in-out",
              WebkitTextStroke: "0.5px #1e2930", // Update with accent1 color
            }}
            onMouseEnter={(e) => {
              const element = e.currentTarget;
              element.style.transform = getRandomTransformation();
              element.style.zIndex = "10"; // Bring the element to the front
            }}
            onMouseLeave={(e) => {
              const element = e.currentTarget;
              element.style.transform = "none";
              element.style.zIndex = "1"; // Reset z-index after animation
            }}
          >
            {letter}
          </span>
        ))}
        {work.map((letter, index) => (
          <span
            key={index}
            className="inline-block text-accent2 text-8xl transition-transform duration-500 ease-in-out"
            style={{
              transition: "transform 0.5s ease-in-out",
              WebkitTextStroke: "0.5px #1e2930", // Update with accent2 color
            }}
            onMouseEnter={(e) => {
              const element = e.currentTarget;
              element.style.transform = getRandomTransformation();
              element.style.zIndex = "10"; // Bring the element to the front
            }}
            onMouseLeave={(e) => {
              const element = e.currentTarget;
              element.style.transform = "none";
              element.style.zIndex = "1"; // Reset z-index after animation
            }}
          >
            {letter}
          </span>
        ))}
      </h1>
    </div>
  );
};

export default AnimatedName;
