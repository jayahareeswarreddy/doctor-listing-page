import React from "react";
import { useNavigate } from "react-router-dom";
import queryString from "query-string";

const FilterPanel = () => {
  const navigate = useNavigate();
  const filters = queryString.parse(window.location.search, {
    arrayFormat: "comma",
  });

  const updateFilters = (key, value, multi = false) => {
    let current = { ...filters };

    if (multi) {
      const existing = current[key] ? [].concat(current[key]) : [];
      current[key] = existing.includes(value)
        ? existing.filter((v) => v !== value)
        : [...existing, value];
    } else {
      current[key] = value;
    }

    const query = queryString.stringify(current, { arrayFormat: "comma" });
    navigate(`/?${query}`);
  };

  const specialties = [
    "General Physician",
    "Dentist",
    "Dermatologist",
    "Paediatrician",
    "Gynaecologist",
    "ENT",
    "Diabetologist",
    "Cardiologist",
    "Physiotherapist",
    "Endocrinologist",
    "Orthopaedic",
    "Ophthalmologist",
    "Gastroenterologist",
    "Pulmonologist",
    "Psychiatrist",
    "Urologist",
    "Dietitian/Nutritionist",
    "Psychologist",
    "Sexologist",
    "Nephrologist",
    "Neurologist",
    "Oncologist",
    "Ayurveda",
    "Homeopath",
  ];

  return (
    <div className="border p-4 rounded shadow bg-white">
      {/* Consultation Mode */}
      <h3 data-testid="filter-header-moc" className="font-bold mb-2">
        Consultation Mode
      </h3>
      <label>
        <input
          type="radio"
          name="moc"
          data-testid="filter-in-clinic"
          onChange={() => updateFilters("moc", "in-clinic")}
        />
        In-Clinic
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="moc"
          data-testid="filter-video-consult"
          onChange={() => updateFilters("moc", "video")}
        />
        Video Consult
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="moc"
          data-testid="filter-chat"
          onChange={() => updateFilters("moc", "chat")}
        />
        Chat
      </label>

      {/* Speciality Filters */}
      <h3 data-testid="filter-header-speciality" className="font-bold mt-4 mb-2">
        Speciality
      </h3>
      {specialties.map((spec) => (
        <div key={spec}>
          <label>
            <input
              type="checkbox"
              data-testid={`filter-specialty-${spec.replace(/\//g, "-").replace(/\s+/g, "-")}`}
              onChange={() => updateFilters("speciality", spec, true)}
            />
            {spec}
          </label>
        </div>
      ))}

      {/* Sort Options */}
      <h3 data-testid="filter-header-sort" className="font-bold mt-4 mb-2">
        Sort By
      </h3>
      <label>
        <input
          type="radio"
          name="sort"
          data-testid="sort-fees"
          onChange={() => updateFilters("sort", "low-to-high")}
        />
        Fee: Low to High
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="sort"
          data-testid="sort-experience"
          onChange={() => updateFilters("sort", "experience-desc")}
        />
        Experience: High to Low
      </label>
    </div>
  );
};

export default FilterPanel;
