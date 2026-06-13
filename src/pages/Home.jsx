import "../assets/Home.css"
import { Link } from "react-router-dom"
export default function Home() {
  return (
    <section className="hero">
      <h1 >
             I don’t just write code I design ideas with purpose and turn them into real web experiences.
      </h1>
      <p>  I build modern, responsive web applications using React with a focus on simplicity, performance, and user experience. My work is driven by creativity, purpose, and a strong desire to turn ideas into meaningful digital products. </p>

      <div>
        <Link className="btn" to="/projects">View Projects</Link>
        <Link className="btn secondary" to="/contact">Let’s Connect</Link>
      </div>
    </section>
  )
}