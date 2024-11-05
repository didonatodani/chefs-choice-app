import logoImg from "../../assets/logo-chef.png";
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar-container">
      <img id="logo" src={logoImg} alt="logo image" />
      <nav>
        <h1>Chef's Choice</h1>
      </nav>
    </div>
  );
}
export default Navbar;
