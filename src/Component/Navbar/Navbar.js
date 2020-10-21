import React, { Component } from "react";
import { Link } from "react-router-dom";
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
          <Link to="https://www.shivam-sr.com">
            <p>About</p>
          </Link>
        </li>
        <li>
          <Link to="https://github.com/shivam-srivastav">
            <p>Project</p>
          </Link>
        </li>
        <li>
          <Link to="https://www.linkedin.com/in/shivam1534/">
            <p>Connect</p>
          </Link>
        </li>
        <li>
          <Link to="/File/Experience.pdf" target="_blank" download>
            <p>Resume</p>
          </Link>
        </li>
      </div>
    );
  }
}

export default Navbar;
