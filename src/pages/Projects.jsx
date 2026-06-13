import "../assets/Projects.css";
import { useState } from "react";
import { projects } from "../data/projects";

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const filtered = projects.filter((p) =>
    filter === "all"
      ? true
      : p.tech.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <section className="page">
      <h2>My Projects</h2>

      <div className="filters">
        <button onClick={() => setFilter("all")}>All</button>

        <button onClick={() => setFilter("React")}>
          React
        </button>

        <button onClick={() => setFilter("JavaScript")}>
          JavaScript
        </button>

        <button onClick={() => setFilter("HTML")}>
          HTML/CSS
        </button>
      </div>

      <div className="grid">
        {filtered.map((p) => (
          <div key={p.id} className="card">

           
            <img
              src={p.image}
              alt={p.title}
              className="project-image"
            />

            <div className="card-content">

              
              <h3>{p.title}</h3>

              
              <p>{p.desc}</p>

              
              <p className="tech-text">
                <strong>Tech:</strong> {p.tech}
              </p>

              
              <div className="logos">
                {p.logos?.map((logo, index) => (
                  <img
                    key={index}
                    src={logo}
                    alt="tech"
                    className="tech-logo"
                  />
                ))}
              </div>

              
              <span className="score">
                {p.score}
              </span>

              
              <div className="buttons">

                <a
                  href={p.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="demo-btn"
                >
                  Live Demo
                </a>

                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="github-btn"
                >
                  GitHub
                </a>

              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}