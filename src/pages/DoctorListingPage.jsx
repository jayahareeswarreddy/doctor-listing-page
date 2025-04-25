// src/pages/DoctorListPage.jsx
import React from "react";
import AutocompleteSearch from "../components/AutocompleteSearch";
import FilterPanel from "../components/FilterPanel";
import DoctorCard from "../components/DoctorCard";
import useFilteredDoctors from "../hooks/useFilteredDoctors";

const DoctorListPage = () => {
  const { doctors, filteredDoctors } = useFilteredDoctors();
  console.log(filteredDoctors);
  return (
    <div className="p-4">
      <AutocompleteSearch doctors={doctors} />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
        <FilterPanel />
        <div className="md:col-span-3 grid gap-4">
          {filteredDoctors.map((doc, idx) => (
            <DoctorCard key={idx} doctor={doc} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoctorListPage;
