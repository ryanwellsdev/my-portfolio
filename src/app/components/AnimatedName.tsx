const AnimatedName: React.FC = () => {
  const name = "RYANWELLS.WORK".split("");

  return (
    <h1 className="text-5xl sm:text-6xl font-bold text-center text-black dark:text-white">
      {name.map((letter, index) => (
        <span
          key={index}
          className="inline-block transition-transform duration-300 hover:scale-125 hover:rotate-6"
        >
          {letter}
        </span>
      ))}
    </h1>
  );
};

export default AnimatedName;
