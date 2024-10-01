import React from "react";
import { Link } from "react-router-dom";
const blogPosts = [
  {
    id: 1,
    title: "Thanksgiving Call to Worship from Psalm 105",
    image: "/src/assets/image/2972054-768x768.jpg",
    excerpt:
      "Oh give thanks to the Lord; call upon his name; make known his deeds among the peoples! Sing to him, sing praises to him; tell of all his wondrous works! Glory in his holy name; let the hearts of those who seek the Lord rejoice! He is the Lord our God; his judgments are in all...",
    date: "June 22, 2024",
    author: "webadmin",
    category: "Uncategorized",
    comments: 0,
    link: "/thanksgiving-call-to-worship",
  },
  {
    id: 2,
    title:
      "Christ Church Cathedral, Dublin: A Glimpse into Ireland’s Spiritual and Architectural Heritage",
    image: "/src/assets/image/pexels-photo-218480-768x577.jpeg",
    excerpt:
      "Dublin, the vibrant capital of Ireland, is renowned for its rich history, captivating culture, and architectural marvels. Among its many treasures, Christ Church Cathedral stands as a testament to both the city's spiritual significance and its architectural prowess. This iconic landmark, with its ancient roots and striking beauty, serves as...",
    date: "May 21, 2024",
    author: "webadmin",
    category: "Christ, Church ",

    comments: 0,
    link: "/christ-church-dublin",
  },
  {
    id: 3,
    title:
      "OUR CYBER SANCTUARY: REVOLUTIONIZING CHURCH SERVICE THROUGH DIGITAL TOOLS",
    image: "/src/assets/image/pexels-smepictures-19913307-768x432.jpg",
    excerpt:
      "The world is moving so fast and so our church community, by understanding the needs of today’s world you can join the sessions of call to worship not just physically but digitally. Our experienced and revolutionized community of church beliefs to walk with world at the same speed. Technology has...",
    date: "May 15, 2024",
    author: "webadmin",
    category: "Christ,Christ, Church, Uncategorized",
    email: "blogs, calltoworshipblogs, church, cyber, services",
    comments: 0,
    link: "/cyber-sanctuary",
  },
  {
    id: 4,
    title: "VOLUNTEER SPOTLIGHT: RECOGNIZING DEDICATION AND SERVICE:",
    image: "/src/assets/image/pexels-papsferdie-5452329-768x512.jpg",
    excerpt:
      "Hebrews 6:10 (NIV): God is not unjust; he will not forget your work and the love you have shown him as you have helped his people and continue to help them. Among the vibrant community of call to worship church there are many unsung heroes whose dedication and commitment helped us...",
    date: "May 15, 2024",
    author: "webadmin",
    category: "Christ, Church, Uncategorized",
    comments: 0,
    link: "/volunteer-spotlight",
  },
  {
    id: 5,
    title: "PRAYERS AND WORSHIP; TRANSFORM YOUR LIFE THROUGH SPIRITUAL GROWTH:",
    image: "/src/assets/image/pexels-ninauhlikova-725255-768x576.jpg",
    excerpt:
      "Many times the hustle and bustle of our daily lives overwhelm us and makes it difficult to focus on our spiritual growth which eventually lead to regret and guilt, in the midst of chaos call to worship have a profound opportunity to transform your life spiritually and lead your soul...",
    date: "May 15, 2024",
    author: "webadmin",
    category: "Christ, Church, Uncategorized",
    email: "",
    comments: 0,
    link: "/volunteer-spotlight",
  },
];

const Blog = () => {
  return (
    <div className="Blog container">
      <h1>
        OUR LATEST <span>Blogs ,News</span>
      </h1>
      <div className="row">
        {blogPosts.map((post) => (
          <div className="col-lg-3" key={post.id}>
            <img width={"100%"} src={post.image} alt="" />
            <Link to={post.link}>
              <h3>{post.title}</h3>
            </Link>
            <p>{post.excerpt}</p>
            <br />
            <span>
              <i className="fa-solid fa-calendar-days"></i> {post.date}
            </span>
            <br />
            <span>
              <i className="fa-solid fa-user"></i> by{" "}
              <Link to="">{post.author}</Link>
            </span>
            <span>
              <i className="fa-regular fa-folder"></i>{" "}
              <Link to="">{post.category}</Link>
            </span>
            <span>
              <i className="fa-regular fa-envelope"></i>{" "}
              <Link to="">{post.email}</Link>
            </span>
            <span>
              <i className="fa-regular fa-comments"></i>{" "}
              <Link to="">Comments ({post.comments})</Link>
            </span>
            <br />
            <button>
              <Link to={post.link}>READ MORE...</Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
