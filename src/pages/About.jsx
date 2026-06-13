import "../assets/About.css";
export default function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img src="/public/images/portfolio-img2.jpg" alt="Profile" />
        </div>

        <div className="about-content">
          <h2 className="gradient-title">About Me</h2>

          <p>
            I’m a builder at heart — part developer, part storyteller, part
            experimenter in the digital world. I focus on turning ideas into
            real products using modern web technologies like HTML, CSS,
            JavaScript, and React, while constantly sharpening my skills through
            hands-on projects instead of theory. Alongside coding, I work in
            journalism and content creation, where I explore powerful stories,
            human experiences, and untold perspectives. I also run creative
            media projects that blend storytelling, motivation, and real-world
            insight into engaging digital content. Right now, I’m in my “from
            zero to real impact” phase — building skills, building audience, and
            building systems that can eventually generate real income online. My
            work lives at the intersection of tech, media, and creativity. I
            don’t just learn tools — I use them to ship things, tell stories,
            and create momentum.
          </p>

          <h3 className="gradient-title">Skills</h3>

          <div className="skills-grid">
            <div className="skill-card">
              <img src="/public/images/Html.svg.jpg" alt="HTML" />
              <span>HTML</span>
            </div>

            
            <div className="skill-card">
              <img src="/public/images/Css.svg.jpg" alt="CSS" />
              <span>CSS</span>
            </div>


          
            <div className="skill-card">
              <img src="/public/images/Javascript.svg.jpg" alt="JavaScript" />
              <span>JavaScript</span>
            </div>

            <div className="skill-card">
              <img src="/public/images/React.svg.jpg" alt="React" />
              <span>React</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
