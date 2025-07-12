import React  from "react";
import { useNavigate } from "react-router-dom";

import "./header.css"; // Assuming you have a CSS file for styling
import bgn from "./assets/bgn.jpg"; // Importing background image
function Header() {
  const navigate = useNavigate();

  return (
    <header>
      <div className="header-container">
        <div className="header-content">
            <h1>NETFLIX</h1>
            <button>Sign Out</button>
      </div>
      <div className="content">
        <p>Unlimited movies, TV  shows and more</p>
        <p>Starts at ₹149. Cancel at any time.</p>
        <button onClick={() => navigate("/auth")}>Finish Sign-Up Now</button>
      </div>
      </div>
    </header>
  );
}

export default Header;
