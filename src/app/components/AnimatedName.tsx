import React from "react";

const getRandomTransformation = () => {
  const transformations = [
    `scale(${2 + Math.random() * 3})`, // Scale between 1.5x and 3x
    `translateY(${Math.random() > 0.5 ? "-" : ""}${Math.random() * 50}vh)`, // Move vertically (up or down) by up to 50vh
    `translateX(${Math.random() * 50 - 25}vw)`, // Move horizontally by up to 25vw in either direction
    `rotate(${Math.random() * 360}deg)`, // Random rotation between 0 and 360 degrees
    `skew(${Math.random() * 20 - 10}deg, ${Math.random() * 20 - 10}deg)`, // Random skew
    `scaleX(${Math.random() > 0.5 ? -1 : 1})`, // Flip horizontally
    `scaleY(${Math.random() > 0.5 ? -1 : 1})`, // Flip vertically
  ];

  // Combine a few random transformations
  return transformations
    .sort(() => 0.5 - Math.random())
    .slice(0, 2)
    .join(" ");
};

const AnimatedName: React.FC = () => {
  const name = "RYANWELLS.WORK".split("");

  return (
    <h1 className="text-8xl sm:text-8xl font-thin text-center text-black dark:text-white">
      {name.map((letter, index) => (
        <span
          key={index}
          className="inline-block transition-transform duration-500 ease-in-out"
          style={{ transition: "transform 0.5s ease-in-out" }}
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
  );
};

export default AnimatedName;
