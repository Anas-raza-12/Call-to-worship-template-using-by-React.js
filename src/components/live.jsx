import React from "react";

const Live = () => {
  return (
    <div className="live container" style={{ margin: "2vh auto" }}>
      <a
        href="https://www.facebook.com/CallTWM/live_videos/"
        style={{ display: "flex", justifyContent: "center", margin: "2vh auto" }}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          width="40%"
          src="/src/assets/image/425427358_717865520451044_4420492979970523450_n.jpg"
          alt="Call To Worship Live"
        />
      </a>
      <h3 style={{ display: "flex", justifyContent: "center" }}>
        <a
          href="https://www.facebook.com/CallTWM/live_videos/"
          style={{ color: "rgb(52, 128, 220)" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          Call To Worship
        </a>
      </h3>
      <button
        style={{
          margin: "3vh 30vw",
          border: "none",
          padding: "1vh 1vw",
          backgroundColor: "#E0E0E0",
          fontSize: "20px",
        }}
      >
        <a
          href="https://www.facebook.com/CallTWM/live_videos/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          CLICK HERE
        </a>
      </button>
    </div>
  );
};

export default Live;
