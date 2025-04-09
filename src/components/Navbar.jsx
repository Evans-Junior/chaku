// src/components/Navbar.jsx
import chakuLogo from "../assets/chaku-icon.png";

const Navbar = () => {
  return (
    <nav className="navbar">
        
      <div className="navbar-logo">
        <img src={chakuLogo} alt="Chaku Logo" />
        
      </div>
      <div className="navbar-links">
        <a href="#">Home</a>
        <a href="#">How Can We Help</a>
        <a href="#">Contact Us</a>
      </div>
    </nav>
  );
};

export default Navbar;
