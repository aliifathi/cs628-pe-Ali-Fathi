import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { CityContext } from "./CityContext";

const CityDetails = () => {
  const { id } = useParams();
  const { cities } = useContext(CityContext);
  const city = cities.find((c) => c.id === parseInt(id));

  if (!city) return <p>City not found.</p>;

  return (
    <div className="city-details">
      <h2>{city.name}</h2>
      <p><strong>Country:</strong> {city.country}</p>
      <p><strong>Population:</strong> {city.population.toLocaleString()}</p>
      <p><strong>Description:</strong> {city.description}</p>
      <Link to="/cities" className="link">Back to Cities List</Link>
    </div>
  );
};

export default CityDetails;
