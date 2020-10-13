import React, { Component } from "react";
import "./Navbar.scss";
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="navbar">
        <li>
          <p>About</p>
        </li>
        <li>
          <p>Project</p>
        </li>
        <li>
          <p>Connect</p>
        </li>
        <li>
          <p>Resume</p>
        </li>
      </div>
    );
  }
}

export default Navbar;
