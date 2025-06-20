import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
const MainHeader = () => {
  return (
    <header>
      <div>
        {/* Logos */}
        <Link>
          <span className="text-tertiary">
            <span >T</span>
            utorFinder
          </span>
        </Link>

        {/* NavBar */}
        <div>
          <Navbar />
        </div>

        
        {/* Right Side */}
      </div>
    </header>
  );
};

export default MainHeader;
