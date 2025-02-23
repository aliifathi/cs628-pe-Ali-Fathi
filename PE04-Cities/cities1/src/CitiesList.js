import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CityContext } from "./CityContext";

const CitiesList = () => {
  const { cities } = useContext(CityContext);

  return (
    <div>
      <h2>Cities List</h2>
      <Link to="/add-city" className="link">Add a New City</Link>
      <ul className="city-list">
        {cities.map((city) => (
          <li key={city.id} className="city-item">
            <Link to={`/cities/${city.id}`} className="city-link">
              {city.name} - {city.country}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CitiesList;
