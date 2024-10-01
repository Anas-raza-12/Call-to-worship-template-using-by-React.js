import React, { Component } from "react";

export class PrayerGroup extends Component {
  render() {
    return (
      <div className="container PrayerGroup ">
        <h1 className="grayColor">WELLCOME TO</h1>
        <h1 className="goldenColor">PRAYER GROUP</h1>
        <div className="row">
          <div className="col-lg-12">
            <img
              width={"100%"}
              src="/src/assets/image/Prayer-Group.jpeg-2048x1152.webp"
              alt=""
            />
          </div>
          <div className="col-lg-12">
            <p>
              ​Prayer is the lifeline of every believer. It is the Christian way
              of communicating with the Lord Trinity and receiving His guidance,
              grace, and power. Prayer is not a ritual or a duty, but a
              privilege and a joy. We can pray anytime, anywhere, and about
              anything. God is always listening and ready to answer according to
              His will.
              <br />
              ​​Join Call To Worship daily prayer group to grow in your
              relationship with Lord Jesus and to align your hearts with Him. It
              will also strengthen you to face the challenges and opportunities
              of each day. As we pray, we should praise God for who He is, thank
              Him for what He has done, confess our sins and ask for
              forgiveness, intercede for others and ourselves, and listen for
              His voice.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default PrayerGroup;
