import React from "react";

const events = [
  {
    title: "GOD IS WITHIN HER, SHE WILL NOT FALL.” – PSALM 46:5",
    description: [
      "🌸 Ladies Prayer Meeting 🌸",
      "Join us for a special evening of fellowship, encouragement, and inspiration at our upcoming Ladies Meeting!",
      "Date: June 17, 2024",
      "Time: 6:30 pm",
      "Location: Al Masueed Building, near Union Metro Station, Dubai",
      "More info: 971 52 821 2449",
      "Let’s come together to celebrate the strength and resilience found in knowing that God is with us always, guiding and uplifting us through every season of life.",
      "Feel free to invite your friends and family for an unforgettable time of bonding and spiritual growth.",
      "Refreshments will be provided.",
      "We can’t wait to see you there! 🙏",
      "Regards,",
      "Sr. Pastor Adeel Pace",
    ],
    image:
      "/src/assets/image/WhatsApp-Image-2024-06-12-at-14.12.59_313fd5c6-1.jpg",
  },
  {
    title: "PENTECOST CHURCH SERVICE",
    description: [
      "🔥 Ignite Your Faith this Pentecost Day! 🔥",
      "On May 19th, 2024, experience the transformative power of the Holy Spirit like never before. Join us as we celebrate Pentecost, the day when tongues of fire descended, empowering believers with divine strength and guidance.",
      "🙏 Discover the Fire Within: Let the Holy Spirit light a flame in your heart, guiding you towards greater purpose and fulfillment.",
      "💫 Unleash Your Potential: Experience the power of Pentecost as it empowers you to break barriers, conquer fears, and live boldly in your faith.",
      "🌍 Spread the Flame: Share this message of hope and renewal with friends and family. Together, let’s ignite a global movement of faith and love.",
      "Don’t miss out on this incredible opportunity to connect with the divine and embrace the fire of Pentecost. Join us on May 19th, 2024 and let the Holy Spirit reignite your spirit!",
      "#PentecostDay #HolySpiritPower",
      "Regards,",
      "Sr. Pastor Adeel Pace",
    ],
    image:
      "/src/assets/image/WhatsApp-Image-2024-05-11-at-13.25.45_8698bcf2.jpg",
  },
  {
    title: "WORSHIP SONG RELEASED",
    description: [""],
    image:
      "/src/assets/image/WhatsApp-Image-2024-02-23-at-11.59.40_fe3f383d.jpg",
  },
  {
    title: "YOU’RE INVITED FOR RESURRECTION CELEBRATION SERVICE",
    description: ["On 31st March 2024 Sunrise 3:45 AM | Evening 6:30 PM"],

    image:
      "/src/assets/image/WhatsApp-Image-2024-03-08-at-15.43.42_2ab259b8-1.jpg",
  },
  {
    title: "YOU’RE INVITED FOR GOOD FRIDAY CELEBRATION SERVICE",
    description: ["On 29 March 2024 | At 12 : 45 PM"],
    image:
      "/src/assets/image/WhatsApp-Image-2024-03-08-at-15.43.43_40b1e51b-1.jpg",
  },
  {
    title: "YOU’RE INVITED FOR LAST SUPPER CELEBRATION SERVICE",
    description: ["On 28 Thursday 2024 | At 7 : 00 PM"],
    image:
      "/src/assets/image/WhatsApp-Image-2024-03-08-at-15.43.42_9b22b19e-1.jpg",
  },
  {
    title: "YOU’RE INVITED FOR PALM SUNDAY CELEBRATION SERVICE",
    description: ["On 24 March 2024 | At 6 : 30 PM"],
    image:
      "/src/assets/image/WhatsApp-Image-2024-03-08-at-15.43.43_7d29f17f-1.jpg",
  },
  {
    title: "RESURRECTION DAY",
    description: [""],
    image: "/src/assets/image/Untitled-2-1.jpg",
  },
  {
    title: "WORSHIP WITH DAIM GILL",
    description: [""],
    image:
      "/src/assets/image/WhatsApp-Image-2024-04-09-at-17.45.41_ce882562.jpg",
  },
  {
    title: "EVANGELICAL TOUR KARACHI, PAKISTAN 🇵🇰",
    description: [""],
    image: "/src/assets/image/event.jpeg ",
  },
];

const Event = () => {
  return (
    <div className="event container">
      <h1 className="grayColor">WELCOME TO</h1>
      <h1 className="goldenColor">OUR UPCOMING EVENTS</h1>
      <div className="row">
        {events.map((event, index) => (
          <React.Fragment key={index}>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <h1 className="grayColor">{event.title}</h1>
              {event.description.map((desc, i) => (
                <p key={i}>{desc}</p>
              ))}
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12">
              <img width="100%" src={event.image} alt={event.title} />
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Event;
