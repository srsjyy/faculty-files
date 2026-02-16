import { useState, useEffect } from "react";

export default function DashboardModal({ image }) {
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    setIsClosing(false);
  }, [image]);

  return (
    <div
      className={`relative flex flex-col md:flex-col gap-6 transform transition-all duration-300 ease-in-out ${
        isClosing ? "opacity-0 scale-95" : "opacity-100 scale-100"
      }`}
    >
      <div>
        <img
          src={image.src}
          alt={image.title}
          className="w-full h-full object-cover rounded-lg shadow-xl"
        />
      </div>

      <div className=" bg-red-800/90 rounded-lg p-6 flex items-center justify-center shadow-lg">
        <h2 className="text-3xl md:text-4xl font-extrabold text-amber-400 text-center drop-shadow-md leading-tight">
          {image.title}
        </h2>
      </div>
    </div>
  );
}
