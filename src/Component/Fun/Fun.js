import React from "react";
import { HiLightBulb } from "react-icons/hi";
import "./Fun.scss";
class Fun extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dark: false,
      show: false,
      date: false,
    };
  }
  onHandleClick = () => {
    this.setState({ dark: !this.state.dark });
  };
  render() {
    const { dark } = this.state;
    const date = new Date();
    const today = date.getDate();
    const currentMonth = date.getMonth();
    const year = date.getFullYear();
    return (
      <div className={dark ? `fun-dark` : `fun`}>
        <h1 className="fun-header">
          <h2>{this.state.show && `JavaScript is Fun`}</h2>
        </h1>
        <div className="fun-main" onClick={this.onHandleClick}>
          <HiLightBulb size="3rem" color={dark ? `#ffe05d` : `black`} />
          <span>
            <p>{dark ? `  ON` : "  OFF"}</p>
          </span>
        </div>
        <div className="dateTime">
          {this.state.show && (
            <p>
              Date:{today}/ {currentMonth} /{year}
            </p>
          )}
        </div>
        <div>
          <h2 className="hello">
            <span
              onClick={() => {
                this.setState({ show: !this.state.show });
              }}
            >
              {" "}
              {!this.state.show ? `Show` : `Hide`}{" "}
            </span>
          </h2>
        </div>
      </div>
    );
  }
}

export default Fun;
