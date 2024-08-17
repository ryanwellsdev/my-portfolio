"use client";

interface AboutSectionProps {
  isOpen: boolean;
  onClick: () => void;
}

const AboutSection: React.FC<AboutSectionProps> = ({ isOpen, onClick }) => {
  return (
    <div className="absolute left-0 top-0 h-full flex items-center">
      {/* About Content */}
      <div
        className={`h-full bg-white z-20 transition-width duration-500 ease-in-out ${
          isOpen ? "w-[calc(50vw-4rem)]" : "w-0"
        }`}
        style={{ overflow: "hidden" }}
      >
        <div
          className={`h-full flex flex-col justify-center items-center p-4 transition-opacity duration-500 ease-in-out ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          <h2 className="text-xl text-black font-bold">About Section</h2>
          <p>Details about the about section go here.</p>
        </div>
      </div>

      {/* Toggle Button */}
      <div
        className="h-full w-[6rem] flex items-center justify-center transition-transform duration-300 border-l-2 border-r-2 bg-gray-200 border-black z-10 cursor-pointer"
        onClick={onClick}
      >
        <span className="text-black rotate-90">About</span>
      </div>
    </div>
  );
};

export default AboutSection;
