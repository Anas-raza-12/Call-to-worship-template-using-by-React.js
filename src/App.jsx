import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navber from "./components/navber";
import Footer from "./components/footer";
import Home from "./components/home";
import About from "./components/about";
import Sunday_prayer from "./components/sundayprayer";
import Thursday_Prayer from "./components/thursdayparyer";
import Laides_Prayer from "./components/ladiesmeeting";
import Wedding_counselling from "./components/weddingCounselling";
import KidsMinistry from "./components/KidsMinistry";
import Mens_Ministry from "./components/MensMinistry";
import Music_Ministry from "./components/MusicMinistry";
import Youth_Ministry from "./components/YouthMinistry";
import Prayer_Group from "./components/PrayerGroup";
import Resources from "./components/Resources";
import OutReach from "./components/Outreach";
import Pastors from "./components/pastors";
import Sermons from "./components/Sermons";
import Live from "./components/live";
import Event from "./components/Event";
import Blogs from "./components/Blog";
import Gallery from "./components/gallery"
import Shop from "./components/shop"
import "./App.css";
import Give from "./components/Give";

function App() {
  return (
    <Router>
      <div>
        <Navber
          home="Home"
          about="About Us"
          service="Service"
          ministries="Ministries"
          pastors="Pastors"
          sermons="Sermons"
          event="Event"
          live="Live"
          Blog="Blogs"
          gallery="Gallery"
          shop="Shop"
          give="Give"
        />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Sunday_prayer" element={<Sunday_prayer />} />
          <Route path="/Thursday_prayer" element={<Thursday_Prayer />} />
          <Route path="/ladies-Meeting" element={<Laides_Prayer />} />
          <Route path="/WeddingCounselling" element={<Wedding_counselling />} />
          <Route path="/KidsMinistry" element={<KidsMinistry />} />
          <Route path="/MensMinistry" element={<Mens_Ministry />} />
          <Route path="/Music-Ministry" element={<Music_Ministry />} />
          <Route path="/Youth-ministry" element={<Youth_Ministry />} />
          <Route path="/Prayer-Group" element={<Prayer_Group />} />
          <Route path="/Resources" element={<Resources />} />
          <Route path="/Outreach" element={<OutReach />} />
          <Route path="/pastors" element={<Pastors />} />
          <Route path="/Sermons" element={<Sermons />} />
          <Route path="/live" element={<Live />} />
          <Route path="/Events" element={<Event />} />
          <Route path="/Blogs" element={<Blogs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/give" element={<Give />} />
        </Routes>

        <Footer
          home="Home"
          about="About Us"
          pastors="Pastors"
          sermons="Sermons"
          event="Event"
          live="Live"
          Blog="Blogs"
          gallery="Gallery"
          shop="Shop"
          give="Give"
        />
      </div>
    </Router>
  );
}

export default App;
