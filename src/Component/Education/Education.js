import React from "react";
import "./Education.scss";
class Education extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="education">
        <h1 className="title">Education</h1>
        <div class="edu-level">
          <h2>Graduation</h2>
          <h3>Greater Noida Institute of Technology</h3>
          <p>B.Tech in Computer Science, -May 2021 </p>
        </div>
        <div class="edu-level">
          <h2>Intermideate</h2>
          <h3>St. Michael's Convent School</h3>
          <p>Stream : Science, -May 2017 </p>
        </div>
        <div class="edu-level">
          <h2>High School</h2>
          <h3>St. Michael's Convent School</h3>
          <p> -May 2015 </p>
        </div>
      </div>
    );
  }
}

export default Education;
