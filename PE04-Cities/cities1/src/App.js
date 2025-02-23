import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { CityProvider } from "./CityContext";
import CitiesList from "./CitiesList";
import AddCity from "./AddCity";
import CityDetails from "./CityDetails";
import "./App.css";

function App() {
  return (
    <CityProvider>
      <Router>
        <div className="container">
          <h1>Cities App</h1>
          <Routes>
            <Route path="/" element={<Navigate to="/cities" />} />
            <Route path="/cities" element={<CitiesList />} />
            <Route path="/add-city" element={<AddCity />} />
            <Route path="/cities/:id" element={<CityDetails />} />
          </Routes>
        </div>
      </Router>
    </CityProvider>
  );
}

export default App;
