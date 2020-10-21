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
          <h1>Projects & Work Experience</h1>
        </div>
        <div className="project-main">
          <div className="One">
            <li>
              <div className="backed">
                <a href="https://github.com/shivam-srivastav/weather-app-vanilla-js">
                  Weather App
                </a>
                <h2>4/19 - 5/19</h2>
              </div>
              <h1>Weather App</h1>
              <p>HTML5, CSS, VanillaJS </p>
              <h3>
                <TiWeatherDownpour size={"5rem"} color="red" />
              </h3>
            </li>
          </div>
          <div className="Two">
            <li className="two1">
              <div className="backed">
                <a href="https://reactsorting.netlify.com">React Sorting</a>
                <h2>11/19 -12/19</h2>
              </div>{" "}
              <h1>React Sorting</h1>
              <p>JSX,SCSS,ReactJS,Redux,Webpack</p>
              <p>* 2 Person involved</p>
              <h3>
                <FaSortAmountDownAlt size={"5rem"} color="blue" />
              </h3>
            </li>
            <li className="two2">
              <div className="backed">
                <a href="https://maticfrontend.netlify.com">Maticfrontend</a>

                <h2>09/19 - 10/19</h2>
              </div>{" "}
              <h1>MaticFrontend</h1>
              <p>
                Freelance Project:- JSX,SCSS,ReactJS,
                Node,Docker,WebPack,MongoDB
              </p>
              <p>* 3 Person involved</p>
              <h3>
                <FaAdn size={"5rem"} color="peru" />
              </h3>
            </li>
          </div>
          <div className="Three">
            <li>
              <div className="backed">
                <a href="https://robofriend1.netlify.app/"> RoboFriends</a>
                <h2>05/19 - 06/19</h2>
              </div>{" "}
              <h1>Robofrinds </h1>
              <p>HTML, CSS, JavaScript, ReactJS</p>
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
