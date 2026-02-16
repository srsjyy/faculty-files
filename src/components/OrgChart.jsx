import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { people } from "../data";
import Footer from "./widgets/Footer";
import Navigation from "./DashboardComponents/Navigation";

function OrgChart() {
  const navigate = useNavigate();
  const [selectedYear, setSelectedYear] = useState("Computer Science Program");

  const handleClick = (person) => {
    if (!person.isCS) return;
    const id = `${person.last_name}${person.first_name}`;
    navigate(`/person/${id}`, { state: { person } });
  };

  const csPeople = people.filter((p) => p.isCS);
  const csChair = csPeople[0];
  const csCoordinator = csPeople[1];
  const csFaculty = csPeople.slice(2);

  const chair = people[0];
  const coordinators = people.slice(1, 3);
  const facultyMembers = people.slice(3);

  return (
    <div className="flex flex-col min-h-screen bg-amber-50 font-funnel">
      <Navigation className=" top-0 z-50" />

      <main className="flex-grow py-10 px-4">
        <div className="flex justify-center gap-4 mb-8">
          {[
            "Computer Science Program",
            "2024-2025",
            "2023-2024",
            // "2022-2023",
          ].map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`px-4 py-2 rounded-full font-medium ${
                selectedYear === year
                  ? "bg-red-800 text-white"
                  : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100"
              } transition`}
            >
              {year}
            </button>
          ))}
        </div>

        {selectedYear === "Computer Science Program" ? (
          <>
            <h2 className="text-center text-3xl font-bold mb-10">
              Organizational Chart <br />
              Computer Science Program
            </h2>
            <div className="flex justify-center mb-6">
              <div
                className="bg-red-800 text-white p-4 rounded-lg shadow-md cursor-pointer hover:scale-105 transition"
                onClick={() => handleClick(csChair)}
              >
                <img
                  src={csChair.image}
                  alt={csChair.name}
                  className="w-28 h-28 rounded-full object-cover mx-auto mb-2 border-4 border-white"
                />
                <p className="text-lg font-bold text-center">{csChair.name}</p>
                <p className="text-sm text-center">
                  {csChair.designation || "Department Chair"}
                </p>
              </div>
            </div>

            <div className="flex justify-center mb-4">
              <div className="w-1 h-8 bg-gray-400"></div>
            </div>

            <div className="flex justify-center mb-6">
              <div
                className="bg-yellow-600 text-white p-4 rounded-lg shadow-md cursor-pointer hover:scale-105 transition"
                onClick={() => handleClick(csCoordinator)}
              >
                <img
                  src={csCoordinator.image}
                  alt={csCoordinator.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-2 border-4 border-white"
                />
                <p className="font-semibold text-center">
                  {csCoordinator.name}
                </p>
                <p className="text-sm text-center">
                  {csCoordinator.designation || "CS Coordinator"}
                </p>
              </div>
            </div>

            <div className="flex justify-center mb-6">
              <div className="w-1 h-8 bg-gray-400"></div>
            </div>

            <div className="flex flex-wrap justify-center gap-8">
              {csFaculty.map((faculty, idx) => (
                <div
                  key={idx}
                  className="bg-amber-300 text-gray-900 p-4 rounded-lg text-center shadow cursor-pointer hover:scale-105 transition w-48"
                  onClick={() => handleClick(faculty)}
                >
                  <img
                    src={faculty.image}
                    alt={faculty.name}
                    className="w-20 h-20 rounded-full object-cover mx-auto mb-2 border-4 border-white"
                  />
                  <p className="font-medium">{faculty.name}</p>
                  {faculty.designation && <p className="text-sm">Faculty</p>}
                </div>
              ))}
            </div>
          </>
        ) : selectedYear === "2024-2025" ? (
          <>
            <h2 className="text-center text-3xl font-bold mb-10">
              Organizational Chart <br /> A.Y. 2024–2025
            </h2>

            <div className="flex justify-center mb-6">
              <div
                className="bg-red-800 text-white p-4 rounded-lg shadow-md cursor-pointer hover:scale-105 transition"
                onClick={() => handleClick(chair)}
              >
                <img
                  src={chair.image}
                  alt={chair.name}
                  className="w-28 h-28 rounded-full object-cover mx-auto mb-2 border-4 border-white"
                />
                <p className="text-lg font-bold text-center">{chair.name}</p>
                <p className="text-sm text-center">
                  {chair.designation || "Department Chair"}
                </p>
              </div>
            </div>

            <div className="flex justify-center gap-10 mb-10 flex-wrap">
              {coordinators.map((coord, idx) => (
                <div
                  key={idx}
                  className="bg-yellow-600 text-white p-4 rounded-lg shadow-md cursor-pointer hover:scale-105 transition"
                  onClick={() => handleClick(coord)}
                >
                  <img
                    src={coord.image}
                    alt={coord.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto mb-2 border-4 border-white"
                  />
                  <p className="font-semibold text-center">{coord.name}</p>
                  <p className="text-sm text-center">
                    {coord.designation || "Coordinator"}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex justify-center mb-6">
              <div className="w-[80%] h-8 border-t border-gray-400 relative">
                <div className="absolute top-0 left-1/4 h-8 w-1 bg-gray-400"></div>
                <div className="absolute top-0 left-1/2 h-8 w-1 bg-gray-400"></div>
                <div className="absolute top-0 right-1/4 h-8 w-1 bg-gray-400"></div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              {facultyMembers.map((faculty, idx) => (
                <div
                  key={idx}
                  className="bg-amber-300 text-gray-900 p-4 rounded-lg text-center shadow cursor-pointer hover:scale-105 transition w-48"
                  onClick={() => handleClick(faculty)}
                >
                  <img
                    src={faculty.image}
                    alt={faculty.name}
                    className="w-20 h-20 rounded-full object-cover mx-auto mb-2 border-4 border-white"
                  />
                  <p className="font-medium">{faculty.name}</p>
                  {faculty.designation && (
                    <p className="text-sm">{faculty.designation}</p>
                  )}
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <h2 className="text-center text-3xl font-bold mb-10">
              Organizational Chart <br /> A.Y. {selectedYear}
            </h2>
            <div className="flex justify-center">
              <img
                src={`/orgcharts/${selectedYear}.png`}
                alt={`Organizational Chart ${selectedYear}`}
                className="max-w-full rounded-xl shadow-md"
              />
            </div>
          </>
        )}
      </main>

      <Footer
        className="bg-red-900"
        textColor={"text-white"}
        iconColor={"text-white-500"}
        spanColor={"text-amber-400"}
      />
    </div>
  );
}

export default OrgChart;
