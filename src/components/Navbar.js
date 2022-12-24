import React from "react";
import { Link, NavLink } from "react-router-dom";
import { ImCross } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";
import "../styles/Navbar.css";

function Navbar ({ clicked, isClicked }) {
    const handleClicked = () => {
      isClicked(!clicked);
    };

    return (
      <div className="Nav">
        <ul className="NavbarWrapper">
          <li className="NavLogo">

            <Link style={{ textDecoration: "none", color: "white" }} to="/">
              Cookery
            </Link>
          </li>

          <li className="NavElements">
            <NavLink className="Link" to="/Search">
              Search
            </NavLink>
          </li>

          <li className="NavElements">
            <NavLink className="Link" to="/ShoppingList">
              Shopping List
            </NavLink>
          </li>

          <li className="NavElements">
            <NavLink className="Link" to="/CreateMenu">
              Create List
            </NavLink>
          </li>
        </ul>

        {!clicked ? (
          <GiHamburgerMenu onClick={handleClicked} className="Icon" />
          ) : (
        <ImCross onClick={handleClicked} className="Icon" />
      )}
    </div>
  );
}
export default Navbar;