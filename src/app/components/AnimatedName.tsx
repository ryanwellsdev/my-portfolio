import React from "react";

const getRandomTransformation = () => {
  const transformations = [
    `scale(${2 + Math.random() * 2})`, // Scale between 2x and 4x
    `translateX(${Math.random() * 24 - 12}vw)`, // Move horizontally by up to 25vw in either direction
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
  const name = "ryanwells.".split(""); // Separate the name and period
  const work = "work".split(""); // Separate WORK to apply different style

  return (
    <div className="flex flex-col items-center justify-center h-screen z-0">
      <h1 className="px-6 py-4">
        {name.map((letter, index) => (
          <span
            key={index}
            className="inline-block text-black text-8xl transition-transform duration-500 ease-in-out"
            style={{
              transition: "transform 0.5s ease-in-out",
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
            className="inline-block text-black text-8xl transition-transform duration-500 ease-in-out"
            style={{
              transition: "transform 0.5s ease-in-out",
              WebkitTextStroke: ".3px #193741", // Update with accent2 color
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

      {/* New Section for Additional Text */}
      <div className="font-midnightflame flex justify-between w-full mt-12 px-4  ">
        <span className="text-3xl text-accent1">Product Management</span>
        <span className="text-3xl text-accent1">|</span>
        <span className="text-3xl text-accent1">Software Development</span>
      </div>
    </div>
  );
};

export default AnimatedName;
