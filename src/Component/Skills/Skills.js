import React, { Component } from "react";
import "./Skills.scss";
import gitHub from "../../Assets/github_badge.svg";
import node from "../../Assets/nodejs_small.svg";
import react from "../../Assets/react.svg";
import css from "../../Assets/css3.svg";
import html5 from "../../Assets/html5.svg";
import javscript from "../../Assets/javascript.svg";
import mongo from "../../Assets/mongodb.svg";
import vscode from "../../Assets/visualstudiocode.svg";
// import { FaNodeJs } from "react-icons/fa/index";
// import { FaReact } from "react-icons/fa/index";
// import { FaCss3Alt } from "react-icons/fa/index";
// import { DiMongodb } from "react-icons/di/index";
// import { SiJavascript } from "react-icons/si/index";
// import { SiVisualstudiocode } from "react-icons/si/index";
// import { AiFillHtml5 } from "react-icons/ai/index";
// import { AiFillGithub } from "react-icons/ai/index";
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
            {/* <AiFillHtml5 color="#dd502a" size="4.5rem" /> */}

            <img src={html5} alt="github" />
            <p> HTML5</p>
          </li>
          <li>
            {/* <FaCss3Alt color="#2296f3" size="4.5rem" /> */}

            <img src={css} alt="github" />
            <p> CSS</p>
          </li>
          <li>
            <div className="js">
              {/* <SiJavascript color="rgb(238, 216, 55)" size="4.5rem" /> */}

              <img src={javscript} alt="github" />
            </div>
            <p> JavaScript</p>
          </li>
          <li>
            {/* <FaReact color="#5ed3f3" size="4.5rem" /> */}

            <img src={react} alt="github" />
            <p> React</p>
          </li>
          <li>
            {/* <FaNodeJs color="rgb(138, 197, 42)" size="4.5rem" /> */}
            <img src={node} alt="github" />
            <p> Node</p>
          </li>
          <li>
            {/* <DiMongodb color="#4ca343" size="4.5rem" /> */}
            <img src={mongo} alt="github" />
            <p> MongoDB</p>
          </li>
          <li>
            {/* <AiFillGithub size="5rem" /> */}
            <img src={gitHub} alt="github" />
            <p>GitHub</p>
          </li>
          <li>
            {/* <SiVisualstudiocode color="#0275c4" size="4.5rem" /> */}
            <img src={vscode} alt="github" />
            <p>VS Code</p>
          </li>
        </div>
      </div>
    );
  }
}

export default Skills;
