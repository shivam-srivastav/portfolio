import React, { Component } from "react";
import "./Skills.scss";
import { FaNodeJs, FaCss3Alt, FaReact } from "react-icons/fa/index";
import { DiMongodb } from "react-icons/di/index";
import { SiJavascript, SiVisualstudiocode } from "react-icons/si/index";
import { AiFillHtml5, AiFillGithub } from "react-icons/ai/index";
class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="skills">
        <h1>Skills & Tools</h1>
        <div className="content">
          <li>
            <AiFillHtml5 color="#dd502a" size="4.5rem" />
            <p> HTML5</p>
          </li>
          <li>
            <FaCss3Alt color="#2296f3" size="4.5rem" />
            <p> CSS</p>
          </li>
          <li>
            <div className="js">
              <SiJavascript color="rgb(238, 216, 55)" size="4.5rem" />
            </div>
            <p> JavaScript</p>
          </li>
          <li>
            <FaReact color="#5ed3f3" size="4.5rem" />
            <p> React</p>
          </li>
          <li>
            <FaNodeJs color="rgb(138, 197, 42)" size="4.5rem" />

            <p> Node</p>
          </li>
          <li>
            <DiMongodb color="#4ca343" size="4.5rem" />
            <p> MongoDB</p>
          </li>
          <li>
            <AiFillGithub size="5rem" />
            <p>GitHub</p>
          </li>
          <li>
            <SiVisualstudiocode color="#0275c4" size="4.5rem" />
            <p>VS Code</p>
          </li>
        </div>
      </div>
    );
  }
}

export default Skills;
