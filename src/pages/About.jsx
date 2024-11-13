import "./About.css";
import profileNigel from "../assets/Nigel-profile-img.png";
import profileDani from "../assets/dani.jpg";

function About() {
  return (
    <div className="about-container">
      <h2>Project Team</h2>
      <div className="container-responsive">
        <article className="about-member dani">
          <img id="profile-dani" src={profileDani} alt="Profile img" />
          <h3>Dani</h3>
          <p>
            With a background in teaching English as a second language, I have
            honed my communication skills and developed a deep understanding of
            language learning processes. Now diving into Web Development, I am
            combining my passion for technology with a very creative eye. 
          </p>{" "}
        </article>

        <hr />

        <article className="about-member nigel">
          <img id="profile-nigel" src={profileNigel} alt="Profile img" />
          <h3>Nigel</h3>
          <p>
            With a background in History and a Masters in Digital Humanities, I
            bring the past into the future through technology. My background
            includes a deep dive into 3D animation and interactive design, and
            now, as a future web developer at Ironhack, I combine creativity
            with coding to shape the digital world.
          </p>
        </article>
      </div>
    </div>
  );
}

export default About;
