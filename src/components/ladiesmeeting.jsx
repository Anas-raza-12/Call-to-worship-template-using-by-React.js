import React, { Component } from "react";

export class ladiesmeeting extends Component {
  render() {
    return (
      <div className="container  ladiesmeeting ">
        <h1 style={{ color: "#8e98a8", marginTop: "10vh" }}>WELCOME TO</h1>
        <h1 style={{ color: "#8F6325", marginBottom: "10vh" }}>
          Ladies Meeting PRAYER
        </h1>
        <div
          style={{ overflow: "hidden", borderRadius: "50px", padding: "0" }}
          className="container p-0"
        >
          <img
            width={"100%"}
            src="https://www.call2worship.com/wp-content/uploads/2024/02/CTW-Ladies.jpeg.jpg"
            alt=""
          />
        </div>
        <h2>
          ​Weekly ladies meeting at 9:00 pm{" "}
          <span style={{ color: "#3899e6" }}>
            {" "}
            ( Watch online every Friday at same time )
          </span>
        </h2>
        <p>Dear Ladies,</p>
        <p>
          Please mark your calendars for our weekly Ladies Meeting – Life, Love
          and Spirit. We are so excited to welcome you to a Weekly Meeting, to
          enrich you with Word of God, through our own leaders. Who will share
          their life experiences and testimonies in order to encourage others
          and fill them with Life, Love and Spirit.
        </p>
      </div>
    );
  }
}

export default ladiesmeeting;
