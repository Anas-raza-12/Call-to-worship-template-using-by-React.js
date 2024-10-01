import React from "react";

const Sermons = () => {
  const videoList = [
    {
      id: "9G-ltK4yBwU",
      title: "Call to worship sunday Service",
    },
    {
      id: "9G-ltK4yBwU",
      title: "call to worship",
    },
    {
      id: "ddm-3vuXFMY",
      title: "Gods will",
    },
    {
      id: "HelQE7yPajg",
      title: "Locus Eaten Years | Sermon Pastor Adeel ",
    },
    {
      id: "ih9ZVCx-0yE",
      title: "Roshan Kalam | Ep 24 ",
    },
    {
      id: "NKiDbC8yeeY",
      title: "Roshan Kalam | Ep 23",
    },
  ];

  return (
    <div className="sermons container ">
      <h1 className="grayColor">Sermons</h1>
      <h1 className="goldenColor" style={{ marginBottom: "5vh" }}>
        Watch Our Latest Sermons
      </h1>
      <div className="row">
        <div
          className="col-lg-6 col-md-12 col-sm-10"
          style={{ padding: "0px" }}
        >
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${videoList[0].id}?si=BHAhJVLqwuBV1raq`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>
        <div
          className="col-lg-6 col-md-12 col-sm-10"
          style={{ backgroundColor: "#222222", padding: "0px" }}
        >
          {videoList.slice(1).map((video, index) => (
            <div className="d-flex" key={index}>
              <iframe
                width="20%"
                height="60px"
                src={`https://www.youtube.com/embed/${video.id}?si=BHAhJVLqwuBV1raq`}
                title=""
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
              ></iframe>
              <p style={{ color: "white", margin: "auto 0.3vw" }}>
                {video.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sermons;
