import React, { Component } from "react";
import "./NameJson.scss";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
class NameJson extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }

  render() {
    return (
      <div className="name">
        <p className=" line-1 anim-typewriter">Hello, I am Shivam</p>
        <div class="detail">
          <p>Student @ GNIOT | React Developer</p>
        </div>
        <div className="social">
          <a href="https://www.github.com/shivam-srivastav">
            {" "}
            <AiFillGithub size="2rem" />
          </a>
          <a href="https://www.linkedin.com/in/shivam1534/">
            <AiFillLinkedin size="2rem" />
          </a>
        </div>
        <div className="json">
          <pre>{"{"}</pre>
          <pre>"role":"react developer",</pre>
          <pre>"description":"simple and sorted",</pre>
          <pre>"version":"1.0"</pre>
          <pre>"status":"single "</pre>
          <pre>"intrested":"eating, exploring and adventures"</pre>
          <pre>"not instrested":"gaining fat, tension"</pre>
          <pre>"fav":"javascript"</pre>
          <pre>"dependencies":{"{'chai','memes','music'}"}</pre>
          <pre>"dev-dependencies":{"{'react','node','mongo'}"}</pre>
          <pre>{"}"}</pre>
        </div>
      </div>
    );
  }
}

export default NameJson;
