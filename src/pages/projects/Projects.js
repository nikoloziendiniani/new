import { Link } from "react-router-dom";

import ProjectData from './../../data/ProjectData'

import "./projects.css"


export const Projects = () => {
  return (
    <section className="section">
      <h2 className="projects-title">ჩვენი პროექტები</h2>
      <div className="projects-grid">
        {ProjectData.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.background} alt={project.title} className="project-img" />
            <h3 className="project-title">{project.title}</h3>
            <Link to={`/projects/${project.id}`} className="project-link">ვრცლად</Link>
          </div>
        ))}
      </div>
    </section>
  );
}
