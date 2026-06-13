import "../assets/Navbar.css"
import { Link } from "react-router-dom"
import { useState } from "react"
import { useTheme } from "../context/ThemeContext"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { toggleTheme } = useTheme()

  return (
    <nav className="navbar" aria-label="Main Navigation">
      <h2>HAMISHA NOORI</h2>

      <button
        className="menu-btn"
        aria-label="Toggle Menu"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      <div className={open ? "links open" : "links"}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  )
}