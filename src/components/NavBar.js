/*import { NavLink} from "react-router-dom";
import "./NavBar.css";

function NavBar() {

  return (
    <nav>
      <NavLink
        to="/"
        className="nav-link" 
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className="nav-link"
      >
        About
      </NavLink>
    </nav>
  );
}

export default NavBar;*/

// NavBar.js
import { NavLink } from "react-router-dom";
import "./NavBar.css";
function NavBar({ logout }) {
  return (
    <nav>
      <NavLink to="/" className="nav-link">
        Home
      </NavLink>
      <NavLink to="/about" className="nav-link">
        About
      </NavLink>
      <NavLink to="/" exact>
        Home
      </NavLink>
      <NavLink to="/about">About</NavLink>
      <button onClick={logout}>Logout</button>
    </nav>
  );
}

export default NavBar;
