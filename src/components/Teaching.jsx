import React, { Component } from "react";

export class Teaching extends Component {
  render() {
    return (
      <div className="container Teaching">
        <h1 className="grayColor">WELLCOME TO</h1>
        <h1>TEACHING</h1>
        <div className="row">
          <div className="col-lg-12">
            <img
              width={"100%"}
              src="image/Teaching.jpeg-e1708507076296.webp"
              alt=""
            />
          </div>
          <div className="col-lg-12">
            {" "}
            <p>
              ​Teaching is one of the essential ministries of Call To Worship.
              It is the process of imparting the truth and wisdom of God’s Word
              to His people. Teaching equips the saints for the work of
              ministry, edifies the body of Christ, and transforms lives by the
              power of the Holy Spirit. ​​Teaching is not only the
              responsibility of pastors and leaders, but of every believer. We
              are all called to teach and learn from one another, as we share
              our testimonies, insights, and experiences. We should also seek to
              teach others outside the church, as we witness to the gospel and
              make disciples of all nations.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Teaching;
