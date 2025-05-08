import React, { useState, useEffect } from "react"
import "../Style/Navbar.css";
import { Link, useLocation } from "react-router-dom";
import { AllImages } from "../assets/Exports/Images.ts";
// * FUNCTIONS
import getCurrentLocation from "../Functions/GetCurrentLocation.ts";

function Navbar(): React.ReactElement {
  const [isHome, setIsHome] = useState<boolean>(getCurrentLocation("/"));
  const location = useLocation();

  useEffect(() => {
    setIsHome(getCurrentLocation(location.pathname));
  }, [location]);

  return (
    <nav className={`${isHome ? "navbar_home" : "navbar"} navbar_animation desktop-width flex align-center justify-between padding-main text-light`}>
      <div className="navbar_background bg-[linear-gradient(to_right,var(--color-lilac),var(--color-mint))] border-main"></div>
        <h2 className="font-bold text-xl">TechnoLife</h2>
        <div className="links_container flex align-center justify-between gap-3 text-md">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
        <div className="navbar_right flex align-center">
          <Link to="/login">Login</Link>
          <Link to="/cart"><img src={AllImages.Cart} alt="Cart" width={30} /></Link>
        </div>
    </nav>
  )
}

export default Navbar;