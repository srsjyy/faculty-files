// MODIFICATION: Imported the `useMemo` hook from React.
import React, { useState, useEffect, useMemo } from "react";
import PersonList from "./PersonList";
import { people } from "../data";
import { X, Search } from "lucide-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function PersonCard() {
  const [currentPage, setCurrentPage] = useState(1);

  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 300);
    return () => clearTimeout(timer);
  }, [search]);

  // --- THE FIX IS HERE ---
  // MODIFICATION: The filtering logic is now wrapped in a `useMemo` hook.
  // This means `filteredPeople` will only be recalculated when `debouncedSearch` changes.
  // On other re-renders (like a pagination click), it will return the same, memoized array.
  const filteredPeople = useMemo(() => {
    return people.filter((person) =>
      person.name.toLowerCase().includes(debouncedSearch.toLowerCase())
    );
  }, [debouncedSearch]); // The dependency array for useMemo.

  // MODIFICATION: This useEffect hook will now ONLY fire when a search happens,
  // because `filteredPeople` is no longer a new array on every render.
  useEffect(() => {
    setCurrentPage(1);
  }, [filteredPeople]);

  // ... (The rest of the component logic remains the same)
  const totalPages =
    filteredPeople.length <= 4
      ? 1
      : 1 + Math.ceil((filteredPeople.length - 4) / 8);

  const getCurrentData = () => {
    if (currentPage === 1) {
      return filteredPeople.slice(0, 4);
    } else {
      const startIndex = 4 + (currentPage - 2) * 8;
      return filteredPeople.slice(startIndex, startIndex + 8);
    }
  };

  const currentData = getCurrentData();

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="font-funnel mx-4">
      <h2 className="flex flex-row justify-between items-center bg-amber-50 p-4 text-3xl font-semibold border-l-8 border-red-900 mt-5 shadow-lg shadow-black rounded mb-10 text-red-900">
        Members of the Department
        <div className="w-1/4 relative">
          <input
            type="text"
            className="pl-10 pr-10 py-2 border rounded-full text-amber-400 w-full outline-none bg-red-900 text-base font-normal shadow-md"
            placeholder="Search by name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-amber-400"
            size={18}
          />
          {search && (
            <button
              type="button"
              onClick={() => setSearch("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-amber-400"
              title="Clear"
            >
              <X size={18} />
            </button>
          )}
        </div>
      </h2>

      {filteredPeople.length === 0 ? (
        <p className="text-center text-gray-500 text-lg font-medium py-10">
          No matching records found.
        </p>
      ) : (
        <>
          <PersonList data={currentData} />

          <div className="flex justify-center gap-2 mt-8">
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-2 bg-amber-50 text-black rounded hover:bg-red-900 disabled:opacity-50"
              aria-label="Previous Page"
            >
              <ChevronLeft size={20} />
            </button>
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => goToPage(index + 1)}
                className={`px-4 py-2 rounded ${
                  currentPage === index + 1
                    ? "bg-red-900 text-white"
                    : "bg-amber-50 hover:bg-gray-300"
                }`}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-2 bg-amber-50 text-black rounded hover:bg-red-900 disabled:opacity-50"
              aria-label="Next Page"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default PersonCard;
