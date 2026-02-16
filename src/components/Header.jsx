import React, { useState, useEffect } from "react";

import PersonCard from "./PersonCard";
import { people } from "../data";
import Footer from "./widgets/Footer";
import Navigation from "./DashboardComponents/Navigation";

function Header() {
  const [search] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 300);
    return () => clearTimeout(timer);
  }, [search]);

  const filteredPeople = people.filter((person) =>
    person.name.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen  font-funnel">
      <Navigation className="top-0 z-50" />

      <PersonCard data={filteredPeople} />
      <Footer textColor={"text-white"} spanColor={"text-red-900"} />
    </div>
  );
}

export default Header;
