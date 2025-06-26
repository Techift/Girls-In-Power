import React, { useState } from "react";
import { Menu, X } from "react-feather";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // function move(to){
  //   Navigate(`/${to}`);
  //   setIsOpen(false)
  // }
  return (
    <>
      <div className="main_header">
        <div className="header">
          <div className="logo">
            <Link
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
              style={{ textDecoration: "none" }}
            >
              <h2
                style={{
                  color: "white",
                  margin: "0",
                  fontSize: "2.5rem",
                  position: "relative",
                  zIndex: "1001",
                  marginBottom: "0",
                }}
              >
                <img
                  src="/img/girlslogo.png"
                  alt="girls logo"
                  style={{ width: "150px", height: "150px" }}
                />
              </h2>
            </Link>
          </div>
          <div className={`navlinks ${isOpen ? "open" : ""}`}>
            <ul className="UL">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  About
                  {/* <button onClick={Navigate(/about)}>About</button>  */}
                </NavLink>
              </li>
              <li>
                {/* <button
                    // to="/initiatives"
                    // onClick={move("/initiatives")}
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    Initiatives
                  </button> */}

                <NavLink
                  to="/initiatives"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Initiatives
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Contact
                </NavLink>{" "}
              </li>
            </ul>
          </div>

          <div className="donate_now">
            <Link
              to="/donatepage"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <button>Donate Now</button>
            </Link>
          </div>
          <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <X size={30} color="white" />
            ) : (
              <Menu size={30} color="rgb(241, 6, 84)" />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export default Header;
