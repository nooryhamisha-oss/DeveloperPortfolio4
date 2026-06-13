import "../assets/Contact.css";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa"
import { useState } from "react"
export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log("Form Data:", form)

    alert("Message sent successfully!")

    setForm({
      name: "",
      email: "",
      message: ""
    })
  }

  return (
    <section className="page contact">
      <h2>Contact Me</h2>
      <p className="subtitle">
        Open for internships, freelance work, and collaborations.
      </p>

      {/* Contact Cards */}
       <div className="contact-cards">
  <a className="contact-card" href="mailto:nooryhamisha@gmail.com">
    <FaEnvelope className="icon" />
    Email
  </a>

  <a
    className="contact-card"
    href="https://github.com/nooryhamisha-oss"
    target="_blank"
    rel="noreferrer"
  >
    <FaGithub className="icon" />
    GitHub Profile
  </a>

  <a
    className="contact-card"
    href="https://www.linkedin.com/in/hamisha-noori-47149b396"
    target="_blank"
    rel="noreferrer"
  >
    <FaLinkedin className="icon" />
    LinkedIn Profile
    </a>
    </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Write your message..."
            rows="5"
            required
          />
        </div>

        <button type="submit" className="btn">
          Send Message
        </button>
      </form>
    </section>
  )
}