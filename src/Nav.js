import React, { useEffect, useState } from 'react';
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://static.vecteezy.com/system/resources/thumbnails/049/105/766/small/recording-button-icon-animated-on-transparent-background-with-alpha-channel-recording-camera-icon-broadcasting-concept-free-video.jpg"
        alt="Moltov Platform Logo"
      />
      <img
        className="nav__avatar"
        src="https://i.pinimg.com/originals/d4/8a/cf/d48acf60dd8fede8c14f6ccbe2f5d1df.jpg"
        alt="Moltov Avatar"
      />
    </div>
  );
}

export default Nav;
