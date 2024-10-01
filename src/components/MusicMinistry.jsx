import React, { Component } from "react";

export class MusicMinistry extends Component {
  render() {
    return (
      <div className="container musicMinistry">
        <h1 className="grayColor">WELLCOME TO</h1>
        <h1 className="goldenColor"> MUSIC MINISTRY</h1>
        <div className="row">
          <div className="col-lg-12">
            <img
              width={"100%"}
              src="/src/assets/image/Music-Ministry-final-pic.jpeg.jpg"
              alt=""
            />
          </div>
          <div className="col-lg-12">
            <p>
              To inspire, encourage, train, and direct those whom God has called
              into the music ministry with a spirit of service, dedication,
              excellence, sensitivity, purity, humility and strength.
              <br />
              Chronicles 5 : 13-14
              <br />
              ​“It came even to pass, as the trumpeters and singers were as one,
              to make one sound to be heard in praising and thanking the LORD;
              and when they lifted up their voice with the trumpets and cymbals
              and instruments of music, and praised the LORD, saying, For he is
              good; for his mercy endureth forever: that then the house was
              filled with a cloud, even the house of the LORD; So that the
              priests could not stand to minister by reason of the cloud: for
              the glory of the LORD had filled the house of God.”
            </p>
          </div>
          <div className="col-lg-12">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/pI5rnxzKWZY?si=9F6wZaMZo_VLQMz6"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    );
  }
}

export default MusicMinistry;
