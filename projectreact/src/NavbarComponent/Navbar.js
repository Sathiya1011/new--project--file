import React, { Component } from "react";
import { Menu } from "./Menu";
import "./Navbar.css";

class Navbar extends Component {
  state = {
    clicked: false
  };
  onIconClick = () => {
    this.setState({
      clicked: !this.state.clicked
    });
  };
  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">
        보다   
          <i class="fab fa-react"></i>
        </h1>
        <p>Time'O</p>
        <div className="menu-icon" onClick={this.onIconClick}>
          <i
            className={this.state.clicked ? "fa fa-times" : "fa fa-align-right"}
            aria-hidden="true"
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {Menu.map((item, i) => {
            return (
              <li key={i}>
                <a className={item.className} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;