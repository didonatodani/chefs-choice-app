import gitHubIcon from "../../assets/github-icon.svg";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
        <small>By Nigel Ferreres & Dani Di Donato</small>
      <a href="https://github.com/didonatodani/chefs-choice-app" target="_blank">
        <img src={gitHubIcon} alt="Git Hug icon" />
      </a>
    </footer>
  );
}

export default Footer;
