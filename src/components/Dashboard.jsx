// src/Dashboard.jsx

import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "./DashboardComponents/Navigation";
import Footer from "./widgets/Footer";
import Modal from "./FacultyDetails/Modal";
import Objectives from "./DashboardComponents/Objectives";
import CampusGoals from "./DashboardComponents/CampusGoals";
import ProgramEducationalObjectives from "./DashboardComponents/ProgramEducationalObjectives";
import DashboardModal from "./DashboardComponents/DashboardModal";
import AnimateInView from "./widgets/AnimateInView";

// ... (images array remains the same)
const images = [
  {
    src: "/activities/ACCREDITATION MEETING 2024.jpeg",
    title: "Accreditation Meeting 2024",
    date: "Sample Date",
    description: "Sample Description",
  },
  {
    src: "/activities/COURTESY CALL 2025.jpg",
    title: "BJMP Courtesy Call 2025",
    date: "Sample Date",
    description: "Sample Description",
  },
  {
    src: "/activities/EXTENSION COLLABORATION (FINTECH)2025.jpeg",
    title: "BACOOREx Project (FINTECH)2025",
    date: "Sample Date",
    description: "Sample Description",
  },
  {
    src: "/activities/FACULTY DEVELOPMENT APRIL 2025.jpeg",
    title: "Faculty Development April 2025",
    date: "Sample Date",
    description: "Sample Description",
  },
  {
    src: "/activities/FACULTY ORIENTATION 2025.jpeg",
    title: "Faculty Orientation 2025",
    date: "Sample Date",
    description: "Sample Description",
  },
  {
    src: "/activities/GRADUATION PICTORIAL 2024.jpeg",
    title: "Graduation Pictorial 2024",
    date: "Sample Date",
    description: "Sample Description",
  },
  {
    src: "/activities/KAMUSTAHAN 2025.jpeg",
    title: "DCS Kumustahan 2025",
    date: "Sample Date",
    description: "Sample Description",
  },
  {
    src: "/activities/KAMUSTAHAN FEB2025.jpeg",
    title: "DCS Kumustahan Feb 2025",
    date: "Sample Date",
    description: "Sample Description",
  },
  {
    src: "/activities/MAMBOG EXTENSION  2024.jpeg",
    title: "BACOOREx in Mambog 2024",
    date: "Sample Date",
    description: "Sample Description",
  },
  {
    src: "/activities/ORIENTATION REORIENTATION 2024.jpeg",
    title: "CvSU Re-orientation 2024",
    date: "Sample Date",
    description: "Sample Description",
  },
  {
    src: "/activities/RESEARCH MEETING.jpeg",
    title: "Research Meeting",
    date: "Sample Date",
    description: "Sample Description",
  },
  {
    src: "/activities/T AND A 2024.jpg",
    title: "BACOOREx in BJMP Female Dorm",
    date: "Sample Date",
    description: "Sample Description",
  },
  {
    src: "/activities/T N A.jpg",
    title: "BACOOREx in BJMP Female Dorm",
    date: "Sample Date",
    description: "Sample Description",
  },
];

export default function Dashboard() {
  const [currentImage, setCurrentImage] = useState(0);
  const [currentCarouselIndex, setCurrentCarouselIndex] = useState(
    Math.floor(images.length / 2)
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();

  const next = useCallback(() => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  }, []);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <div className="flex flex-col min-h-screen bg-red-900 text-amber-50 font-funnel overflow-x-hidden">
      {/* ADDITION: Added sticky positioning to the Navigation component so it stays at the top on scroll. */}
      <Navigation className="sticky top-0 z-50" />

      <main className="flex-grow">
        {/* ... (Hero Section remains the same) ... */}
        <section className="relative w-full h-[60vh] md:h-[80vh] bg-black flex items-center justify-center">
          <div className="absolute inset-0 w-full h-full">
            {images.map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt={`Slide ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                  index === currentImage ? "opacity-40" : "opacity-0"
                }`}
              />
            ))}
          </div>
          <div className="relative z-10 text-center px-6">
            <AnimateInView animation="fade-in-up" triggerOnce={true}>
              <h2 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg text-white">
                Welcome to the Department of{" "}
                <span className="text-amber-400">Computer Studies</span>
              </h2>
              <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-amber0 drop-shadow-md">
                Dedicated to shaping future-ready IT professionals and Computer
                scientists through quality instruction, research, and impactful
                community extension.
              </p>
            </AnimateInView>
            <button
              onClick={() => navigate("/home")}
              className="mt-8 px-8 py-3 bg-amber-400 text-red-900 font-bold rounded-full hover:bg-red-900 hover:text-amber-400 transition-all duration-200 hover:scale-105"
            >
              Meet the Faculty
            </button>
          </div>
        </section>

        <div
          id="visionmission"
          className="max-w-7xl mx-auto px-6 py-16 space-y-20"
        >
          {/* Vision & Mission */}
          <section className="grid md:grid-cols-2 gap-12">
            {/* --- ROW 1 --- */}
            {/* MODIFICATION: Changed `triggerOnce` to `false` to make the animation repeat on scroll. */}
            <AnimateInView animation="fade-in-left" triggerOnce={true}>
              <div>
                <h3 className="text-3xl font-bold text-amber-400 mb-4 border-b-2 border-amber-400 pb-2">
                  Our Vision
                </h3>
                <p className="text-amber-50 leading-relaxed">
                  The premier university in historic Cavite globally recognized
                  for excellence in character development, academics, research,
                  innovation and sustainable community engagement.
                </p>
              </div>
            </AnimateInView>

            {/* MODIFICATION: Changed `triggerOnce` to `false` to make the animation repeat on scroll. */}
            <AnimateInView animation="fade-in-right" triggerOnce={false}>
              <div>
                <h3 className="text-3xl font-bold text-amber-400 mb-4 border-b-2 border-amber-400 pb-2">
                  Mithiin ng Pamantasan
                </h3>
                <p className="text-amber-50 leading-relaxed">
                  Ang nangungunang pamantasan sa makasaysayang Kabite na
                  kinikilala sa kahusayan sa paghubog ng mga indibidwal na may
                  pandaigdigang kakayahan at kagandahang asal.
                </p>
              </div>
            </AnimateInView>

            {/* --- ROW 2 --- */}
            {/* MODIFICATION: Changed `triggerOnce` to `false` to make the animation repeat on scroll. */}
            <AnimateInView
              animation="fade-in-left"
              triggerOnce={false}
              delay={200}
            >
              <div>
                <h3 className="text-3xl font-bold text-amber-400 mb-4 border-b-2 border-amber-400 pb-2">
                  Our Mission
                </h3>
                <p className="text-amber-50 leading-relaxed">
                  Cavite State University shall provide excellent, equitable and
                  relevant educational opportunities in the arts, sciences and
                  technology through quality instruction and responsive research
                  and development activities. It shall produce professional,
                  skilled and morally upright individuals for global
                  competitiveness.
                </p>
              </div>
            </AnimateInView>

            {/* MODIFICATION: Changed `triggerOnce` to `false` to make the animation repeat on scroll. */}
            <AnimateInView
              animation="fade-in-right"
              triggerOnce={false}
              delay={200}
            >
              <div>
                <h3 className="text-3xl font-bold text-amber-400 mb-4 border-b-2 border-amber-400 pb-2">
                  Hangarin ng Pamantasan
                </h3>
                <p className="text-amber-50 leading-relaxed">
                  Ang Cavite State university ay makapagbigay ng mahusay, pantay
                  at makabuluhang edukasyon sa sining, agham at teknolohiya sa
                  pamamagitan ng may kalidad na pagtuturo at tumutugon sa
                  pangangailangang pananaliksik at mga gawaing pangkaunlaran.
                </p>
              </div>
            </AnimateInView>
          </section>

          {/* ... (Rest of the components and carousel remain the same) ... */}
          <CampusGoals />
          <Objectives />
          <ProgramEducationalObjectives />

          {/* Carousel */}
          <section>
            <h3 className="text-3xl font-bold text-center text-amber-400 mb-10">
              Featured Moments
            </h3>
            <div className="relative w-full h-[450px] flex items-center justify-center">
              {images.map((image, index) => {
                const offset = index - currentCarouselIndex;
                const isCenter = offset === 0;
                const isAdjacent = Math.abs(offset) <= 2;
                let transformStyle = `translateX(${offset * 35}%) scale(${
                  isCenter ? 1 : 0.7
                })`;
                let opacityStyle = isAdjacent ? 1 : 0;
                let zIndex = images.length - Math.abs(offset);
                if (!isAdjacent)
                  transformStyle = `translateX(${offset * 35}%) scale(0.5)`;

                return (
                  <div
                    key={index}
                    className="absolute w-[70%] md:w-[50%] lg:w-[40%] aspect-[4/3] transition-all duration-500 ease-in-out"
                    style={{
                      transform: transformStyle,
                      opacity: opacityStyle,
                      zIndex: zIndex,
                      pointerEvents: isAdjacent ? "auto" : "none",
                    }}
                    onMouseEnter={() => setCurrentCarouselIndex(index)}
                    onClick={() => isCenter && openModal(image)}
                  >
                    <div
                      className={`relative w-full h-full ${
                        isCenter ? "cursor-pointer" : ""
                      }`}
                    >
                      <div
                        className={`absolute inset-0 bg-black rounded-xl transition-opacity duration-500 ${
                          isCenter ? "opacity-0" : "opacity-40"
                        }`}
                      ></div>
                      <img
                        src={image.src}
                        alt={image.title}
                        className="w-full h-full object-cover rounded-xl shadow-2xl border-4 border-amber-400"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </main>

      <Footer
        textColor="text-amber-50"
        iconColor="text-amber-50"
        spanColor={"text-amber-400"}
      />

      {selectedImage && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setTimeout(() => setSelectedImage(null), 300); // wait for animation
          }}
        >
          <DashboardModal image={selectedImage} />
        </Modal>
      )}
    </div>
  );
}
