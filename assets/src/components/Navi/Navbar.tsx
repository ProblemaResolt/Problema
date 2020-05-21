import * as React from "react";
import { slide as Menu } from "react-burger-menu";
import { NavLink } from "react-router-dom";
import "../../styles/Navbar.scss";
const isMenuOpen = function(state:any) {
  return state.isOpen;
};


class Navbar extends React.Component {
  showSettings (event:any) {
    event.preventDefault();
  }
  render() {
    return (
      <Menu
        onStateChange={isMenuOpen}
      >
        <ul>
          <li>
            <NavLink className="button" to="/official/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="button"
              to="/official/About"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className="button"
              to="/official/Career"
            >
              Career
            </NavLink>
          </li>
        </ul>
      </Menu>
    );
  }
}

export default Navbar;