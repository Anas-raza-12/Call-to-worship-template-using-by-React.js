import React from "react";

const Home = (props) => {
  return (
    <div className="main-home ">
      <div>
        <h1>CALL TO WORSHIP</h1>
        <h3>Your Call, to Worship</h3>
      </div>
      <div className="container">
        <p>John 4 : 23 – 24</p>
        <p>
          Yet a time is coming and has now come when the true worshipers will
          worship the Father in the Spirit and in truth, for they are the kind
          of worshipers the Father seeks. God is spirit, and his worshipers must
          worship in the Spirit and in truth.
        </p>
        <p style={{ marginTop: "4vh" }}>
          Join our inspiring non-denominational community, fostering positive
          change and purpose.
          <br /> Together, let’s journey towards a brighter, empowered future.
        </p>
      </div>
      <div className="image position-relative ">
        <img
          style={{ transform: "rotate(-65deg)" }}
          className="side-image position-absolute"
          src="/src/assets/image/vector1-200x200.webp"
          alt=""
        />
        <img
          className="main-image position-absolute"
          src="/src/assets/image/main-image.png"
          alt=""
        />
      </div>
      <div className="container">
        <p style={{ margin: "5vh 1vw" }}>
          We are delighted to have you visit our online home. At Call To
          Worship, we strive to create a warm and welcoming community that
          embraces everyone with open arms. Whether you are seeking spiritual
          guidance, a place to connect with others, or a community where you can
          grow in your faith, you’ve come to the right place.
        </p>
        <p style={{ margin: "5vh 1vw" }}>
          Feel free to explore our website to learn more about our church, our
          beliefs, and the various opportunities for fellowship and worship. We
          look forward to the possibility of meeting you in person and sharing
          the journey of faith together.
        </p>
      </div>
      <div className="container image-box">
        <div className="row">
          <div
            style={{
              backgroundImage:
                "url(/src/assets/image/Property-1Daily-Prayers-1.png)",
            }}
            className="col-lg-3 col-md-6 col-sm-12 "
          >
            <p>
              Prayer Group in our Christian community create a spiritual
              tapestry, fostering a profound connection with the divine.
            </p>
          </div>
          <div
            style={{
              backgroundImage: "url(/src/assets/image/Property-2Teaching.png)",
            }}
            className="col-lg-3 col-md-6 col-sm-12 "
          >
            <p>
              Rooted in teaching, our church fosters spiritual growth through
              ongoing education, creating a thriving community centered.
            </p>
          </div>
          <div
            style={{
              backgroundImage: "url(/src/assets/image/Component-2-3.png)",
              // backgroundPosition: 'center center',
              // backgroundSize: 'cover',
              // height: '397px',
              // margin: '20px auto',
              // position: 'relative',
              // width: '330px',
              // borderRadius: '40px',
            }}
            className="col-lg-3 col-md-6 col-sm-12 "
          >
            <p>
              Our sermons, passionate and purposeful, create an inspirational
              mosaic for our congregation. Crafted to resonate with hearts.
            </p>
          </div>
          <div
            style={{
              backgroundImage: "url(/src/assets/image/2.png)",
            }}
            className="col-lg-3 col-md-6 col-sm-12 "
          >
            <p>
              Our Christian community fundraises to support our mission and
              outreach, embodying generosity for a positive impact in the wider
              community.
            </p>
          </div>
          <div
            style={{
              backgroundImage: "url(/src/assets/image/Property-1Helpers.png)",
            }}
            className="col-lg-3 col-md-6 col-sm-12 "
          >
            <p>
              Rooted in Christian service, our community actively embodies
              compassion, empathy, and selflessness, extending hands. Read
              more...
            </p>
          </div>
          <div
            style={{
              backgroundImage:
                "url(/src/assets/image/Property-1Fund-Raising-1.png)",
            }}
            className="col-lg-3 col-md-6 col-sm-12 "
          >
            <p>
              Our Christian community fundraises to support our mission and
              outreach, embodying generosity for a positive impact in the wider
              community.
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid container-5">
        <div className="container py-5">
          <div className="row">
            <img
              width={"100%"}
              height={"100%"}
              src="/src/assets/image/Frame-51206.png"
              alt=""
              className="col-lg-8 col-md-12 col-sm"
            />
            <div className="col-lg-4 col-md-12 col-sm h2 my-5">
              <h2 style={{ color: "#333333" }}>
                <i>WORSHIP,</i>
              </h2>
              <h2 style={{ color: "#8f6325" }}>
                <i>CONNECT,</i>
              </h2>
              <h2 style={{ color: "#B44F07" }}>
                {" "}
                <i>SERVE</i>
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container container-6">
        <div className="row d-flex justify-content-center align-items-center">
          <div
            style={{ textAlign: "left" }}
            className="written col-lg-6 col-md-12 col-sm"
          >
            <h1 className="grayColor">TOGETHER IS BETTER!</h1>
            <h3 className="grayColor">MATTHEW 18 : 20</h3>
            <p className="grayColor">
              FOR WHERE TWO OR THREE HAVE <br /> GATHERED TOGETHER IN MY NAME,{" "}
              <br />I AM THERE IN THEIR MIDST.
            </p>
          </div>
          <div className="image col-lg-6 col-md-12 col-sm">
            <img
              width={"95%"}
              src="/src/assets/image/main-page-pic-2JPG.jpeg-e1708580142767-1600x800.webp"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="container-fluid position-relative container-7">
        <div className="back-logo position-absolute">
          <img width={"100%"} src="/src/assets/favicon.ico" alt="" />
        </div>

        <div className="full-image m-0 p-0 position-absolute">
          <div className="write position-absolute">
            <h2>SENIOR PASTOR</h2>
            <h1>
              <i>ADEEL ABID PACE</i>
            </h1>
            <p>BTH/MTH/PHD</p>
            <p className="white">
              Learn More{" "}
              <a href="/">
                <i className="fa-solid fa-arrow-right "></i>
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="container container-8">
        <h1>Call To Worship Ministries & Services</h1>
        <div className="row">
          <div
            style={{
              backgroundImage: 
              "url(/src/assets/image/Sunday-Service.jpeg.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="image-col image-col-1 col-lg-5 col-md-10 col-sm-8"
          >
            <h3><a href="#">Sunday Prayer</a><i className="fa-solid fa-circle-arrow-right"></i></h3>
          </div>
          <div
            style={{
              backgroundImage:
                "url(/src/assets/image/Youth-meeting-final.jpeg.webp)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="image-col image-col-2 col-lg-6 col-md-10 col-sm-8"
          >
            <h3><a href="/">Youth Ministry</a><i className="fa-solid fa-circle-arrow-right"></i></h3>
          </div>
          <div  style={{
              backgroundImage:
                "url(/src/assets/image/Thursday-Service.webp )",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }} className="image-col image-col-3 col-lg-5 col-md-10 col-sm-10">
           <h3><a href="/">Thursday Prayer</a><i className="fa-solid fa-circle-arrow-right"></i></h3>
          </div>
          <div  style={{
              backgroundImage:
                "url(/src/assets/image/Ladies-Meeting-final.webp)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }} className="image-col image-col-4 col-lg-6 col-md-10 col-sm-10">
           <h3><a href="/">Ladies Meeting</a><i className="fa-solid fa-circle-arrow-right"></i></h3>
          </div>
          <div style={{
              backgroundImage:
                "url(/src/assets/image/Music-Ministry-final-pic.jpeg.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}  className="image-col image-col-5 col-lg-12 col-md-10 col-sm-10">
           <h3><a href="/">Music Ministry</a><i className="fa-solid fa-circle-arrow-right"></i></h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
