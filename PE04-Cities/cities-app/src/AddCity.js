import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CityContext } from "./CityContext";

const AddCity = () => {
  const [city, setCity] = useState({ name: "", country: "", population: "", description: "" });
  const { addCity } = useContext(CityContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCity({ ...city, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addCity({ ...city, population: parseInt(city.population) });
    navigate("/cities");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Add a New City</h2>
      {["name", "country", "population", "description"].map((field) => (
        <div key={field} className="form-group">
          <label>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
          <input
            type={field === "population" ? "number" : "text"}
            name={field}
            value={city[field]}
            onChange={handleChange}
            required
          />
        </div>
      ))}
      <button type="submit" className="btn">Add City</button>
    </form>
  );
};

export default AddCity;
