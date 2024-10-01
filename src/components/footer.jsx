import React from "react";
import { Link } from 'react-router-dom';

const Footer = (props) => (
  <div>
    <div className="container secondLastPage">
      <div className="row">
        <div
          style={{
            textAlign: "left",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="col-lg-6 col-md-12 col-sm-12 d-flex"
        >
          <p style={{ fontSize: "20px" }}>
            CALL TO WORSHIP is an intercessory prayer group that is committed
            to pray for the completeness of God’s power & purpose. We are
            actively praying to win the lost, heal the sick, feed the poor,
            find jobs for unemployed, make disciples, and impact every aspect of
            society, family, government, economy, etc. Our vision is to work in
            relationship with the Body of Christ to engage in the Great
            Commission, as we firmly stand and pray for all nations to glorify
            His name
          </p>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12">
          {" "}
          <img width={"100%"} src="/src/assets/logo.png" alt="" />
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-lg-3">
          <h3>Links</h3>
          <ul style={{ listStyle: "none" }} className="footer-nav p-0">
            <li className="footer-item p-0">
              <Link className="footer-link" to="/">
                {props.home}
              </Link>
            </li>
            <li className="footer-item">
              <Link className="footer-link" to="/about">
                {props.about}
              </Link>
            </li>
        
            <li className="footer-item">
              <Link className="footer-link" to="/pastors">
                {props.pastors}
              </Link>
            </li>
            <li className="footer-item">
              <Link className="footer-link" to="/sermons">
                {props.sermons}
              </Link>
            </li>
            <li className="footer-item">
              <Link className="footer-link" to="/events">
                {props.event}
              </Link>
            </li>
            <li className="footer-item">
              <Link className="footer-link" to="/live">
                {props.live}
              </Link>
            </li>
            <li className="footer-item">
              <Link className="footer-link" to="/Blogs">
                {props.Blog}
              </Link>
            </li>
            <li className="footer-item">
              <Link className="footer-link" to="/gallery">
                {props.gallery}
              </Link>
            </li>
            <li className="footer-item">
              <Link className="footer-link" to="/shop">
                {props.shop}
              </Link>
            </li>
            <li className="footer-item">
              <Link className="footer-link" to="/give">
                {props.give}
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-lg-3 schedule">
          <h3>Contact Us</h3>
          <ul style={{ listStyle: "none" }} className="p-0">
            <li>info@call2worship.com</li>
            <li>
              {" "}
              <i style={{ color: "#63E6BE" }} className="fab fa-whatsapp"></i>{" "}
              +971 52 821 2449
            </li>
            <li>
              {" "}
              <i style={{ color: "#6bc3df" }} className="fas fa-phone"></i>{" "}
              +971 52 821 2449
            </li>
          </ul>
          <p>
            Address: Al Mauseed Building,
            <br /> Near Union Metro Station,
            <br /> Dubai.
          </p>
          <img src="image/Vector-1.webp" alt="" />
        </div>
        <div className="col-lg-4 Service">
          <h3>Service Time</h3>
          <ul style={{ listStyle: "none" }} className="p-0">
            <li>Every Sunday at 6:30PM</li>
            <li>Every Thursday at 7:00PM</li>
            <li>Every Friday at 9:00PM</li>
          </ul>
        </div>
        <div className="col-lg-2 socialMedia p-0">
          <h3>Social</h3>
          <span>
            {" "}
            <Link
              style={{ color: "#ED9A20" }}
              to="https://www.youtube.com/@calltoworshiptv4533"
            >
              <i className="fab fa-youtube"></i>
            </Link>{" "}
          </span>
          <span>
            {" "}
            <Link
              style={{ color: "#ED9A20" }}
              to="https://www.instagram.com/Calltwm/"
            >
              {" "}
              <i className="fab fa-instagram-square"></i>
            </Link>{" "}
          </span>
          <span>
            {" "}
            <Link
              style={{ color: "#ED9A20" }}
              to="https://www.facebook.com/CallTWM"
            >
              {" "}
              <i className="fab fa-facebook"></i>{" "}
            </Link>{" "}
          </span>
        </div>
        <div className="col-lg-12 Subscribe">
          <h3>Subscribe Newsletter</h3>
          <form action="">
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter your email address"
            />
            <button type="submit" className="btn btn-primary">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>

    <div className="container">
      <p style={{ textAlign: "center" }}>
        © 2024 CallToWorship | All Rights Reserved<Link style={{cursor:"auto"}} to="https://www.instagram.com/ar_anas_23?igsh=dGtqbWRkOHU3MzA2">.</Link>{" "}<Link style={{ color: "blue" }} to="https://rootletsolutions.com/">
          {" "}
          Rootletsolutions.com
        </Link>
      </p>
    </div>
  </div>
);

export default Footer;
