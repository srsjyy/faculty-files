import React, { useState } from "react"; // Import useState
import { Award } from "lucide-react";

function DevelopmentPlan({ development_plan }) {

  const years = ["2024", "2025", "2026", "2027", "2028"];
  const sections = {
    professionalDevelopment: "Professional Development",
    loading: "Loading",
    research: "Research",
    extensions: "Extensions",
  };

  // State to manage which section is currently active/displayed
  const [activeSection, setActiveSection] = useState(null); // null means all sections are shown initially

  if (!development_plan || Object.keys(development_plan).length === 0) {
    return (
      <div className="p-6 bg-amber-50 rounded shadow font-funnel">
        <h1 className="text-red-900 font-bold text-xl mt-4 flex justify-center items-center gap-2">
          <Award className="h-6 w-6 text-red-900" />
          Individual Development Plan
        </h1>
        <br />
        <p className="text-gray-600">
          No individual development plan available.
        </p>
      </div>
    );
  }

  // Determine which sections to render based on activeSection state
  const sectionsToRender = activeSection
    ? { [activeSection]: sections[activeSection] } // Only the active section
    : sections; // All sections if no active section

  return (
    <div className="p-6 bg-amber-50 rounded shadow font-funnel">
      <h1 className="text-red-900 font-bold text-xl mt-4 flex justify-center items-center gap-2">
        <Award className="h-6 w-6 text-red-900" />
        Individual Development Plan
      </h1>
      <br />

      {/* Buttons for filtering */}
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {Object.entries(sections).map(([key, title]) => (
          <button
            key={key}
            onClick={() => setActiveSection(activeSection === key ? null : key)} // Toggle active section
            className={`
              px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200
              ${activeSection === key
                ? "bg-red-900 text-white shadow-md"
                : "bg-white text-gray-800 border border-gray-300 hover:bg-gray-100"
              }
            `}
          >
            {title}
          </button>
        ))}
         <button
            onClick={() => setActiveSection(null)} // Button to show all
            className={`
              px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200
              ${activeSection === null
                ? "bg-red-900 text-white shadow-md"
                : "bg-white text-gray-800 border border-gray-300 hover:bg-gray-100"
              }
            `}
          >
            Show All
          </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border-collapse">
          <thead>
            <tr>
              <th className="py-2 px-4 border border-gray-300 text-left text-gray-700 w-1/6">
                Category
              </th>
              {years.map((year) => (
                <th
                  key={year}
                  className="py-2 px-4 border border-gray-300 text-left text-gray-700 w-1/5"
                >
                  Year {year}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Object.entries(sectionsToRender).map(([key, title]) => ( // Use sectionsToRender here
              <tr key={key} className="bg-white">
                <td className="py-2 px-4 border border-gray-300 text-gray-900 font-semibold align-top">
                  {title}
                </td>
                {years.map((year) => (
                  <td
                    key={`${key}-${year}`}
                    className="py-2 px-4 border border-gray-300 text-gray-900 align-top"
                  >
                    {development_plan[key] &&
                    development_plan[key][year] &&
                    development_plan[key][year].length > 0 ? (
                      <ul className="list-disc list-outside pl-5 space-y-1">
                        {development_plan[key][year].map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      <span className="text-gray-500 italic">No plan</span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DevelopmentPlan;