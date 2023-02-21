import React from 'react';
import { Link, useLocation } from 'react-router-dom';
// import { TfiAngleLeft } from 'react-icons/tfi';
import { FaAngleLeft } from 'react-icons/fa';

const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <nav className="navbar">
      {
        pathname === "/reset" ?
        <Link to="/login" className="link reset">
          {/* <TfiAngleLeft className="icon" /> */}
          <FaAngleLeft className="icon" />
          <span>Sign in</span>
        </Link> 
        :
        <div className="navbar__right">  
          <Link to="/" className={`${pathname === "/" ? "link register active" : "link register"}`}>Register</Link>
          <Link to="/login" className={`${pathname === "/login" ? "link login active" : "link login"}`}>Sign in</Link>
        </div>
      }
    </nav>
  )
}

export default Navbar;