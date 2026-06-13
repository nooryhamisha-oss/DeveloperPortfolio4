export default function ProjectCard({ project }) {
  return (
    <div className="card" role="article">
      <h3>{project.title}</h3>

      <p>{project.desc}</p>

      <div className="tags">
        <span className="badge">{project.tech}</span>
      </div>
    </div>
  )
}