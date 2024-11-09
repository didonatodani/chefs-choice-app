import "./About.css"
import profileNigel from "../assets/Nigel-profile-img.png"

function About() {
  return (
    <div className="about-container">
      <section className="about-title">
      <h2>Team</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ea
        quibusdam maxime eveniet vel corporis aperiam, illum, iusto aliquid
        doloremque blanditiis mollitia ex eos velit perspiciatis incidunt
        voluptatibus. Dolor, ex!
      </p>
      <hr></hr>
      </section>
      <section className="about-team">
        <article className="about-member dani">
          <img src="" alt="Profile img" />
          <h3>Dani</h3>
          <p>Description</p>
        </article>
        <article className="about-member nigel">
          <img  id="profile-nigel" src={profileNigel} alt="Profile img" />
          <h3>Nigel</h3>
          <p>description</p>
        </article>
      </section>
    </div>
  );
}

export default About;
