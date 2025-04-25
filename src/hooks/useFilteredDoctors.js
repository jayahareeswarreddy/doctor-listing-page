import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import queryString from "query-string";
import { applyFilters } from "../utils/filters";

const useFilteredDoctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const fetchDoctors = async () => {
      const res = await fetch("https://srijandubey.github.io/campus-api-mock/SRM-C1-25.json");
      const data = await res.json();
      setDoctors(data);
    };
    fetchDoctors();
  }, []);

  useEffect(() => {
    const filters = queryString.parse(window.location.search, { arrayFormat: "comma" });
    const result = applyFilters(doctors, filters);
    setFilteredDoctors(result);
  }, [doctors, searchParams]);

  return { doctors, filteredDoctors };
};

export default useFilteredDoctors;