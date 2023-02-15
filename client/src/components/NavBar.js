import React from "react";
import { NavLink } from "react-router-dom";
// import { useHistory } from "react-router-dom";

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
            src="http://static1.squarespace.com/static/5b65df1fee1759e688f65d75/t/5d4a0b6253ed6c0001341b9a/1565133670213/Klesis+logo-01.png?format=1500w"
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
        <img
          src="http://static1.squarespace.com/static/5b65df1fee1759e688f65d75/t/5d4a0b6253ed6c0001341b9a/1565133670213/Klesis+logo-01.png?format=1500w"
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
      <NavLink exact to="/profile">
        My Profile
      </NavLink>
      <NavLink onClick={handleLogout} exact to="/logout">
        Logout
      </NavLink>
    </nav>
  );
}

export default NavBar;
