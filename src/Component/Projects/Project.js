import React, { Component } from "react";
import "./Project.scss";
import { FaSortAmountDownAlt, FaAdn, FaRobot } from "react-icons/fa";
import { TiWeatherDownpour } from "react-icons/ti";
class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="project">
        <div className="project-head">
          <h1>Projects</h1>
        </div>
        <div className="project-main">
          <div className="One">
            <li>
              <div className="backed">
                <h1>www.shivam-sr.com</h1>
                <h2>MM/YY -MM/YY</h2>
              </div>
              <h1>Project Name</h1>
              <p>Project Brief</p>
              <h3>
                <TiWeatherDownpour size={"5rem"} color="red" />
              </h3>
            </li>
          </div>
          <div className="Two">
            <li className="two1">
              <div className="backed">
                <h1>www.shivam-sr.com</h1>
                <h2>MM/YY -MM/YY</h2>
              </div>{" "}
              <h1>Project Name</h1>
              <p>Project Brief</p>
              <h3>
                <FaSortAmountDownAlt size={"5rem"} color="blue" />
              </h3>
            </li>
            <li className="two2">
              <div className="backed">
                <h1>www.shivam-sr.com</h1>
                <h2>MM/YY -MM/YY</h2>
              </div>{" "}
              <h1>Project Name</h1>
              <p>Project Brief</p>
              <h3>
                <FaAdn size={"5rem"} color="peru" />
              </h3>
            </li>
          </div>
          <div className="Three">
            <li>
              <div className="backed">
                <h1>www.shivam-sr.com</h1>
                <h2>MM/YY -MM/YY</h2>
              </div>{" "}
              <h1>Project Name</h1>
              <p>Project Brief</p>
              <h3>
                <FaRobot size={"5rem"} color="4caf50" />
              </h3>
            </li>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
