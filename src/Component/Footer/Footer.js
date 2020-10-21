import React from "react";
import "./Footer.scss";
class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="footer">
        <p>
          ©2020 - Portfolio -{" "}
          <a href="https://www.shivam-sr.com">shivam-sr.com</a>{" "}
        </p>
      </div>
    );
  }
}

export default Footer;
