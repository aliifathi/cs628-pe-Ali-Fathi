import React, { createContext, useState } from "react";

export const CityContext = createContext();

export const CityProvider = ({ children }) => {
  const [cities, setCities] = useState([
    { id: 1, name: "Paris", country: "France", population: 2148000, description: "City of Light" },
    { id: 2, name: "Tokyo", country: "Japan", population: 13960000, description: "Land of the Rising Sun" },
  ]);

  const addCity = (city) => {
    setCities([...cities, { ...city, id: cities.length + 1 }]);
  };

  return (
    <CityContext.Provider value={{ cities, addCity }}>
      {children}
    </CityContext.Provider>
  );
};
