import "./About.css";
import profileNigel from "../assets/Nigel-profile-img.png";
import profileDani from "../assets/dani.jpg"

function About() {
  return (
    <div className="about-container">
      <h2>Team</h2>
      <div className="container-responsive">
      <section className="about-team">
        <article className="about-member dani">
          <img id="profile-dani"src={profileDani} alt="Profile img" />
          <h3>Dani</h3>
          <p>Description</p>
        </article>
      </section>
        <hr/>
      <section className="about-team">
        <article className="about-member nigel">
          <img id="profile-nigel" src={profileNigel} alt="Profile img" />
          <h3>Nigel</h3>
          <p>description</p>
        </article>
      </section>
      </div>
    </div>
  );
}

export default About;
