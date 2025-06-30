import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProjectData from "./../../data/ProjectData";
import "./projects.css";

// ეს კომპონენტი აჩვენებს ქარდებს
const Projects = ({ data }) => {
  return (
    <section className="section">
      <h2 className="projects-title">ჩვენი პროექტები</h2>
      <div className="projects-grid">
        {data.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.background} alt={project.title} className="project-img" />
            <h3 className="project-title">{project.title}</h3>
            <Link to={`/projects/${project.id}`} className="project-link">ვრცლად</Link>
          </div>
        ))}
      </div>
    </section>
  );
};

// ეს არის მთავარი გვერდი, რომელიც იყენებს ფილტრს და ქარდებს
const ProjectsPage = () => {
  const [filtered, setFiltered] = useState(ProjectData);
  const [city, setCity] = useState("");
  const [rooms, setRooms] = useState("");
  const [minArea, setMinArea] = useState("");
  const [maxArea, setMaxArea] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sold, setSold] = useState("everything");

  const cityList = [...new Set(ProjectData.map((item) => item.city))];

  const handleFilter = () => {
    let result = ProjectData;

    if (city) {
      result = result.filter((item) => item.city === city);
    }

    if (minArea || maxArea) {
      const min = minArea ? Number(minArea) : 0;
      const max = maxArea ? Number(maxArea) : Infinity;
      result = result.filter((item) => item.area >= min && item.area <= max);
    }

    if (minPrice || maxPrice) {
      const min = minPrice ? Number(minPrice) : 0;
      const max = maxPrice ? Number(maxPrice) : Infinity;
      result = result.filter(
        (item) => item.price.perMonth >= min && item.price.perMonth <= max
      );
    }

    if (rooms && rooms !== "everything") {
      result = result.filter((item) =>
        rooms === "4+" ? item.rooms >= 4 : item.rooms === Number(rooms)
      );
    }

    if (sold !== "everything") {
      result = result.filter((item) =>
        sold === "sold" ? item.sold : !item.sold
      );
    }

    setFiltered(result);
  };

  return (
    <>
      <div className="searchContainer">
        <div className="title">Apartments Best Search</div>
        <div className="searches">
          <select value={city} onChange={(e) => setCity(e.target.value)} className="search locationSearch">
            <option value="">Every City</option>
            {cityList.map((c, i) => (
              <option key={i} value={c}>{c}</option>
            ))}
          </select>

          <select value={rooms} onChange={(e) => setRooms(e.target.value)} className="search roomSearch">
            <option value="everything">Every Room</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4+">4+</option>
          </select>

          <div className="areaSearches">
            <input value={minArea} onChange={(e) => setMinArea(e.target.value)} className="search araeSearch" placeholder="min-area" />
            <input value={maxArea} onChange={(e) => setMaxArea(e.target.value)} className="search araeSearch" placeholder="max-area" />
          </div>

          <div className="priceSearches">
            <input value={minPrice} onChange={(e) => setMinPrice(e.target.value)} className="search priceSearch" placeholder="min-price" />
            <input value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} className="search priceSearch" placeholder="max-price" />
          </div>

          <select value={sold} onChange={(e) => setSold(e.target.value)} className="search soldSearch">
            <option value="everything">Everything</option>
            <option value="sold">Sold</option>
            <option value="available">Available</option>
          </select>
        </div>

        <button onClick={handleFilter} className="btn">Filter</button>
      </div>

      {/* ვაჩვენებთ გაფილტრულ პროექტებს */}
      <Projects data={filtered} />
    </>
  );
};

// ✅ მხოლოდ ეს გავაქვს გარეთ გაშვებული (default export)
export default ProjectsPage;
