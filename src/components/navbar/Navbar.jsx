import logoImg from "../../assets/logo-chef.png";
import './Navbar.css';
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <div className="navbar-container">
      <img id="logo" src={logoImg} alt="logo image" />
      <nav>
        <Link to="/">
        <h1>Chef's Choice</h1>
        </Link>
      </nav>
    </div>
  );
}
export default Navbar;
