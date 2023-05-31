import React, { useState } from "react";
import { Link } from "react-router-dom";
import img from "../assets/FLY.png";
import "./navbar.css";
import prof from "../assets/Ellipse 1.png";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FiChevronDown } from "react-icons/fi";
import { BiLogOut } from "react-icons/bi";
import e17 from "../assets/Ellipse 17.png";
import e18 from "../assets/Ellipse 18.png";
import e19 from "../assets/Ellipse 19.png";
import e20 from "../assets/Ellipse 20.png";
import e21 from "../assets/Ellipse 21.png";
import e22 from "../assets/Ellipse 22.png";


export default function Navbar() {

  const [show, setShow] = useState(false);
  const toggle = () => {setShow(!show)};
  const handleMouseLeave = () => {
    setShow(false);
  };
  const [open, isOpen] = useState(false);
  const toggle2 = () => {isOpen(!open)};
  const handlingMouseLeave = () => {
    isOpen(false);
  };

const handleItemClick = (item) => {
    // Handle item click (e.g., navigate to a specific page)
    console.log(`Navigating to ${item}`);
  };

  // const handleKeyDown = (event) => {
  //   if (event.key === 'ArrowUp') {
  //     setSelectedItemIndex((prevIndex) =>
  //       prevIndex === 0 ? prevIndex : prevIndex - 1
  //     );
  //   } else if (event.key === 'ArrowDown') {
  //     setSelectedItemIndex((prevIndex) =>
  //       prevIndex === notifications.length - 1 ? prevIndex : prevIndex + 1
  //     );
  //   }
  // };

  return (
    <div className="all col-12">
      <div className="logo">
        <img src={img} alt="log" id="log" />
      </div>
      <div className="links">
        <Link id="home" to="/">
          Home
        </Link>
        <Link id="about" to="/about">
          Book Now
        </Link>
        <Link id="contacts" to="/contacts">
          Contact Us
        </Link>
      </div>
      <div id="profile">
        <div id="not-icon"
          onClick={toggle}
        >
          <IoMdNotificationsOutline id="arrow" />
        </div>
        <div id="image">
          <img src={prof} alt="profile" id="prof" />
          <FiChevronDown  onClick={toggle2} className="prof-arrow" />
        </div>
      </div>
      <div className={`prof-drop ${open ? "active" : "inactive"}`} onMouseLeave={handlingMouseLeave}>
        <div className="name">
          <p>Signed in as Justin</p>
        </div>
        <div className="details">
          <Link id="link" to="/Profile" onClick={() => handleItemClick('Profile')}>Your Profile</Link>
          <Link id="link" to="/Settings" onClick={() => handleItemClick('Settings')}>Settings</Link>
          <Link id="link" to="/about" onClick={() => handleItemClick('Help')}>Help</Link>
          <Link id="link" to="contact" onClick={() => handleItemClick('Contact')}>Contact Us</Link>
          <Link id="link" to="contact" onClick={() => handleItemClick('Feedback')}>Feedback</Link>
        </div>
        <div className="logout">
          <p>
            Log out
            <BiLogOut />
          </p>
        </div>
      </div>
      <div className={`notifications-drop ${show ? "active" : "inactive"}`} onMouseLeave={handleMouseLeave}>
        <div id="notification">
          <p>Notifications</p>
        </div>
        <div>
          <img src={e17} alt="p1" id="p1" />
          Your flight is 2 hours from now
        </div>
        <div>
          <img src={e18} alt="p2" id="p2" />
          Your flight is 2 hours from now
        </div>
        <div>
          <img src={e19} alt="p3" id="p3" />
          Your flight is 2 hours from now
        </div>
        <div>
          <img src={e20} alt="p4" id="p4" />
          Your flight is 2 hours from now
        </div>
        <div>
          <img src={e21} alt="p5" id="p5" />
          Your flight is 2 hours from now
        </div>
        <div id="final">
          <img src={e22} alt="p6" id="p6" />
          Your flight is 2 hours from now
        </div>
      </div>
    </div>
  );
}
