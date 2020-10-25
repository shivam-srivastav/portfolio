import React from "react";
// import { HiLightBulb } from "react-icons/hi";
import "./Fun.scss";
class Fun extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dark: false,
      show: true,
      date: false,
      sec: 0,
      min: 0,
      hrs: 0,
    };
  }
  onHandleClick = () => {
    this.setState({ dark: !this.state.dark });
  };
  componentDidMount() {
    setInterval(() => {
      const date = new Date();
      let sec = date.getSeconds();
      const min = date.getMinutes();
      const hrs = date.getHours();
      if (sec < 10) {
        sec = `0${sec}`;
      }
      this.setState({ sec: sec, min: min, hrs: hrs });
    }, 100);
  }
  render() {
    const { dark } = this.state;
    const date = new Date();
    const today = date.getDate();
    const currentMonth = date.getMonth();
    const year = date.getFullYear();
    return (
      <div className={dark ? `fun-dark` : `fun`}>
        <h1 className="fun-header">{this.state.show && `JavaScript is Fun`}</h1>
        <div className="fun-main" onClick={this.onHandleClick}>
          {/* <HiLightBulb size="3rem" color={dark ? `#ffe05d` : `black`} /> */}
          <span>
            <p>{dark ? `  ON` : "  OFF"}</p>
          </span>
        </div>
        <div className="dateTime">
          {this.state.show && (
            <p>
              <p>
                Date: {today}/ {currentMonth} /{year}
              </p>
              <p>
                Time:{" "}
                <b>
                  {this.state.hrs}:{this.state.min}: {this.state.sec}
                </b>{" "}
              </p>
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
