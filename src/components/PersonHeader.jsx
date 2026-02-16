import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "/diploma/cvsu.ico";

function PersonHeader() {
  const navigate = useNavigate();

  return (
    <nav className="bg-red-900  items-center px-4 text-amber-50 py-4 shadow-md font-funnel ">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex item-center mr-20">
          <img
            src={Logo}
            alt=""
            className="pr-5 object-contain"
            width="60"
            height="60"
          />
          <h2
            className="text-amber-50 font-bold text-xl shover:scale-105 cursor-pointer"
            onClick={() => navigate("/")}
          >
            Department of Computer Studies <br />
            <span className="text-amber-400 text-base">
              Cavite State University - Bacoor City Campus
            </span>
          </h2>
        </div>

        <button
          onClick={() => navigate("/")}
          className="bg-white text-red-900 px-4 py-2 rounded font-medium hover:scale-105 cursor-pointer transition mr-5"
        >
          Home
        </button>
      </div>
    </nav>
  );
}

export default PersonHeader;
