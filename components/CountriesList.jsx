import React, { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import CountriesListShimmer from "./CountriesListShimmer";

export default function CountriesList({ query }) {
  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    fetch(
      "https://restcountries.com/v3.1/all?fields=name,population,flags,region,capital"
    )
      .then((res) => res.json())
      .then((data) => {
        setCountriesData(data);
      });
  }, []);

  if (!countriesData.length) {
    return <CountriesListShimmer />;
  }

  const filteredCountries = countriesData.filter((country) => {
    const name = country.name?.common?.toLowerCase() || "";
    const region = country.region?.toLowerCase() || "";
    const queryLower = query?.toLowerCase().trim() || "";

    if (!queryLower) return true;

    return name.includes(queryLower) || region.includes(queryLower);
  });

  return (
    <div className="countries-container">
      {filteredCountries.map((country) => (
        <CountryCard
          key={country.name.common}
          name={country.name.common}
          flag={country.flags?.svg}
          population={country.population}
          region={country.region || "N/A"}
          Capital={country.capital?.[0] || "N/A"}
          data={country}
        />
      ))}
    </div>
  );
}
