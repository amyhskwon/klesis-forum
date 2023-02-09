import React from "react";
import { NavLink } from "react-router-dom";
import { klesislogo } from "../styles/klesislogo.png";

function NavBar({ user, setUser }) {
  function handleLogout() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  if (!user)
    return (
      <nav>
        <NavLink exact to="/" className="logo">
          <img
            src="../styles/klesislogo.png"
            alt="logo"
            width={98}
            height={93}
          />
        </NavLink>
        <NavLink exact to="/about">
          About
        </NavLink>
        <NavLink exact to="/interest_groups">
          Interest Groups
        </NavLink>
        <NavLink exact to="/events">
          Events
        </NavLink>
        <NavLink exact to="/contact">
          Contact Us
        </NavLink>
        <NavLink exact to="/login">
          Login/Signup
        </NavLink>
      </nav>
    );

  return (
    <nav>
      <NavLink exact to="/" className="logo">
        <img src="../styles/klesislogo.png" alt="logo" width={98} height={93} />
      </NavLink>
      <NavLink exact to="/about">
        About
      </NavLink>
      <NavLink exact to="/interest_groups">
        Interest Groups
      </NavLink>
      <NavLink exact to="/events">
        Events
      </NavLink>
      <NavLink exact to="/contact">
        Contact Us
      </NavLink>
      <NavLink onClick={handleLogout} exact to="/logout">
        Logout
      </NavLink>
    </nav>
  );
}

export default NavBar;
