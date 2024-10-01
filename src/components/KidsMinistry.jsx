import React, { Component } from "react";

export class KidsMinistry extends Component {
  render() {
    return (
      <div className="KidsMinistry container">
        <h1 className="grayColor">WELLCOME TO</h1>
        <h1 className="goldenColor">KID’S MINISTRY</h1>
        <div className="row">
          <div
            style={{
              backgroundColor: "#8F6325",
              position: "relative",
              height: "50vh",
            }}
            className="col-lg-5 col-md-10 col-sm-10"
          >
            <img
              width={"100%"}
              src="/src/assets/image/DSC_0451-scaled-500x500.webp"
              alt=""
            />
          </div>
          <div className="col-lg-6 col-md-10 col-sm-10">
            <h2 className="grayColor">KID’S MINISTRY</h2>
            <p>
              At Call To Worship, we are excited to nurture the spiritual growth
              of the youngest members of our congregation. Our Call To Worship
              Kids Ministry is a vibrant and loving community where children,
              discover the joy of faith through engaging activities,
              age-appropriate lessons, and meaningful connections. Our dedicated
              team of volunteers is committed to creating a safe and fun
              environment where children can learn about God’s love and develop
              a strong foundation for their Christian journey Join us for a time
              of fellowship, learning, and laughter as we strive to make
              disciples of the next generation. We look forward to partnering
              with parents in raising up a generation that loves and follows
              Jesus!
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default KidsMinistry;
