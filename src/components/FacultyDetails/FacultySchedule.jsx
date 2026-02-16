import React, { useState, useEffect } from "react";
import { CalendarDays } from "lucide-react";

function FacultySchedule({ schedule }) {
  const [currentScheduleDetails, setCurrentScheduleDetails] = useState(null);
  const [activeSemesterName, setActiveSemesterName] = useState("");

  
  useEffect(() => {
    if (schedule && Array.isArray(schedule) && schedule.length > 0) {
      const latestSemester = schedule[schedule.length - 1];
      setCurrentScheduleDetails(latestSemester.details);
      setActiveSemesterName(latestSemester.semesterName);
    } else {
      setCurrentScheduleDetails(null);
      setActiveSemesterName("");
    }
  }, [schedule]);

  const handleSemesterChange = (semester) => {
    setCurrentScheduleDetails(semester.details);
    setActiveSemesterName(semester.semesterName);
  };

  if (!schedule || !Array.isArray(schedule) || schedule.length === 0) {
    return (
      <div className="p-6 bg-amber-50 rounded shadow font-funnel">
        <h1 className="text-red-900 font-bold text-xl mb-4 flex justify-center items-center gap-2">
          <CalendarDays className="h-6 w-6 text-red-900" />
          Faculty Schedule
        </h1>
        <p className="text-gray-600">No faculty schedule available.</p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-amber-50 rounded shadow font-funnel">
      <h1 className="text-red-900 font-bold text-xl mb-4 flex justify-center items-center gap-2">
        <CalendarDays className="h-6 w-6 text-red-900" />
        Faculty Schedule
      </h1>

      {/* Semester selection buttons */}
      {schedule.length > 1 && (
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {schedule.map((semester, index) => (
            <button
              key={index}
              onClick={() => handleSemesterChange(semester)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ease-in-out
                ${
                  activeSemesterName === semester.semesterName
                    ? "bg-red-900 text-amber-50 shadow-md"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
            >
              {semester.semesterName}
            </button>
          ))}
        </div>
      )}

      {/* Display the current semester's schedule */}
      {currentScheduleDetails &&
      Object.keys(currentScheduleDetails).length > 0 ? (
        <div className="overflow-x-auto">
          <h2 className="text-lg font-semibold text-red-800 mb-3 text-center">
            Schedule for {activeSemesterName}
          </h2>
          <table className="min-w-full bg-white border-collapse">
            <thead>
              <tr>
                <th className="py-2 px-4 border border-gray-300 text-left text-gray-700">
                  Day
                </th>
                <th className="py-2 px-4 border border-gray-300 text-left text-gray-700">
                  Time
                </th>
                <th className="py-2 px-4 border border-gray-300 text-left text-gray-700">
                  Subject
                </th>
                <th className="py-2 px-4 border border-gray-300 text-left text-gray-700">
                  Section
                </th>
                <th className="py-2 px-4 border border-gray-300 text-left text-gray-700">
                  Room
                </th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(currentScheduleDetails).map(([day, classes]) =>
                classes.length > 0 ? (
                  classes.map((item, index) => (
                    <tr
                      key={`${day}-${item.time}-${item.subject}`}
                      className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                    >
                      {index === 0 && (
                        <td
                          rowSpan={classes.length}
                          className="py-2 px-4 border border-gray-300 text-gray-900 capitalize align-top"
                        >
                          {day}
                        </td>
                      )}
                      <td className="py-2 px-4 border border-gray-300 text-gray-900">
                        {item.time}
                      </td>
                      <td className="py-2 px-4 border border-gray-300 text-gray-900">
                        {item.subject}
                      </td>
                      <td className="py-2 px-4 border border-gray-300 text-gray-900">
                        {item.section || "-"}
                      </td>
                      <td className="py-2 px-4 border border-gray-300 text-gray-900">
                        {item.room || "-"}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr key={day} className="bg-white">
                    <td className="py-2 px-4 border border-gray-300 text-gray-900 capitalize">
                      {day}
                    </td>
                    <td
                      colSpan="4"
                      className="py-2 px-4 border border-gray-300 text-gray-600 italic"
                    >
                      No classes scheduled
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      ) : schedule.find(
          (s) => s.semesterName === activeSemesterName && s.image
        ) ? (
        <div className="flex flex-col items-center">
          <h2 className="text-lg font-semibold text-red-800 mb-3 text-center">
            Schedule for {activeSemesterName}
          </h2>
          <img
            src={
              schedule.find((s) => s.semesterName === activeSemesterName).image
            }
            alt={`Faculty Schedule ${activeSemesterName}`}
            className="rounded shadow max-w-full"
          />
        </div>
      ) : (
        <p className="text-gray-600">
          No schedule details available for this semester.
        </p>
      )}
    </div>
  );
}

export default FacultySchedule;
